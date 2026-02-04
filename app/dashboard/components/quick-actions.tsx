'use client'

import { Plus, Download, Upload, Zap } from 'lucide-react'
import Link from 'next/link'

export function QuickActions() {
  const actions = [
    {
      label: 'Add Wallet',
      description: 'Monitor new address',
      icon: Plus,
      href: '#add-wallet',
    },
    {
      label: 'Create Policy',
      description: 'Define new rule',
      icon: Zap,
      href: '#create-policy',
    },
    {
      label: 'Export Data',
      description: 'Download reports',
      icon: Download,
      href: '#export',
    },
    {
      label: 'Import Config',
      description: 'Bulk upload',
      icon: Upload,
      href: '#import',
    },
  ]

  return (
    <div className="rounded-2xl border border-slate-800/40 bg-white/70 shadow-xl backdrop-blur-md">
      <div className="border-b border-slate-800/20 p-6">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Quick Actions
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Common tasks and operations
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.label}
                href={action.href}
                className="group flex flex-col items-center gap-3 rounded-lg border border-slate-800/20 bg-white/80 p-4 transition-all hover:border-slate-800/40 hover:shadow-lg"
              >
                <div className="rounded-lg bg-slate-900 p-3 shadow-lg transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-900">
                    {action.label}
                  </p>
                  <p className="text-xs text-slate-500">
                    {action.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
