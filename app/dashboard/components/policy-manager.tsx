'use client'

import { Shield, MoreVertical, Power, Edit, Trash2 } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface PolicyManagerProps {
  policies: any[]
}

export function PolicyManager({ policies }: PolicyManagerProps) {
  const grouped = policies.reduce((acc: Record<string, any[]>, policy) => {
    const key = (policy.severity || 'INFO').toUpperCase()
    acc[key] = acc[key] || []
    acc[key].push(policy)
    return acc
  }, {})

  const severityOrder = ['CRITICAL', 'WARNING', 'INFO']
  const severityStyles: Record<string, { badge: string; glow: string }> = {
    CRITICAL: {
      badge: 'bg-red-100 text-red-700 border-red-200',
      glow: 'shadow-[0_0_20px_rgba(239,68,68,0.15)]',
    },
    WARNING: {
      badge: 'bg-amber-100 text-amber-700 border-amber-200',
      glow: 'shadow-[0_0_20px_rgba(245,158,11,0.15)]',
    },
    INFO: {
      badge: 'bg-blue-100 text-blue-700 border-blue-200',
      glow: 'shadow-[0_0_20px_rgba(37,99,235,0.15)]',
    },
  }

  return (
    <div className="rounded-2xl border border-slate-800/40 bg-white/70 shadow-xl backdrop-blur-md">
      <div className="border-b border-slate-800/20 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Policy Manager
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {policies.length} active monitoring rule{policies.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button className="rounded-lg border border-slate-800/30 bg-white/80 p-2 transition-colors hover:bg-white">
            <MoreVertical className="h-4 w-4 text-slate-500" />
          </button>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-auto">
        {policies.length === 0 ? (
          <div className="p-8 text-center">
            <Shield className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-sm font-medium text-slate-600">
              No policies configured
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Create your first monitoring rule
            </p>
            <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105">
              Create Policy
            </button>
          </div>
        ) : (
          <div className="space-y-6 p-4">
            {severityOrder.map((severity) => {
              const items = grouped[severity] || []
              if (!items.length) return null
              const style = severityStyles[severity] || severityStyles.INFO
              return (
                <div key={severity}>
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {severity} Policies
                    </p>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase ${style.badge}`}>
                      {items.length} active
                    </span>
                  </div>
                  <div className="divide-y divide-slate-800/10 rounded-lg border border-slate-800/20 bg-white/80 backdrop-blur-md">
                    {items.map((policy) => (
                      <div
                        key={policy.id}
                        className={`group px-4 py-4 transition-colors hover:bg-slate-50 ${style.glow}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="rounded-lg bg-slate-900 p-2 shadow-md">
                            <Shield className="h-4 w-4 text-white" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="text-sm font-semibold text-slate-900 truncate">
                                  {policy.policy_name}
                                </h3>
                                <p className="mt-0.5 text-xs text-slate-500">
                                  {policy.policy_type.replace('_', ' ')}
                                </p>
                              </div>

                              <div className="flex items-center gap-2">
                                {policy.is_active ? (
                                  <span className="relative flex h-2 w-2 rounded-full bg-blue-600">
                                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                  </span>
                                ) : (
                                  <span className="h-2 w-2 rounded-full bg-slate-300"></span>
                                )}
                              </div>
                            </div>

                            <div className="mt-2 flex flex-wrap items-center gap-2">
                              <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold uppercase ${style.badge}`}>
                                {policy.severity || severity}
                              </span>
                              <span className="text-xs text-slate-500">
                                {formatDistanceToNow(new Date(policy.created_at), { addSuffix: true })}
                              </span>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                              <button className="flex items-center gap-1 rounded-md border border-slate-800/30 bg-white/80 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-white">
                                <Edit className="h-3 w-3" />
                                Edit
                              </button>
                              <button className="flex items-center gap-1 rounded-md border border-slate-800/30 bg-white/80 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-white">
                                <Power className="h-3 w-3" />
                                {policy.is_active ? 'Disable' : 'Enable'}
                              </button>
                              <button className="flex items-center gap-1 rounded-md border border-slate-800/30 bg-white/80 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-white">
                                <Trash2 className="h-3 w-3" />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
