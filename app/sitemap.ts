import { MetadataRoute } from 'next'
import { getAllRegulationSlugs } from '@/data/regulations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kuneo.tech'
  
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
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/ai-governance' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : route === '/ai-governance' ? 0.95 : 0.8,
  }))

  // Dynamic regulation routes
  const regulationRoutes = getAllRegulationSlugs().map((slug) => ({
    url: `${baseUrl}/ai-governance/regulations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for regulation pages (topical authority)
  }))

  return [...staticRoutes, ...regulationRoutes]
}
