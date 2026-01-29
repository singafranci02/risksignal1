// Supabase Edge Function: Policy Checker
// Runs on Deno runtime, triggered by cron job
// Evaluates all active policies and generates risk events

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import type { Database } from '../_shared/database.types.ts'

const MORALIS_API_KEY = Deno.env.get('MORALIS_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

interface PolicyRecord {
  id: string
  user_id: string
  wallet_address: string
  policy_type: string
  policy_name: string
  config: Record<string, unknown>
  severity: string
  is_active: boolean
}

interface RuleExecutionResult {
  policyId: string
  walletAddress: string
  isViolation: boolean
  violationData: Record<string, unknown> | null
  severity: string
  metadata?: Record<string, unknown>
}

Deno.serve(async (req) => {
  try {
    // 1. Verify authentication
    const authHeader = req.headers.get('Authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // 2. Initialize Supabase client with service role (bypasses RLS)
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing Supabase configuration')
    }

    const supabase = createClient<Database>(
      SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )

    // 3. Fetch all active policies
    const { data: policies, error: policiesError } = await supabase
      .from('policies')
      .select('*')
      .eq('is_active', true)

    if (policiesError) {
      throw new Error(`Failed to fetch policies: ${policiesError.message}`)
    }

    if (!policies || policies.length === 0) {
      return new Response(
        JSON.stringify({
          success: true,
          data: {
            policies_checked: 0,
            violations_detected: 0,
            alerts_sent: 0,
            message: 'No active policies to check',
          },
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // 4. Group policies by wallet address to minimize API calls
    const policyMap = new Map<string, PolicyRecord[]>()
    for (const policy of policies as PolicyRecord[]) {
      const existing = policyMap.get(policy.wallet_address) || []
      existing.push(policy)
      policyMap.set(policy.wallet_address, existing)
    }

    // 5. Evaluate policies and collect results
    const allResults: RuleExecutionResult[] = []
    let snapshotsCreated = 0

    for (const [walletAddress, walletPolicies] of policyMap.entries()) {
      try {
        // Fetch wallet snapshot from Moralis
        const snapshot = await fetchWalletSnapshot(walletAddress)

        // Store snapshot for historical analysis
        const { error: snapshotError } = await supabase
          .from('wallet_snapshots')
          .insert({
            wallet_address: walletAddress,
            net_worth_usd: snapshot.net_worth_usd,
            snapshot_data: snapshot.snapshot_data,
          })

        if (!snapshotError) {
          snapshotsCreated++
        }

        // Evaluate each policy for this wallet
        for (const policy of walletPolicies) {
          const result = await evaluatePolicy(policy, snapshot)
          allResults.push(result)
        }
      } catch (error) {
        console.error(`Error processing wallet ${walletAddress}:`, error)
        continue
      }
    }

    // 6. Create risk events for violations
    const violations = allResults.filter((r) => r.isViolation)
    const riskEvents = []

    for (const violation of violations) {
      const { error: eventError } = await supabase
        .from('risk_events')
        .insert({
          policy_id: violation.policyId,
          wallet_address: violation.walletAddress,
          event_type: getPolicyType(violation),
          severity: violation.severity,
          status: 'OPEN',
          violation_data: violation.violationData,
          metadata: violation.metadata || {},
        })
        .select()
        .single()

      if (!eventError) {
        riskEvents.push(violation)
      }
    }

    // 7. Trigger alerts (delegated to separate alert service)
    let alertsSent = 0
    for (const event of riskEvents) {
      try {
        await triggerAlert(supabase, event)
        alertsSent++
      } catch (error) {
        console.error('Alert delivery failed:', error)
      }
    }

    // 8. Return summary
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          policies_checked: policies.length,
          wallets_scanned: policyMap.size,
          snapshots_created: snapshotsCreated,
          violations_detected: violations.length,
          alerts_sent: alertsSent,
          timestamp: new Date().toISOString(),
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Edge Function Error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
})

// Helper: Fetch wallet data from Moralis
async function fetchWalletSnapshot(address: string) {
  if (!MORALIS_API_KEY) {
    throw new Error('MORALIS_API_KEY not configured')
  }

  const url = `https://deep-index.moralis.io/api/v2.2/wallets/${address}/net-worth?exclude_spam=true`

  const response = await fetch(url, {
    headers: { 'X-API-Key': MORALIS_API_KEY },
  })

  if (!response.ok) {
    throw new Error(`Moralis API error: ${response.status}`)
  }

  const data = await response.json()

  return {
    wallet_address: address.toLowerCase(),
    net_worth_usd: parseFloat(data.total_networth_usd || '0'),
    snapshot_data: {
      total_networth_usd: parseFloat(data.total_networth_usd || '0'),
      chains: data.chains || [],
      tokens: data.tokens || [],
      captured_at: new Date().toISOString(),
    },
  }
}

// Helper: Evaluate a single policy
async function evaluatePolicy(
  policy: PolicyRecord,
  snapshot: any
): Promise<RuleExecutionResult> {
  const config = policy.config

  switch (policy.policy_type) {
    case 'NET_WORTH':
      return evaluateNetWorthPolicy(policy, snapshot, config)
    case 'ASSET_CONCENTRATION':
      return evaluateConcentrationPolicy(policy, snapshot, config)
    case 'UNAUTHORIZED_TOKEN':
      return evaluateUnauthorizedTokenPolicy(policy, snapshot, config)
    default:
      return {
        policyId: policy.id,
        walletAddress: policy.wallet_address,
        isViolation: false,
        violationData: null,
        severity: policy.severity,
        metadata: { error: 'Unsupported policy type' },
      }
  }
}

// Rule: Net Worth
function evaluateNetWorthPolicy(
  policy: PolicyRecord,
  snapshot: any,
  config: any
): RuleExecutionResult {
  const currentNetWorth = snapshot.net_worth_usd
  const threshold = config.threshold
  const comparison = config.comparison || 'LESS_THAN'

  const isViolation =
    comparison === 'LESS_THAN'
      ? currentNetWorth < threshold
      : currentNetWorth > threshold

  if (!isViolation) {
    return {
      policyId: policy.id,
      walletAddress: policy.wallet_address,
      isViolation: false,
      violationData: null,
      severity: policy.severity,
    }
  }

  return {
    policyId: policy.id,
    walletAddress: policy.wallet_address,
    isViolation: true,
    violationData: {
      type: 'NET_WORTH',
      current_balance: currentNetWorth,
      threshold,
      difference: Math.abs(currentNetWorth - threshold),
      percentage_change: ((currentNetWorth - threshold) / threshold) * 100,
    },
    severity: policy.severity,
  }
}

// Rule: Asset Concentration
function evaluateConcentrationPolicy(
  policy: PolicyRecord,
  snapshot: any,
  config: any
): RuleExecutionResult {
  const targetSymbol = config.asset_symbol?.toUpperCase()
  const maxPercentage = config.max_percentage

  const targetToken = snapshot.snapshot_data.tokens.find(
    (t: any) => t.symbol?.toUpperCase() === targetSymbol
  )

  if (!targetToken) {
    return {
      policyId: policy.id,
      walletAddress: policy.wallet_address,
      isViolation: false,
      violationData: null,
      severity: policy.severity,
    }
  }

  const assetValue = targetToken.usd_value || 0
  const totalValue = snapshot.net_worth_usd
  const currentPercentage = totalValue > 0 ? (assetValue / totalValue) * 100 : 0

  const isViolation = currentPercentage > maxPercentage

  if (!isViolation) {
    return {
      policyId: policy.id,
      walletAddress: policy.wallet_address,
      isViolation: false,
      violationData: null,
      severity: policy.severity,
    }
  }

  return {
    policyId: policy.id,
    walletAddress: policy.wallet_address,
    isViolation: true,
    violationData: {
      type: 'ASSET_CONCENTRATION',
      asset_symbol: targetSymbol,
      current_percentage: currentPercentage,
      max_percentage: maxPercentage,
      total_value_usd: assetValue,
    },
    severity: policy.severity,
  }
}

// Rule: Unauthorized Token
function evaluateUnauthorizedTokenPolicy(
  policy: PolicyRecord,
  snapshot: any,
  config: any
): RuleExecutionResult {
  const whitelist = new Set((config.whitelist || []).map((a: string) => a.toLowerCase()))
  const tokens = snapshot.snapshot_data.tokens || []

  const unauthorizedTokens = tokens
    .filter((t: any) => !whitelist.has(t.token_address?.toLowerCase()) && !t.possible_spam)
    .map((t: any) => ({
      symbol: t.symbol,
      contract_address: t.token_address,
      balance_usd: t.usd_value || 0,
    }))

  const isViolation = unauthorizedTokens.length > 0

  if (!isViolation) {
    return {
      policyId: policy.id,
      walletAddress: policy.wallet_address,
      isViolation: false,
      violationData: null,
      severity: policy.severity,
    }
  }

  return {
    policyId: policy.id,
    walletAddress: policy.wallet_address,
    isViolation: true,
    violationData: {
      type: 'UNAUTHORIZED_TOKEN',
      detected_tokens: unauthorizedTokens,
    },
    severity: policy.severity,
  }
}

// Helper: Get policy type from violation
function getPolicyType(violation: RuleExecutionResult): string {
  return (violation.violationData as any)?.type || 'UNKNOWN'
}

// Helper: Trigger alert delivery
async function triggerAlert(supabase: any, violation: RuleExecutionResult) {
  // Fetch user preferences to determine channels
  const { data: policy } = await supabase
    .from('policies')
    .select('user_id')
    .eq('id', violation.policyId)
    .single()

  if (!policy) return

  const { data: prefs } = await supabase
    .from('user_preferences')
    .select('*')
    .eq('user_id', policy.user_id)
    .single()

  // Default to email if no preferences
  const channels = []
  if (!prefs || prefs.email_enabled) channels.push('EMAIL')
  if (prefs?.sms_enabled && prefs.phone_number) channels.push('SMS')
  if (prefs?.slack_enabled && prefs.slack_webhook_url) channels.push('SLACK')

  // Create alert history records
  for (const channel of channels) {
    await supabase.from('alert_history').insert({
      risk_event_id: violation.policyId, // This should be the risk_event.id from step 6
      channel,
      recipient: 'user@example.com', // TODO: Fetch from auth.users
      status: 'PENDING',
      message_content: formatAlertMessage(violation),
    })
  }
}

// Helper: Format alert message
function formatAlertMessage(violation: RuleExecutionResult): string {
  const data = violation.violationData as any

  if (data.type === 'NET_WORTH') {
    return `RISK ALERT: Wallet ${violation.walletAddress} net worth is $${data.current_balance.toFixed(2)} (threshold: $${data.threshold.toFixed(2)})`
  }

  if (data.type === 'ASSET_CONCENTRATION') {
    return `RISK ALERT: Asset ${data.asset_symbol} concentration is ${data.current_percentage.toFixed(2)}% (max: ${data.max_percentage}%)`
  }

  if (data.type === 'UNAUTHORIZED_TOKEN') {
    return `RISK ALERT: Detected ${data.detected_tokens.length} unauthorized token(s) in wallet ${violation.walletAddress}`
  }

  return 'RISK ALERT: Policy violation detected'
}
