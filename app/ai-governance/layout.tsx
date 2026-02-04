'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, FileText, BookOpen, Scale } from 'lucide-react'

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
    <div className="bg-white">
      {/* Page Header */}
      <div className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100/80">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm shadow-sm">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-gray-900">AI Agent Governance</span>
            </div>
            <h1 className="mb-3 text-4xl font-bold text-gray-900 sm:text-5xl">
              Governance Infrastructure
            </h1>
            <p className="max-w-3xl text-lg text-gray-600">
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
                  className={`group flex items-center gap-2 whitespace-nowrap rounded-lg px-5 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white text-blue-600 border-2 border-blue-600 shadow-lg'
                      : 'bg-white/50 text-gray-700 border border-gray-200 hover:bg-white hover:border-blue-300 hover:text-blue-600 hover:shadow-md'
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
