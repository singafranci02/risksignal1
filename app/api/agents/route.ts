import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const supabase = await createClient()
    
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch all agents for this user
    const { data: agents, error } = await supabase
      .from('trading_agents')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ agents })
  } catch (error) {
    console.error('Error fetching agents:', error)
    return NextResponse.json(
      { error: 'Failed to fetch agents' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { name, broker, connection_method } = body

    // Generate unique API key and webhook URL
    const apiKey = `kuneo_live_${user.id.slice(0, 8)}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`
    const webhookUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kuneo.tech'}/api/telemetry/${apiKey}`

    // Create agent
    const { data: agent, error } = await supabase
      .from('trading_agents')
      .insert({
        user_id: user.id,
        name,
        broker,
        connection_method,
        api_key: apiKey,
        webhook_url: webhookUrl,
        status: 'inactive',
        last_heartbeat: null,
        is_halted: false,
        metadata: {
          uptime_percentage: 0,
          total_trades: 0,
          last_balance: 0,
          last_equity: 0
        }
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ agent }, { status: 201 })
  } catch (error) {
    console.error('Error creating agent:', error)
    return NextResponse.json(
      { error: 'Failed to create agent' },
      { status: 500 }
    )
  }
}
