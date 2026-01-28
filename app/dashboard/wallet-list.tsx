'use client'

import { Wallet as WalletIcon, Trash2 } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Wallet {
  id: string
  wallet_address: string
  min_balance_usd: number
  created_at: string
}

interface WalletListProps {
  wallets: Wallet[]
}

export default function WalletList({ wallets }: WalletListProps) {
  const [deleting, setDeleting] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this wallet?')) {
      return
    }

    setDeleting(id)
    const { error } = await supabase
      .from('monitored_wallets')
      .delete()
      .eq('id', id)

    if (error) {
      alert('Error deleting wallet: ' + error.message)
    } else {
      router.refresh()
    }
    setDeleting(null)
  }

  if (wallets.length === 0) {
    return (
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <WalletIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <p className="text-muted-foreground">No wallets monitored yet. Add one above to get started.</p>
        </div>
    )
  }

  return (
    <div className="space-y-4">
      {wallets.map((wallet) => (
        <div
          key={wallet.id}
          className="flex items-center justify-between rounded-lg border border-border bg-card p-4 shadow-sm"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <WalletIcon className="h-5 w-5 text-primary" />
              <p className="font-mono text-sm font-medium text-foreground">
                {wallet.wallet_address}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Min Balance: ${wallet.min_balance_usd.toFixed(2)} USD
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Added: {new Date(wallet.created_at).toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={() => handleDelete(wallet.id)}
            disabled={deleting === wallet.id}
            className="ml-4 rounded-md p-2 text-destructive hover:bg-destructive/10 disabled:opacity-50"
            aria-label="Delete wallet"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
