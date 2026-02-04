'use client'

import { AlertTriangle, CheckCircle, Clock, XCircle, ChevronRight } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

interface RiskFeedProps {
  events: any[]
}

export function RiskFeed({ events }: RiskFeedProps) {
  const [filter, setFilter] = useState<'all' | 'open' | 'critical'>('all')

  const filteredEvents = events.filter(event => {
    if (filter === 'open') return event.status === 'OPEN'
    if (filter === 'critical') return event.severity === 'CRITICAL'
    return true
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'OPEN':
        return <AlertTriangle className="h-4 w-4" />
      case 'ACKNOWLEDGED':
        return <Clock className="h-4 w-4" />
      case 'RESOLVED':
        return <CheckCircle className="h-4 w-4" />
      case 'FALSE_POSITIVE':
        return <XCircle className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  return (
    <div className="rounded-2xl border border-slate-800/40 bg-white/70 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="border-b border-slate-800/20 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Risk Event Feed
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Live stream of policy violations and alerts
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'border border-slate-800/30 bg-white/80 text-slate-500 hover:bg-white'
              }`}
            >
              All ({events.length})
            </button>
            <button
              onClick={() => setFilter('open')}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                filter === 'open'
                  ? 'bg-blue-600 text-white'
                  : 'border border-slate-800/30 bg-white/80 text-slate-500 hover:bg-white'
              }`}
            >
              Open ({events.filter(e => e.status === 'OPEN').length})
            </button>
            <button
              onClick={() => setFilter('critical')}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                filter === 'critical'
                  ? 'bg-blue-600 text-white'
                  : 'border border-slate-800/30 bg-white/80 text-slate-500 hover:bg-white'
              }`}
            >
              Critical ({events.filter(e => e.severity === 'CRITICAL').length})
            </button>
          </div>
        </div>
      </div>

      {/* Event List */}
      <div className="max-h-[600px] overflow-y-auto">
        {filteredEvents.length === 0 ? (
          <div className="p-12 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-sm font-medium text-slate-600">
              No risk events detected
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Your wallets are operating within defined parameters
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-800/10">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group cursor-pointer p-6 transition-colors hover:bg-slate-50"
              >
                <div className="flex items-start gap-4">
                  {/* Severity Indicator */}
                  <div className="mt-1 rounded-lg bg-slate-900 p-2 shadow-lg">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-slate-900">
                            {event.policies?.policy_name || 'Unknown Policy'}
                          </h3>
                          <span className="flex items-center gap-1 rounded-full border border-slate-800/20 bg-white/80 px-2 py-0.5 text-xs font-medium text-slate-600">
                            {getStatusIcon(event.status)}
                            <span className="ml-1">{event.status}</span>
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-500">
                          Wallet: <span className="font-mono">{event.wallet_address.slice(0, 10)}...{event.wallet_address.slice(-4)}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="rounded-lg border border-slate-800/20 bg-white/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                          {event.severity}
                        </span>
                        <ChevronRight className="h-5 w-5 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatDistanceToNow(new Date(event.detected_at), { addSuffix: true })}
                      </span>
                      <span>Event Type: {event.event_type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
