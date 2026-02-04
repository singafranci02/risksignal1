import Link from 'next/link'
import { Metadata } from 'next'
import { insights } from '@/data/insights'

export const metadata: Metadata = {
  title: 'AI Governance Insights | Kuneo',
  description:
    'Deep-dive research on AI agent governance, regulatory compliance, audit trails, and infrastructure controls for autonomous finance.',
  openGraph: {
    title: 'Kuneo AI Governance Insights',
    description:
      'Research-backed articles on AI agent governance, compliance, and institutional-grade controls.',
    url: 'https://kuneo.tech/insights',
    siteName: 'Kuneo',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance Insights | Kuneo',
    description: 'Deep-dive research on AI governance for finance.'
  }
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Knowledge Hub
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            AI Governance Insights
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Research-backed articles on policy enforcement, auditability, and regulatory
            compliance for autonomous financial agents.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
            <span className="rounded-full border border-white/20 px-3 py-1">Infrastructure</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Regulation</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Risk Controls</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Audit</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Spokes</h2>
            <p className="mt-2 text-gray-600">
              Each article links back to our governance pillar so Google can understand
              topical authority and human expertise.
            </p>
          </div>
          <Link
            href="/ai-governance"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
          >
            Read our full guide on AI Governance
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
