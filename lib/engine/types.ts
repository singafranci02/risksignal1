import type {
  Policy,
  PolicyConfig,
  PolicyType,
  RiskEvent,
  SeverityLevel,
  ViolationData,
  WalletSnapshot,
} from '@/lib/types/database'

// Rule Execution Context
export interface RuleExecutionContext {
  policy: Policy
  snapshot: WalletSnapshot
  historicalSnapshots?: WalletSnapshot[]
  timestamp: Date
}

// Rule Execution Result
export interface RuleExecutionResult {
  policyId: string
  walletAddress: string
  isViolation: boolean
  violationData: ViolationData | null
  severity: SeverityLevel
  metadata?: Record<string, unknown>
}

// Abstract Rule Interface
export interface Rule<TConfig extends PolicyConfig = PolicyConfig> {
  readonly type: PolicyType
  validate(config: unknown): config is TConfig
  execute(
    context: RuleExecutionContext
  ): Promise<RuleExecutionResult> | RuleExecutionResult
}

// Rule Registry
export interface RuleRegistry {
  register(rule: Rule): void
  get(type: PolicyType): Rule | undefined
  has(type: PolicyType): boolean
  execute(context: RuleExecutionContext): Promise<RuleExecutionResult>
}

// Blockchain Data Provider Interface
export interface BlockchainDataProvider {
  getWalletNetWorth(address: string): Promise<WalletSnapshot>
  getTransactionHistory(
    address: string,
    fromTimestamp?: Date
  ): Promise<Transaction[]>
  getWalletAge(address: string): Promise<WalletAgeData>
}

// Transaction Data
export interface Transaction {
  hash: string
  from: string
  to: string
  value: string
  timestamp: Date
  type: 'SEND' | 'RECEIVE' | 'SWAP' | 'APPROVE'
  chain: string
}

// Wallet Age Data
export interface WalletAgeData {
  first_transaction_date: Date
  age_in_days: number
  total_transactions: number
}

// Risk Score Calculator
export interface RiskScoreCalculator {
  calculateScore(violations: RuleExecutionResult[]): number
  getScoreBreakdown(violations: RuleExecutionResult[]): RiskScoreBreakdown
}

export interface RiskScoreBreakdown {
  total_score: number
  critical_violations: number
  high_violations: number
  medium_violations: number
  low_violations: number
  components: Array<{
    policy_name: string
    severity: SeverityLevel
    contribution: number
  }>
}
