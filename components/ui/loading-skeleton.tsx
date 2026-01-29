export function WalletListSkeleton() {
  return (
    <div className="space-y-4" aria-busy="true" aria-live="polite">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-lg border border-border bg-card p-4 shadow-sm animate-pulse"
        >
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/4 bg-muted rounded" />
            <div className="h-3 w-1/2 bg-muted rounded" />
            <div className="h-3 w-1/3 bg-muted rounded" />
          </div>
          <div className="h-8 w-8 bg-muted rounded" />
        </div>
      ))}
    </div>
  )
}

export function FormSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm animate-pulse">
      <div className="h-6 w-32 bg-muted rounded mb-4" />
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="h-4 w-24 bg-muted rounded" />
          <div className="h-10 w-full bg-muted rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="h-10 w-full bg-muted rounded" />
        </div>
        <div className="h-10 w-full bg-muted rounded" />
      </div>
    </div>
  )
}
