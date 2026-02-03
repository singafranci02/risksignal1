import { BookOpen, TrendingUp, AlertTriangle, Zap, BarChart3, Eye, Lock, Copy, Download, CheckCircle2 } from 'lucide-react'

export default function RulesPage() {
  const ruleTemplates = [
    {
      id: 'asset-exposure',
      name: 'Asset Exposure Limits',
      icon: TrendingUp,
      category: 'Risk Management',
      description: 'Prevent over-concentration in any single asset',
      difficulty: 'Beginner',
      regulatory: ['ASIC ERS 3.2', 'MiCA Article 30'],
      config: {
        maxPercentage: 15,
        scope: 'per_asset',
        action: 'ALERT',
      },
      example: 'Trigger alert if any single token exceeds 15% of portfolio value',
      useCases: ['DeFi protocols', 'Hedge funds', 'Treasury management'],
    },
    {
      id: 'drawdown-protection',
      name: 'Drawdown Protection',
      icon: AlertTriangle,
      category: 'Risk Management',
      description: 'Halt trading when portfolio losses exceed threshold',
      difficulty: 'Beginner',
      regulatory: ['ASIC ERS 3.1', 'SEC Best Execution'],
      config: {
        maxDrawdownPercent: 20,
        timeWindow: '24h',
        action: 'HALT_TRADING',
      },
      example: 'Stop all trading if portfolio drops more than 20% from peak in 24 hours',
      useCases: ['Automated trading', 'Algorithmic strategies', 'Risk-managed funds'],
    },
    {
      id: 'transaction-frequency',
      name: 'Transaction Frequency Limits',
      icon: Zap,
      category: 'Operational Controls',
      description: 'Limit trading velocity and gas consumption',
      difficulty: 'Beginner',
      regulatory: ['EU AI Act Article 12', 'CFTC Reg AT'],
      config: {
        maxTransactionsPerHour: 100,
        maxGasPerDay: 1.5,
        action: 'THROTTLE',
      },
      example: 'Limit to 100 transactions per hour and 1.5 ETH gas per day',
      useCases: ['High-frequency trading', 'Market making', 'Arbitrage bots'],
    },
    {
      id: 'correlation-drift',
      name: 'Correlation Drift Detection',
      icon: BarChart3,
      category: 'Portfolio Analytics',
      description: 'Alert when portfolio correlation deviates from target',
      difficulty: 'Intermediate',
      regulatory: ['SEC Reg BI', 'MiCA Article 35'],
      config: {
        maxCorrelation: 0.8,
        referenceAsset: 'BTC',
        lookbackPeriod: '30d',
        action: 'ALERT',
      },
      example: 'Alert if portfolio correlation with BTC exceeds 0.8 over 30 days',
      useCases: ['Diversified portfolios', 'Market-neutral strategies', 'Risk parity'],
    },
    {
      id: 'recursive-loop',
      name: 'Recursive Loop Protection',
      icon: Eye,
      category: 'Safety Controls',
      description: 'Detect and halt infinite decision loops',
      difficulty: 'Advanced',
      regulatory: ['EU AI Act Article 14', 'ASIC ERS 4.1'],
      config: {
        maxRepeatedActions: 5,
        timeWindow: '1h',
        action: 'HALT_AGENT',
      },
      example: 'Stop agent if same action repeated more than 5 times in 1 hour',
      useCases: ['Complex strategies', 'Multi-agent systems', 'Autonomous rebalancing'],
    },
    {
      id: 'unauthorized-token',
      name: 'Unauthorized Token Protection',
      icon: Lock,
      category: 'Compliance',
      description: 'Prevent trading of non-whitelisted assets',
      difficulty: 'Beginner',
      regulatory: ['MiCA Article 35', 'SEC Securities Law'],
      config: {
        whitelist: ['BTC', 'ETH', 'USDC', 'USDT'],
        action: 'BLOCK',
      },
      example: 'Block any transaction involving tokens not on whitelist',
      useCases: ['Regulated funds', 'Institutional treasuries', 'Compliance-first strategies'],
    },
  ]

  const complianceTemplates = [
    {
      name: 'ASIC ERS Compliant Bot',
      region: 'Australia',
      description: 'Pre-configured rule set for Australian algorithmic trading compliance',
      rules: ['Asset Exposure Limits', 'Drawdown Protection', 'Transaction Frequency', 'Recursive Loop Protection'],
      icon: '🇦🇺',
    },
    {
      name: 'EU AI Act High-Risk System',
      region: 'European Union',
      description: 'Complete compliance package for high-risk AI systems under EU AI Act',
      rules: ['Transaction Frequency', 'Recursive Loop Protection', 'Correlation Drift', 'Unauthorized Token'],
      icon: '🇪🇺',
    },
    {
      name: 'SEC/CFTC Algorithmic Trading',
      region: 'United States',
      description: 'Rule set meeting SEC and CFTC requirements for automated trading',
      rules: ['Drawdown Protection', 'Transaction Frequency', 'Asset Exposure Limits', 'Correlation Drift'],
      icon: '🇺🇸',
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      case 'Intermediate':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
      case 'Advanced':
        return 'bg-red-500/10 text-red-400 border-red-500/20'
      default:
        return 'bg-slate-500/10 text-gray-600 border-slate-500/20'
    }
  }

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Rule Library
          </h2>
          <p className="text-lg text-gray-600">
            Pre-built rule templates for common AI agent governance scenarios
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div className="mb-2 text-3xl font-bold text-gray-900">6</div>
            <div className="text-sm text-gray-600">Rule Templates</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div className="mb-2 text-3xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Regional Packages</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <div className="mb-2 text-3xl font-bold text-gray-900">12+</div>
            <div className="text-sm text-gray-600">Regulatory Mappings</div>
          </div>
        </div>
      </section>

      {/* Rule Templates */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Individual Rule Templates</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {ruleTemplates.map((rule) => {
            const Icon = rule.icon
            return (
              <div
                key={rule.id}
                className="group rounded-xl border border-gray-200 bg-gray-50 transition-all hover:border-gray-300"
              >
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{rule.name}</h3>
                        <p className="text-xs text-gray-500">{rule.category}</p>
                      </div>
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${getDifficultyColor(rule.difficulty)}`}>
                      {rule.difficulty}
                    </span>
                  </div>

                  <p className="mb-4 text-sm text-gray-600">{rule.description}</p>

                  <div className="mb-4 rounded-lg bg-white p-4">
                    <div className="mb-2 text-xs font-semibold text-gray-500">Example Use</div>
                    <p className="text-sm text-gray-700">{rule.example}</p>
                  </div>

                  <div className="mb-4">
                    <div className="mb-2 text-xs font-semibold text-gray-500">Configuration</div>
                    <pre className="overflow-x-auto rounded-lg bg-white p-3">
                      <code className="text-xs text-gray-700">
                        {JSON.stringify(rule.config, null, 2)}
                      </code>
                    </pre>
                  </div>

                  <div className="mb-4">
                    <div className="mb-2 text-xs font-semibold text-gray-500">Regulatory Compliance</div>
                    <div className="flex flex-wrap gap-2">
                      {rule.regulatory.map((reg) => (
                        <span
                          key={reg}
                          className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
                        >
                          {reg}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="mb-2 text-xs font-semibold text-gray-500">Common Use Cases</div>
                    <div className="flex flex-wrap gap-2">
                      {rule.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="rounded-full bg-white px-3 py-1 text-xs text-gray-600"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg">
                      <Copy className="h-4 w-4" />
                      Copy Template
                    </button>
                    <button className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-slate-700">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Compliance Packages */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Regional Compliance Packages</h2>
        <p className="mb-6 text-gray-600">
          Pre-configured rule sets that meet specific regulatory requirements by jurisdiction
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {complianceTemplates.map((template) => (
            <div
              key={template.name}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6"
            >
              <div className="mb-4 text-4xl">{template.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{template.name}</h3>
              <p className="mb-1 text-xs font-semibold text-gray-500">{template.region}</p>
              <p className="mb-4 text-sm text-gray-600">{template.description}</p>
              
              <div className="mb-4">
                <div className="mb-2 text-xs font-semibold text-gray-500">Included Rules</div>
                <div className="space-y-2">
                  {template.rules.map((rule) => (
                    <div key={rule} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg">
                Deploy Package
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Rules */}
      <section>
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Need Custom Rules?
          </h2>
          <p className="mb-6 text-gray-700">
            Our team can help you design custom rule configurations for your specific use case and regulatory requirements
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl">
              Request Custom Rules
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-slate-700">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
