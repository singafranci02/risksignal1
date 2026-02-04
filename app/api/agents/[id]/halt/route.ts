import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = await createClient()
    
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const agentId = params.id
    const body = await request.json()
    const { reason, halt } = body // halt: true = halt, false = resume

    // Verify agent belongs to user
    const { data: agent, error: agentError } = await supabase
      .from('trading_agents')
      .select('*')
      .eq('id', agentId)
      .eq('user_id', user.id)
      .single()

    if (agentError || !agent) {
      return NextResponse.json(
        { error: 'Agent not found' },
        { status: 404 }
      )
    }

    // Update halt status
    const { error: updateError } = await supabase
      .from('trading_agents')
      .update({
        is_halted: halt,
        halt_reason: halt ? reason : null,
        halt_timestamp: halt ? new Date().toISOString() : null
      })
      .eq('id', agentId)

    if (updateError) throw updateError

    // Log the halt/resume action
    await supabase.from('agent_halt_log').insert({
      agent_id: agentId,
      user_id: user.id,
      action: halt ? 'HALT' : 'RESUME',
      reason: reason || (halt ? 'Manual halt' : 'Manual resume'),
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      action: halt ? 'HALTED' : 'RESUMED',
      agent_id: agentId,
      message: halt
        ? 'Agent halted successfully. It will stop executing trades on next telemetry check.'
        : 'Agent resumed successfully.'
    })
  } catch (error) {
    console.error('Error toggling agent halt:', error)
    return NextResponse.json(
      { error: 'Failed to update agent status' },
      { status: 500 }
    )
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url)
    const apiKey = searchParams.get('api_key')

    const supabase = await createClient()

    let query = supabase
      .from('trading_agents')
      .select('id, is_halted, halt_reason, halt_timestamp, status')
      .eq('id', params.id)

    // If API key provided, use that for auth instead of user session
    if (apiKey) {
      query = query.eq('api_key', apiKey)
    } else {
      // Otherwise require user session
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }

      query = query.eq('user_id', user.id)
    }

    const { data: agent, error } = await query.single()

    if (error || !agent) {
      return NextResponse.json(
        { error: 'Agent not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      is_halted: agent.is_halted,
      halt_reason: agent.halt_reason,
      halt_timestamp: agent.halt_timestamp,
      status: agent.status
    })
  } catch (error) {
    console.error('Error checking halt status:', error)
    return NextResponse.json(
      { error: 'Failed to check status' },
      { status: 500 }
    )
  }
}
