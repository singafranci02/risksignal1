'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, FileText, BookOpen, Scale, Globe } from 'lucide-react'

export default function AIGovernanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const tabs = [
    {
      name: 'Overview',
      href: '/ai-governance',
      icon: Shield,
      description: 'Introduction to AI Agent Governance',
    },
    {
      name: 'Documentation',
      href: '/ai-governance/documentation',
      icon: FileText,
      description: 'Technical specifications and guides',
    },
    {
      name: 'Regulations',
      href: '/ai-governance/regulations',
      icon: Scale,
      description: 'Regulatory frameworks by region',
    },
    {
      name: 'Rule Library',
      href: '/ai-governance/rules',
      icon: BookOpen,
      description: 'Pre-built compliance templates',
    },
  ]

  return (
    <div className="bg-slate-950">
      {/* Page Header */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-slate-300">AI Agent Governance</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-100">
              Governance Infrastructure
            </h1>
            <p className="mt-2 text-lg text-slate-400">
              Comprehensive documentation and regulatory guidance for deploying autonomous financial agents
            </p>
          </div>

          {/* Tab Navigation */}
          <nav className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = pathname === tab.href
              
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`group flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {children}
      </div>
    </div>
  )
}
