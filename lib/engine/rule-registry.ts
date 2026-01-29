import type { PolicyType } from '@/lib/types/database'
import type {
  Rule,
  RuleExecutionContext,
  RuleExecutionResult,
  RuleRegistry as IRuleRegistry,
} from './types'

export class RuleRegistry implements IRuleRegistry {
  private rules: Map<PolicyType, Rule> = new Map()

  register(rule: Rule): void {
    if (this.rules.has(rule.type)) {
      throw new Error(`Rule for policy type '${rule.type}' is already registered`)
    }
    this.rules.set(rule.type, rule)
  }

  get(type: PolicyType): Rule | undefined {
    return this.rules.get(type)
  }

  has(type: PolicyType): boolean {
    return this.rules.has(type)
  }

  async execute(context: RuleExecutionContext): Promise<RuleExecutionResult> {
    const rule = this.rules.get(context.policy.policy_type)

    if (!rule) {
      throw new Error(
        `No rule registered for policy type: ${context.policy.policy_type}`
      )
    }

    // Validate policy config matches rule expectations
    if (!rule.validate(context.policy.config)) {
      throw new Error(
        `Invalid config for policy type '${rule.type}': ${JSON.stringify(context.policy.config)}`
      )
    }

    return await rule.execute(context)
  }

  listRegisteredRules(): PolicyType[] {
    return Array.from(this.rules.keys())
  }
}

// Singleton instance
export const ruleRegistry = new RuleRegistry()
