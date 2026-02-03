import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kuneo.tech'
  
  const routes = [
    '',
    '/about',
    '/pricing',
    '/how-it-works',
    '/ai-governance',
    '/ai-governance/documentation',
    '/ai-governance/regulations',
    '/ai-governance/regulations/australia',
    '/ai-governance/regulations/european-union',
    '/ai-governance/regulations/united-states',
    '/ai-governance/rules',
    '/login',
    '/profile',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/ai-governance' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : route.includes('regulations') ? 0.9 : 0.8,
  }))

  return routes
}
