import type { AssetConcentrationPolicyConfig } from '@/lib/types/database'
import type { Rule, RuleExecutionContext, RuleExecutionResult } from '../types'

const STABLECOIN_SYMBOLS = new Set([
  'USDT',
  'USDC',
  'DAI',
  'BUSD',
  'FRAX',
  'TUSD',
  'USDP',
])

export class AssetConcentrationRule
  implements Rule<AssetConcentrationPolicyConfig>
{
  readonly type = 'ASSET_CONCENTRATION' as const

  validate(config: unknown): config is AssetConcentrationPolicyConfig {
    return (
      typeof config === 'object' &&
      config !== null &&
      'type' in config &&
      config.type === 'ASSET_CONCENTRATION' &&
      'asset_symbol' in config &&
      typeof config.asset_symbol === 'string' &&
      'max_percentage' in config &&
      typeof config.max_percentage === 'number' &&
      config.max_percentage >= 0 &&
      config.max_percentage <= 100
    )
  }

  execute(context: RuleExecutionContext): RuleExecutionResult {
    const { policy, snapshot } = context
    const config = policy.config as AssetConcentrationPolicyConfig

    const targetSymbol = config.asset_symbol.toUpperCase()
    const maxPercentage = config.max_percentage
    const includeStablecoins = config.include_stablecoins ?? false

    // Find the target asset in the snapshot
    const targetToken = snapshot.snapshot_data.tokens.find(
      (token) => token.symbol.toUpperCase() === targetSymbol
    )

    if (!targetToken) {
      // Asset not found - no violation (wallet doesn't hold this asset)
      return {
        policyId: policy.id,
        walletAddress: policy.wallet_address,
        isViolation: false,
        violationData: null,
        severity: policy.severity,
        metadata: {
          reason: 'ASSET_NOT_FOUND',
          searched_symbol: targetSymbol,
        },
      }
    }

    // Calculate actual concentration percentage
    const totalPortfolioValue = snapshot.net_worth_usd
    const assetValue = targetToken.balance_usd

    // Adjust total if excluding stablecoins
    let adjustedTotal = totalPortfolioValue
    if (!includeStablecoins) {
      const stablecoinValue = snapshot.snapshot_data.tokens
        .filter((token) => STABLECOIN_SYMBOLS.has(token.symbol.toUpperCase()))
        .reduce((sum, token) => sum + token.balance_usd, 0)

      adjustedTotal = totalPortfolioValue - stablecoinValue
    }

    const currentPercentage =
      adjustedTotal > 0 ? (assetValue / adjustedTotal) * 100 : 0

    const isViolation = currentPercentage > maxPercentage

    if (!isViolation) {
      return {
        policyId: policy.id,
        walletAddress: policy.wallet_address,
        isViolation: false,
        violationData: null,
        severity: policy.severity,
      }
    }

    return {
      policyId: policy.id,
      walletAddress: policy.wallet_address,
      isViolation: true,
      violationData: {
        type: 'ASSET_CONCENTRATION',
        asset_symbol: targetSymbol,
        current_percentage: currentPercentage,
        max_percentage: maxPercentage,
        total_value_usd: assetValue,
      },
      severity: policy.severity,
      metadata: {
        total_portfolio_value: totalPortfolioValue,
        adjusted_total: adjustedTotal,
        stablecoins_excluded: !includeStablecoins,
        triggered_at: new Date().toISOString(),
      },
    }
  }
}
