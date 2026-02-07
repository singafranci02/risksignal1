'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ConfirmedClientProps {
  isAuthed: boolean
}

export default function ConfirmedClient({ isAuthed }: ConfirmedClientProps) {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthed) return
    const timeout = setTimeout(() => {
      router.push('/dashboard')
      router.refresh()
    }, 2500)
    return () => clearTimeout(timeout)
  }, [isAuthed, router])

  return null
}
