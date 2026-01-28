import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import WalletList from './wallet-list'
import AddWalletForm from './add-wallet-form'

export default async function DashboardPage() {
  const supabase = await createClient()
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: wallets, error } = await supabase
    .from('monitored_wallets')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">RiskSignal Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Monitor your wallet balances and receive alerts
          </p>
        </div>

        <div className="mb-8">
          <AddWalletForm />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Monitored Wallets</h2>
          {error ? (
            <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive">
              Error loading wallets: {error.message}
            </div>
          ) : (
            <WalletList wallets={wallets || []} />
          )}
        </div>
      </div>
    </div>
  )
}
