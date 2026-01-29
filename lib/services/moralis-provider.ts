import type {
  WalletSnapshot,
  SnapshotData,
  TokenBalance,
  ChainSnapshot,
} from '@/lib/types/database'
import type {
  BlockchainDataProvider,
  Transaction,
  WalletAgeData,
} from '@/lib/engine/types'
import { z } from 'zod'

// Moralis API Response Schemas
const moralisTokenSchema = z.object({
  token_address: z.string(),
  symbol: z.string(),
  name: z.string(),
  balance: z.string(),
  balance_formatted: z.string(),
  usd_value: z.number().optional(),
  possible_spam: z.boolean().optional(),
})

const moralisNetWorthResponseSchema = z.object({
  total_networth_usd: z.string(),
  chains: z.array(
    z.object({
      chain: z.string(),
      native_balance: z.string(),
      native_balance_usd: z.number(),
      token_count: z.number(),
    })
  ),
  tokens: z.array(moralisTokenSchema),
})

const moralisTransactionSchema = z.object({
  hash: z.string(),
  from_address: z.string(),
  to_address: z.string(),
  value: z.string(),
  block_timestamp: z.string(),
  transaction_fee: z.string().optional(),
})

export class MoralisDataProvider implements BlockchainDataProvider {
  constructor(private readonly apiKey: string) {
    if (!apiKey) {
      throw new Error('Moralis API key is required')
    }
  }

  async getWalletNetWorth(address: string): Promise<WalletSnapshot> {
    const url = `https://deep-index.moralis.io/api/v2.2/wallets/${address}/net-worth?exclude_spam=true`

    const response = await fetch(url, {
      headers: {
        'X-API-Key': this.apiKey,
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(
        `Moralis API error (${response.status}): ${await response.text()}`
      )
    }

    const rawData = await response.json()
    const validated = moralisNetWorthResponseSchema.parse(rawData)

    // Transform Moralis response to our WalletSnapshot format
    const snapshotData: SnapshotData = {
      total_networth_usd: parseFloat(validated.total_networth_usd),
      chains: validated.chains.map(
        (chain): ChainSnapshot => ({
          chain: chain.chain,
          native_balance: chain.native_balance,
          native_balance_usd: chain.native_balance_usd,
          token_count: chain.token_count,
        })
      ),
      tokens: this.transformTokens(validated.tokens, parseFloat(validated.total_networth_usd)),
      captured_at: new Date().toISOString(),
    }

    return {
      id: crypto.randomUUID(),
      wallet_address: address.toLowerCase(),
      net_worth_usd: parseFloat(validated.total_networth_usd),
      snapshot_data: snapshotData,
      captured_at: new Date().toISOString(),
    }
  }

  async getTransactionHistory(
    address: string,
    fromTimestamp?: Date
  ): Promise<Transaction[]> {
    const url = new URL(
      `https://deep-index.moralis.io/api/v2/${address}`
    )

    if (fromTimestamp) {
      url.searchParams.set('from_date', fromTimestamp.toISOString())
    }

    const response = await fetch(url.toString(), {
      headers: {
        'X-API-Key': this.apiKey,
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(
        `Moralis API error (${response.status}): ${await response.text()}`
      )
    }

    const rawData = await response.json()
    const transactions = z
      .object({ result: z.array(moralisTransactionSchema) })
      .parse(rawData)

    return transactions.result.map((tx) => ({
      hash: tx.hash,
      from: tx.from_address,
      to: tx.to_address,
      value: tx.value,
      timestamp: new Date(tx.block_timestamp),
      type: this.inferTransactionType(tx, address),
      chain: 'ethereum', // TODO: Support multi-chain
    }))
  }

  async getWalletAge(address: string): Promise<WalletAgeData> {
    // Fetch all transactions to find the first one
    const transactions = await this.getTransactionHistory(address)

    if (transactions.length === 0) {
      // New wallet, never used
      return {
        first_transaction_date: new Date(),
        age_in_days: 0,
        total_transactions: 0,
      }
    }

    // Sort by timestamp ascending to find first transaction
    const sortedTxs = [...transactions].sort(
      (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
    )

    const firstTx = sortedTxs[0]
    const ageInMs = Date.now() - firstTx.timestamp.getTime()
    const ageInDays = Math.floor(ageInMs / (1000 * 60 * 60 * 24))

    return {
      first_transaction_date: firstTx.timestamp,
      age_in_days: ageInDays,
      total_transactions: transactions.length,
    }
  }

  private transformTokens(
    tokens: z.infer<typeof moralisTokenSchema>[],
    totalNetWorth: number
  ): TokenBalance[] {
    return tokens.map((token) => {
      const balanceUsd = token.usd_value || 0

      return {
        symbol: token.symbol,
        name: token.name,
        contract_address: token.token_address,
        balance: token.balance,
        balance_usd: balanceUsd,
        percentage_of_portfolio:
          totalNetWorth > 0 ? (balanceUsd / totalNetWorth) * 100 : 0,
        chain: 'ethereum', // TODO: Multi-chain support
        is_spam: token.possible_spam || false,
      }
    })
  }

  private inferTransactionType(
    tx: z.infer<typeof moralisTransactionSchema>,
    walletAddress: string
  ): Transaction['type'] {
    const normalizedAddress = walletAddress.toLowerCase()
    const isSender = tx.from_address.toLowerCase() === normalizedAddress
    const isReceiver = tx.to_address.toLowerCase() === normalizedAddress

    // Simple heuristics (can be improved with method signature analysis)
    if (isSender && isReceiver) {
      return 'APPROVE' // Self-transaction, likely approval
    } else if (isSender) {
      return 'SEND'
    } else if (isReceiver) {
      return 'RECEIVE'
    } else {
      return 'SWAP' // Contract interaction
    }
  }
}
