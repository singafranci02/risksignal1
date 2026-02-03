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
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Left Side - Branding */}
      <div className="relative hidden w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-12 lg:flex lg:flex-col lg:justify-between">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/login-background.png" 
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-indigo-900/90" />
        
        <div className="relative">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Kuneo</span>
              <span className="text-xs font-medium uppercase tracking-wider text-blue-200">
                AI Agent Governance
              </span>
            </div>
          </Link>
        </div>
        
        <div>
          <h2 className="mb-6 text-4xl font-bold text-white">
            Deploy Autonomous Agents
            <br />
            with Absolute Certainty
          </h2>
          <p className="text-lg text-blue-100">
            The infrastructure layer for verifiable agentic finance. Mathematical constraints, 
            immutable audit trails, and real-time governance.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-blue-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span>Hardware-Secured TEEs</span>
          </div>
          <div className="flex items-center gap-3 text-blue-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span>Immutable Audit Trails</span>
          </div>
          <div className="flex items-center gap-3 text-blue-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span>Global Compliance</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">Kuneo</span>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  AI Agent Governance
                </span>
              </div>
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
