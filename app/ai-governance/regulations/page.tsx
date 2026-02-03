'use client'

import Link from 'next/link'
import { ArrowRight, Globe, Shield, BookOpen, CheckCircle2 } from 'lucide-react'
import { countryRegs } from '@/data/regulations'

export default function RegulationsOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            <Globe className="h-4 w-4" />
            Global Compliance Coverage
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            AI Agent Regulatory Frameworks
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Navigate the complex landscape of financial AI regulation. Kuneo ensures your autonomous agents 
            comply with global standards—from ASIC in Australia to the EU AI Act and SEC regulations in the United States.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all hover:scale-105"
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
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Why Regulatory Compliance Matters
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Financial AI systems are under intense regulatory scrutiny worldwide. 
            Non-compliance can result in severe penalties, operational shutdowns, and reputational damage.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Avoid Penalties</h3>
            <p className="text-gray-600">
              Regulatory fines for algorithmic trading violations can reach millions. 
              Kuneo's infrastructure prevents violations at the hardware level.
            </p>
          </div>

          <div className="rounded-2xl border border-green-200 bg-white p-8 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Maintain Operations</h3>
            <p className="text-gray-600">
              Regulators can suspend trading licenses for non-compliant systems. 
              Stay operational with automated compliance monitoring.
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-200 bg-white p-8 shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
              <Globe className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Global Expansion</h3>
            <p className="text-gray-600">
              Enter new markets confidently. Kuneo supports compliance frameworks 
              across Australia, EU, US, UK, Singapore, and Hong Kong.
            </p>
          </div>
        </div>
      </section>

      {/* Country-Specific Regulations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Country-Specific Compliance Frameworks
            </h2>
            <p className="text-lg text-gray-600">
              Select a region to explore detailed regulatory requirements and Kuneo's solutions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {countryRegs.map((reg) => (
              <Link
                key={reg.slug}
                href={`/ai-governance/regulations/${reg.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all hover:shadow-2xl"
              >
                {/* Flag Background */}
                <div className="absolute right-0 top-0 text-9xl opacity-10 transition-opacity group-hover:opacity-20">
                  {reg.flag}
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-5xl">{reg.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">
                        {reg.country}
                      </h3>
                      <p className="text-sm font-medium text-gray-500">{reg.framework}</p>
                    </div>
                  </div>

                  <div className="mb-4 rounded-lg bg-blue-50 p-3">
                    <p className="text-sm font-semibold text-blue-900">{reg.body}</p>
                  </div>

                  <p className="mb-6 line-clamp-3 text-sm text-gray-600">
                    {reg.summary}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Quick Comparison
            </h2>
            <p className="text-lg text-gray-600">
              Key regulatory focus areas by region
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-xl">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Country</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Body</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Primary Focus</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Key Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇦🇺</span>
                      <span className="font-semibold text-gray-900">Australia</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">ASIC</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Algorithmic Trading</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Kill-switch & Testing</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇸🇬</span>
                      <span className="font-semibold text-gray-900">Singapore</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">MAS</td>
                  <td className="px-6 py-4 text-sm text-gray-600">FEAT Principles</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Explainability</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇪🇺</span>
                      <span className="font-semibold text-gray-900">EU</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">EU Commission</td>
                  <td className="px-6 py-4 text-sm text-gray-600">High-Risk AI Systems</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Human Oversight</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇺🇸</span>
                      <span className="font-semibold text-gray-900">USA</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">SEC / FINRA</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Best Interest</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Supervision & Records</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇬🇧</span>
                      <span className="font-semibold text-gray-900">UK</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">FCA</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Consumer Protection</td>
                  <td className="px-6 py-4 text-sm text-gray-600">SM&CR Accountability</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇭🇰</span>
                      <span className="font-semibold text-gray-900">Hong Kong</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">SFC</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Risk Management</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Pre-Trade Controls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Deploy Compliant AI Agents Globally
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            One infrastructure platform. Multiple regulatory frameworks. Zero compliance headaches.
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
