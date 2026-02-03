import { MetadataRoute } from 'next'
import { getAllRegulationSlugs } from '@/data/regulations'
import { getAllInsightSlugs } from '@/data/insights'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kuneo.tech'
  const currentDate = new Date().toISOString()
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/pricing',
    '/how-it-works',
    '/ai-governance',
    '/ai-governance/documentation',
    '/ai-governance/regulations',
    '/ai-governance/rules',
    '/login',
    '/profile',
    '/insights',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === '' || route === '/ai-governance' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : route === '/ai-governance' ? 0.95 : 0.8,
  }))

  // Dynamic regulation routes
  const regulationSlugs = getAllRegulationSlugs()
  const regulationRoutes = regulationSlugs.map((slug) => ({
    url: `${baseUrl}/ai-governance/regulations/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Dynamic insight routes
  const insightSlugs = getAllInsightSlugs()
  const insightRoutes = insightSlugs.map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticRoutes, ...regulationRoutes, ...insightRoutes]
}
