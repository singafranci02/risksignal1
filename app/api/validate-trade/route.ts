import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

interface TradeValidationRequest {
  api_key: string
  symbol: string
  action: 'buy' | 'sell'
  volume: number
  price?: number
  stop_loss?: number
  take_profit?: number
  current_balance: number
  current_equity: number
  open_positions: number
  timestamp?: number
}

export async function POST(request: Request) {
  try {
    const body: TradeValidationRequest = await request.json()
    const { api_key, symbol, action, volume, current_balance, current_equity, open_positions } = body
    
    const supabase = await createClient()

    // Find agent by API key
    const { data: agent, error: agentError } = await supabase
      .from('trading_agents')
      .select('*')
      .eq('api_key', api_key)
      .single()

    if (agentError || !agent) {
      return NextResponse.json(
        { 
          validation: 'FAIL',
          reason: 'Invalid API key',
          action: 'HALT'
        },
        { status: 401 }
      )
    }

    // Check if agent is halted
    if (agent.is_halted) {
      return NextResponse.json({
        validation: 'FAIL',
        reason: 'Agent is halted',
        action: 'HALT',
        message: 'Agent has been halted by governance system'
      })
    }

    // Fetch active policies
    const { data: policies } = await supabase
      .from('policies')
      .select('*')
      .eq('user_id', agent.user_id)
      .eq('is_active', true)

    if (!policies || policies.length === 0) {
      return NextResponse.json({
        validation: 'PASS',
        reason: 'No active policies to enforce',
        action: 'CONTINUE',
        token: generateValidationToken(agent.id)
      })
    }

    const violations = []

    // Check drawdown before trade
    const drawdownPolicy = policies.find((p: any) => p.policy_type === 'DRAWDOWN')
    if (drawdownPolicy) {
      const currentDrawdown = ((current_balance - current_equity) / current_balance) * 100
      const maxDrawdown = parseFloat(drawdownPolicy.threshold_value)
      
      if (currentDrawdown > maxDrawdown) {
        violations.push({
          policy: drawdownPolicy.policy_name,
          severity: 'CRITICAL',
          message: `Current drawdown ${currentDrawdown.toFixed(2)}% exceeds ${maxDrawdown}%`
        })
      }
    }

    // Check position limit before adding new position
    const positionPolicy = policies.find((p: any) => p.policy_type === 'POSITION_LIMIT')
    if (positionPolicy) {
      const maxPositions = parseInt(positionPolicy.threshold_value)
      
      if (open_positions >= maxPositions) {
        violations.push({
          policy: positionPolicy.policy_name,
          severity: 'CRITICAL',
          message: `Position limit reached (${open_positions}/${maxPositions})`
        })
      }
    }

    // Check position size limit
    const sizePolicy = policies.find((p: any) => p.policy_type === 'POSITION_SIZE')
    if (sizePolicy) {
      const maxSize = parseFloat(sizePolicy.threshold_value)
      
      if (volume > maxSize) {
        violations.push({
          policy: sizePolicy.policy_name,
          severity: 'CRITICAL',
          message: `Position size ${volume} exceeds limit ${maxSize}`
        })
      }
    }

    // Check daily trade limit
    const tradeCountPolicy = policies.find((p: any) => p.policy_type === 'DAILY_TRADE_LIMIT')
    if (tradeCountPolicy) {
      const maxTrades = parseInt(tradeCountPolicy.threshold_value)
      
      // Count trades today
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      const { count } = await supabase
        .from('agent_telemetry')
        .select('*', { count: 'exact', head: true })
        .eq('agent_id', agent.id)
        .eq('event_type', 'trade')
        .gte('timestamp', today.toISOString())
      
      if (count && count >= maxTrades) {
        violations.push({
          policy: tradeCountPolicy.policy_name,
          severity: 'CRITICAL',
          message: `Daily trade limit reached (${count}/${maxTrades})`
        })
      }
    }

    // If any critical violations, FAIL the validation
    if (violations.length > 0) {
      const hasCritical = violations.some(v => v.severity === 'CRITICAL')
      
      // Log the pre-flight rejection
      await supabase.from('trade_validations').insert({
        agent_id: agent.id,
        user_id: agent.user_id,
        symbol,
        action,
        volume,
        validation_result: 'FAIL',
        violations: violations,
        timestamp: new Date().toISOString()
      })

      if (hasCritical) {
        return NextResponse.json({
          validation: 'FAIL',
          reason: 'Critical policy violations detected',
          action: 'REJECT_TRADE',
          violations
        })
      }
    }

    // Log successful validation
    const validationToken = generateValidationToken(agent.id)
    
    await supabase.from('trade_validations').insert({
      agent_id: agent.id,
      user_id: agent.user_id,
      symbol,
      action,
      volume,
      validation_result: 'PASS',
      validation_token: validationToken,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      validation: 'PASS',
      reason: 'All policy checks passed',
      action: 'CONTINUE',
      token: validationToken,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error validating trade:', error)
    return NextResponse.json(
      {
        validation: 'ERROR',
        reason: 'Validation system error',
        action: 'REJECT_TRADE',
        error: 'Internal error'
      },
      { status: 500 }
    )
  }
}

function generateValidationToken(agentId: string): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).slice(2)
  return `val_${agentId.slice(0, 8)}_${timestamp}_${random}`
}
