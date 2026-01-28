import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not configured')
    return null
  }
  return new Resend(apiKey)
}

interface Wallet {
  id: string
  user_id: string
  wallet_address: string
  min_balance_usd: number
}

interface MoralisNetWorthResponse {
  total_networth_usd: string
}

export async function GET(request: NextRequest) {
  try {
    // Check for Vercel Cron signature or Authorization header with CRON_SECRET
    const isDevelopment = process.env.NODE_ENV === 'development'
    const vercelCron = request.headers.get('x-vercel-cron')
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET

    // Allow bypass in development mode for testing
    if (isDevelopment) {
      console.warn('⚠️  Development mode: CRON_SECRET check bypassed. This should not happen in production.')
    } else {
      // Production: Require either Vercel Cron signature OR CRON_SECRET
      const isVercelCron = vercelCron === '1'
      const hasValidAuth = authHeader && cronSecret && authHeader.replace('Bearer ', '') === cronSecret

      if (!isVercelCron && !hasValidAuth) {
        return NextResponse.json(
          { 
            error: 'Unauthorized',
            message: 'This endpoint requires either Vercel Cron signature or valid CRON_SECRET'
          },
          { status: 401 }
        )
      }

      // Log which authentication method was used
      if (isVercelCron) {
        console.log('✅ Authenticated via Vercel Cron')
      } else {
        console.log('✅ Authenticated via CRON_SECRET')
      }
    }

    // Fetch all wallets from Supabase
    const supabase = await createClient()
    const { data: wallets, error: supabaseError } = await supabase
      .from('monitored_wallets')
      .select('id, user_id, wallet_address, min_balance_usd')

    if (supabaseError) {
      console.error('Error fetching wallets:', supabaseError)
      return NextResponse.json(
        { error: 'Failed to fetch wallets', details: supabaseError.message },
        { status: 500 }
      )
    }

    if (!wallets || wallets.length === 0) {
      return NextResponse.json({
        walletsChecked: 0,
        alertsSent: 0,
        message: 'No wallets to check',
      })
    }

    let alertsSent = 0
    const morailsApiKey = process.env.MORALIS_API_KEY

    if (!morailsApiKey) {
      return NextResponse.json(
        { error: 'MORALIS_API_KEY is not configured' },
        { status: 500 }
      )
    }

    // Check each wallet
    for (const wallet of wallets as Wallet[]) {
      try {
        // Call Moralis API to get wallet net worth
        const moralisUrl = `https://deep-index.moralis.io/api/v2.2/wallets/${wallet.wallet_address}/net-worth?exclude_spam=true`
        
        const moralisResponse = await fetch(moralisUrl, {
          headers: {
            'X-API-Key': morailsApiKey,
          },
        })

        if (!moralisResponse.ok) {
          console.error(
            `Moralis API error for wallet ${wallet.wallet_address}:`,
            moralisResponse.statusText
          )
          continue
        }

        const netWorthData: MoralisNetWorthResponse = await moralisResponse.json()
        const totalNetworthUsd = parseFloat(netWorthData.total_networth_usd || '0')
        const minBalanceUsd = wallet.min_balance_usd

        // Check if net worth is below threshold
        if (totalNetworthUsd < minBalanceUsd) {
          console.log('ALERT TRIGGERED')
          console.log(
            `Wallet ${wallet.wallet_address} has dropped to $${totalNetworthUsd}. Threshold was $${minBalanceUsd}.`
          )

          // Send email via Resend
          // TODO: Fetch actual user email from Supabase auth.users table
          const userEmail = 'user@example.com'
          const resend = getResend()

          if (resend) {
            try {
              await resend.emails.send({
                from: 'RiskSignal <alerts@risksignal.com>', // Update with your verified domain
                to: userEmail,
                subject: 'CRITICAL ALERT: Wallet Balance Below Threshold',
                html: `
                  <h2>CRITICAL ALERT</h2>
                  <p>Wallet <strong>${wallet.wallet_address}</strong> has dropped to <strong>$${totalNetworthUsd.toFixed(2)}</strong>.</p>
                  <p>Threshold was <strong>$${minBalanceUsd.toFixed(2)}</strong>.</p>
                `,
                text: `CRITICAL ALERT: Wallet ${wallet.wallet_address} has dropped to $${totalNetworthUsd.toFixed(2)}. Threshold was $${minBalanceUsd.toFixed(2)}.`,
              })
              alertsSent++
            } catch (emailError) {
              console.error(
                `Failed to send email for wallet ${wallet.wallet_address}:`,
                emailError
              )
            }
          } else {
            console.warn('Resend not configured - skipping email send')
            // Still count as alert triggered for logging purposes
            alertsSent++
          }
        }
      } catch (error) {
        console.error(
          `Error processing wallet ${wallet.wallet_address}:`,
          error
        )
        // Continue with next wallet even if one fails
        continue
      }
    }

    return NextResponse.json({
      walletsChecked: wallets.length,
      alertsSent,
      message: `Checked ${wallets.length} wallet(s), sent ${alertsSent} alert(s)`,
    })
  } catch (error) {
    console.error('Error in check-risk API:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
