import { MetadataRoute } from 'next'
import { getAllRegulationSlugs } from '@/data/regulations'

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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === '' || route === '/ai-governance' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : route === '/ai-governance' ? 0.95 : 0.8,
  }))

  // Dynamic regulation routes
  const regulationSlugs = getAllRegulationSlugs()
  console.log('[Sitemap] Generating sitemap with regulation slugs:', regulationSlugs)
  
  const regulationRoutes = regulationSlugs.map((slug) => ({
    url: `${baseUrl}/ai-governance/regulations/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const allRoutes = [...staticRoutes, ...regulationRoutes]
  console.log('[Sitemap] Total routes:', allRoutes.length)

  return allRoutes
}
