import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { DashboardHeader } from './components/dashboard-header'
import { AgentManager } from './components/agent-manager'
import { RiskOverview } from './components/risk-overview'
import { WalletPortfolio } from './components/wallet-portfolio'
import { RiskFeed } from './components/risk-feed'
import { PolicyManager } from './components/policy-manager'
import { QuickActions } from './components/quick-actions'

export default async function DashboardPage() {
  const supabase = await createClient()
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch all data in parallel
  const [
    { data: policies },
    { data: riskEvents },
    { data: wallets },
    { data: recentSnapshots },
    { data: alertStats }
  ] = await Promise.all([
    supabase
      .from('policies')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false }),
    
    supabase
      .from('risk_events')
      .select('*, policies!inner(policy_name, wallet_address)')
      .eq('policies.user_id', user.id)
      .order('detected_at', { ascending: false })
      .limit(50),
    
    supabase
      .from('monitored_wallets')
      .select('*')
      .eq('user_id', user.id),
    
    supabase
      .from('wallet_snapshots')
      .select('*')
      .order('captured_at', { ascending: false })
      .limit(100),
    
    supabase
      .from('alert_history')
      .select('*, risk_events!inner(policy_id, policies!inner(user_id))')
      .eq('risk_events.policies.user_id', user.id)
      .order('sent_at', { ascending: false })
      .limit(100)
  ])

  // Calculate metrics
  const totalPolicies = policies?.length || 0
  const activePolicies = policies?.filter(p => p.is_active).length || 0
  const openEvents = riskEvents?.filter(e => e.status === 'OPEN').length || 0
  const criticalEvents = riskEvents?.filter(e => e.severity === 'CRITICAL').length || 0

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1800px] space-y-8 px-6 py-8">
        {/* Header */}
        <DashboardHeader 
          userName={user.user_metadata?.first_name || user.email?.split('@')[0] || 'User'}
          userEmail={user.email || ''}
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Primary Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Agent Manager - Primary Feature */}
            <AgentManager userId={user.id} />

            {/* KPI Overview */}
            <RiskOverview 
              totalPolicies={totalPolicies}
              activePolicies={activePolicies}
              openEvents={openEvents}
              criticalEvents={criticalEvents}
              alertStats={alertStats || []}
            />

            {/* Wallet Portfolio */}
            <WalletPortfolio 
              wallets={wallets || []}
              snapshots={recentSnapshots || []}
            />
          </div>

          {/* Side Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Actions */}
            <QuickActions />

            {/* Risk Feed */}
            <RiskFeed 
              events={riskEvents || []}
            />

            {/* Policy Manager */}
            <PolicyManager 
              policies={policies || []}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
