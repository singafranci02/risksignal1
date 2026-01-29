import { useState, useCallback } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import type { AddWalletInput } from '@/lib/validations/wallet'
import { addWalletSchema } from '@/lib/validations/wallet'

interface Wallet {
  id: string
  wallet_address: string
  min_balance_usd: number
  created_at: string
}

interface UseWalletsReturn {
  addWallet: (input: AddWalletInput) => Promise<void>
  deleteWallet: (id: string) => Promise<void>
  isAdding: boolean
  isDeleting: string | null
  addError: string | null
  deleteError: string | null
}

export function useWallets(): UseWalletsReturn {
  const [isAdding, setIsAdding] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [addError, setAddError] = useState<string | null>(null)
  const [deleteError, setDeleteError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const addWallet = useCallback(
    async (input: AddWalletInput) => {
      setAddError(null)
      setIsAdding(true)

      try {
        const validated = addWalletSchema.parse(input)

        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
          throw new Error('Authentication required')
        }

        // Create a NET_WORTH policy (new architecture)
        const { error: policyError } = await supabase
          .from('policies')
          .insert({
            user_id: user.id,
            wallet_address: validated.wallet_address,
            policy_type: 'NET_WORTH',
            policy_name: `Balance Monitor: ${validated.wallet_address.slice(0, 10)}...`,
            description: 'Automatically created from dashboard',
            config: {
              type: 'NET_WORTH',
              threshold: validated.min_balance_usd,
              currency: 'USD',
              comparison: 'LESS_THAN'
            },
            severity: 'HIGH',
            is_active: true
          })

        if (policyError) {
          if (policyError.code === '23505') {
            throw new Error('A policy for this wallet already exists')
          }
          throw policyError
        }

        // Also insert into old table for backwards compatibility
        const { error: insertError } = await supabase
          .from('monitored_wallets')
          .insert({
            user_id: user.id,
            wallet_address: validated.wallet_address,
            min_balance_usd: validated.min_balance_usd,
          })

        if (insertError) {
          if (insertError.code === '23505') {
            throw new Error('This wallet is already being monitored')
          }
          throw insertError
        }

        router.refresh()
      } catch (error) {
        if (error instanceof Error) {
          setAddError(error.message)
        } else {
          setAddError('Failed to add wallet')
        }
        throw error
      } finally {
        setIsAdding(false)
      }
    },
    [router, supabase]
  )

  const deleteWallet = useCallback(
    async (id: string) => {
      setDeleteError(null)
      setIsDeleting(id)

      try {
        const { error } = await supabase
          .from('monitored_wallets')
          .delete()
          .eq('id', id)

        if (error) {
          throw error
        }

        router.refresh()
      } catch (error) {
        if (error instanceof Error) {
          setDeleteError(error.message)
        } else {
          setDeleteError('Failed to delete wallet')
        }
        throw error
      } finally {
        setIsDeleting(null)
      }
    },
    [router, supabase]
  )

  return {
    addWallet,
    deleteWallet,
    isAdding,
    isDeleting,
    addError,
    deleteError,
  }
}
