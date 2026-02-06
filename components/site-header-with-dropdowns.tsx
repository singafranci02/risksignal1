'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Activity,
  Zap,
  ChevronDown,
  Shield,
  Terminal,
  FileCheck,
  BookOpen,
  Cpu,
  Lock,
  Scale,
  Building2,
  Coins,
  Code2,
  Plug,
  FileText,
  Briefcase,
  Newspaper,
  Signal,
  Info,
  Sparkles,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'
import LogoutButton from './logout-button'

type LucideIcon = React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>

interface MegaMenuItem {
  name: string
  href: string
  description: string
  icon: LucideIcon
  badge?: 'New' | 'Beta'
}

interface SiteHeaderProps {
  user: { email?: string; name?: string } | null
}

const platformColumn: MegaMenuItem[] = [
  { name: 'Digital Helmet', href: '/retail-shield', description: 'Hardware-secured execution', icon: Shield },
  { name: 'RiskSignal Engine', href: '/ai-governance', description: 'Real-time policy enforcement', icon: Cpu },
  { name: 'Verifiable Proofs', href: '/ai-governance', description: 'Cryptographic audit trails', icon: Lock },
  { name: 'Agentic Drift', href: '/dashboard', description: 'Behavioral anomaly detection', icon: Activity, badge: 'Beta' },
]

const governanceColumn: MegaMenuItem[] = [
  { name: 'ASIC RG 265', href: '/ai-governance/regulations/australia', description: 'Australian market integrity', icon: Scale },
  { name: 'EU AI Act', href: '/ai-governance/regulations/european-union', description: 'High-risk system compliance', icon: FileCheck },
  { name: 'SEC/CFTC', href: '/ai-governance/regulations/united-states', description: 'US financial standards', icon: Building2 },
  { name: 'MiCA Framework', href: '/ai-governance/regulations', description: 'Crypto-asset regulation', icon: Coins },
]

const developersColumn: MegaMenuItem[] = [
  { name: 'Python SDK', href: '/ai-governance/documentation', description: 'Build compliant agents', icon: Code2 },
  { name: 'MT5 Bridge', href: '/how-it-works', description: 'MetaTrader integration', icon: Plug },
  { name: 'API Reference', href: '/ai-governance/documentation', description: 'Technical documentation', icon: BookOpen },
]

const resourcesColumn: MegaMenuItem[] = [
  { name: 'Whitepapers', href: '/insights', description: 'In-depth risk research', icon: FileText },
  { name: 'Case Studies', href: '/insights', description: 'Institutional deployments', icon: Briefcase },
  { name: 'Blog', href: '/insights', description: 'Latest AI safety news', icon: Newspaper },
  { name: 'Status Page', href: '/status', description: 'System uptime & health', icon: Signal },
  { name: 'About Kuneo', href: '/about', description: 'Our mission & team', icon: Info },
]

