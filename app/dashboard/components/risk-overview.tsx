'use client'

import { TrendingUp, TrendingDown, AlertTriangle, Shield, Activity, Zap } from 'lucide-react'

interface RiskOverviewProps {
  totalPolicies: number
  activePolicies: number
  openEvents: number
  criticalEvents: number
  alertStats: any[]
}

export function RiskOverview({ 
  totalPolicies, 
  activePolicies, 
  openEvents, 
  criticalEvents,
  alertStats 
}: RiskOverviewProps) {
  const alertDeliveryRate = alertStats.length > 0 
    ? (alertStats.filter(a => a.status === 'DELIVERED').length / alertStats.length) * 100 
    : 100

  const metrics = [
    {
      label: 'Active Policies',
      value: activePolicies,
      total: totalPolicies,
      icon: Shield,
      trend: '+12%',
      trendUp: true,
      description: 'Monitoring rules'
    },
    {
      label: 'Open Alerts',
      value: openEvents,
      total: null,
      icon: AlertTriangle,
      trend: '-8%',
      trendUp: false,
      description: 'Requires attention'
    },
    {
      label: 'Critical Events',
      value: criticalEvents,
      total: null,
      icon: Zap,
      trend: '0%',
      trendUp: null,
      description: 'High severity'
    },
    {
      label: 'Alert Delivery',
      value: Math.round(alertDeliveryRate),
      total: null,
      icon: Activity,
      trend: '+2%',
      trendUp: true,
      description: 'Success rate',
      suffix: '%'
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-black p-6 shadow-2xl transition-all hover:border-zinc-700"
          >
            {/* Content */}
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-white p-3 shadow-lg">
                  <Icon className="h-6 w-6 text-black" />
                </div>
                {metric.trend && (
                  <div className={`flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium ${
                    metric.trendUp === true
                      ? 'border-zinc-700 bg-zinc-900 text-zinc-300'
                      : metric.trendUp === false
                      ? 'border-zinc-700 bg-zinc-900 text-zinc-300'
                      : 'border-zinc-700 bg-zinc-900 text-zinc-400'
                  }`}>
                    {metric.trendUp === true && <TrendingUp className="h-3 w-3" />}
                    {metric.trendUp === false && <TrendingDown className="h-3 w-3" />}
                    {metric.trend}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium text-zinc-400">
                  {metric.label}
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-white">
                    {metric.value.toLocaleString()}{metric.suffix || ''}
                  </p>
                  {metric.total !== null && (
                    <p className="text-sm text-zinc-500">
                      / {metric.total}
                    </p>
                  )}
                </div>
                <p className="mt-1 text-xs text-zinc-500">
                  {metric.description}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
