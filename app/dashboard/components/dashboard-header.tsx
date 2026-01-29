'use client'

import { Activity, Bell, Settings, User } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface DashboardHeaderProps {
  userName: string
  userEmail: string
}

export function DashboardHeader({ userName, userEmail }: DashboardHeaderProps) {
  const currentTime = new Date()

  return (
    <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-black p-6 shadow-2xl">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Risk Intelligence Terminal
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          Welcome back, <span className="font-semibold text-zinc-200">{userName}</span> · Last updated {formatDistanceToNow(currentTime, { addSuffix: true })}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* System Status */}
        <div className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2">
          <Activity className="h-4 w-4 text-zinc-400 animate-pulse" />
          <span className="text-xs font-medium text-zinc-300">
            All Systems Operational
          </span>
        </div>

        {/* Notifications */}
        <button className="relative rounded-lg border border-zinc-800 bg-zinc-900 p-2 hover:bg-zinc-800 transition-colors">
          <Bell className="h-5 w-5 text-zinc-400" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
            3
          </span>
        </button>

        {/* Settings */}
        <button className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 hover:bg-zinc-800 transition-colors">
          <Settings className="h-5 w-5 text-zinc-400" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <User className="h-4 w-4 text-black" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-white">{userName}</p>
            <p className="text-xs text-zinc-500">{userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
