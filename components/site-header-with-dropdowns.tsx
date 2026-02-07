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
  User,
  Users,
  Info,
  Sparkles,
  Menu,
  X,
  ChevronRight,
  Globe,
} from 'lucide-react'
import { countryRegs } from '@/data/regulations'
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
  { name: 'RiskSignal Dashboard', href: '/risk-signal', description: 'Retail investor risk cockpit', icon: Cpu },
  { name: 'Verifiable Proofs', href: '/auditor-portal', description: 'Conformity evidence & audit trails', icon: Lock },
  { name: 'Agentic Drift', href: '/dashboard', description: 'Behavioral anomaly detection', icon: Activity, badge: 'Beta' },
]

const governanceColumn: MegaMenuItem[] = [
  { name: 'Regulations Overview', href: '/ai-governance/regulations', description: 'All regions & comparison', icon: Globe },
  ...countryRegs.map((r) => ({
    name: r.country,
    href: `/ai-governance/regulations/${r.slug}`,
    description: r.framework,
    icon: Scale,
  })),
]

const developersColumn: MegaMenuItem[] = [
  { name: 'Python SDK', href: '/ai-governance/documentation', description: 'Build compliant agents', icon: Code2 },
  { name: 'MT5 Bridge', href: '/how-it-works', description: 'MetaTrader integration', icon: Plug },
  { name: 'API Reference', href: '/ai-governance/documentation', description: 'Technical documentation', icon: BookOpen },
  { name: 'Community', href: '/community', description: 'Questions, help & discussion', icon: Users },
]

const resourcesColumn: MegaMenuItem[] = [
  { name: 'Whitepapers', href: '/insights', description: 'In-depth risk research', icon: FileText },
  { name: 'Case Studies', href: '/insights', description: 'Institutional deployments', icon: Briefcase },
  { name: 'Status Page', href: '/status', description: 'System uptime & health', icon: Signal },
  { name: 'About Kuneo', href: '/about', description: 'Our mission & team', icon: Info },
]

const toolsColumn: MegaMenuItem[] = [
  { name: 'Dashboard', href: '/dashboard', description: 'Operations and agent control', icon: Activity },
  { name: 'RiskSignal', href: '/risk-signal', description: 'Retail investor risk cockpit', icon: Cpu },
  { name: "Auditor's Portal", href: '/auditor-portal', description: 'Conformity assessment hub', icon: FileCheck },
  { name: 'Profile', href: '/profile', description: 'Account and preferences', icon: User },
]

type DropdownId = 'platform' | 'governance' | 'developers' | 'resources' | 'tools' | null

function DropdownPanel({
  items,
  featured,
}: {
  items: MegaMenuItem[]
  featured?: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden flex">
      <div className="bg-slate-900/80 p-4 min-w-[280px]">
        <ul className="space-y-0.5">
          {items.map((item) => {
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
            )
          })}
        </ul>
      </div>
      {featured}
    </div>
  )
}

const featuredCard = (
  <div className="w-56 shrink-0 border-l border-white/10 bg-gradient-to-b from-blue-900/60 to-slate-900/90 p-4">
    <div className="mb-2 flex items-center gap-2">
      <Sparkles className="h-4 w-4 text-amber-400" aria-hidden />
      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Featured</span>
    </div>
    <Link
      href="/ai-governance/regulations/australia"
      className="block rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
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
)

export default function SiteHeaderWithDropdowns({ user }: SiteHeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<DropdownId>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)

  const toggleAccordion = (key: string) => {
    setMobileAccordion((prev) => (prev === key ? null : key))
  }

  const navItem = (id: DropdownId, label: string, menuId: string) => (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        type="button"
        className="flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
        aria-expanded={activeDropdown === id}
        aria-haspopup="true"
        aria-controls={menuId}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === id ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <div
        id={menuId}
        role="menu"
        className={`absolute top-full left-0 pt-2 transition-all duration-200 ease-out ${
          activeDropdown === id ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {id === 'platform' && (
          <DropdownPanel items={platformColumn} featured={featuredCard} />
        )}
        {id === 'governance' && <DropdownPanel items={governanceColumn} />}
        {id === 'developers' && <DropdownPanel items={developersColumn} />}
        {id === 'resources' && <DropdownPanel items={resourcesColumn} />}
        {id === 'tools' && <DropdownPanel items={toolsColumn} />}
      </div>
    </div>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/98 backdrop-blur-xl shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo = Home (no separate Home button); height matches Kuneo + tagline */}
          <Link href="/" className="group flex items-center gap-2" aria-label="Kuneo – Home">
            <div className="relative h-8 w-8 shrink-0 sm:h-9 sm:w-9">
              <Image
                src="/images/logos/kuneo-logo.png"
                alt=""
                fill
                className="object-contain object-center transition-transform group-hover:scale-105"
                priority
                sizes="36px"
              />
            </div>
            <span className="text-[28px] font-bold tracking-tight text-[#0b1f3a]">
              Kuneo
            </span>
          </Link>

          {/* Desktop: Products/Tools, Governance, Developers, Resources (each with dropdown) + Pricing */}
          <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main">
            {!user ? navItem('platform', 'Products', 'platform-menu') : navItem('tools', 'Tools', 'tools-menu')}
            {navItem('governance', 'Governance', 'governance-menu')}
            {navItem('developers', 'Developers', 'developers-menu')}
            {navItem('resources', 'Resources', 'resources-menu')}
            <Link
              href="/pricing"
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900"
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
              {/* Products / Tools accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleAccordion(user ? 'tools' : 'platform')}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  aria-expanded={mobileAccordion === (user ? 'tools' : 'platform')}
                >
                  {user ? 'Tools' : 'Products'}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileAccordion === (user ? 'tools' : 'platform') ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === (user ? 'tools' : 'platform') && (
                  <div className="space-y-0.5 pl-4 pb-2">
                    {(user ? toolsColumn : platformColumn).map((item) => {
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
              {/* Resources / Tools */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleAccordion(user ? 'tools' : 'resources')}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  aria-expanded={mobileAccordion === (user ? 'tools' : 'resources')}
                >
                  {user ? 'Tools' : 'Resources'}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileAccordion === (user ? 'tools' : 'resources') ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAccordion === (user ? 'tools' : 'resources') && (
                  <div className="space-y-0.5 pl-4 pb-2">
                    {(user ? toolsColumn : resourcesColumn).map((item) => {
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
