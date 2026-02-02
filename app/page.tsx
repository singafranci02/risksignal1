import Link from "next/link"
import { ArrowRight, Shield, Zap, Eye, CheckCircle2, TrendingUp, Activity, Lock, Clock, Bell, BarChart3, Terminal, Layers, Brain, FileCheck, AlertTriangle } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent font-semibold">
                Verifiable Agentic Finance
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Deploy Autonomous Agents
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                with Absolute Certainty
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-10 text-lg leading-relaxed text-zinc-400 sm:text-xl">
              The infrastructure layer that transforms experimental AI scripts into compliant, 
              institutional-grade financial vehicles. <span className="text-white font-semibold">Define the rules. 
              We enforce the logic at the infrastructure level.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/profile"
                className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Start Building</span>
                <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/ai-governance"
                className="group flex items-center gap-2 rounded-lg border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 px-8 py-4 text-base font-semibold text-white transition-all hover:border-zinc-700"
              >
                View Governance Layer
                <Shield className="h-5 w-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-white" />
                <span>Hardware-Secured TEEs</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-white" />
                <span>Immutable Audit Trails</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-white" />
                <span>Global Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent">
                $2.4B+
              </div>
              <div className="text-sm text-zinc-500">Agent Capital Secured</div>
            </div>
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent">
                10K+
              </div>
              <div className="text-sm text-zinc-500">Rules Enforced Daily</div>
            </div>
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent">
                &lt;50ms
              </div>
              <div className="text-sm text-zinc-500">Rule Evaluation</div>
            </div>
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent">
                100%
              </div>
              <div className="text-sm text-zinc-500">Audit Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The Three Pillars of Agent Governance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              A complete infrastructure stack for deploying autonomous financial agents with institutional-grade safety
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Pillar 1: Kuneo Core */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 transition-all hover:border-zinc-700">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white to-zinc-400">
                  <Activity className="h-7 w-7 text-black" />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Kuneo Core
                </h3>
                <p className="mb-2 text-sm font-semibold text-zinc-500">Real-Time Monitoring</p>
                
                <p className="mb-6 text-zinc-400">
                  Our auditing engine tracks cross-custodian mandates and detects "Agentic Drift" 
                  or AI hallucinations in real-time. Every transaction, every decision, every movement 
                  of capital is logged and verified against your defined parameters.
                </p>
                
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Cross-custodian portfolio aggregation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Behavioral anomaly detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Real-time violation alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: The Digital Helmet */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1 text-xs font-semibold text-black">
                  <Shield className="h-3 w-3" />
                  Core Technology
                </span>
              </div>
              
              <div className="relative mt-4">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white">
                  <Lock className="h-7 w-7 text-black" />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold text-white">
                  The Digital Helmet
                </h3>
                <p className="mb-2 text-sm font-semibold text-zinc-400">Verifiable Execution</p>
                
                <p className="mb-6 text-zinc-300">
                  Hardware-secured environments (TEEs) that isolate your AI's logic, ensuring strategies 
                  cannot be tampered with and funds cannot be accessed outside of set parameters. 
                  The "black box" becomes transparent and verifiable.
                </p>
                
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>TEE-isolated execution environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Tamper-proof strategy enforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Mathematical constraint verification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: Agent Intelligence Hub */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 transition-all hover:border-zinc-700">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white to-zinc-400">
                  <Brain className="h-7 w-7 text-black" />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Agent Intelligence Hub
                </h3>
                <p className="mb-2 text-sm font-semibold text-zinc-500">Compliance Knowledge Base</p>
                
                <p className="mb-6 text-zinc-400">
                  A comprehensive knowledge base of global AI regulations (MiCA, EU AI Act, ASIC ERS) 
                  and pre-built rule templates for agentic trading. From drawdown limits to recursive 
                  loop protection, we have you covered.
                </p>
                
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Global regulatory framework library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Pre-configured compliance templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Recursive loop & drift protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem/Solution */}
      <section className="border-b border-zinc-800 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Problem */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm">
                <AlertTriangle className="h-4 w-4 text-white" />
                <span className="text-zinc-400">The Challenge</span>
              </div>
              
              <h2 className="mb-6 text-3xl font-bold text-white">
                AI Agents Are Powerful
                <br />
                <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                  But Unpredictable
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <span className="text-sm font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white">The Black Box Problem</h3>
                    <p className="text-zinc-400">
                      AI agents make autonomous decisions, but their reasoning is opaque. 
                      How do you trust a system you cannot fully understand?
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white">Regulatory Uncertainty</h3>
                    <p className="text-zinc-400">
                      Global regulations (MiCA, EU AI Act, ASIC) demand transparency and 
                      accountability. Traditional monitoring tools were not built for AI.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <span className="text-sm font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white">Institutional Barriers</h3>
                    <p className="text-zinc-400">
                      Funds, exchanges, and fintechs need verifiable proof that AI agents 
                      operate within defined parameters. Experimental scripts won't cut it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-800 px-4 py-2 text-sm">
                <Shield className="h-4 w-4 text-white" />
                <span className="text-zinc-400">Our Solution</span>
              </div>
              
              <h2 className="mb-6 text-3xl font-bold text-white">
                Infrastructure-Level
                <br />
                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                  Governance & Enforcement
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6">
                  <h3 className="mb-3 font-semibold text-white">Mathematical Constraints</h3>
                  <p className="text-zinc-400">
                    Define rules in plain language. We translate them into mathematical constraints 
                    enforced at the infrastructure level. No agent can deviate, no matter how 
                    sophisticated its reasoning.
                  </p>
                </div>
                
                <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6">
                  <h3 className="mb-3 font-semibold text-white">Immutable Audit Trails</h3>
                  <p className="text-zinc-400">
                    Every decision, every transaction, every rule evaluation is logged in an 
                    append-only audit trail. Export certified reports for regulators and stakeholders.
                  </p>
                </div>
                
                <div className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6">
                  <h3 className="mb-3 font-semibold text-white">Verifiable Execution</h3>
                  <p className="text-zinc-400">
                    Hardware-secured TEEs ensure your agent's logic runs in isolation. Strategies 
                    cannot be tampered with, and capital cannot be accessed outside your parameters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for Institutional Adoption
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              From DeFi protocols to hedge funds, Kuneo enables autonomous finance at scale
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Use Case 1 */}
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white to-zinc-400">
                <TrendingUp className="h-6 w-6 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Autonomous Trading Agents
              </h3>
              <p className="mb-4 text-zinc-400">
                Deploy AI-powered trading strategies with institutional-grade safety nets. 
                Enforce drawdown limits, position sizing, and correlation constraints automatically.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Max drawdown protection (5-20%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Position concentration limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Recursive loop detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Real-time P&L monitoring</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white to-zinc-400">
                <Layers className="h-6 w-6 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Institutional Treasury Management
              </h3>
              <p className="mb-4 text-zinc-400">
                Automate treasury operations while maintaining compliance with fund mandates, 
                board policies, and regulatory requirements across multiple jurisdictions.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Multi-custodian aggregation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Policy-based rebalancing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Compliance reporting (MiCA, ASIC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Board-approved investment constraints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-12 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Transform AI Scripts into
                <br />
                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                  Institutional-Grade Vehicles
                </span>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
                Join the future of verifiable agentic finance. Deploy autonomous agents 
                with mathematical certainty and regulatory compliance.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/profile"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative">Start Building</span>
                  <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/ai-governance"
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-black px-8 py-4 text-base font-semibold text-white transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                >
                  Learn About Governance
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
                <span>✓ Free developer tier</span>
                <span>✓ No credit card required</span>
                <span>✓ Deploy in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
