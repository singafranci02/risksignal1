import Link from 'next/link'
import { CheckCircle2, Shield } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'
import ConfirmedClient from './confirmed-client'

export default async function ConfirmedPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100/80 py-16">
      <ConfirmedClient isAuthed={Boolean(user)} />
      <div className="mx-auto max-w-lg px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-2xl">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Email confirmed</h1>
          <p className="mt-2 text-gray-600">
            Thank you for confirming your email. Your account is now verified.
          </p>
          {user ? (
            <p className="mt-3 text-sm text-gray-500">
              Redirecting you to your dashboard…
            </p>
          ) : (
            <p className="mt-3 text-sm text-gray-500">
              Please sign in to continue.
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href={user ? '/dashboard' : '/login'}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              {user ? 'Go to dashboard' : 'Sign in'}
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm font-semibold text-blue-700 transition-all hover:border-blue-300"
            >
              <Shield className="h-4 w-4" />
              Back to Kuneo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
