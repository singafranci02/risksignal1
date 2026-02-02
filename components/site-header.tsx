import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import LogoutButton from './logout-button'
import { Shield, Activity, Zap, ChevronRight } from 'lucide-react'

export default async function SiteHeader() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-white opacity-20 blur-md transition-opacity group-hover:opacity-30" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white">
              <Shield className="h-5 w-5 text-black" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white">
              Kuneo
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
              AI Agent Governance
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {!user ? (
            <>
              <Link 
                href="/" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <Activity className="h-4 w-4" />
                Platform
              </Link>
              <Link 
                href="/ai-governance" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <Shield className="h-4 w-4" />
                AI Governance
              </Link>
              <Link 
                href="/pricing" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <Zap className="h-4 w-4" />
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                About
              </Link>
            </>
          ) : (
            <>
              <Link 
                href="/dashboard" 
                className="group flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                <Activity className="h-4 w-4" />
                Dashboard
              </Link>
              <Link 
                href="/ai-governance" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <Shield className="h-4 w-4" />
                AI Governance
              </Link>
              <Link 
                href="/about" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                About
              </Link>
            </>
          )}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/profile"
                className="hidden items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-zinc-700 hover:bg-zinc-800 sm:flex"
              >
                {user.user_metadata?.first_name || user.email?.split('@')[0] || 'Profile'}
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white sm:flex"
              >
                Log in
              </Link>
              <Link
                href="/profile"
                className="group flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Get Started
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="border-t border-zinc-900 bg-zinc-950/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-4 text-zinc-500">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span>All Systems Operational</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <span className="hidden sm:inline">Enterprise-Grade Security</span>
          </div>
        </div>
      </div>
    </header>
  )
}
