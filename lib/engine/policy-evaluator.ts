import type { Policy, RiskEventInsert, WalletSnapshot } from '@/lib/types/database'
import type { BlockchainDataProvider, RuleExecutionResult } from './types'
import { ruleRegistry } from './rule-registry'

export interface PolicyEvaluatorOptions {
  dataProvider: BlockchainDataProvider
  includeHistoricalData?: boolean
  historicalDays?: number
}

export class PolicyEvaluator {
  private dataProvider: BlockchainDataProvider
  private includeHistoricalData: boolean
  private historicalDays: number

  constructor(options: PolicyEvaluatorOptions) {
    this.dataProvider = options.dataProvider
    this.includeHistoricalData = options.includeHistoricalData ?? false
    this.historicalDays = options.historicalDays ?? 7
  }

  async evaluatePolicy(policy: Policy): Promise<RuleExecutionResult> {
    // Fetch current wallet state
    const snapshot = await this.dataProvider.getWalletNetWorth(
      policy.wallet_address
    )

    // Optionally fetch historical data for trend analysis
    const historicalSnapshots = this.includeHistoricalData
      ? await this.fetchHistoricalSnapshots(policy.wallet_address)
      : undefined

    // Execute rule via registry
    const result = await ruleRegistry.execute({
      policy,
      snapshot,
      historicalSnapshots,
      timestamp: new Date(),
    })

    return result
  }

  async evaluatePolicies(policies: Policy[]): Promise<RuleExecutionResult[]> {
    // Execute all policy evaluations in parallel with error handling
    const results = await Promise.allSettled(
      policies.map((policy) => this.evaluatePolicy(policy))
    )

    return results
      .filter(
        (result): result is PromiseFulfilledResult<RuleExecutionResult> =>
          result.status === 'fulfilled'
      )
      .map((result) => result.value)
  }

  async evaluatePoliciesForWallet(
    policies: Policy[],
    walletAddress: string
  ): Promise<RuleExecutionResult[]> {
    const walletPolicies = policies.filter(
      (p) => p.wallet_address === walletAddress && p.is_active
    )

    return this.evaluatePolicies(walletPolicies)
  }

  createRiskEvent(result: RuleExecutionResult): RiskEventInsert | null {
    if (!result.isViolation || !result.violationData) {
      return null
    }

    return {
      policy_id: result.policyId,
      wallet_address: result.walletAddress,
      event_type: result.violationData.type,
      severity: result.severity,
      status: 'OPEN',
      violation_data: result.violationData,
      metadata: result.metadata || {},
      acknowledged_at: null,
      resolved_at: null,
    }
  }

  createRiskEvents(results: RuleExecutionResult[]): RiskEventInsert[] {
    return results
      .map((result) => this.createRiskEvent(result))
      .filter((event): event is RiskEventInsert => event !== null)
  }

  private async fetchHistoricalSnapshots(
    walletAddress: string
  ): Promise<WalletSnapshot[]> {
    // TODO: Implement historical data fetching from wallet_snapshots table
    // This would query the database for snapshots within the configured time range
    return []
  }
}
