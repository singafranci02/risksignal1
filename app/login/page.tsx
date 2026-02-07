import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import LoginForm from './login-form'
import { Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


export default async function LoginPage() {
  const supabase = await createClient()
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100/80">
      {/* Left Side - Branding */}
      <div className="relative hidden w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-12 lg:flex lg:flex-col lg:justify-between">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/login-background.png" 
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </div>

        {/* Gradient Overlay - stronger for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-900/90" />

        <div className="relative">
          <h2 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-sm">
            Deploy Autonomous Agents
            <br />
            with Absolute Certainty
          </h2>
          <p className="text-lg leading-relaxed text-white/95 drop-shadow-sm">
            The infrastructure layer for verifiable agentic finance. Mathematical constraints,
            immutable audit trails, and real-time governance.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium">Hardware-Secured TEEs</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium">Immutable Audit Trails</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium">Global Compliance</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/images/logos/kuneo-logo.png"
                  alt="Kuneo"
                  fill
                  className="object-contain object-center"
                  sizes="32px"
                />
              </div>
              <span className="text-[28px] font-bold text-[#0b1f3a]">Kuneo</span>
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
              <p className="mt-2 text-gray-600">
                Sign in to access your AI agent governance dashboard
              </p>
            </div>
            <LoginForm />
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/profile" className="font-semibold text-blue-600 hover:text-blue-700">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
