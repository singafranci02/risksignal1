import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { RiskChecker } from '@/lib/services/risk-checker'
import { AlertService } from '@/lib/services/alert-service'
import { z } from 'zod'

const API_RESPONSE_SCHEMA = z.object({
  success: z.boolean(),
  data: z
    .object({
      walletsChecked: z.number(),
      alertsSent: z.number(),
      message: z.string(),
    })
    .optional(),
  error: z.string().optional(),
})

type ApiResponse = z.infer<typeof API_RESPONSE_SCHEMA>

interface Wallet {
  id: string
  user_id: string
  wallet_address: string
  min_balance_usd: number
}

function authenticateRequest(request: NextRequest): boolean {
  const isDevelopment = process.env.NODE_ENV === 'development'

  if (isDevelopment) {
    console.warn(
      '[DEV] CRON_SECRET check bypassed. Never deploy with NODE_ENV=development.'
    )
    return true
  }

  const vercelCron = request.headers.get('x-vercel-cron')
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  const isVercelCron = vercelCron === '1'
  const hasValidAuth =
    !!authHeader &&
    !!cronSecret &&
    authHeader.replace('Bearer ', '') === cronSecret

  return isVercelCron || hasValidAuth
}

export async function GET(request: NextRequest) {
  try {
    if (!authenticateRequest(request)) {
      const response: ApiResponse = {
        success: false,
        error:
          'Unauthorized: This endpoint requires Vercel Cron signature or valid CRON_SECRET',
      }
      return NextResponse.json(response, { status: 401 })
    }

    const moralisApiKey = process.env.MORALIS_API_KEY
    if (!moralisApiKey) {
      const response: ApiResponse = {
        success: false,
        error: 'MORALIS_API_KEY is not configured',
      }
      return NextResponse.json(response, { status: 500 })
    }

    const supabase = await createClient()
    const { data: wallets, error: supabaseError } = await supabase
      .from('monitored_wallets')
      .select('id, user_id, wallet_address, min_balance_usd')

    if (supabaseError) {
      console.error('[Supabase Error]', supabaseError)
      const response: ApiResponse = {
        success: false,
        error: 'Failed to fetch monitored wallets',
      }
      return NextResponse.json(response, { status: 500 })
    }

    if (!wallets || wallets.length === 0) {
      const response: ApiResponse = {
        success: true,
        data: {
          walletsChecked: 0,
          alertsSent: 0,
          message: 'No wallets to check',
        },
      }
      return NextResponse.json(response)
    }

    const riskChecker = new RiskChecker(moralisApiKey)
    const alertService = new AlertService(process.env.RESEND_API_KEY)

    const results = await riskChecker.checkMultipleWallets(
      wallets as Wallet[]
    )
    let alertsSent = 0

    for (const result of results) {
      if (!result.isAtRisk) continue

      console.log('[ALERT TRIGGERED]', {
        wallet: result.address,
        current: result.currentBalance,
        threshold: result.threshold,
      })

      try {
        // TODO: Fetch actual user email from auth.users
        await alertService.sendAlert({
          walletAddress: result.address,
          currentBalance: result.currentBalance,
          threshold: result.threshold,
          recipientEmail: 'user@example.com',
        })
        alertsSent++
      } catch (emailError) {
        console.error('[Email Error]', {
          wallet: result.address,
          error: emailError instanceof Error ? emailError.message : 'Unknown',
        })
      }
    }

    const response: ApiResponse = {
      success: true,
      data: {
        walletsChecked: results.length,
        alertsSent,
        message: `Checked ${results.length} wallet(s), sent ${alertsSent} alert(s)`,
      },
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('[Uncaught Error]', error)
    const response: ApiResponse = {
      success: false,
      error:
        error instanceof Error ? error.message : 'Internal server error',
    }
    return NextResponse.json(response, { status: 500 })
  }
}
