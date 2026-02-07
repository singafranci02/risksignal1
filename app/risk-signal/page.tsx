import Link from 'next/link'
import Image from 'next/image'
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  CheckCircle2,
  Cpu,
  Eye,
  LineChart,
  Shield,
  Zap,
} from 'lucide-react'

export default function RiskSignalPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm">
                <Activity className="h-4 w-4 text-blue-300" />
                <span className="font-mono font-semibold text-blue-200">
                  Retail Risk Intelligence
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                RiskSignal
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-slate-300 sm:text-xl">
                A real-time dashboard for retail investors that turns agent activity into
                actionable risk signals, alerts, and guardrails—without institutional overhead.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/dashboard"
                  className="group relative flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
                >
                  Open RiskSignal Dashboard
                  <Zap className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/ai-governance"
                  className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
                >
                  Explore AI Governance Stack
                  <Shield className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 lg:justify-start">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-blue-300" />
                  <span>Live risk visibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-blue-300" />
                  <span>Instant anomaly alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-blue-300" />
                  <span>Portfolio heatmaps</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-[420px] w-[240px] sm:h-[480px] sm:w-[270px] lg:h-[560px] lg:w-[320px]">
                <Image
                  src="/images/hero/risk-signal-anchor.png"
                  alt="RiskSignal visual anchor"
                  fill
                  className="object-contain object-center drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                  sizes="(min-width: 1024px) 235px, 200px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              A Risk Cockpit Built for Retail Agents
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              RiskSignal turns your agent’s decisions into a clear, auditable view of
              exposure, drift, and compliance—so you can act before capital is at risk.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <LineChart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Live Risk Score</h3>
              <p className="text-gray-600">
                A single health score that updates every trade, showing drawdowns,
                exposure spikes, and policy breaches in real time.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Anomaly Alerts</h3>
              <p className="text-gray-600">
                Immediate notifications when behavior drifts from your rules—position
                sizing, volatility, or asset whitelist violations.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Guardrail Provenance</h3>
              <p className="text-gray-600">
                See which rule fired, why it fired, and what action was taken—fully
                traceable and exportable in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Helmet tie-in */}
      <section className="border-t border-gray-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Digital Helmet Lives Inside the AI Governance Layer
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                RiskSignal is the retail dashboard that surfaces Digital Helmet enforcement.
                Your agent can’t break the rules—and you can see every constraint in action.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>TEE-enforced rule execution inside the AI stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>Immutable audit trails for every agent decision</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>RiskSignal UI that translates enforcement into insights</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/retail-shield"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
                >
                  View Digital Helmet
                  <Shield className="h-4 w-4" />
                </Link>
                <Link
                  href="/ai-governance"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all hover:border-blue-300"
                >
                  AI Governance Overview
                  <Cpu className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/hero/home-hero.png"
                    alt="RiskSignal dashboard preview"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How RiskSignal Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From agent telemetry to risk clarity in three simple steps.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Connect Agents</h3>
              <p className="text-gray-600">
                Link your automated strategies and wallets to stream execution telemetry.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Enforce Guardrails</h3>
              <p className="text-gray-600">
                RiskSignal renders every constraint enforced by the AI governance layer.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Act on Alerts</h3>
              <p className="text-gray-600">
                Get notified when behavior shifts and take action before losses compound.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
