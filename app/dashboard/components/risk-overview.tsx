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
      delta: '+4 vs 24h',
      trendUp: true,
      description: 'Monitoring rules'
    },
    {
      label: 'Open Alerts',
      value: openEvents,
      total: null,
      icon: AlertTriangle,
      trend: '-8%',
      delta: '-3 vs 24h',
      trendUp: false,
      description: 'Requires attention'
    },
    {
      label: 'Critical Events',
      value: criticalEvents,
      total: null,
      icon: Zap,
      trend: '0%',
      delta: 'No change',
      trendUp: null,
      description: 'High severity'
    },
    {
      label: 'Alert Delivery',
      value: Math.round(alertDeliveryRate),
      total: null,
      icon: Activity,
      trend: '+2%',
      delta: '+0.6% vs 24h',
      trendUp: true,
      description: 'Success rate',
      suffix: '%'
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all hover:shadow-xl"
          >
            {/* Content */}
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-slate-900 p-3 shadow-lg">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                {metric.trend && (
                  <div className={`flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-semibold ${
                    metric.trendUp === true
                      ? 'border-blue-200 bg-blue-50 text-blue-700'
                      : metric.trendUp === false
                      ? 'border-amber-200 bg-amber-50 text-amber-700'
                      : 'border-slate-200 bg-slate-50 text-slate-600'
                  }`}>
                    {metric.trendUp === true && <TrendingUp className="h-3 w-3" />}
                    {metric.trendUp === false && <TrendingDown className="h-3 w-3" />}
                    {metric.trend}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium text-slate-500">
                  {metric.label}
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-3xl font-semibold tracking-tight text-slate-900 font-mono">
                    {metric.value.toLocaleString()}{metric.suffix || ''}
                  </p>
                  {metric.total !== null && (
                    <p className="text-sm text-slate-500 font-mono">
                      / {metric.total}
                    </p>
                  )}
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  {metric.description}
                  <span className="font-mono">{metric.delta}</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
