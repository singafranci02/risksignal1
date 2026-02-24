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
        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm">
                <Activity className="h-4 w-4 text-blue-300" />
                <span className="font-mono font-semibold text-blue-200">
                  OpenClaw Trade Guard Visibility
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                RiskSignal
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-slate-300 sm:text-xl">
                The dashboard that surfaces what the RiskSignal Helmet did: when it blocked a trade (and why—e.g. Sybil cabal),
                when it executed, and the signature—so you have full visibility without giving the LLM your keys.
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

            <div className="relative flex justify-center lg:justify-end lg:translate-x-6">
              <div className="relative h-[480px] w-[480px] sm:h-[540px] sm:w-[540px] lg:h-[630px] lg:w-[630px]">
                <Image
                  src="/images/hero/risk-signal-anchor.png"
                  alt="RiskSignal visual anchor"
                  fill
                  className="object-contain object-center"
                  sizes="(min-width: 1024px) 630px, (min-width: 640px) 540px, 480px"
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
              A Risk Cockpit for OpenClaw Users
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See when RiskSignal blocked a trade (e.g. Sybil cabal), when it executed and the signature,
              and the reason for every decision—fully auditable.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <LineChart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Block vs. Execute</h3>
              <p className="text-gray-600">
                Every OpenClaw trade intent: blocked (with reason) or executed (with signature).
                Live view of what risksignal.py decided.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Block Reasons</h3>
              <p className="text-gray-600">
                Sybil cabal, honeypot, LP not burned, mint authority still active—see exactly why
                RiskSignal halted a trade.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Guardrail Provenance</h3>
              <p className="text-gray-600">
                Script output and signed tx for every decision—traceable and exportable for regulators.
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
                RiskSignal Helmet Runs in Your Environment
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The Helmet is your local risksignal.py + SKILL.md. This dashboard surfaces block/success
                and reason for each OpenClaw trade intent—so you see every constraint in action.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>risksignal.py output (block or success + reason) per trade</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>Immutable audit: script run + signed tx</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span>RiskSignal UI translates Helmet decisions into insights</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/retail-shield"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
                >
                  View RiskSignal Helmet
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
              From OpenClaw + Helmet to full visibility in three steps.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Connect OpenClaw</h3>
              <p className="text-gray-600">
                Link OpenClaw and optional wallet/script logs so trade intents and Helmet results stream here.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">See Helmet Results</h3>
              <p className="text-gray-600">
                Every block or success + reason (e.g. Sybil cabal, organic, signature) from risksignal.py.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Act on Alerts</h3>
              <p className="text-gray-600">
                Get notified when RiskSignal blocks a trade (e.g. &quot;Sybil cabal&quot;) and act before you risk capital elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
