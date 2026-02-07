import { MetadataRoute } from 'next'
import { getAllRegulationSlugs } from '@/data/regulations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getkuneo.com'
  
  // Core pages (highest priority)
  const corePages = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/ai-governance', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/login', priority: 0.85, changeFrequency: 'monthly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  // AI Governance section
  const governancePages = [
    { route: '/ai-governance/documentation', priority: 0.9 },
    { route: '/ai-governance/regulations', priority: 0.9 },
    { route: '/ai-governance/rules', priority: 0.85 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  // Dynamic regulation routes (high SEO value)
  const regulationRoutes = getAllRegulationSlugs().map((slug) => ({
    url: `${baseUrl}/ai-governance/regulations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for regulation pages (topical authority)
  }))

  // Solutions pages
  const solutionsPages = [
    { route: '/retail-shield', priority: 0.95 }, // High priority - new flagship page
    { route: '/risk-signal', priority: 0.9 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority,
  }))

  // Company & Info pages
  const infoPages = [
    { route: '/about', priority: 0.8 },
    { route: '/how-it-works', priority: 0.8 },
    { route: '/insights', priority: 0.75 },
    { route: '/contact', priority: 0.7 },
    { route: '/careers', priority: 0.7 },
    { route: '/careers/remote-part-time', priority: 0.65 },
    { route: '/help-center', priority: 0.7 },
    { route: '/press-kit', priority: 0.6 },
    { route: '/status', priority: 0.6 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  // Legal pages
  const legalPages = [
    { route: '/terms', priority: 0.5 },
    { route: '/privacy', priority: 0.5 },
    { route: '/cookie-policy', priority: 0.4 },
    { route: '/compliance', priority: 0.6 },
    { route: '/security', priority: 0.6 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority,
  }))

  // User pages (lower priority, private)
  const userPages = [
    { route: '/profile', priority: 0.3 },
    { route: '/dashboard', priority: 0.3 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'always' as const,
    priority,
  }))

  return [
    ...corePages,
    ...solutionsPages,
    ...governancePages,
    ...regulationRoutes,
    ...infoPages,
    ...legalPages,
    ...userPages,
  ]
}
