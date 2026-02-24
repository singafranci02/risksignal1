'use client'

import { Activity, Ban, CheckCircle2, Timer } from 'lucide-react'

interface StatCard {
  label: string
  value: string | number
  sub: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
  valuColor: string
}

const STATS: StatCard[] = [
  {
    label: 'Tokens Scanned',
    value: '—',
    sub: 'This session',
    icon: Activity,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    valuColor: 'text-gray-900',
  },
  {
    label: 'Blocked Today',
    value: 12,
    sub: 'FATAL ERROR results',
    icon: Ban,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    valuColor: 'text-red-600',
  },
  {
    label: 'Approved Today',
    value: 4,
    sub: 'Token Organic results',
    icon: CheckCircle2,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    valuColor: 'text-emerald-600',
  },
  {
    label: 'Avg Scan Time',
    value: '142ms',
    sub: 'All three checks',
    icon: Timer,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    valuColor: 'text-gray-900',
  },
]

export function CircuitBreakerStats() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {STATS.map((stat) => {
        const Icon = stat.icon
        return (
          <div
            key={stat.label}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.iconBg}`}>
              <Icon className={`h-5 w-5 ${stat.iconColor}`} />
            </div>
            <div>
              <p className={`text-2xl font-bold ${stat.valuColor}`}>{stat.value}</p>
              <p className="mt-0.5 text-sm font-medium text-gray-700">{stat.label}</p>
              <p className="text-xs text-gray-400">{stat.sub}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
