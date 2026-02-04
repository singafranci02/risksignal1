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
    <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Agent Governance Dashboard
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome back, <span className="font-semibold text-gray-900">{userName}</span> · Last updated{' '}
          <span className="font-mono text-gray-700">
            {formatDistanceToNow(currentTime, { addSuffix: true })}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
          <Download className="h-4 w-4" />
          Export Audit
        </button>

        {/* System Status */}
        <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2">
          <Activity className="h-4 w-4 animate-pulse text-green-600" />
          <span className="text-xs font-semibold text-gray-700">
            Operational
          </span>
        </div>

        {/* Notifications */}
        <button className="relative rounded-lg border border-gray-300 bg-white p-2 transition-colors hover:bg-gray-50">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        {/* Settings */}
        <button className="rounded-lg border border-gray-300 bg-white p-2 transition-colors hover:bg-gray-50">
          <Settings className="h-5 w-5 text-gray-500" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
            <User className="h-4 w-4 text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500">{userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
