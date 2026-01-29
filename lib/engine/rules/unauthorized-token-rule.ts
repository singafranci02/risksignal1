import type { UnauthorizedTokenPolicyConfig } from '@/lib/types/database'
import type { Rule, RuleExecutionContext, RuleExecutionResult } from '../types'

// Well-known blue-chip token addresses (Ethereum mainnet)
const BLUECHIP_TOKENS = new Set([
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
  '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', // WBTC
  '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', // MATIC
  '0x514910771af9ca656af840dff83e8264ecf986ca', // LINK
  '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // UNI
])

const STABLECOIN_ADDRESSES = new Set([
  '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
  '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
  '0x4fabb145d64652a948d72533023f6e7a623c7c53', // BUSD
  '0x853d955acef822db058eb8505911ed77f175b99e', // FRAX
])

export class UnauthorizedTokenRule
  implements Rule<UnauthorizedTokenPolicyConfig>
{
  readonly type = 'UNAUTHORIZED_TOKEN' as const

  validate(config: unknown): config is UnauthorizedTokenPolicyConfig {
    return (
      typeof config === 'object' &&
      config !== null &&
      'type' in config &&
      config.type === 'UNAUTHORIZED_TOKEN' &&
      'whitelist' in config &&
      Array.isArray(config.whitelist) &&
      config.whitelist.length > 0 &&
      'check_mode' in config &&
      (config.check_mode === 'STRICT' ||
        config.check_mode === 'ALLOW_STABLECOINS' ||
        config.check_mode === 'ALLOW_BLUECHIP')
    )
  }

  execute(context: RuleExecutionContext): RuleExecutionResult {
    const { policy, snapshot } = context
    const config = policy.config as UnauthorizedTokenPolicyConfig

    // Normalize whitelist to lowercase for comparison
    const whitelist = new Set(
      config.whitelist.map((addr) => addr.toLowerCase())
    )
    const checkMode = config.check_mode

    // Build allowed set based on check mode
    const allowedAddresses = new Set(whitelist)

    if (checkMode === 'ALLOW_STABLECOINS' || checkMode === 'ALLOW_BLUECHIP') {
      STABLECOIN_ADDRESSES.forEach((addr) => allowedAddresses.add(addr.toLowerCase()))
    }

    if (checkMode === 'ALLOW_BLUECHIP') {
      BLUECHIP_TOKENS.forEach((addr) => allowedAddresses.add(addr.toLowerCase()))
    }

    // Find unauthorized tokens
    const unauthorizedTokens = snapshot.snapshot_data.tokens
      .filter((token) => {
        const tokenAddress = token.contract_address.toLowerCase()
        return !allowedAddresses.has(tokenAddress) && !token.is_spam
      })
      .map((token) => ({
        symbol: token.symbol,
        contract_address: token.contract_address,
        balance_usd: token.balance_usd,
      }))

    const isViolation = unauthorizedTokens.length > 0

    if (!isViolation) {
      return {
        policyId: policy.id,
        walletAddress: policy.wallet_address,
        isViolation: false,
        violationData: null,
        severity: policy.severity,
      }
    }

    // Calculate total unauthorized value
    const totalUnauthorizedValue = unauthorizedTokens.reduce(
      (sum, token) => sum + token.balance_usd,
      0
    )

    return {
      policyId: policy.id,
      walletAddress: policy.wallet_address,
      isViolation: true,
      violationData: {
        type: 'UNAUTHORIZED_TOKEN',
        detected_tokens: unauthorizedTokens,
      },
      severity: policy.severity,
      metadata: {
        total_unauthorized_value: totalUnauthorizedValue,
        unauthorized_count: unauthorizedTokens.length,
        check_mode: checkMode,
        whitelist_size: whitelist.size,
        triggered_at: new Date().toISOString(),
      },
    }
  }
}
