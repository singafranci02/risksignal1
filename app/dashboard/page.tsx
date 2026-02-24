import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { DashboardHeader } from './components/dashboard-header'
import { TokenScanner } from './components/token-scanner'
import { CircuitBreakerStats } from './components/circuit-breaker-stats'
import { ScanHistory } from './components/scan-history'
import { BlockReasonsFeed } from './components/block-reasons-feed'
import { SetupGuide } from './components/setup-guide'
import { QuickActions } from './components/quick-actions'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-[1800px] space-y-6 px-6 py-8">
        {/* Header */}
        <DashboardHeader
          userName={user.user_metadata?.first_name || user.email?.split('@')[0] || 'User'}
          userEmail={user.email || ''}
        />

        {/* Token Scanner — full width, primary feature */}
        <TokenScanner />

        {/* KPI Stats Row */}
        <CircuitBreakerStats />

        {/* Main Content — two columns */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: Scan History */}
          <div className="lg:col-span-8 space-y-6">
            <ScanHistory />
          </div>

          {/* Right: Actions + Block Reasons + Setup */}
          <div className="lg:col-span-4 space-y-6">
            <QuickActions />
            <BlockReasonsFeed />
            <SetupGuide />
          </div>
        </div>
      </div>
    </div>
  )
}