export default function SiteHeaderWithDropdowns({ user }: SiteHeaderProps) {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)

  const toggleAccordion = (key: string) => {
    setMobileAccordion((prev) => (prev === key ? null : key))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/98 backdrop-blur-xl shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo: Kuneo lockup */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
              <Image
                src="/images/logos/kuneo-logo.png"
                alt=""
                fill
                className="object-contain object-center transition-transform group-hover:scale-105"
                priority
                sizes="56px"
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

          {/* Desktop: Platform mega menu trigger */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main">
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                aria-expanded={megaOpen}
                aria-haspopup="true"
                aria-controls="mega-menu"
              >
                Platform
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>

              {/* Mega menu panel: glassmorphism, 4 columns + featured */}
              <div
                id="mega-menu"
                role="menu"
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-full min-w-[720px] max-w-6xl transition-all duration-200 ease-out ${
                  megaOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <div className="flex">
                    {/* 4 columns */}
                    <div className="grid grid-cols-4 flex-1 gap-px bg-white/5">
                      {/* Platform */}
                      <div className="bg-slate-900/80 p-4">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Platform
                        </div>
                        <ul className="space-y-0.5">
                          {platformColumn.map((item) => {
                            const Icon = item.icon
                            return (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-white/5 focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                              >
                                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                                <div className="min-w-0">
                                  <span className="flex items-center gap-2 font-semibold text-white">
                                    {item.name}
                                    {item.badge && (
                                      <span className="rounded bg-blue-500/80 px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                        {item.badge}
                                      </span>
                                    )}
                                  </span>
                                  <p className="text-xs text-slate-400">{item.description}</p>
                                </div>
                              </Link>
                            </li>
                          )})}
                        </ul>
                      </div>
                      {/* Governance */}
                      <div className="bg-slate-900/80 p-4">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Governance
                        </div>
                        <ul className="space-y-0.5">
                          {governanceColumn.map((item) => {
                            const Icon = item.icon
                            return (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-white/5 focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                              >
                                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                                <div className="min-w-0">
                                  <span className="font-semibold text-white">{item.name}</span>
                                  <p className="text-xs text-slate-400">{item.description}</p>
                                </div>
                              </Link>
                            </li>
                          )})}
                        </ul>
                      </div>
                      {/* Developers */}
                      <div className="bg-slate-900/80 p-4">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Developers
                        </div>
                        <ul className="space-y-0.5">
                          {developersColumn.map((item) => {
                            const Icon = item.icon
                            return (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-white/5 focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                              >
                                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                                <div className="min-w-0">
                                  <span className="font-semibold text-white">{item.name}</span>
                                  <p className="text-xs text-slate-400">{item.description}</p>
                                </div>
                              </Link>
                            </li>
                          )})}
                        </ul>
                      </div>
                      {/* Resources */}
                      <div className="bg-slate-900/80 p-4">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Resources
                        </div>
                        <ul className="space-y-0.5">
                          {resourcesColumn.map((item) => {
                            const Icon = item.icon
                            return (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-white/5 focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                              >
                                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                                <div className="min-w-0">
                                  <span className="font-semibold text-white">{item.name}</span>
                                  <p className="text-xs text-slate-400">{item.description}</p>
                                </div>
                              </Link>
                            </li>
                          )})}
                        </ul>
                      </div>
                    </div>
                    {/* Featured */}
                    <div className="w-64 shrink-0 border-l border-white/10 bg-gradient-to-b from-blue-900/60 to-slate-900/90 p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-400" aria-hidden />
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Featured</span>
                      </div>
                      <Link
                        href="/ai-governance/regulations/australia"
                        className="block rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      >
                        <span className="mb-1 inline-block rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-400">
                          New
                        </span>
                        <div className="font-semibold text-white">ASIC Compliance Hub</div>
                        <p className="mt-1 text-xs text-slate-400">Australian market integrity & RG 265</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-blue-400">
                          Explore <ChevronRight className="h-3 w-3" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/pricing"
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900"
            >
              <Zap className="h-4 w-4" aria-hidden />
              Pricing
            </Link>
          </nav>

          {/* Right: Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
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
                  <Activity className="h-4 w-4" aria-hidden />
                  Dashboard
                </Link>
                <LogoutButton />
              </>
            )}
          </div>

          {/* Mobile: Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile: Accordion menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-gray-200 bg-gray-50/80 py-4"
          >
            <div className="space-y-1">
              {/* Platform accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleAccordion('platform')}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  aria-expanded={mobileAccordion === 'platform'}
                >
                  Platform
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileAccordion === 'platform' ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === 'platform' && (
                  <div className="space-y-0.5 pl-4 pb-2">
                    {platformColumn.map((item) => {
                      const Icon = item.icon
                      return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="h-4 w-4 text-gray-500" />
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )})}
                  </div>
                )}
              </div>
              {/* Governance */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleAccordion('governance')}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  aria-expanded={mobileAccordion === 'governance'}
                >
                  Governance
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileAccordion === 'governance' ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === 'governance' && (
                  <div className="space-y-0.5 pl-4 pb-2">
                    {governanceColumn.map((item) => {
                      const Icon = item.icon
                      return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="h-4 w-4 text-gray-500" />
                        {item.name}
                      </Link>
                    )})}
                  </div>
                )}
              </div>
              {/* Developers */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleAccordion('developers')}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  aria-expanded={mobileAccordion === 'developers'}
                >
                  Developers
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileAccordion === 'developers' ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === 'developers' && (
                  <div className="space-y-0.5 pl-4 pb-2">
                    {developersColumn.map((item) => {
                      const Icon = item.icon
                      return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="h-4 w-4 text-gray-500" />
                        {item.name}
                      </Link>
                    )})}
                  </div>
                )}
              </div>
              {/* Resources */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleAccordion('resources')}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  aria-expanded={mobileAccordion === 'resources'}
                >
                  Resources
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileAccordion === 'resources' ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === 'resources' && (
                  <div className="space-y-0.5 pl-4 pb-2">
                    {resourcesColumn.map((item) => {
                      const Icon = item.icon
                      return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="h-4 w-4 text-gray-500" />
                        {item.name}
                      </Link>
                    )})}
                  </div>
                )}
              </div>
              {/* Featured + Pricing */}
              <Link
                href="/ai-governance/regulations/australia"
                className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4" />
                New: ASIC Compliance Hub
              </Link>
              <Link
                href="/pricing"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Zap className="h-4 w-4" />
                Pricing
              </Link>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4">
              {!user ? (
                <div className="flex flex-col gap-2 px-4">
                  <Link
                    href="/login"
                    className="rounded-lg border border-gray-300 py-2.5 text-center text-sm font-medium text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/profile"
                    className="rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-2 px-4">
                  <Link
                    href="/dashboard"
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-50 py-2.5 text-sm font-medium text-blue-700"
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
        )}
      </div>
    </header>
  )
}
