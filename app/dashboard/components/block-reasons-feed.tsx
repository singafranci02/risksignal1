'use client'

import { AlertTriangle, Layers, Users, Flame } from 'lucide-react'

interface BlockEvent {
  icon: React.ElementType
  iconBg: string
  iconColor: string
  label: string
  detail: string
  badge: string
  badgeBg: string
  badgeText: string
  time: string
}

const BLOCK_EVENTS: BlockEvent[] = [
  {
    icon: Layers,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    label: 'Jito Bundle',
    detail: '9 wallets sniped in creation slot',
    badge: 'BUNDLE',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-700',
    time: '2m ago',
  },
  {
    icon: Users,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    label: 'Sybil Cabal',
    detail: 'Top holder: 73% of visible supply',
    badge: 'SYBIL',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    time: '12m ago',
  },
  {
    icon: Flame,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    label: 'Mint Authority Live',
    detail: 'Creator can mint unlimited supply',
    badge: 'RUG',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-700',
    time: '28m ago',
  },
  {
    icon: AlertTriangle,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    label: 'Freeze Authority Live',
    detail: 'Honeypot — wallet can be frozen',
    badge: 'HONEY',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-700',
    time: '41m ago',
  },
  {
    icon: Layers,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    label: 'Jito Bundle',
    detail: '5 wallets sniped in creation slot',
    badge: 'BUNDLE',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-700',
    time: '1h ago',
  },
  {
    icon: Flame,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    label: 'Freeze Authority Live',
    detail: 'Creator retains freeze control',
    badge: 'RUG',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-700',
    time: '3h ago',
  },
]

export function BlockReasonsFeed() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-100 px-6 py-5">
        <h2 className="text-lg font-semibold text-gray-900">Block Reasons</h2>
        <p className="mt-0.5 text-sm text-gray-500">Why KuneoClaw said 🔴</p>
      </div>

      <div className="divide-y divide-gray-50">
        {BLOCK_EVENTS.map((event, i) => {
          const Icon = event.icon
          return (
            <div key={i} className="flex items-center gap-3 px-6 py-3.5">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${event.iconBg}`}
              >
                <Icon className={`h-4 w-4 ${event.iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-gray-900">{event.label}</p>
                <p className="truncate text-xs text-gray-500">{event.detail}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${event.badgeBg} ${event.badgeText}`}
                >
                  {event.badge}
                </span>
                <span className="text-[10px] text-gray-400">{event.time}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
