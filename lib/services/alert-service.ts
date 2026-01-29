import { Resend } from 'resend'

interface AlertPayload {
  walletAddress: string
  currentBalance: number
  threshold: number
  recipientEmail: string
}

export class AlertService {
  private resend: Resend | null

  constructor(apiKey: string | undefined) {
    this.resend = apiKey ? new Resend(apiKey) : null
  }

  async sendAlert(payload: AlertPayload): Promise<void> {
    if (!this.resend) {
      throw new Error('Resend is not configured')
    }

    await this.resend.emails.send({
      from: 'RiskSignal Alerts <alerts@risksignal.com>',
      to: payload.recipientEmail,
      subject: 'CRITICAL ALERT: Wallet Balance Below Threshold',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">CRITICAL ALERT</h2>
          <p style="font-size: 16px; line-height: 1.5;">
            Wallet <strong style="font-family: monospace;">${payload.walletAddress}</strong> 
            has dropped to <strong>$${payload.currentBalance.toFixed(2)}</strong>.
          </p>
          <p style="font-size: 16px; line-height: 1.5;">
            Your configured threshold was <strong>$${payload.threshold.toFixed(2)}</strong>.
          </p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="font-size: 14px; color: #6b7280;">
            You're receiving this alert because you're monitoring this wallet via RiskSignal.
          </p>
        </div>
      `,
      text: `CRITICAL ALERT: Wallet ${payload.walletAddress} has dropped to $${payload.currentBalance.toFixed(2)}. Your threshold was $${payload.threshold.toFixed(2)}.`,
    })
  }
}
