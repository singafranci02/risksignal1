import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllInsightSlugs, getInsightBySlug } from '@/data/insights'

export const dynamicParams = false

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getInsightBySlug(slug)

  if (!article) {
    return { title: 'Insight Not Found | Kuneo' }
  }

  return {
    title: `${article.title} | Kuneo`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://kuneo.tech/insights/${article.slug}`,
      siteName: 'Kuneo',
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description
    }
  }
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params
  const article = getInsightBySlug(slug)

  if (!article) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    author: {
      '@type': 'Person',
      name: 'Francesco Tomatis',
      jobTitle: 'CEO & Founder'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kuneo',
      url: 'https://kuneo.tech'
    },
    mainEntityOfPage: `https://kuneo.tech/insights/${article.slug}`
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/insights" className="hover:text-blue-600">Insights</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-gray-900">{article.title}</span>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
          <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
            {article.category}
          </span>
          <span>{article.readTime}</span>
          <span>Published {article.published}</span>
          <span>Updated {article.updated}</span>
        </div>
        <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{article.summary}</p>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Key Takeaways</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {article.keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="space-y-10">
          {article.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-gray-700">
                {section.body.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">References</h3>
          <ul className="mt-4 space-y-2 text-sm text-blue-700">
            {article.references.map((reference, index) => (
              <li key={index}>
                <a href={reference.url} target="_blank" rel="noreferrer" className="hover:underline">
                  {reference.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">Francesco Tomatis</p>
              <p className="text-sm text-gray-600">CEO & Founder, Kuneo</p>
            </div>
            <Link
              href="/ai-governance"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Read our full guide on AI Governance
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            This article is for informational purposes only and does not constitute legal or financial advice.
          </p>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <Link href="/insights" className="font-semibold text-blue-600 hover:underline">
            Back to all insights
          </Link>
        </div>
      </section>
    </div>
  )
}
