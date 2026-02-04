import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

interface TelemetryPayload {
  balance?: number
  equity?: number
  margin?: number
  margin_free?: number
  positions?: number
  unrealized_pnl?: number
  realized_pnl?: number
  timestamp?: number
  attestation?: string
  event_type?: 'heartbeat' | 'trade' | 'position_opened' | 'position_closed'
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ apiKey: string }> }
) {
  try {
    const { apiKey } = await params
    const supabase = await createClient()

    // Find agent by API key
    const { data: agent, error: agentError } = await supabase
      .from('trading_agents')
      .select('*')
      .eq('api_key', apiKey)
      .single()

    if (agentError || !agent) {
      return NextResponse.json(
        { error: 'Invalid API key', action: 'HALT' },
        { status: 401 }
      )
    }

    // Check if agent is halted
    if (agent.is_halted) {
      return NextResponse.json(
        { 
          status: 'HALTED',
          action: 'HALT',
          message: 'Agent has been halted by governance system'
        },
        { status: 403 }
      )
    }

    const payload: TelemetryPayload = await request.json()
    const timestamp = payload.timestamp || Date.now()

    // Store telemetry data
    const { error: telemetryError } = await supabase
      .from('agent_telemetry')
      .insert({
        agent_id: agent.id,
        user_id: agent.user_id,
        balance: payload.balance,
        equity: payload.equity,
        margin_used: payload.margin,
        margin_free: payload.margin_free,
        positions_count: payload.positions || 0,
        unrealized_pnl: payload.unrealized_pnl,
        realized_pnl: payload.realized_pnl,
        event_type: payload.event_type || 'heartbeat',
        attestation_hash: payload.attestation,
        timestamp: new Date(timestamp).toISOString()
      })

    if (telemetryError) throw telemetryError

    // Update agent's last heartbeat and metadata
    const { error: updateError } = await supabase
      .from('trading_agents')
      .update({
        status: 'active',
        last_heartbeat: new Date().toISOString(),
        metadata: {
          ...agent.metadata,
          last_balance: payload.balance,
          last_equity: payload.equity,
          last_positions: payload.positions || 0,
          total_trades: (agent.metadata?.total_trades || 0) + (payload.event_type === 'trade' ? 1 : 0)
        }
      })
      .eq('id', agent.id)

    if (updateError) throw updateError

    // Check for policy violations (simplified - should be more comprehensive)
    const violations = await checkPolicyViolations(agent, payload, supabase)

    if (violations.length > 0) {
      // Auto-halt if critical violation
      const hasCritical = violations.some(v => v.severity === 'CRITICAL')
      
      if (hasCritical) {
        await supabase
          .from('trading_agents')
          .update({ is_halted: true })
          .eq('id', agent.id)

        return NextResponse.json({
          status: 'VIOLATION_DETECTED',
          action: 'HALT',
          violations,
          message: 'Critical policy violation - agent halted'
        })
      }

      return NextResponse.json({
        status: 'WARNING',
        action: 'CONTINUE',
        violations,
        message: 'Policy violations detected but within limits'
      })
    }

    return NextResponse.json({
      status: 'PROCESSED',
      action: 'CONTINUE',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error processing telemetry:', error)
    return NextResponse.json(
      { 
        status: 'ERROR',
        action: 'CONTINUE',
        error: 'Failed to process telemetry'
      },
      { status: 500 }
    )
  }
}

async function checkPolicyViolations(agent: any, payload: TelemetryPayload, supabase: any) {
  const violations = []

  // Fetch active policies for this user
  const { data: policies } = await supabase
    .from('policies')
    .select('*')
    .eq('user_id', agent.user_id)
    .eq('is_active', true)

  if (!policies) return violations

  // Check drawdown policy
  const drawdownPolicy = policies.find((p: any) => p.policy_type === 'DRAWDOWN')
  if (drawdownPolicy && payload.equity && payload.balance) {
    const drawdown = ((payload.balance - payload.equity) / payload.balance) * 100
    const maxDrawdown = parseFloat(drawdownPolicy.threshold_value)
    
    if (drawdown > maxDrawdown) {
      violations.push({
        policy_id: drawdownPolicy.id,
        policy_name: drawdownPolicy.policy_name,
        severity: drawdownPolicy.severity || 'CRITICAL',
        message: `Drawdown ${drawdown.toFixed(2)}% exceeds limit ${maxDrawdown}%`,
        current_value: drawdown,
        threshold: maxDrawdown
      })
    }
  }

  // Check position limit
  const positionPolicy = policies.find((p: any) => p.policy_type === 'POSITION_LIMIT')
  if (positionPolicy && payload.positions) {
    const maxPositions = parseInt(positionPolicy.threshold_value)
    
    if (payload.positions > maxPositions) {
      violations.push({
        policy_id: positionPolicy.id,
        policy_name: positionPolicy.policy_name,
        severity: positionPolicy.severity || 'WARNING',
        message: `Open positions ${payload.positions} exceeds limit ${maxPositions}`,
        current_value: payload.positions,
        threshold: maxPositions
      })
    }
  }

  // Store violations if any
  if (violations.length > 0) {
    for (const violation of violations) {
      await supabase.from('risk_events').insert({
        policy_id: violation.policy_id,
        agent_id: agent.id,
        detected_at: new Date().toISOString(),
        severity: violation.severity,
        status: 'OPEN',
        metadata: {
          message: violation.message,
          current_value: violation.current_value,
          threshold: violation.threshold
        }
      })
    }
  }

  return violations
}
