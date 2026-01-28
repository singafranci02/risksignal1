import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import LogoutButton from './logout-button'

export default async function SiteHeader() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            RS
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            RiskSignal
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {!user ? (
            <>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <Link href="/pricing" className="hover:text-foreground">
                Pricing
              </Link>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link href="/how-it-works" className="hover:text-foreground">
                How it works
              </Link>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
            </>
          )}
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/profile"
                className="hidden rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted sm:inline-flex"
              >
                Profile
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Log in
              </Link>
              <Link
                href="/profile"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

