'use client'

import { Activity, Bell, Settings, User, Download } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface DashboardHeaderProps {
  userName: string
  userEmail: string
}

export function DashboardHeader({ userName, userEmail }: DashboardHeaderProps) {
  const currentTime = new Date()

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Governance Operations Console
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Welcome back, <span className="font-semibold text-slate-900">{userName}</span> · Last updated{' '}
          <span className="font-mono text-slate-700">
            {formatDistanceToNow(currentTime, { addSuffix: true })}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-lg border border-slate-800/40 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-sm backdrop-blur-md transition-colors hover:bg-white">
          <Download className="h-4 w-4" />
          Export Regulatory Audit (PDF/JSON)
        </button>

        {/* System Status */}
        <div className="flex items-center gap-2 rounded-lg border border-slate-800/40 bg-white/80 px-3 py-2 backdrop-blur-md">
          <Activity className="h-4 w-4 animate-pulse text-blue-600" />
          <span className="text-xs font-semibold text-slate-700">
            All Systems Operational
          </span>
        </div>

        {/* Notifications */}
        <button className="relative rounded-lg border border-slate-800/40 bg-white/80 p-2 transition-colors hover:bg-white">
          <Bell className="h-5 w-5 text-slate-500" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        {/* Settings */}
        <button className="rounded-lg border border-slate-800/40 bg-white/80 p-2 transition-colors hover:bg-white">
          <Settings className="h-5 w-5 text-slate-500" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 rounded-lg border border-slate-800/40 bg-white/80 px-3 py-2 backdrop-blur-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900">
            <User className="h-4 w-4 text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900">{userName}</p>
            <p className="text-xs text-slate-500">{userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
