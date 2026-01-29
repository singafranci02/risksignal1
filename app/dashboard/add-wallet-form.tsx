'use client'

import { useState } from 'react'
import { Plus, AlertCircle } from 'lucide-react'
import { useWallets } from '@/lib/hooks/use-wallets'
import type { AddWalletInput } from '@/lib/validations/wallet'

export default function AddWalletForm() {
  const [walletAddress, setWalletAddress] = useState('')
  const [minBalance, setMinBalance] = useState('')
  const { addWallet, isAdding, addError } = useWallets()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const input: AddWalletInput = {
      wallet_address: walletAddress.trim(),
      min_balance_usd: parseFloat(minBalance),
    }

    try {
      await addWallet(input)
      setWalletAddress('')
      setMinBalance('')
    } catch {
      // Error is handled by the hook
    }
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-foreground">
        Add New Wallet
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="wallet-address"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Wallet Address
          </label>
          <input
            id="wallet-address"
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="0x..."
            disabled={isAdding}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
            aria-required="true"
            aria-invalid={!!addError}
            aria-describedby={addError ? 'error-message' : undefined}
          />
        </div>
        <div>
          <label
            htmlFor="min-balance"
            className="mb-2 block text-sm font-medium text-foreground"
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
            disabled={isAdding}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
            aria-required="true"
            aria-invalid={!!addError}
            aria-describedby={addError ? 'error-message' : undefined}
          />
        </div>
        {addError && (
          <div
            id="error-message"
            role="alert"
            className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span>{addError}</span>
          </div>
        )}
        <button
          type="submit"
          disabled={isAdding}
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          aria-busy={isAdding}
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          {isAdding ? 'Adding...' : 'Add Wallet'}
        </button>
      </form>
    </div>
  )
}
