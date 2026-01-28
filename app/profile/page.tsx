import { createClient } from "@/utils/supabase/server"
import ProfileForm from "./profile-form"

export default async function ProfilePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="mx-auto max-w-lg space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create your RiskSignal account
          </h1>
          <p className="text-muted-foreground">
            Monitor your wallets, set risk thresholds, and get notified before
            things go wrong.
          </p>
        </header>
        <ProfileForm />
      </div>
    )
  }

  const firstName = (user.user_metadata as any)?.first_name ?? ""
  const lastName = (user.user_metadata as any)?.last_name ?? ""

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Your profile</h1>
        <p className="text-muted-foreground">
          Manage your account details and see the wallets you&apos;re
          monitoring.
        </p>
      </header>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <dl className="space-y-4 text-sm">
          <div className="flex items-start justify-between gap-4">
            <dt className="font-medium text-muted-foreground">Name</dt>
            <dd className="text-right text-foreground">
              {firstName || lastName
                ? `${firstName} ${lastName}`.trim()
                : "Not set"}
            </dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="font-medium text-muted-foreground">Email</dt>
            <dd className="text-right text-foreground">{user.email}</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="font-medium text-muted-foreground">User ID</dt>
            <dd className="max-w-xs truncate text-right text-xs text-muted-foreground">
              {user.id}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

