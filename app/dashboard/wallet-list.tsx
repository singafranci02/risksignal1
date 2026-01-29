'use client'

import { Wallet as WalletIcon, Trash2, AlertCircle } from 'lucide-react'
import { useWallets } from '@/lib/hooks/use-wallets'

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
  const { deleteWallet, isDeleting, deleteError } = useWallets()

  const handleDelete = async (id: string, address: string) => {
    if (
      !confirm(
        `Are you sure you want to stop monitoring ${address}? This action cannot be undone.`
      )
    ) {
      return
    }

    try {
      await deleteWallet(id)
    } catch {
      // Error is handled by the hook
    }
  }

  if (wallets.length === 0) {
    return (
      <div
        className="rounded-lg border border-border bg-card p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <WalletIcon
          className="mx-auto mb-4 h-12 w-12 text-muted-foreground"
          aria-hidden="true"
        />
        <p className="text-muted-foreground">
          No wallets monitored yet. Add one above to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {deleteError && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <span>{deleteError}</span>
        </div>
      )}
      {wallets.map((wallet) => (
        <article
          key={wallet.id}
          className="flex items-center justify-between rounded-lg border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <WalletIcon
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />
              <p
                className="font-mono text-sm font-medium text-foreground break-all"
                aria-label="Wallet address"
              >
                {wallet.wallet_address}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Min Balance:{' '}
              <span className="font-medium">
                ${wallet.min_balance_usd.toFixed(2)} USD
              </span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Added:{' '}
              <time dateTime={wallet.created_at}>
                {new Date(wallet.created_at).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </p>
          </div>
          <button
            onClick={() => handleDelete(wallet.id, wallet.wallet_address)}
            disabled={isDeleting === wallet.id}
            className="ml-4 rounded-md p-2 text-destructive transition-colors hover:bg-destructive/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={`Delete wallet ${wallet.wallet_address}`}
            aria-busy={isDeleting === wallet.id}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </article>
      ))}
    </div>
  )
}
