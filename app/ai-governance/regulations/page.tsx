'use client'

import Link from 'next/link'
import { ArrowRight, Globe, Shield, BookOpen, CheckCircle2 } from 'lucide-react'
import { countryRegs } from '@/data/regulations'

export default function RegulationsOverview() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero – deep dark */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-16 sm:py-20">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.12) 0%, transparent 50%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/5 px-4 py-2 text-sm font-medium text-sky-300">
            <Globe className="h-4 w-4" />
            Global frameworks
          </div>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Regulatory frameworks for AI agents
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            From ASIC and the EU AI Act to SEC and MAS—one infrastructure layer for multi-jurisdiction
            compliance and audit-ready evidence.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-sky-500"
            >
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ai-governance/documentation"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              Documentation
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters – dark block */}
      <section className="border-b border-slate-800 bg-slate-900 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">
            Why compliance is non-negotiable
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-slate-400">
            Regulators are targeting algorithmic and AI-driven trading. Gaps in controls mean fines,
            suspension, and reputational risk.
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-800/90 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/15">
                <Shield className="h-5 w-5 text-rose-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Avoid penalties</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Algorithmic and AI violations attract heavy fines. Hardware-enforced controls reduce
                breach risk at the source.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-800/90 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Stay operational</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Non-compliant systems can be shut down. Continuous monitoring and attestation help
                keep you in the clear.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-800/90 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/15">
                <Globe className="h-5 w-5 text-sky-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Scale across borders</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                One platform for Australia, EU, US, UK, Singapore, and Hong Kong—without rebuilding
                per jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country frameworks – dark cards */}
      <section className="border-b border-slate-800 bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">
            Jurisdiction-by-jurisdiction
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-center text-slate-400">
            Dive into requirements and how Kuneo maps to each framework.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countryRegs.map((reg) => (
              <Link
                key={reg.slug}
                href={`/ai-governance/regulations/${reg.slug}`}
                className="group flex flex-col rounded-xl border border-slate-700 bg-slate-800/80 p-5 transition-all hover:border-sky-600/40 hover:bg-slate-800"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>{reg.flag}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white group-hover:text-sky-300">
                      {reg.country}
                    </h3>
                    <p className="truncate text-xs font-medium text-slate-500">{reg.framework}</p>
                  </div>
                </div>
                <div className="mb-3 rounded-lg border border-slate-600/80 bg-slate-900/60 px-3 py-2">
                  <p className="text-xs font-semibold text-sky-300/90">{reg.body}</p>
                </div>
                <p className="mb-4 line-clamp-2 flex-1 text-sm text-slate-400">
                  {reg.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 group-hover:text-sky-300">
                  Open framework
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison – dark table */}
      <section className="border-b border-slate-800 bg-slate-900 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">
            At a glance
          </h2>
          <p className="mx-auto mb-8 max-w-md text-center text-slate-400">
            Focus areas and a representative requirement per region.
          </p>
          <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/80">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Country</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Body</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Focus</th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Example requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/80">
                <tr className="transition-colors hover:bg-slate-800/60">
                  <td className="px-4 py-3">
                    <span className="mr-2 text-lg">🇦🇺</span>
                    <span className="font-medium text-white">Australia</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-400">ASIC</td>
                  <td className="px-4 py-3 text-sm text-slate-400">Algorithmic trading</td>
                  <td className="px-4 py-3 text-sm text-slate-400">Kill-switch & testing</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-800/60">
                  <td className="px-4 py-3">
                    <span className="mr-2 text-lg">🇸🇬</span>
                    <span className="font-medium text-white">Singapore</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-400">MAS</td>
                  <td className="px-4 py-3 text-sm text-slate-400">FEAT principles</td>
                  <td className="px-4 py-3 text-sm text-slate-400">Explainability</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-800/60">
                  <td className="px-4 py-3">
                    <span className="mr-2 text-lg">🇪🇺</span>
                    <span className="font-medium text-white">EU</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-400">EU Commission</td>
                  <td className="px-4 py-3 text-sm text-slate-400">High-risk AI</td>
                  <td className="px-4 py-3 text-sm text-slate-400">Human oversight</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-800/60">
                  <td className="px-4 py-3">
                    <span className="mr-2 text-lg">🇺🇸</span>
                    <span className="font-medium text-white">USA</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-400">SEC / FINRA</td>
                  <td className="px-4 py-3 text-sm text-slate-400">Best interest</td>
                  <td className="px-4 py-3 text-sm text-slate-400">Supervision & records</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-800/60">
                  <td className="px-4 py-3">
                    <span className="mr-2 text-lg">🇬🇧</span>
                    <span className="font-medium text-white">UK</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-400">FCA</td>
                  <td className="px-4 py-3 text-sm text-slate-400">Consumer protection</td>
                  <td className="px-4 py-3 text-sm text-slate-400">SM&CR accountability</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-800/60">
                  <td className="px-4 py-3">
                    <span className="mr-2 text-lg">🇭🇰</span>
                    <span className="font-medium text-white">Hong Kong</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-400">SFC</td>
                  <td className="px-4 py-3 text-sm text-slate-400">Risk management</td>
                  <td className="px-4 py-3 text-sm text-slate-400">Pre-trade controls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA – dark footer block */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            One platform, multiple regimes
          </h2>
          <p className="mb-8 text-slate-400">
            Deploy with compliance built in. Get started or explore AI governance.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-sky-500"
            >
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ai-governance"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              AI governance overview
              <Shield className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
