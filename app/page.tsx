import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"
import { ArrowRight, Shield, Zap, Eye, CheckCircle2, TrendingUp, Activity, Lock, Clock, Bell, BarChart3, Terminal, Layers, Brain, FileCheck, AlertTriangle, Users, Building2, Sparkles, ChevronRight } from "lucide-react"

export default function Home({ searchParams }: { searchParams?: { code?: string } }) {
  if (searchParams?.code) {
    const code = encodeURIComponent(searchParams.code)
    redirect(`/auth/callback?code=${code}&next=/auth/confirmed`)
  }
  return (
    <div>
      {/* Hero – Retail Shield theme: deep navy + grid + cyan accent */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero/home-hero.png"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Shield className="h-4 w-4 text-sky-400" />
              <span className="font-semibold text-sky-200">Verifiable Agentic Finance</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Deploy Autonomous Agents
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
                with Absolute Certainty
              </span>
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-slate-300 sm:text-xl">
              The infrastructure layer that transforms experimental AI scripts into compliant,
              institutional-grade financial vehicles. <span className="font-semibold text-white">Define the rules.
              We enforce the logic at the infrastructure level.</span>
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/profile"
                className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
              >
                <span className="relative">Start Building</span>
                <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/ai-governance"
                className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
              >
                View Governance Layer
                <Shield className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-sky-400" />
                <span>Hardware-Secured TEEs</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-sky-400" />
                <span>Immutable Audit Trails</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-sky-400" />
                <span>Global Compliance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full text-slate-900" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-slate-900/20 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-sky-400">$2.4B+</div>
              <div className="text-sm text-slate-400">Agent Capital Secured</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-sky-400">10K+</div>
              <div className="text-sm text-slate-400">Rules Enforced Daily</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-sky-400">&lt;50ms</div>
              <div className="text-sm text-slate-400">Rule Evaluation</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-sky-400">100%</div>
              <div className="text-sm text-slate-400">Audit Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Debt */}
      <section className="relative bg-white py-24">
        {/* Decorative image on the right, facing the heading — does not affect layout */}
        <div className="pointer-events-none absolute -right-4 top-1/2 hidden w-[200px] -translate-y-1/2 md:block lg:-right-2 lg:w-[240px] xl:-right-2 xl:w-[260px]">
          <Image
            src="/images/hero/agent-debt-guardian.png"
            alt=""
            width={260}
            height={320}
            className="object-contain object-right"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The Reality of Agent Debt in 2026
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Retail and mid-tier agents built on fast demos are accumulating hidden risk until
              a single drift event cascades into a catastrophic failure.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Operational Drift</h3>
              <p className="text-sm font-semibold text-red-700">Success rates &lt; 55%</p>
              <p className="mt-2 text-gray-600">
                Unmanaged agents look impressive in demos but degrade in live markets.
                Drift compounds until behavior leaves the risk envelope entirely.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Cascading Failures</h3>
              <p className="text-sm font-semibold text-amber-700">Multi-agent chain reactions</p>
              <p className="mt-2 text-gray-600">
                A single hallucinated figure in one agent can trigger reorder storms and
                exposure breaches across MT5-style multi-agent stacks.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Memory Poisoning</h3>
              <p className="text-sm font-semibold text-blue-700">Intent hijacking</p>
              <p className="mt-2 text-gray-600">
                Without hardware isolation, unexpected market inputs can override safety rules,
                creating silent, high-risk intent drift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deterministic Advantage */}
      <section className="border-t border-gray-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The Deterministic Advantage
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              2026 institutions demand guaranteed controls—not probabilistic promises.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="grid grid-cols-1 gap-0 border-b border-gray-200 bg-slate-100 px-6 py-4 text-sm font-semibold text-gray-700 md:grid-cols-3">
              <div>Feature</div>
              <div>Status Quo</div>
              <div>Kuneo Engine Value</div>
            </div>
            {[
              {
                feature: 'Identity',
                status: 'Service accounts / API keys',
                kuneo: 'Non-Human Identity (NHI) with silicon-level rotation',
              },
              {
                feature: 'Trust',
                status: 'Model performance & backtests',
                kuneo: 'Hardware-attested permission to act',
              },
              {
                feature: 'Latency',
                status: 'Post-trade software checks',
                kuneo: 'Ultra-low latency pre-trade sequence modeling',
              },
              {
                feature: 'Audit',
                status: 'Manual JSON logs (editable)',
                kuneo: 'Immutable signatures verified by TEEs',
              },
            ].map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 gap-4 border-b border-gray-200 px-6 py-5 text-sm text-gray-700 md:grid-cols-3"
              >
                <div className="font-semibold text-gray-900">{row.feature}</div>
                <div>{row.status}</div>
                <div className="font-medium text-gray-900">{row.kuneo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Through Risk Mitigation */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-6">
            {/* Left: archer image, flipped to face the text */}
            <div className="relative mx-auto flex justify-center lg:order-1 lg:mx-0 lg:justify-end">
              <div className="relative h-[220px] w-[160px] shrink-0 sm:h-[260px] sm:w-[200px] lg:h-[280px] lg:w-[200px]">
                <Image
                  src="/images/hero/roi-mitigation-archer.png"
                  alt=""
                  fill
                  className="object-contain object-center scale-x-[-1]"
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 200px, 160px"
                />
              </div>
            </div>
            {/* Right: heading + more vertical boxes */}
            <div className="lg:order-2 lg:max-w-xl">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  ROI Through Risk Mitigation
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  The business case has shifted from efficiency gains to measurable financial risk reduction.
                </p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    Reduced Insurance Premiums
                  </h3>
                  <p className="text-sm text-gray-600">
                    Proactive compliance and deterministic controls are becoming a competitive advantage
                    for lowering cyber-insurance and operational risk costs.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <Lock className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    Zero-Knowledge Privacy
                  </h3>
                  <p className="text-sm text-gray-600">
                    Kuneo never sees the strategy code—only the risk signal. Proprietary alpha stays private
                    while regulators get the transparency they demand.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/auditor-portal"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              Open the Auditor’s Portal
              <FileCheck className="h-4 w-4" />
            </Link>
            <Link
              href="/risk-signal"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all hover:border-blue-300"
            >
              Explore RiskSignal ROI
              <ArrowRight className="h-4 w-4" />
            </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Three Pillars of Agent Governance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              A complete infrastructure stack for deploying autonomous financial agents with institutional-grade safety
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-sky-500/30 hover:scale-[1.02]">
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 shadow-lg">
                  <Activity className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">Kuneo Core</h3>
                <p className="mb-2 text-sm font-semibold text-sky-400">Real-Time Monitoring</p>
                <p className="mb-6 text-slate-300">
                  Our auditing engine tracks cross-custodian mandates and detects "Agentic Drift"
                  or AI hallucinations in real-time. Every transaction, every decision, every movement
                  of capital is logged and verified against your defined parameters.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    <span>Cross-custodian portfolio aggregation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    <span>Real-time rule evaluation (&lt;50ms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    <span>Anomaly detection & drift alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border-2 border-sky-500/50 bg-gradient-to-br from-blue-600 to-blue-800 p-8 shadow-2xl transition-all hover:shadow-sky-500/20 hover:scale-[1.02]">
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  CORE TECHNOLOGY
                </span>
              </div>
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">The Digital Helmet</h3>
                <p className="mb-2 text-sm font-semibold text-sky-200">Verifiable Execution</p>
                <p className="mb-6 text-slate-200">
                  Hardware-secured environments (TEEs) that isolate your AI's logic, ensuring strategies
                  cannot be tampered with and funds cannot be accessed outside of set parameters.
                  Mathematical certainty replaces blind trust.
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>TEE-based execution isolation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Cryptographic proof of compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Zero-knowledge verification</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-sky-500/30 hover:scale-[1.02]">
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 shadow-lg">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">Agent Intelligence Hub</h3>
                <p className="mb-2 text-sm font-semibold text-sky-400">Compliance Knowledge Base</p>
                <p className="mb-6 text-slate-300">
                  A knowledge base of global AI regulations (MiCA, EU AI Act, ASIC ERS) and pre-built
                  rule templates for agentic trading, from drawdown limits to recursive loop protection.
                  Deploy compliant agents in minutes, not months.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    <span>50+ pre-built compliance templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    <span>Multi-jurisdiction support (AU, EU, US)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    <span>Auto-updating regulatory framework</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature Showcase */}
      <section className="border-t border-white/10 bg-slate-900/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              See the Technology in Action
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Cutting-edge infrastructure that powers verifiable agentic finance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Digital Helmet Visual - SWAPPED to abstract art */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/features/verification.png" 
                  alt="Digital Helmet Technology"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Digital Helmet</h3>
                  <p className="text-sm text-slate-300">Hardware-secured execution environments</p>
                </div>
              </div>
            </div>

            {/* Real-Time Monitoring */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/features/monitoring.png" 
                  alt="Real-time monitoring"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Real-Time Monitoring</h3>
                  <p className="text-sm text-slate-300">Sub-50ms rule evaluation & detection</p>
                </div>
              </div>
            </div>

            {/* Verification System - SWAPPED to developer coding */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/features/digital-helmet.png" 
                  alt="Verification system"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <FileCheck className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Immutable Audit Trails</h3>
                  <p className="text-sm text-slate-300">Cryptographic proof for regulators</p>
                </div>
              </div>
            </div>

            {/* AI Technology - REPLACED trading setup */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/features/ai-technology.png" 
                  alt="AI technology infrastructure"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Agent Intelligence</h3>
                  <p className="text-sm text-slate-300">Advanced governance algorithms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="border-t border-gray-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm font-semibold text-red-600">
                <AlertTriangle className="h-4 w-4" />
                The Challenge
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                AI Agents Are Powerful But Unpredictable
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/20">
                    <Terminal className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Black Box Problem</h3>
                    <p className="text-slate-600">
                      AI agents make thousands of decisions per second. Without infrastructure-level
                      constraints, you have no guarantee they will stay within your risk parameters.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/20">
                    <FileCheck className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Regulatory Uncertainty</h3>
                    <p className="text-slate-600">
                      Global regulators (SEC, MiCA, ASIC) are demanding explainability and audit trails.
                      Traditional AI deployments cannot provide this level of transparency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/20">
                    <Building2 className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Institutional Barriers</h3>
                    <p className="text-slate-600">
                      Banks, hedge funds, and treasuries cannot deploy AI agents without mathematical
                      proof of compliance and immutable audit trails.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
                Our Solution
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Infrastructure-Level Governance & Enforcement
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-500/20">
                    <Lock className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Mathematical Constraints</h3>
                    <p className="text-slate-600">
                      Our Digital Helmet uses hardware-secured TEEs to enforce rules at the infrastructure
                      level. Your agent cannot violate constraints—it's mathematically impossible.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-500/20">
                    <BarChart3 className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Immutable Audit Trails</h3>
                    <p className="text-slate-600">
                      Every decision, transaction, and state change is logged with cryptographic proof.
                      Export certified audit reports for regulators in one click.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-500/20">
                    <Shield className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Verifiable Execution</h3>
                    <p className="text-slate-600">
                      Zero-knowledge proofs allow third parties to verify your agent's compliance without
                      revealing proprietary strategies or sensitive data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-t border-white/10 bg-slate-900/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Built for the Future of Finance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              From autonomous trading to treasury management, Kuneo powers the next generation of financial infrastructure
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 shadow-lg">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Autonomous Trading Agents</h3>
                <p className="text-slate-200">Deploy AI-powered trading strategies with mathematical guarantees</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
                    <div>
                      <div className="font-semibold text-white">Max Drawdown Protection</div>
                      <div className="text-sm text-slate-400">Automatically halt trading if losses exceed 15%</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
                    <div>
                      <div className="font-semibold text-white">Asset Concentration Limits</div>
                      <div className="text-sm text-slate-400">Prevent over-exposure to any single asset</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
                    <div>
                      <div className="font-semibold text-white">Transaction Frequency Caps</div>
                      <div className="text-sm text-slate-400">Prevent wash trading and market manipulation</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 shadow-lg">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Institutional Treasury Management
                </h3>
                <p className="text-slate-200">
                  Automate treasury operations with board-approved constraints
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
                    <div>
                      <div className="font-semibold text-white">Liquidity Thresholds</div>
                      <div className="text-sm text-slate-400">Maintain minimum cash reserves at all times</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
                    <div>
                      <div className="font-semibold text-white">Multi-Signature Approvals</div>
                      <div className="text-sm text-slate-400">Large transactions require board approval</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
                    <div>
                      <div className="font-semibold text-white">Compliance Reporting</div>
                      <div className="text-sm text-slate-400">Automated audit trails for regulators</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-white/10 bg-slate-900/20 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 text-6xl text-sky-500">"</div>
          <blockquote className="mb-8 text-2xl font-medium leading-relaxed text-white">
            The infrastructure layer that finally makes autonomous AI agents viable for institutional finance.
            We built Kuneo because the market needed mathematical certainty, not blind trust.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-sky-500/50">
              <Image
                src="/images/testimonials/client-1.png"
                alt="Francesco Tomatis"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Francesco Tomatis</div>
              <div className="text-sm text-slate-400">CEO & Founder, Kuneo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Transform AI Scripts into
            <br />
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Institutional-Grade Vehicles
            </span>
          </h2>
          <p className="mb-10 text-lg text-slate-300">
            Join leading institutions deploying autonomous agents with absolute certainty
          </p>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-sky-400" />
              <span>Free developer tier</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-sky-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-sky-400" />
              <span>Deploy in minutes</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="group flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
            >
              <span>Get Started Free</span>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/ai-governance"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              <span>Explore Documentation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
