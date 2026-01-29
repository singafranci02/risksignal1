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
    <div className="rounded-xl border border-zinc-800 bg-black shadow-2xl">
      <div className="border-b border-zinc-800 p-6">
        <h2 className="text-lg font-bold text-white">
          Quick Actions
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
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
                className="group flex flex-col items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 p-4 transition-all hover:border-zinc-700 hover:shadow-lg"
              >
                <div className="rounded-lg bg-white p-3 shadow-lg transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5 text-black" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white">
                    {action.label}
                  </p>
                  <p className="text-xs text-zinc-500">
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
