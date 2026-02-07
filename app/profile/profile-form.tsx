'use client'

import { useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"

export default function ProfileForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const router = useRouter()
  const supabase = createClient()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter your first and last name.")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
          },
          emailRedirectTo: `${siteUrl}/auth/callback?next=/auth/confirmed`,
        },
      })

      if (signUpError) {
        setError(signUpError.message)
        setLoading(false)
        return
      }

      setSuccess("Check your email to confirm your account. We'll sign you in after confirmation.")
      setLoading(false)
      // Optionally send them to login page
      // router.push("/login")
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      setLoading(false)
    }
  }

  const passwordStrength =
    password.length === 0
      ? ""
      : password.length < 8
      ? "Weak"
      : /[A-Z]/.test(password) && /[0-9]/.test(password)
      ? "Strong"
      : "Medium"

  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="mb-1 block text-sm font-medium text-gray-900"
            >
              First name
            </label>
            <input
              id="first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="Ada"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="mb-1 block text-sm font-medium text-gray-900"
            >
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="Lovelace"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-900"
          >
            Work email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            placeholder="you@company.com"
            required
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="••••••••"
              required
            />
            {passwordStrength && (
              <p className="mt-1 text-xs text-gray-600">
                Strength:{" "}
                <span
                  className={
                    passwordStrength === "Strong"
                      ? "text-blue-400"
                      : passwordStrength === "Medium"
                      ? "text-amber-400"
                      : "text-red-400"
                  }
                >
                  {passwordStrength}
                </span>
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="mb-1 block text-sm font-medium text-gray-900"
            >
              Confirm password
            </label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="Repeat password"
              required
            />
          </div>
        </div>

        {error && (
          <div className="rounded-md bg-red-50/10 p-3 text-sm text-red-800">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-md bg-blue-500/10 p-3 text-sm text-blue-400">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gradient-to-r from-blue-600 to-blue-700/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>
      <p className="mt-3 text-center text-xs text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-gray-900 underline">
          Sign in
        </a>
      </p>
    </div>
  )
}

