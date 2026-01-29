import type { NetWorthPolicyConfig } from '@/lib/types/database'
import type { Rule, RuleExecutionContext, RuleExecutionResult } from '../types'

export class NetWorthRule implements Rule<NetWorthPolicyConfig> {
  readonly type = 'NET_WORTH' as const

  validate(config: unknown): config is NetWorthPolicyConfig {
    return (
      typeof config === 'object' &&
      config !== null &&
      'type' in config &&
      config.type === 'NET_WORTH' &&
      'threshold' in config &&
      typeof config.threshold === 'number' &&
      'comparison' in config &&
      (config.comparison === 'LESS_THAN' || config.comparison === 'GREATER_THAN')
    )
  }

  execute(context: RuleExecutionContext): RuleExecutionResult {
    const { policy, snapshot } = context
    const config = policy.config as NetWorthPolicyConfig

    const currentNetWorth = snapshot.net_worth_usd
    const threshold = config.threshold

    // Determine if violation occurred based on comparison type
    const isViolation =
      config.comparison === 'LESS_THAN'
        ? currentNetWorth < threshold
        : currentNetWorth > threshold

    if (!isViolation) {
      return {
        policyId: policy.id,
        walletAddress: policy.wallet_address,
        isViolation: false,
        violationData: null,
        severity: policy.severity,
      }
    }

    // Calculate metrics for violation
    const difference = Math.abs(currentNetWorth - threshold)
    const percentageChange = ((currentNetWorth - threshold) / threshold) * 100

    return {
      policyId: policy.id,
      walletAddress: policy.wallet_address,
      isViolation: true,
      violationData: {
        type: 'NET_WORTH',
        current_balance: currentNetWorth,
        threshold,
        difference,
        percentage_change: percentageChange,
      },
      severity: policy.severity,
      metadata: {
        comparison_type: config.comparison,
        triggered_at: new Date().toISOString(),
      },
    }
  }
}
