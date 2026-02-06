'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Activity, Zap, ChevronDown, Shield, Terminal, FileCheck, BookOpen, Users, Briefcase, Menu, X, HelpCircle, Info, Mail } from 'lucide-react'
import LogoutButton from './logout-button'

interface SiteHeaderProps {
  user: { email?: string; name?: string } | null
}

export default function SiteHeaderWithDropdowns({ user }: SiteHeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const productsMenu = [
    { name: 'Agent Dashboard', href: '/dashboard', icon: Activity, description: 'Monitor and control your trading agents' },
    { name: 'Retail Shield', href: '/retail-shield', icon: Shield, description: 'NHI governance for retail traders' },
    { name: 'AI Governance', href: '/ai-governance', icon: FileCheck, description: 'Compliance and policy enforcement' },
    { name: 'How It Works', href: '/how-it-works', icon: Terminal, description: 'Integrations and setup guides' },
  ]

  const solutionsMenu = [
    { name: 'For Retail Traders', href: '/retail-shield', icon: Users, description: 'Individual algorithmic traders' },
    { name: 'For Prop Firms', href: '/pricing', icon: Briefcase, description: 'Institutional-grade governance' },
    { name: 'For Developers', href: '/ai-governance/documentation', icon: Terminal, description: 'API and integration docs' },
  ]

  const resourcesMenu = [
    { name: 'Insights', href: '/insights', icon: BookOpen, description: 'Latest in AI governance' },
    { name: 'Regulations', href: '/ai-governance/regulations', icon: FileCheck, description: 'Global compliance guides' },
    { name: 'Rule Library', href: '/ai-governance/rules', icon: BookOpen, description: 'Pre-built compliance templates' },
    { name: 'Documentation', href: '/ai-governance/documentation', icon: Terminal, description: 'Technical guides' },
    { name: 'Help Center', href: '/help-center', icon: HelpCircle, description: 'Support and FAQs' },
    { name: 'About', href: '/about', icon: Info, description: 'Our mission and team' },
    { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/98 backdrop-blur-xl shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo: high-quality lockup with Kuneo wordmark */}
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
              <Image
                src="/logo.svg"
                alt=""
                fill
                className="object-contain object-center transition-transform group-hover:scale-105"
                priority
                sizes="64px"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-bold tracking-tight text-[#1e3a5f] sm:text-[1.75rem]">
                Kuneo
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                AI Agent Governance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                aria-expanded={activeDropdown === 'products'}
                aria-haspopup="true"
                aria-controls="products-menu"
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} aria-hidden />
              </button>
              
              {activeDropdown === 'products' && (
                <div id="products-menu" className="absolute top-full left-0 pt-2 w-[320px] transition-all duration-200" role="menu">
                  <div className="rounded-xl border border-gray-200/90 bg-white p-1.5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.04)]">
                    {productsMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-blue-50/80 focus:bg-blue-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                          <item.icon className="h-5 w-5 text-blue-600" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-xs text-gray-600">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                aria-expanded={activeDropdown === 'solutions'}
                aria-haspopup="true"
                aria-controls="solutions-menu"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} aria-hidden />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div id="solutions-menu" className="absolute top-full left-0 pt-2 w-[320px] transition-all duration-200" role="menu">
                  <div className="rounded-xl border border-gray-200/90 bg-white p-1.5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.04)]">
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-blue-50/80 focus:bg-blue-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                          <item.icon className="h-5 w-5 text-blue-600" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-xs text-gray-600">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true"
                aria-controls="resources-menu"
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} aria-hidden />
              </button>
              
              {activeDropdown === 'resources' && (
                <div id="resources-menu" className="absolute top-full left-0 pt-2 w-[320px] transition-all duration-200" role="menu">
                  <div className="rounded-xl border border-gray-200/90 bg-white p-1.5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.04)] max-h-[min(80vh,420px)] overflow-y-auto">
                    {resourcesMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-blue-50/80 focus:bg-blue-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                          <item.icon className="h-5 w-5 text-blue-600" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-xs text-gray-600">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link 
              href="/pricing" 
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
            >
              <Zap className="h-4 w-4" />
              Pricing
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Sign In
                </Link>
                <Link
                  href="/profile"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-all hover:bg-blue-100"
                >
                  <Activity className="h-4 w-4" />
                  Dashboard
                </Link>
                <LogoutButton />
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-50"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {/* Products */}
              <div>
                <div className="font-semibold text-gray-900 mb-2">Products</div>
                <div className="space-y-2">
                  {productsMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg p-3 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <div className="font-semibold text-gray-900 mb-2">Solutions</div>
                <div className="space-y-2">
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg p-3 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <div className="font-semibold text-gray-900 mb-2">Resources</div>
                <div className="space-y-2">
                  {resourcesMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg p-3 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <Link
                href="/pricing"
                className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Zap className="h-4 w-4" />
                Pricing
              </Link>

              {/* Auth Buttons */}
              <div className="pt-4 border-t border-gray-200">
                {!user ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/login"
                      className="rounded-lg border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/profile"
                      className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/dashboard"
                      className="flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Activity className="h-4 w-4" />
                      Dashboard
                    </Link>
                    <LogoutButton />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
