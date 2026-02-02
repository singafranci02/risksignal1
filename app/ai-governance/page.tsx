import Link from 'next/link'
import { Shield, Lock, FileCheck, Brain, ArrowRight, CheckCircle2, AlertTriangle, Zap, Eye, Terminal, Layers, TrendingUp, BarChart3 } from 'lucide-react'

export default function AIGovernancePage() {
  const regulatoryFrameworks = [
    {
      name: 'MiCA',
      region: 'European Union',
      description: 'Markets in Crypto-Assets regulation requiring transparency and risk management for crypto service providers.',
      requirements: ['Transaction monitoring', 'Risk disclosure', 'Operational resilience', 'Audit trails'],
    },
    {
      name: 'EU AI Act',
      region: 'European Union',
      description: 'Comprehensive AI regulation requiring traceability, transparency, and human oversight for high-risk AI systems.',
      requirements: ['Article 12: Traceability', 'Article 13: Transparency', 'Article 14: Human oversight', 'Article 17: Quality management'],
    },
    {
      name: 'ASIC ERS',
      region: 'Australia',
      description: 'Electronic Retail Service requirements for automated trading and algorithmic decision-making in financial markets.',
      requirements: ['Algorithm testing', 'Risk controls', 'Audit logs', 'Incident reporting'],
    },
    {
      name: 'SEC Guidelines',
      region: 'United States',
      description: 'Securities and Exchange Commission guidance on algorithmic trading and automated investment advisers.',
      requirements: ['Best execution', 'Conflict of interest management', 'Compliance monitoring', 'Record keeping'],
    },
  ]

  const ruleTypes = [
    {
      icon: TrendingUp,
      name: 'Asset Exposure Limits',
      description: 'Maximum percentage of portfolio in any single asset',
      example: 'No more than 15% in any single token',
      regulatory: 'MiCA Article 30',
    },
    {
      icon: AlertTriangle,
      name: 'Drawdown Protection',
      description: 'Maximum allowable portfolio loss from peak',
      example: 'Halt trading if drawdown exceeds 20%',
      regulatory: 'ASIC ERS 3.1',
    },
    {
      icon: Zap,
      name: 'Transaction Frequency',
      description: 'Limits on trading velocity and gas consumption',
      example: 'Max 100 transactions per hour',
      regulatory: 'EU AI Act Article 12',
    },
    {
      icon: BarChart3,
      name: 'Correlation Drift',
      description: 'Detect when portfolio correlation deviates from target',
      example: 'Alert if correlation >0.8 with BTC',
      regulatory: 'SEC Reg BI',
    },
    {
      icon: Eye,
      name: 'Recursive Loop Detection',
      description: 'Identify and halt infinite decision loops',
      example: 'Stop if same action repeated >5 times',
      regulatory: 'EU AI Act Article 14',
    },
    {
      icon: Lock,
      name: 'Unauthorized Token Protection',
      description: 'Prevent trading of non-whitelisted assets',
      example: 'Only trade BTC, ETH, USDC',
      regulatory: 'MiCA Article 35',
    },
  ]

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 px-4 py-2 text-sm">
              <Shield className="h-4 w-4 text-white" />
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent font-semibold">
                The Governance Layer
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              AI Agent Governance
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-zinc-400">
              Transform experimental AI scripts into compliant, institutional-grade financial vehicles. 
              Our governance layer provides mathematical constraints, verifiable execution, and immutable audit trails.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/profile"
                className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Start Building</span>
                <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 px-8 py-4 text-base font-semibold text-white transition-all hover:border-zinc-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              The Black Box Problem
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              AI agents are powerful but unpredictable. How do you deploy autonomous financial systems with confidence?
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Opaque Decision-Making</h3>
              <p className="text-zinc-400">
                AI agents make autonomous decisions, but their reasoning is often a black box. 
                You cannot trust what you cannot understand or verify.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Regulatory Compliance</h3>
              <p className="text-zinc-400">
                Global regulations (MiCA, EU AI Act, ASIC) demand transparency, traceability, 
                and human oversight for high-risk AI systems.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Institutional Barriers</h3>
              <p className="text-zinc-400">
                Funds and institutions need verifiable proof that AI agents operate within 
                defined parameters. Experimental scripts won't pass due diligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Digital Helmet */}
      <section id="how-it-works" className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-zinc-400">Our Solution</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              The Digital Helmet
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              A hardware-secured governance layer that transforms AI agents from black boxes 
              into verifiable, compliant financial instruments
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left: Concept */}
            <div>
              <div className="mb-8 rounded-2xl border-2 border-white bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white">
                  <Lock className="h-8 w-8 text-black" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  What is the Digital Helmet?
                </h3>
                <p className="mb-6 text-zinc-300">
                  Think of it as a protective layer that wraps around your AI agent. Just as a 
                  helmet protects a rider while allowing them to move freely, the Digital Helmet 
                  enables your AI to operate autonomously while enforcing strict safety constraints.
                </p>
                <div className="space-y-3 text-sm text-zinc-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Hardware-secured execution environments (TEEs)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Mathematical constraint enforcement</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Tamper-proof strategy isolation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Immutable audit trail generation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: How It Works */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-white to-zinc-400">
                  <span className="text-sm font-bold text-black">1</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Define Your Rules</h3>
                  <p className="text-zinc-400">
                    Set constraints in plain language: "Max 15% in any single asset", 
                    "Halt if drawdown exceeds 20%", "Only trade whitelisted tokens".
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-white to-zinc-400">
                  <span className="text-sm font-bold text-black">2</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Mathematical Translation</h3>
                  <p className="text-zinc-400">
                    Our engine translates your rules into mathematical constraints that are 
                    enforced at the infrastructure level, not the application level.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-white to-zinc-400">
                  <span className="text-sm font-bold text-black">3</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">TEE Isolation</h3>
                  <p className="text-zinc-400">
                    Your agent runs in a hardware-secured Trusted Execution Environment. 
                    The strategy cannot be tampered with, and capital cannot be accessed outside parameters.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-white to-zinc-400">
                  <span className="text-sm font-bold text-black">4</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Real-Time Verification</h3>
                  <p className="text-zinc-400">
                    Every decision is checked against your rules in real-time (&lt;50ms). 
                    Violations trigger immediate alerts and optional automatic halts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-white to-zinc-400">
                  <span className="text-sm font-bold text-black">5</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">Immutable Audit Trail</h3>
                  <p className="text-zinc-400">
                    Every rule evaluation is logged in an append-only audit trail. 
                    Export certified reports for regulators, auditors, and stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rule Types */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Comprehensive Rule Library
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Pre-built rule templates covering every aspect of autonomous financial agent governance
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ruleTypes.map((rule) => {
              const Icon = rule.icon
              return (
                <div
                  key={rule.name}
                  className="group rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 transition-all hover:border-zinc-700"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-white to-zinc-400">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{rule.name}</h3>
                  <p className="mb-3 text-sm text-zinc-400">{rule.description}</p>
                  <div className="mb-3 rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                    <p className="text-xs font-mono text-zinc-300">{rule.example}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <FileCheck className="h-3 w-3" />
                    <span>{rule.regulatory}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Frameworks */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Global Regulatory Compliance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Built-in support for major AI and financial regulations across jurisdictions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {regulatoryFrameworks.map((framework) => (
              <div
                key={framework.name}
                className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-white">{framework.name}</h3>
                    <p className="text-sm text-zinc-500">{framework.region}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="mb-6 text-zinc-400">{framework.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-white">Key Requirements:</p>
                  {framework.requirements.map((req) => (
                    <div key={req} className="flex items-start gap-2 text-sm text-zinc-500">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-12 text-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Ready to Deploy Verifiable AI Agents?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
                Join the future of autonomous finance. Build with confidence, deploy with certainty.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/profile"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative">Get Started Free</span>
                  <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-black px-8 py-4 text-base font-semibold text-white transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
                <span>✓ Pre-built compliance templates</span>
                <span>✓ Hardware-secured execution</span>
                <span>✓ Immutable audit trails</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
