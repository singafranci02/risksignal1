import type {
  AlertChannel,
  AlertHistory,
  AlertHistoryInsert,
  RiskEvent,
  SeverityLevel,
  UserPreferences,
} from '@/lib/types/database'
import { createClient } from '@/utils/supabase/server'
import { Resend } from 'resend'

export interface AlertPayload {
  riskEventId: string
  walletAddress: string
  severity: SeverityLevel
  violationMessage: string
  recipientEmail?: string
  recipientPhone?: string
  slackWebhookUrl?: string
}

export interface AlertDeliveryResult {
  channel: AlertChannel
  success: boolean
  messageId?: string
  error?: string
}

export class AlertOrchestrator {
  private resend: Resend | null = null
  private readonly RATE_LIMIT_WINDOW_MINUTES = 60
  private readonly MAX_ALERTS_PER_WINDOW = 3

  constructor(
    private readonly resendApiKey?: string,
    private readonly twilioAccountSid?: string,
    private readonly twilioAuthToken?: string
  ) {
    if (resendApiKey) {
      this.resend = new Resend(resendApiKey)
    }
  }

  async sendAlerts(payload: AlertPayload, userPrefs?: UserPreferences): Promise<AlertDeliveryResult[]> {
    const results: AlertDeliveryResult[] = []

    // Check rate limiting
    if (await this.isRateLimited(payload.riskEventId)) {
      console.warn(`[AlertOrchestrator] Rate limit exceeded for event ${payload.riskEventId}`)
      return results
    }

    // Determine which channels to use
    const channels = this.getEnabledChannels(payload, userPrefs)

    // Send alerts in parallel
    const deliveryPromises = channels.map(async (channel) => {
      try {
        const result = await this.deliverToChannel(channel, payload)
        await this.recordAlertHistory({
          risk_event_id: payload.riskEventId,
          channel,
          recipient: this.getRecipient(channel, payload),
          status: result.success ? 'SENT' : 'FAILED',
          message_content: payload.violationMessage,
          error_message: result.error || null,
          metadata: {
            message_id: result.messageId,
            error: result.error,
          },
          retry_count: 0,
        })
        return result
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        await this.recordAlertHistory({
          risk_event_id: payload.riskEventId,
          channel,
          recipient: this.getRecipient(channel, payload),
          status: 'FAILED',
          message_content: payload.violationMessage,
          error_message: errorMessage,
          metadata: {},
          retry_count: 0,
        })
        return {
          channel,
          success: false,
          error: errorMessage,
        }
      }
    })

    return Promise.all(deliveryPromises)
  }

  private async deliverToChannel(
    channel: AlertChannel,
    payload: AlertPayload
  ): Promise<AlertDeliveryResult> {
    switch (channel) {
      case 'EMAIL':
        return this.sendEmail(payload)
      case 'SMS':
        return this.sendSMS(payload)
      case 'SLACK':
        return this.sendSlack(payload)
      default:
        return {
          channel,
          success: false,
          error: 'Unsupported channel',
        }
    }
  }

  private async sendEmail(payload: AlertPayload): Promise<AlertDeliveryResult> {
    if (!this.resend || !payload.recipientEmail) {
      return {
        channel: 'EMAIL',
        success: false,
        error: 'Email not configured',
      }
    }

    try {
      const { data, error } = await this.resend.emails.send({
        from: 'RiskSignal <alerts@risksignal.io>',
        to: payload.recipientEmail,
        subject: `${this.getSeverityEmoji(payload.severity)} Risk Alert: ${payload.walletAddress.slice(0, 10)}...`,
        html: this.generateEmailHTML(payload),
      })

      if (error) {
        throw new Error(error.message)
      }

      return {
        channel: 'EMAIL',
        success: true,
        messageId: data?.id,
      }
    } catch (error) {
      return {
        channel: 'EMAIL',
        success: false,
        error: error instanceof Error ? error.message : 'Email delivery failed',
      }
    }
  }

