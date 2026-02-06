'use client'

import Link from 'next/link'
import { ArrowRight, Globe, Shield, BookOpen, CheckCircle2 } from 'lucide-react'
import { countryRegs } from '@/data/regulations'

export default function RegulationsOverview() {
  return (
    <div className="min-h-screen">
      {/* Hero – dark theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/70" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 backdrop-blur-sm">
            <Globe className="h-4 w-4" />
            Global Compliance Coverage
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            AI Agent Regulatory Frameworks
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-300">
            Navigate the complex landscape of financial AI regulation. Kuneo ensures your autonomous agents
            comply with global standards—from ASIC in Australia to the EU AI Act and SEC regulations in the United States.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="group flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-blue-500/50"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/ai-governance/documentation"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              <span>View Documentation</span>
              <BookOpen className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="border-t border-white/10 bg-slate-900/20 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Why Regulatory Compliance Matters
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Financial AI systems are under intense regulatory scrutiny worldwide.
              Non-compliance can result in severe penalties, operational shutdowns, and reputational damage.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-8 shadow-lg backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20">
                <Shield className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Avoid Penalties</h3>
              <p className="text-slate-400">
                Regulatory fines for algorithmic trading violations can reach millions.
                Kuneo&apos;s infrastructure prevents violations at the hardware level.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-8 shadow-lg backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20">
                <CheckCircle2 className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Maintain Operations</h3>
              <p className="text-slate-400">
                Regulators can suspend trading licenses for non-compliant systems.
                Stay operational with automated compliance monitoring.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-8 shadow-lg backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20">
                <Globe className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Global Expansion</h3>
              <p className="text-slate-400">
                Enter new markets confidently. Kuneo supports compliance frameworks
                across Australia, EU, US, UK, Singapore, and Hong Kong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country-Specific Regulations */}
      <section className="border-t border-white/10 bg-slate-900/20 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Country-Specific Compliance Frameworks
            </h2>
            <p className="text-lg text-slate-400">
              Select a region to explore detailed regulatory requirements and Kuneo&apos;s solutions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {countryRegs.map((reg) => (
              <Link
                key={reg.slug}
                href={`/ai-governance/regulations/${reg.slug}`}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800/80 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-sky-500/30 hover:bg-slate-800"
              >
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-4xl">{reg.flag}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-sky-400">
                        {reg.country}
                      </h3>
                      <p className="text-sm font-medium text-slate-400">{reg.framework}</p>
                    </div>
                  </div>
                  <div className="mb-4 rounded-lg border border-sky-500/20 bg-sky-500/10 p-3">
                    <p className="text-sm font-semibold text-sky-200">{reg.body}</p>
                  </div>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400">
                    {reg.summary}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-sky-400 group-hover:text-sky-300">
                    <span>View Full Framework</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-white/10 bg-slate-900/20 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Quick Comparison
            </h2>
            <p className="text-lg text-slate-400">
              Key regulatory focus areas by region
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-800/80 shadow-xl">
            <table className="w-full">
              <thead className="border-b border-white/10 bg-slate-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white">Country</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white">Body</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white">Primary Focus</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white">Key Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="transition-colors hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇦🇺</span>
                      <span className="font-semibold text-white">Australia</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">ASIC</td>
                  <td className="px-6 py-4 text-sm text-slate-400">Algorithmic Trading</td>
                  <td className="px-6 py-4 text-sm text-slate-400">Kill-switch & Testing</td>
                </tr>
                <tr className="transition-colors hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇸🇬</span>
                      <span className="font-semibold text-white">Singapore</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">MAS</td>
                  <td className="px-6 py-4 text-sm text-slate-400">FEAT Principles</td>
                  <td className="px-6 py-4 text-sm text-slate-400">Explainability</td>
                </tr>
                <tr className="transition-colors hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇪🇺</span>
                      <span className="font-semibold text-white">EU</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">EU Commission</td>
                  <td className="px-6 py-4 text-sm text-slate-400">High-Risk AI Systems</td>
                  <td className="px-6 py-4 text-sm text-slate-400">Human Oversight</td>
                </tr>
                <tr className="transition-colors hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇺🇸</span>
                      <span className="font-semibold text-white">USA</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">SEC / FINRA</td>
                  <td className="px-6 py-4 text-sm text-slate-400">Best Interest</td>
                  <td className="px-6 py-4 text-sm text-slate-400">Supervision & Records</td>
                </tr>
                <tr className="transition-colors hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇬🇧</span>
                      <span className="font-semibold text-white">UK</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">FCA</td>
                  <td className="px-6 py-4 text-sm text-slate-400">Consumer Protection</td>
                  <td className="px-6 py-4 text-sm text-slate-400">SM&CR Accountability</td>
                </tr>
                <tr className="transition-colors hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇭🇰</span>
                      <span className="font-semibold text-white">Hong Kong</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">SFC</td>
                  <td className="px-6 py-4 text-sm text-slate-400">Risk Management</td>
                  <td className="px-6 py-4 text-sm text-slate-400">Pre-Trade Controls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Deploy Compliant AI Agents Globally
          </h2>
          <p className="mb-8 text-xl text-slate-300">
            One infrastructure platform. Multiple regulatory frameworks. Zero compliance headaches.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="group flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
            >
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/ai-governance"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              <span>Learn About AI Governance</span>
              <Shield className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
