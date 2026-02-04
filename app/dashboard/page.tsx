import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { DashboardHeader } from './components/dashboard-header'
import { RiskOverview } from './components/risk-overview'
import { AgentOpsDashboard } from './components/agent-ops-dashboard'
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
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-[1800px] p-6 space-y-6">
        {/* Header */}
        <DashboardHeader 
          userName={user.user_metadata?.first_name || user.email?.split('@')[0] || 'User'}
          userEmail={user.email || ''}
        />

        {/* KPI Overview */}
        <RiskOverview 
          totalPolicies={totalPolicies}
          activePolicies={activePolicies}
          openEvents={openEvents}
          criticalEvents={criticalEvents}
          alertStats={alertStats || []}
        />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Primary Operations Dashboard */}
          <div className="xl:col-span-8 space-y-6">
            <AgentOpsDashboard />
          </div>

          {/* Side Column - Wallets & Risk */}
          <div className="xl:col-span-4 space-y-6">
            <WalletPortfolio 
              wallets={wallets || []}
              snapshots={recentSnapshots || []}
            />

            <RiskFeed 
              events={riskEvents || []}
            />

            <PolicyManager 
              policies={policies || []}
            />

            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  )
}
