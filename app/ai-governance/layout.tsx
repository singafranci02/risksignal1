'use client'

export default function AIGovernanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {children}
      </div>
    </div>
  )
}
