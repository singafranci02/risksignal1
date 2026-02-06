'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Activity, Zap, ChevronDown, Shield, Terminal, FileCheck, BookOpen, Users, Briefcase, Menu, X } from 'lucide-react'
import LogoutButton from './logout-button'

interface SiteHeaderProps {
  user: any
}

export default function SiteHeaderWithDropdowns({ user }: SiteHeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const productsMenu = [
    { name: 'Agent Dashboard', href: '/dashboard', icon: Activity, description: 'Monitor and control your trading agents' },
    { name: 'Retail Shield', href: '/retail-shield', icon: Shield, description: 'NHI governance for retail traders' },
    { name: 'AI Governance', href: '/ai-governance', icon: FileCheck, description: 'Compliance and policy enforcement' },
    { name: 'MT5 Integration', href: '/dashboard', icon: Terminal, description: 'Connect MetaTrader 5 agents' },
  ]

  const solutionsMenu = [
    { name: 'For Retail Traders', href: '/retail-shield', icon: Users, description: 'Individual algorithmic traders' },
    { name: 'For Prop Firms', href: '/pricing', icon: Briefcase, description: 'Institutional-grade governance' },
    { name: 'For Developers', href: '/ai-governance/documentation', icon: Terminal, description: 'API and integration docs' },
  ]

  const resourcesMenu = [
    { name: 'Insights', href: '/insights', icon: BookOpen, description: 'Latest in AI governance' },
    { name: 'Regulations', href: '/ai-governance/regulations', icon: FileCheck, description: 'Global compliance guides' },
    { name: 'Documentation', href: '/ai-governance/documentation', icon: Terminal, description: 'Technical guides' },
    { name: 'Help Center', href: '/help-center', icon: Users, description: 'Support and FAQs' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-blue-600 opacity-10 blur-md transition-opacity group-hover:opacity-20" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                <Image
                  src="/logo.svg"
                  alt="Kuneo logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Kuneo
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                AI Agent Governance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900">
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 pt-2 w-80">
                  <div className="rounded-xl border border-gray-200 bg-white shadow-2xl p-2">
                    {productsMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                          <item.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
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
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900">
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 pt-2 w-80">
                  <div className="rounded-xl border border-gray-200 bg-white shadow-2xl p-2">
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                          <item.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
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
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900">
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 pt-2 w-80">
                  <div className="rounded-xl border border-gray-200 bg-white shadow-2xl p-2">
                    {resourcesMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                          <item.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
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
