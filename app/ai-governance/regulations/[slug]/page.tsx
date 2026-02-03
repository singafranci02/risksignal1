import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getRegulationBySlug, getAllRegulationSlugs } from '@/data/regulations'
import RegulationPageClient from './page-client'

// Force static generation for all regulation pages
export const dynamicParams = false

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static paths for all regulations
export async function generateStaticParams() {
  const slugs = getAllRegulationSlugs()
  console.log('Generating static params for slugs:', slugs)
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const reg = getRegulationBySlug(slug)
  
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
      url: `https://kuneo.tech/ai-governance/regulations/${slug}`,
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

export default async function RegulationPage({ params }: PageProps) {
  const { slug } = await params
  const reg = getRegulationBySlug(slug)
  
  if (!reg) {
    notFound()
  }

  return <RegulationPageClient regulation={reg} />
}
