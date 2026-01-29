// Rule Registry
export { ruleRegistry, RuleRegistry } from './rule-registry'

// Policy Evaluator
export { PolicyEvaluator } from './policy-evaluator'
export type { PolicyEvaluatorOptions } from './policy-evaluator'

// Rules
export { NetWorthRule } from './rules/net-worth-rule'
export { AssetConcentrationRule } from './rules/concentration-rule'
export { UnauthorizedTokenRule } from './rules/unauthorized-token-rule'

// Types
export type {
  Rule,
  RuleExecutionContext,
  RuleExecutionResult,
  RuleRegistry as IRuleRegistry,
  BlockchainDataProvider,
  Transaction,
  WalletAgeData,
  RiskScoreCalculator,
  RiskScoreBreakdown,
} from './types'

// Initialize default rules
import { NetWorthRule } from './rules/net-worth-rule'
import { AssetConcentrationRule } from './rules/concentration-rule'
import { UnauthorizedTokenRule } from './rules/unauthorized-token-rule'
import { ruleRegistry } from './rule-registry'

// Register built-in rules
ruleRegistry.register(new NetWorthRule())
ruleRegistry.register(new AssetConcentrationRule())
ruleRegistry.register(new UnauthorizedTokenRule())
