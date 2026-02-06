import { createClient } from '@/utils/supabase/server'
import SiteHeaderWithDropdowns from './site-header-with-dropdowns'

export default async function SiteHeader() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <SiteHeaderWithDropdowns user={user} />
}

/* Old header code - keeping as backup
export default async function SiteHeaderOld() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-blue-600 opacity-10 blur-md transition-opacity group-hover:opacity-20" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
              <Image
                src="/logo.svg"
                alt="Kuneo logo"
                width={24}
                height={24}
                className="h-6 w-6"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Kuneo
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
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
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
              >
                <Activity className="h-4 w-4" />
                Platform
              </Link>
              <Link 
                href="/ai-governance" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
              >
                <Image
                  src="/logo.svg"
                  alt="Kuneo"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                AI Governance
              </Link>
              <Link 
                href="/insights" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
              >
                <BookOpen className="h-4 w-4" />
                Insights
              </Link>
              <Link 
                href="/pricing" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
              >
                <Zap className="h-4 w-4" />
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
              >
                About
              </Link>
            </>
          ) : (
            <>
              <Link 
                href="/dashboard" 
                className="group flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-all hover:bg-blue-100"
              >
                <Activity className="h-4 w-4" />
                Dashboard
              </Link>
              <Link 
                href="/ai-governance" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
              >
                <Image
                  src="/logo.svg"
                  alt="Kuneo"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                AI Governance
              </Link>
              <Link 
                href="/insights" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
              >
                <BookOpen className="h-4 w-4" />
                Insights
              </Link>
              <Link 
                href="/about" 
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
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
                className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 sm:flex"
              >
                {user.user_metadata?.first_name || user.email?.split('@')[0] || 'Profile'}
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 sm:flex"
              >
                Log in
              </Link>
              <Link
                href="/profile"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
              >
                Get Started
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </>
          )}
          
          {/* Mobile Menu Button */}
          <button className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-700 transition-colors hover:bg-gray-50 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-gray-100 bg-gradient-to-r from-blue-50/50 to-blue-100/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-xs">
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="font-medium">All Systems Operational</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="hidden sm:inline font-medium">🔒 Enterprise-Grade Security</span>
          </div>
        </div>
      </div>
    </header>
  )
}
*/
