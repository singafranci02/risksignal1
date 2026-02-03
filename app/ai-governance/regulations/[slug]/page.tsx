import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { Shield, CheckCircle2, ArrowRight, BookOpen, ExternalLink, Lightbulb } from 'lucide-react'
import { getRegulationBySlug, getAllRegulationSlugs, countryRegs } from '@/data/regulations'

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static paths for all regulations
export async function generateStaticParams() {
  return getAllRegulationSlugs().map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const reg = getRegulationBySlug(params.slug)
  
  if (!reg) {
    return {
      title: 'Regulation Not Found | Kuneo',
    }
  }

  return {
    title: `${reg.country} AI Agent Compliance (${reg.framework}) | Kuneo`,
    description: `Deploy compliant autonomous agents in ${reg.country}. Full ${reg.body} compliance framework for ${reg.framework}. Hardware-secured governance and immutable audit trails.`,
    keywords: [
      `${reg.country} AI regulation`,
      reg.framework,
      reg.body,
      'AI compliance',
      'algorithmic trading',
      'financial AI governance',
      `${reg.country} fintech compliance`
    ],
    openGraph: {
      title: `${reg.country} AI Agent Compliance | Kuneo`,
      description: `Deploy compliant AI agents in ${reg.country}. Full ${reg.body} and ${reg.framework} compliance framework.`,
      url: `https://kuneo.tech/ai-governance/regulations/${params.slug}`,
      siteName: 'Kuneo',
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${reg.country} AI Compliance | Kuneo`,
      description: `${reg.framework} compliance for autonomous financial agents`,
    },
  }
}

export default function RegulationPage({ params }: PageProps) {
  const reg = getRegulationBySlug(params.slug)
  
  if (!reg) {
    notFound()
  }

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${reg.country} AI Governance Compliance: ${reg.framework}`,
    "description": reg.summary,
    "author": {
      "@type": "Organization",
      "name": "Kuneo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kuneo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kuneo.tech/logo.png"
      }
    },
    "datePublished": "2026-01-28",
    "dateModified": "2026-01-28"
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link href="/ai-governance" className="hover:text-blue-600">AI Governance</Link>
              <span>/</span>
              <Link href="/ai-governance/regulations" className="hover:text-blue-600">Regulations</Link>
              <span>/</span>
              <span className="font-semibold text-gray-900">{reg.country}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-8 flex items-center gap-6">
              <span className="text-8xl">{reg.flag}</span>
              <div>
                <h1 className="mb-2 text-5xl font-bold text-white">
                  {reg.country} Regulatory Framework
                </h1>
                <p className="text-xl text-blue-100">{reg.framework}</p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-white">
                <Shield className="h-6 w-6 text-blue-300" />
                {reg.body}
              </h2>
              <p className="text-lg leading-relaxed text-blue-100">
                {reg.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Key Points Section */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Key Compliance Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Critical regulatory obligations for autonomous agents in {reg.country}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reg.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-blue-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                <p className="text-sm font-medium text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Requirements */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Detailed Requirements
              </h2>
              <p className="text-lg text-gray-600">
                What {reg.body} expects from financial AI systems
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {reg.requirements.map((req, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg transition-all hover:shadow-xl"
                >
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {req.title}
                  </h3>
                  <p className="text-gray-600">{req.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kuneo Solutions */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                <Lightbulb className="h-4 w-4" />
                Kuneo Solutions
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                How Kuneo Ensures Compliance
              </h2>
              <p className="text-lg text-gray-600">
                Hardware-secured infrastructure that makes {reg.framework} compliance automatic
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {reg.kuneoSolutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-blue-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center justify-center rounded-xl bg-blue-100 p-3">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Steps */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Implementation Roadmap
              </h2>
              <p className="text-lg text-gray-600">
                5-step process to achieve {reg.framework} compliance
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 md:left-1/2" />

              <div className="space-y-8">
                {reg.implementationSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-start gap-6 ${
                      idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-2xl font-bold text-white shadow-xl md:absolute md:left-1/2 md:-translate-x-1/2">
                      {step.step}
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 rounded-xl border border-gray-200 bg-white p-6 shadow-lg md:w-[calc(50%-3rem)] ${
                      idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                    }`}>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Official Resources */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Official Resources
              </h2>
              <p className="text-lg text-blue-100">
                Direct links to {reg.body} guidance and documentation
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {reg.officialResources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-1 h-5 w-5 flex-shrink-0 text-blue-300" />
                    <span className="font-semibold text-white">{resource.title}</span>
                  </div>
                  <ExternalLink className="h-5 w-5 text-blue-300 transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Other Countries Navigation */}
        <section className="border-t border-gray-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              Explore Other Regions
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {countryRegs
                .filter(r => r.slug !== reg.slug)
                .map((otherReg) => (
                  <Link
                    key={otherReg.slug}
                    href={`/ai-governance/regulations/${otherReg.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <span className="text-4xl">{otherReg.flag}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {otherReg.country}
                      </h4>
                      <p className="text-sm text-gray-500">{otherReg.framework}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Deploy Compliant AI Agents in {reg.country}?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Get started with Kuneo's {reg.framework}-compliant governance infrastructure
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
      </div>
    </>
  )
}
