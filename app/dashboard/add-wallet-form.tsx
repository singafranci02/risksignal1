'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'

export default function AddWalletForm() {
  const [walletAddress, setWalletAddress] = useState('')
  const [minBalance, setMinBalance] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Basic validation
    if (!walletAddress.trim()) {
      setError('Wallet address is required')
      setLoading(false)
      return
    }

    if (!minBalance || parseFloat(minBalance) < 0) {
      setError('Minimum balance must be a positive number')
      setLoading(false)
      return
    }

    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      setError('You must be logged in to add a wallet')
      setLoading(false)
      return
    }

    const { error: insertError } = await supabase
      .from('monitored_wallets')
      .insert({
        user_id: user.id,
        wallet_address: walletAddress.trim(),
        min_balance_usd: parseFloat(minBalance),
      })

    if (insertError) {
      setError(insertError.message)
      setLoading(false)
      return
    }

    // Reset form and refresh
    setWalletAddress('')
    setMinBalance('')
    setLoading(false)
    router.refresh()
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-foreground">Add New Wallet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="wallet-address"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Wallet Address
          </label>
          <input
            id="wallet-address"
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="0x..."
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="min-balance"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Minimum Balance (USD)
          </label>
          <input
            id="min-balance"
            type="number"
            step="0.01"
            min="0"
            value={minBalance}
            onChange={(e) => setMinBalance(e.target.value)}
            placeholder="0.00"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            required
          />
        </div>
        {error && (
          <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="h-4 w-4" />
          {loading ? 'Adding...' : 'Add Wallet'}
        </button>
      </form>
    </div>
  )
}
