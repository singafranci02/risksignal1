import { createClient } from "@/utils/supabase/server"
import ProfileForm from "./profile-form"
import { Shield, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default async function ProfilePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100/80">
        {/* Left Side - Branding */}
        <div className="relative hidden w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-12 lg:flex lg:flex-col lg:justify-between">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/images/team/team-collaboration.png" 
              alt=""
              fill
              className="object-cover opacity-30"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/75 to-blue-900/80" />
          
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
              Start Building with
              <br />
              Absolute Certainty
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Join leading institutions deploying autonomous AI agents with mathematical 
              constraints and verifiable execution.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span>Free developer tier</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span>Deploy in minutes</span>
              </div>
            </div>
          </div>

          <div className="text-sm text-blue-200">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-white hover:underline">
              Sign in
            </Link>
          </div>
        </div>

        {/* Right Side - Signup Form */}
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
                <h1 className="text-3xl font-bold text-gray-900">
                  Create Your Account
                </h1>
                <p className="mt-2 text-gray-600">
                  Start deploying compliant AI agents today
                </p>
              </div>
              <ProfileForm />
            </div>

            <p className="mt-6 text-center text-sm text-gray-600 lg:hidden">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  const firstName = (user.user_metadata as any)?.first_name ?? ""
  const lastName = (user.user_metadata as any)?.last_name ?? ""

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100/80 py-12">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
            <p className="mt-2 text-gray-600">
              Manage your account information and preferences
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Signed in as:</span> {user.email}
            </p>
            {(firstName || lastName) && (
              <p className="mt-1 text-sm text-gray-700">
                <span className="font-semibold">Name:</span> {firstName} {lastName}
              </p>
            )}
          </div>

          <ProfileForm />
        </div>
      </div>
    </div>
  )
}
