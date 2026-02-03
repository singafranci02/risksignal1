'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Lock, FileCheck, Brain, ArrowRight, CheckCircle2, AlertTriangle, Zap, Eye, TrendingUp, BarChart3, FileText, Scale, BookOpen, Sparkles, Download, Power, Activity, AlertOctagon, Flag } from 'lucide-react'

// Note: Metadata is in layout.tsx for this page

export default function AIGovernanceOverview() {
  const [activeLog, setActiveLog] = useState(0)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kuneo.tech/#organization",
        "name": "Kuneo",
        "url": "https://kuneo.tech",
        "logo": "https://kuneo.tech/logo.png",
        "description": "Infrastructure for autonomous financial agent governance with mathematical certainty."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI Agent Governance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Agent Governance is the infrastructure layer that enforces mathematical constraints and regulatory compliance on autonomous agents using hardware-secured environments (TEEs) and immutable audit logs."
            }
          },
          {
            "@type": "Question",
            "name": "Does Kuneo support the EU AI Act?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Kuneo is designed to map agent behavior to global frameworks including the EU AI Act (Articles 12, 13, 52), ASIC (Australia), and SEC/FINRA guidelines (United States)."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Digital Helmet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Digital Helmet is Kuneo's hardware-secured execution environment that uses Trusted Execution Environments (TEEs) to enforce rules at the infrastructure level, making rule violations mathematically impossible."
            }
          }
        ]
      }
    ]
  }
  
  const logEntries = [
    { time: '12:01:03.421', event: 'Agent Request', action: 'BUY 10 BTC @ $94,500', status: 'pending' },
    { time: '12:01:03.422', event: 'Helmet Check', action: 'Leverage Limit Check', status: 'pass' },
    { time: '12:01:03.423', event: 'Helmet Check', action: 'Exposure Cap Validation', status: 'pass' },
    { time: '12:01:03.424', event: 'Helmet Check', action: 'Price Deviation Check', status: 'pass' },
    { time: '12:01:03.425', event: 'Execution', action: 'Order Placed via Binance', status: 'success' },
    { time: '12:01:03.426', event: 'Audit Log', action: 'Cryptographic Signature Created', status: 'logged' },
  ]

  useEffect(() => {
    if (activeLog < logEntries.length - 1) {
      const timer = setTimeout(() => setActiveLog(activeLog + 1), 800)
      return () => clearTimeout(timer)
    }
  }, [activeLog])

  const regulations = [
    {
      region: 'Australia',
      body: 'ASIC',
      icon: '🇦🇺',
      requirements: [
        'RG 97: Financial product advice disclosure',
        'ERS: Electronic record-keeping standards',
        'SMSF: Self-managed super fund compliance',
        'AML/CTF: Transaction monitoring'
      ],
      color: 'emerald'
    },
    {
      region: 'European Union',
      body: 'EU AI Act',
      icon: '🇪🇺',
      requirements: [
        'Article 12: Transparency & traceability',
        'Article 13: Human oversight requirements',
        'Article 52: High-risk AI system standards',
        'GDPR: Data protection & privacy'
      ],
      color: 'blue'
    },
    {
      region: 'United States',
      body: 'SEC / FINRA',
      icon: '🇺🇸',
      requirements: [
        'Reg BI: Best interest obligations',
        'FINRA 3110: Supervisory procedures',
        'SEC 17a-4: Electronic record retention',
        'Dodd-Frank: Systematic risk monitoring'
      ],
      color: 'indigo'
    }
  ]

  const guardrails = [
    {
      title: 'Leverage Caps',
      description: 'Automatically prevent agents from exceeding 5x leverage',
      icon: TrendingUp,
      example: 'Max 5x | Current: 2.3x',
      color: 'blue'
    },
    {
      title: 'Fat-Finger Protection',
      description: 'Reject orders X% away from mid-market price',
      icon: AlertOctagon,
      example: '±3% limit | Saves ~$2M/year',
      color: 'red'
    },
    {
      title: 'Wash Trading Prevention',
      description: 'Ensure agents are not trading with internal wallets',
      icon: Eye,
      example: 'Cross-wallet detection: Active',
      color: 'purple'
    },
    {
      title: 'Drawdown Limits',
      description: 'Automatic kill-switch at portfolio loss threshold',
      icon: Power,
      example: 'Max -15% | Current: -3.2%',
      color: 'orange'
    }
  ]

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="space-y-16">
        {/* Answer Block for AI Search */}
        <section className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            What is AI Agent Governance?
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            AI Agent Governance is the infrastructure layer that transforms experimental AI scripts into compliant, 
            institutional-grade financial vehicles by enforcing mathematical constraints at the hardware level using 
            Trusted Execution Environments (TEEs) and providing immutable audit trails for regulatory compliance.
          </p>
          <p className="text-gray-700">
            Unlike traditional monitoring tools that observe behavior after the fact, Kuneo's governance infrastructure 
            prevents rule violations at the execution level—making it mathematically impossible for autonomous agents 
            to exceed defined risk parameters, trade unauthorized assets, or bypass compliance requirements.
          </p>
        </section>

        {/* Hero Introduction with Bento Grid */}
        <section>
        <div className="mb-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-gray-900">Core Infrastructure</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            AI Agent Governance Platform
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            The infrastructure layer that transforms experimental AI scripts into compliant, 
            institutional-grade financial vehicles with mathematical certainty.
          </p>
        </div>

        {/* Bento Grid - Core Features */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          {/* Large card - Digital Helmet (spans 2 columns) */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-600 to-blue-700 p-8 shadow-lg md:col-span-2 md:row-span-2">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">The Digital Helmet</h3>
              <p className="mb-6 text-lg text-blue-100">
                Hardware-secured execution environments (TEEs) that isolate AI logic and enforce 
                mathematical constraints at the infrastructure level. Your agent physically cannot 
                violate the rules you set.
              </p>
              <ul className="space-y-3 text-sm text-white">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>TEE-based isolation (Intel SGX / AWS Nitro)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Cryptographic proof of compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Zero-knowledge verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Sub-50ms rule evaluation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Smaller cards */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700">
              <FileCheck className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">Immutable Audit Trails</h3>
            <p className="text-sm text-gray-600">
              Append-only logs with cryptographic signatures. Export as PDF/JSON for regulators.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-700">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">Drift Detection</h3>
            <p className="text-sm text-gray-600">
              Real-time monitoring of agent intent vs. actual execution. Catch hallucinations early.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-700">
              <Power className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">Human Override</h3>
            <p className="text-sm text-gray-600">
              Kill-switch for human operators. Instant halt when risk thresholds are breached.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-orange-700">
              <Download className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">Export & Reporting</h3>
            <p className="text-sm text-gray-600">
              One-click compliance reports. PDF for humans, JSON for systems.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Compliance Modules */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Regional Compliance Coverage</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {regulations.map((reg) => {
            const colorClasses = {
              emerald: 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-white hover:border-emerald-300',
              blue: 'border-blue-200 bg-gradient-to-br from-blue-50 to-white hover:border-blue-300',
              indigo: 'border-indigo-200 bg-gradient-to-br from-indigo-50 to-white hover:border-indigo-300',
            }[reg.color]

            return (
              <div
                key={reg.body}
                className={`group rounded-2xl border p-6 shadow-lg transition-all hover:shadow-xl ${colorClasses}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-4xl">{reg.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{reg.body}</h3>
                    <p className="text-sm font-medium text-gray-600">{reg.region}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {reg.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Split Screen - How It Works with Live Terminal */}
      <section className="rounded-2xl bg-gray-50 p-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">How the Digital Helmet Works</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Explanation */}
          <div className="space-y-6">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                STEP 1
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Agent Makes Decision</h3>
              <p className="text-gray-600">
                Your AI agent analyzes market conditions and decides to execute a trade (e.g., BUY 10 BTC).
              </p>
            </div>

            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                STEP 2
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Digital Helmet Intercepts</h3>
              <p className="text-gray-600">
                Before execution, the request passes through the TEE-secured Helmet which evaluates all active rules.
              </p>
            </div>

            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                STEP 3
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Rule Validation</h3>
              <p className="text-gray-600">
                Leverage limits, exposure caps, price deviation checks, and wash trading detection all run in &lt;50ms.
              </p>
            </div>

            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                STEP 4
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Execute or Reject</h3>
              <p className="text-gray-600">
                If all checks pass, execution proceeds. If any fail, the trade is rejected and logged with reason.
              </p>
            </div>

            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                STEP 5
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Immutable Logging</h3>
              <p className="text-gray-600">
                Every decision, rule evaluation, and execution is cryptographically signed and stored append-only.
              </p>
            </div>
          </div>

          {/* Right: Live Terminal Simulation */}
          <div className="rounded-xl border border-gray-300 bg-gray-900 p-6 font-mono text-sm shadow-xl">
            <div className="mb-4 flex items-center gap-2 border-b border-gray-700 pb-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-400">kuneo@governance-engine</span>
            </div>
            <div className="space-y-2">
              {logEntries.slice(0, activeLog + 1).map((log, idx) => {
                const statusColors = {
                  pending: 'text-yellow-400',
                  pass: 'text-green-400',
                  success: 'text-emerald-400',
                  logged: 'text-blue-400'
                }[log.status]

                return (
                  <div key={idx} className="animate-pulse">
                    <span className="text-gray-500">[{log.time}]</span>{' '}
                    <span className="text-cyan-400">{log.event}:</span>{' '}
                    <span className="text-gray-300">{log.action}</span>{' '}
                    <span className={statusColors}>✓ {log.status.toUpperCase()}</span>
                  </div>
                )
              })}
              {activeLog < logEntries.length - 1 && (
                <div className="animate-pulse text-gray-500">
                  <span className="inline-block h-4 w-2 bg-green-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-configured Guardrails */}
      <section>
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Pre-configured Guardrails</h2>
          <p className="text-lg text-gray-600">
            Deploy production-ready rule templates built for institutional finance
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {guardrails.map((guard) => {
            const Icon = guard.icon
            const colorClasses = {
              blue: 'from-blue-600 to-blue-700',
              red: 'from-red-600 to-red-700',
              purple: 'from-purple-600 to-purple-700',
              orange: 'from-orange-600 to-orange-700',
            }[guard.color]

            return (
              <div
                key={guard.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${colorClasses}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{guard.title}</h3>
                <p className="mb-3 text-sm text-gray-600">{guard.description}</p>
                <div className="rounded-lg bg-gray-50 px-3 py-2 font-mono text-xs text-gray-700">
                  {guard.example}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Agent Drift Visualization */}
      <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Agent Intent vs. Execution</h2>
        <p className="mb-8 text-lg text-gray-600">
          Real-time drift detection catches when agent behavior deviates from intended strategy
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Intended Behavior</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Conservative leverage (2-3x)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Diversified across 5+ assets
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Max 10 trades per hour
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Stop-loss at -5%
              </li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900">Detected Drift</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <AlertOctagon className="h-4 w-4 text-red-600" />
                <span className="line-through">Attempted 8x leverage</span> → BLOCKED
              </li>
              <li className="flex items-center gap-2">
                <AlertOctagon className="h-4 w-4 text-red-600" />
                <span className="line-through">90% concentration in SOL</span> → BLOCKED
              </li>
              <li className="flex items-center gap-2">
                <AlertOctagon className="h-4 w-4 text-red-600" />
                <span className="line-through">47 trades in 10 minutes</span> → RATE LIMITED
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Stop-loss honored correctly ✓
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm text-blue-900">
          <strong>Result:</strong> Helmet prevented 3 policy violations. Agent was auto-paused for review. 
          Total potential loss prevented: ~$340,000 based on historical scenarios.
        </div>
      </section>

      {/* Human-in-the-Loop Section */}
      <section className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 p-8">
        <div className="mb-6 flex items-center gap-3">
          <Power className="h-8 w-8 text-orange-600" />
          <h2 className="text-3xl font-bold text-gray-900">Human-in-the-Loop (HITL)</h2>
        </div>
        <p className="mb-6 text-lg text-gray-700">
          Regulators require human oversight for high-risk AI systems. Kuneo provides multiple intervention layers:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-orange-200 bg-white p-6">
            <h3 className="mb-2 font-bold text-gray-900">Emergency Kill-Switch</h3>
            <p className="text-sm text-gray-600">
              Instant halt of all agent activities. Accessible via dashboard, API, or SMS command.
            </p>
          </div>
          <div className="rounded-xl border border-orange-200 bg-white p-6">
            <h3 className="mb-2 font-bold text-gray-900">Approval Workflows</h3>
            <p className="text-sm text-gray-600">
              Require human approval for trades above threshold (e.g., &gt;$100k or &gt;5% portfolio).
            </p>
          </div>
          <div className="rounded-xl border border-orange-200 bg-white p-6">
            <h3 className="mb-2 font-bold text-gray-900">Audit Alerts</h3>
            <p className="text-sm text-gray-600">
              Real-time notifications when agent behavior deviates. Slack, SMS, or email.
            </p>
          </div>
        </div>
      </section>

      {/* Reporting & Exportability */}
      <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Export & Compliance Reporting</h2>
            <p className="text-lg text-gray-600">One-click audit reports for regulators and stakeholders</p>
          </div>
          <Download className="h-12 w-12 text-gray-400" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 font-bold text-gray-900">📄 PDF Reports (Human-Readable)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Executive summary with key metrics
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Chronological audit trail
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Rule violation breakdown
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Cryptographic signatures included
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 font-bold text-gray-900">🔗 JSON/API (Machine-Readable)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Structured data for internal systems
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Real-time API access to logs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Webhook notifications for events
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                SIEM/SOC integration ready
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center">
          <p className="text-sm font-semibold text-gray-900">
            Reports comply with ASIC ERS, EU AI Act Article 12, and SEC 17a-4 retention requirements
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Dive Deeper</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/ai-governance/documentation"
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg transition-shadow group-hover:shadow-xl">
              <FileText className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Documentation</h3>
            <p className="mb-4 text-gray-600">Technical specs, API references, and integration guides</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              <span>View Docs</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/ai-governance/regulations"
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-lg transition-shadow group-hover:shadow-xl">
              <Scale className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Regulations</h3>
            <p className="mb-4 text-gray-600">Regulatory frameworks for AU, EU, and US compliance</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              <span>Explore Frameworks</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/ai-governance/rules"
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-lg transition-shadow group-hover:shadow-xl">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Rule Library</h3>
            <p className="mb-4 text-gray-600">Pre-built templates and custom rule configurations</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              <span>Browse Rules</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-center shadow-2xl">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Ready to Deploy Compliant AI Agents?
        </h2>
        <p className="mb-8 text-lg text-blue-100">
          Start building with institutional-grade governance infrastructure
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/profile"
            className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all hover:scale-105"
          >
            <span>Get Started Free</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/ai-governance/documentation"
            className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
          >
            <span>View Documentation</span>
            <FileText className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
