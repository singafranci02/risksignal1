import { z } from 'zod'

const moralisResponseSchema = z.object({
  total_networth_usd: z.string(),
})

interface Wallet {
  id: string
  user_id: string
  wallet_address: string
  min_balance_usd: number
}

interface RiskCheckResult {
  walletId: string
  address: string
  currentBalance: number
  threshold: number
  isAtRisk: boolean
}

export class RiskChecker {
  constructor(private readonly moralisApiKey: string) {}

  async checkWallet(wallet: Wallet): Promise<RiskCheckResult> {
    const url = `https://deep-index.moralis.io/api/v2.2/wallets/${wallet.wallet_address}/net-worth?exclude_spam=true`

    const response = await fetch(url, {
      headers: {
        'X-API-Key': this.moralisApiKey,
      },
    })

    if (!response.ok) {
      throw new Error(
        `Moralis API returned ${response.status} for ${wallet.wallet_address}`
      )
    }

    const data = await response.json()
    const validated = moralisResponseSchema.parse(data)
    const currentBalance = parseFloat(validated.total_networth_usd || '0')

    return {
      walletId: wallet.id,
      address: wallet.wallet_address,
      currentBalance,
      threshold: wallet.min_balance_usd,
      isAtRisk: currentBalance < wallet.min_balance_usd,
    }
  }

  async checkMultipleWallets(
    wallets: Wallet[]
  ): Promise<RiskCheckResult[]> {
    const results = await Promise.allSettled(
      wallets.map((wallet) => this.checkWallet(wallet))
    )

    return results
      .filter(
        (result): result is PromiseFulfilledResult<RiskCheckResult> =>
          result.status === 'fulfilled'
      )
      .map((result) => result.value)
  }
}
