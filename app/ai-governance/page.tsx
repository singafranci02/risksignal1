import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Shield,
  Lock,
  CheckCircle2,
  FileText,
  Scale,
  BookOpen,
  Activity,
  Sparkles,
  Eye,
  BarChart3,
  Power,
  AlertTriangle
} from 'lucide-react'
import { insights } from '@/data/insights'

export default function AIGovernanceOverview() {
  const featuredInsights = insights.slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://kuneo.tech/#organization',
        name: 'Kuneo',
        url: 'https://kuneo.tech',
        logo: 'https://kuneo.tech/logo.svg',
        description:
          'Infrastructure for autonomous financial agent governance with mathematical certainty.'
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is AI Agent Governance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'AI Agent Governance is the infrastructure layer that enforces mathematical constraints and regulatory compliance on autonomous agents using hardware-secured environments and immutable audit logs.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does Kuneo support the EU AI Act?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, Kuneo maps agent behavior to global frameworks including the EU AI Act, ASIC in Australia, and SEC/FINRA guidance in the United States.'
            }
          }
        ]
      }
    ]
  }

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/ai-governance-hero.png"
            alt="AI governance infrastructure"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/55 to-blue-900/80" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-200" />
              Governance infrastructure for autonomous finance
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              The AI Governance Layer for Verifiable Agentic Finance
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Kuneo turns AI agents into compliant financial infrastructure with hardware-secured
              execution, real-time policy enforcement, and immutable audit trails.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-lg transition-all hover:scale-105"
              >
                Start governance program
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ai-governance/regulations"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60"
              >
                View regulatory coverage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="mx-auto -mt-12 max-w-7xl px-6">
        <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-blue-600">Policy Enforcement</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">99.9%</p>
            <p className="mt-2 text-sm text-gray-600">Automated rule checks per trade</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-600">Audit Readiness</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">24/7</p>
            <p className="mt-2 text-sm text-gray-600">Immutable logs and reporting</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-600">Regulatory Coverage</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">6 Regions</p>
            <p className="mt-2 text-sm text-gray-600">ASIC, EU AI Act, SEC/FINRA + more</p>
          </div>
        </div>
      </section>

      {/* Core Platform */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">Governance Platform Core</h2>
          <p className="mt-3 text-gray-600">
            A layered governance stack that combines hardware isolation, deterministic policy
            enforcement, and regulator-ready audit outputs.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src="/images/features/digital-helmet.png"
                alt="Digital Helmet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-semibold">Digital Helmet</span>
              </div>
            </div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">Hardware-secured execution</h3>
            <p className="mt-3 text-sm text-gray-600">
              Enforce policy inside TEEs so agents cannot execute outside approved constraints.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src="/images/features/verification.png"
                alt="Immutable audit trails"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-semibold">Immutable Audit Trails</span>
              </div>
            </div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">Regulator-ready evidence</h3>
            <p className="mt-3 text-sm text-gray-600">
              Cryptographically signed logs show every policy check before execution.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src="/images/features/monitoring.png"
                alt="Agent drift monitoring"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Eye className="h-5 w-5" />
                <span className="text-sm font-semibold">Agent Drift Control</span>
              </div>
            </div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">Real-time supervision</h3>
            <p className="mt-3 text-sm text-gray-600">
              Detect intent drift, enforce guardrails, and escalate to human oversight.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">How the governance layer works</h2>
              <p className="mt-4 text-gray-600">
                Every decision is evaluated against policy, verified inside secured hardware, and
                recorded for audit before capital moves.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  {
                    title: 'Define governance policy',
                    body: 'Configure guardrails for exposure, leverage, counterparties, and jurisdiction.'
                  },
                  {
                    title: 'Secure execution with TEEs',
                    body: 'Policies are enforced inside isolated environments that cannot be tampered with.'
                  },
                  {
                    title: 'Real-time audit output',
                    body: 'Signed logs and compliance reports are generated automatically.'
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 text-white shadow-xl">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Activity className="h-4 w-4 text-emerald-400" />
                Proof of Compliance
              </div>
              <div className="mt-4 space-y-3 text-sm text-gray-200">
                {[
                  '12:01:03.421  Agent Request   BUY 10 BTC @ 94,500',
                  '12:01:03.422  Helmet Check    Leverage Cap: PASS',
                  '12:01:03.423  Helmet Check    Exposure Limit: PASS',
                  '12:01:03.424  Helmet Check    Price Deviation: PASS',
                  '12:01:03.425  Execution       Order routed to venue',
                  '12:01:03.426  Audit Log       Signature recorded'
                ].map((line) => (
                  <div key={line} className="rounded-lg bg-gray-900/70 px-3 py-2 font-mono">
                    {line}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-emerald-500/10 px-4 py-3 text-xs text-emerald-200">
                Evidence captured for ASIC RG 265, EU AI Act Article 12, and SEC 17a-4
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory coverage */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Regulatory coverage</h2>
            <p className="mt-2 text-gray-600">
              Built-in mappings for the most demanding financial AI frameworks.
            </p>
          </div>
          <Link
            href="/ai-governance/regulations"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-blue-200 hover:text-blue-700"
          >
            Explore all frameworks
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Australia',
              body: 'ASIC RG 265',
              description: 'Algorithmic trading, audit trails, and real-time controls.',
              href: '/ai-governance/regulations/australia'
            },
            {
              title: 'European Union',
              body: 'EU AI Act',
              description: 'High-risk AI compliance, traceability, and oversight.',
              href: '/ai-governance/regulations/european-union'
            },
            {
              title: 'United States',
              body: 'SEC / FINRA',
              description: 'Supervision, record retention, and market integrity.',
              href: '/ai-governance/regulations/united-states'
            }
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-sm text-blue-600">
                <Scale className="h-5 w-5" />
                {item.body}
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{item.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                View details
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Guardrails */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900">Pre-configured guardrails</h2>
            <p className="mt-3 text-gray-600">
              Institutional risk controls that keep autonomous agents within approved mandates.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Leverage Caps',
                detail: 'Automatically block trades above approved leverage thresholds.',
                icon: BarChart3
              },
              {
                title: 'Fat-Finger Protection',
                detail: 'Reject orders that deviate from market price beyond tolerance.',
                icon: AlertTriangle
              },
              {
                title: 'Wash Trading Prevention',
                detail: 'Block trades between related wallets or internal accounts.',
                icon: Eye
              },
              {
                title: 'Drawdown Limits',
                detail: 'Trigger kill-switch when cumulative loss exceeds policy.',
                icon: Power
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <item.icon className="h-6 w-6 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Reporting & exportability</h2>
            <p className="mt-3 text-gray-600">
              Generate regulator-ready reports in one click, or stream audit data directly into
              your compliance systems.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <FileText className="h-6 w-6 text-blue-600" />
                <h3 className="mt-3 text-lg font-semibold text-gray-900">PDF Reports</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Human-readable summaries for regulators, risk committees, and boards.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <Lock className="h-6 w-6 text-blue-600" />
                <h3 className="mt-3 text-lg font-semibold text-gray-900">JSON / API</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Machine-readable exports for SIEM, SOC, and internal monitoring platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Compliance-ready bundle</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {[
                'Policy definitions and approvals',
                'Full audit trail with cryptographic signatures',
                'Violation summaries and remediation actions',
                'Regional compliance mapping'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/ai-governance/documentation"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
            >
              View documentation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Governance insights</h2>
              <p className="mt-2 text-gray-600">
                Research and regulatory guidance that builds institutional trust and topical
                authority.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
            >
              View all insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredInsights.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{article.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{article.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Move from experimentation to governance</h2>
              <p className="mt-3 text-blue-100">
                Deploy autonomous agents with verifiable compliance, auditability, and oversight.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-lg"
              >
                Get started
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                Explore insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
