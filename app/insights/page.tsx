import Link from 'next/link'
import { Metadata } from 'next'
import { insights } from '@/data/insights'

export const metadata: Metadata = {
  title: 'Trading & Agentic AI News | Kuneo',
  description:
    'News and analysis on trading, agentic AI, and market integrity. Track regulatory signals and real-time risk trends for autonomous finance.',
  openGraph: {
    title: 'Kuneo Trading & Agentic AI News',
    description:
      'News and analysis on agentic trading, compliance, and infrastructure controls.',
    url: 'https://www.getkuneo.com/insights',
    siteName: 'Kuneo',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trading & Agentic AI News | Kuneo',
    description: 'News and analysis on agentic AI for trading and market integrity.'
  }
}

export default function InsightsPage() {
  const newsItems = [
    {
      title: 'Agentic trading volatility rises as regulators tighten kill-switch mandates',
      date: '2026-02-14',
      tag: 'Market Integrity',
      summary:
        'Real-time monitoring requirements are accelerating adoption of deterministic pre-trade controls and hardware attestation.',
    },
    {
      title: 'ASIC RG 265 updates push continuous testing for autonomous trading systems',
      date: '2026-02-10',
      tag: 'Regulation',
      summary:
        'Lifecycle certification and material-change reviews are now baseline expectations for agentic AI in securities markets.',
    },
    {
      title: 'RiskSignal telemetry shows drawdown spikes in retail agent clusters',
      date: '2026-02-06',
      tag: 'Risk Signals',
      summary:
        'Multi-agent coordination without enforced constraints continues to amplify exposure during volatile sessions.',
    },
    {
      title: 'EU AI Act Annex III classification drives demand for verifiable execution',
      date: '2026-02-03',
      tag: 'Compliance',
      summary:
        'Firms are prioritizing Proof of Task Execution (PoTE) to satisfy accountability requirements.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Market Newsroom
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Trading & Agentic AI News
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Breaking signals and deep analysis on autonomous trading, regulatory enforcement,
            and the infrastructure required for verifiable execution.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
            <span className="rounded-full border border-white/20 px-3 py-1">Trading Signals</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Agentic AI</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Regulation</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Market Integrity</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Today’s Trading & AI News</h2>
            <p className="mt-2 text-gray-600">
              Curated updates on agentic trading, market resilience, and regulatory enforcement.
            </p>
          </div>
          <Link
            href="/auditor-portal"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
          >
            Visit the Auditor’s Portal
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {newsItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                  {item.tag}
                </span>
                <span>{item.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Research Briefs</h2>
            <p className="mt-2 text-gray-600">
              Deep-dive analysis on governance, risk controls, and infrastructure resilience.
            </p>
          </div>
          <Link
            href="/ai-governance"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
          >
            Read our AI Governance guide
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {insights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                  {article.category}
                </span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-blue-700">
                {article.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{article.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                <span>Read article</span>
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
