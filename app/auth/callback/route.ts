import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      if (error) {
        console.error('[auth] exchangeCodeForSession', { message: error.message })
      }
    } catch (err) {
      console.error('[auth] callback error', err)
    }
  }

  return NextResponse.redirect(new URL(next, request.url))
}
