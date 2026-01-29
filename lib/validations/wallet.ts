import { z } from 'zod'

export const walletAddressSchema = z
  .string()
  .trim()
  .min(42, 'Invalid Ethereum address')
  .max(42, 'Invalid Ethereum address')
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Must be a valid Ethereum address')

export const addWalletSchema = z.object({
  wallet_address: walletAddressSchema,
  min_balance_usd: z
    .number()
    .positive('Minimum balance must be positive')
    .finite('Invalid balance amount'),
})

export type AddWalletInput = z.infer<typeof addWalletSchema>