  private async sendSMS(payload: AlertPayload): Promise<AlertDeliveryResult> {
    if (!this.twilioAccountSid || !this.twilioAuthToken || !payload.recipientPhone) {
      return {
        channel: 'SMS',
        success: false,
        error: 'SMS not configured',
      }
    }

    try {
      // Twilio REST API call
      const auth = btoa(`${this.twilioAccountSid}:${this.twilioAuthToken}`)
      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${this.twilioAccountSid}/Messages.json`,
        {
          method: 'POST',
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            To: payload.recipientPhone,
            From: '+1234567890', // TODO: Configure Twilio phone number
            Body: this.generateSMSText(payload),
          }),
        }
      )

      if (!response.ok) {
        throw new Error(`Twilio API error: ${response.status}`)
      }

      const data = await response.json()
      return {
        channel: 'SMS',
        success: true,
        messageId: data.sid,
      }
    } catch (error) {
      return {
        channel: 'SMS',
        success: false,
        error: error instanceof Error ? error.message : 'SMS delivery failed',
      }
    }
  }

  private async sendSlack(payload: AlertPayload): Promise<AlertDeliveryResult> {
    if (!payload.slackWebhookUrl) {
      return {
        channel: 'SLACK',
        success: false,
        error: 'Slack webhook not configured',
      }
    }

    try {
      const response = await fetch(payload.slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: this.generateSlackBlocks(payload),
        }),
      })

      if (!response.ok) {
        throw new Error(`Slack webhook error: ${response.status}`)
      }

      return {
        channel: 'SLACK',
        success: true,
      }
    } catch (error) {
      return {
        channel: 'SLACK',
        success: false,
        error: error instanceof Error ? error.message : 'Slack delivery failed',
      }
    }
  }

  private async isRateLimited(riskEventId: string): Promise<boolean> {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('alert_history')
      .select('id')
      .eq('risk_event_id', riskEventId)
      .in('status', ['SENT', 'DELIVERED'])
      .gte('sent_at', new Date(Date.now() - this.RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString())

    if (error) {
      console.error('[AlertOrchestrator] Rate limit check failed:', error)
      return false // Fail open
    }

    return (data?.length || 0) >= this.MAX_ALERTS_PER_WINDOW
  }

  private async recordAlertHistory(record: Omit<AlertHistoryInsert, 'id'>): Promise<void> {
    const supabase = await createClient()
    const { error } = await supabase.from('alert_history').insert(record)

    if (error) {
      console.error('[AlertOrchestrator] Failed to record alert history:', error)
    }
  }

  private getEnabledChannels(payload: AlertPayload, prefs?: UserPreferences): AlertChannel[] {
    const channels: AlertChannel[] = []

    // Default to email if no preferences
    if (!prefs) {
      if (payload.recipientEmail) channels.push('EMAIL')
      return channels
    }

    if (prefs.email_enabled && payload.recipientEmail) {
      channels.push('EMAIL')
    }

    if (prefs.sms_enabled && payload.recipientPhone) {
      channels.push('SMS')
    }

    if (prefs.slack_enabled && payload.slackWebhookUrl) {
      channels.push('SLACK')
    }

    return channels
  }

  private getRecipient(channel: AlertChannel, payload: AlertPayload): string {
    switch (channel) {
      case 'EMAIL':
        return payload.recipientEmail || 'unknown@example.com'
      case 'SMS':
        return payload.recipientPhone || '+10000000000'
      case 'SLACK':
        return 'slack-webhook'
      default:
        return 'unknown'
    }
  }

  private getSeverityEmoji(severity: SeverityLevel): string {
    switch (severity) {
      case 'CRITICAL':
        return '🚨'
      case 'HIGH':
        return '⚠️'
      case 'MEDIUM':
        return '⚡'
      case 'LOW':
        return 'ℹ️'
    }
  }

  private generateEmailHTML(payload: AlertPayload): string {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Risk Alert</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                ${this.getSeverityEmoji(payload.severity)} Risk Alert
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <p style="font-size: 16px; color: #333333; line-height: 1.6; margin: 0 0 24px 0;">
                A <strong>${payload.severity}</strong> severity risk has been detected:
              </p>
              <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 24px 0; border-radius: 4px;">
                <p style="margin: 0; font-size: 15px; color: #495057; line-height: 1.6;">
                  ${payload.violationMessage}
                </p>
              </div>
              <table width="100%" cellpadding="12" cellspacing="0" style="margin: 24px 0; border: 1px solid #e9ecef; border-radius: 8px;">
                <tr style="background-color: #f8f9fa;">
                  <td style="font-weight: 600; color: #495057; font-size: 14px;">Wallet Address:</td>
                  <td style="font-family: 'Courier New', monospace; font-size: 13px; color: #212529;">${payload.walletAddress}</td>
                </tr>
                <tr>
                  <td style="font-weight: 600; color: #495057; font-size: 14px;">Severity:</td>
                  <td style="font-size: 14px; color: #212529;"><span style="display: inline-block; padding: 4px 12px; background-color: ${this.getSeverityColor(payload.severity)}; color: white; border-radius: 4px; font-weight: 600;">${payload.severity}</span></td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                  <td style="font-weight: 600; color: #495057; font-size: 14px;">Detected At:</td>
                  <td style="font-size: 14px; color: #212529;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
              <a href="https://risksignal.io/dashboard" style="display: inline-block; margin-top: 24px; padding: 14px 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">View Dashboard</a>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8f9fa; padding: 24px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; font-size: 12px; color: #6c757d;">
                You're receiving this alert because you have active risk policies configured for this wallet.
              </p>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #6c757d;">
                © ${new Date().getFullYear()} RiskSignal. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()
  }

  private generateSMSText(payload: AlertPayload): string {
    return `${this.getSeverityEmoji(payload.severity)} RISKSIGNAL ALERT: ${payload.violationMessage} | Wallet: ${payload.walletAddress.slice(0, 10)}... | View: https://risksignal.io/dashboard`
  }

  private generateSlackBlocks(payload: AlertPayload): Array<Record<string, unknown>> {
    return [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `${this.getSeverityEmoji(payload.severity)} Risk Alert: ${payload.severity}`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: payload.violationMessage,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Wallet Address:*\n\`${payload.walletAddress}\``,
          },
          {
            type: 'mrkdwn',
            text: `*Detected At:*\n${new Date().toLocaleString()}`,
          },
        ],
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View Dashboard',
            },
            url: 'https://risksignal.io/dashboard',
            style: 'primary',
          },
        ],
      },
    ]
  }

  private getSeverityColor(severity: SeverityLevel): string {
    switch (severity) {
      case 'CRITICAL':
        return '#dc3545'
      case 'HIGH':
        return '#fd7e14'
      case 'MEDIUM':
        return '#ffc107'
      case 'LOW':
        return '#0dcaf0'
    }
  }
}
