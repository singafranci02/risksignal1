'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await fetch('/auth/logout', { method: 'POST' })
      if (!res.ok) {
        console.error('Failed to log out', await res.text())
      }
    } catch (err) {
      console.error('Error during logout', err)
    } finally {
      router.push('/')
      router.refresh()
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted"
    >
      Log out
    </button>
  )
}

