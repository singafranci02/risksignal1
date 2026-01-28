export default function HowItWorksPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">How RiskSignal works</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          A deeper look at how we monitor your wallets, evaluate risk, and trigger alerts
          using Supabase, Moralis, and Resend behind the scenes.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Data model &amp; permissions</h2>
        <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground space-y-2">
          <p>
            Every wallet you monitor lives in the <code className="rounded bg-muted px-1 py-0.5 text-xs">monitored_wallets</code>{' '}
            table inside Supabase. Each row is tied to a Supabase user and includes:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>wallet_address</strong>: the EVM address we watch.</li>
            <li><strong>min_balance_usd</strong>: your threshold in USD.</li>
            <li><strong>user_id</strong>: the Supabase auth user who owns the wallet.</li>
          </ul>
          <p>
            Row‑Level Security (RLS) is enabled so that users can only read, insert, update,
            and delete their own wallets. This is enforced by Supabase directly, not by the
            frontend.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Risk checks via Cron &amp; Moralis</h2>
        <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground space-y-2">
          <p>
            On Vercel, we schedule a cron job (via <code className="rounded bg-muted px-1 py-0.5 text-xs">vercel.json</code>)
            that hits the{' '}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">/api/check-risk</code> endpoint every hour.
          </p>
          <p>Each run does the following:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Authenticates the request using either Vercel Cron headers or your <code className="rounded bg-muted px-1 py-0.5 text-xs">CRON_SECRET</code>.</li>
            <li>Fetches all rows from <code className="rounded bg-muted px-1 py-0.5 text-xs">monitored_wallets</code>.</li>
            <li>
              For each wallet, calls Moralis:
              <br />
              <code className="block rounded bg-muted px-2 py-1 text-xs mt-1">
                https://deep-index.moralis.io/api/v2.2/wallets/&lt;address&gt;/net-worth?exclude_spam=true
              </code>
            </li>
            <li>Parses <code className="rounded bg-muted px-1 py-0.5 text-xs">total_networth_usd</code> and compares it to <code className="rounded bg-muted px-1 py-0.5 text-xs">min_balance_usd</code>.</li>
            <li>Flags any wallet where net worth has fallen below the configured threshold.</li>
          </ol>
          <p>
            The endpoint returns a JSON summary of how many wallets were checked and how many
            alerts were triggered in that run.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Alerting pipeline with Resend</h2>
        <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground space-y-2">
          <p>
            When a wallet breaches its threshold, we currently:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Log a critical message on the server: <strong>&quot;ALERT TRIGGERED&quot;</strong>.</li>
            <li>
              Use Resend with your <code className="rounded bg-muted px-1 py-0.5 text-xs">RESEND_API_KEY</code> to send
              an email (mocked to <code className="rounded bg-muted px-1 py-0.5 text-xs">user@example.com</code> for now).
            </li>
          </ul>
          <p>
            The email content clearly states which wallet dropped, what its new USD value is,
            and what threshold you configured, so you can quickly triage the issue.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. User journey end‑to‑end</h2>
        <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground space-y-2">
          <ol className="list-decimal space-y-1 pl-5">
            <li>Visitor lands on the marketing homepage and clicks “Sign up”.</li>
            <li>On the Profile page, they enter first name, last name, email, and password twice.</li>
            <li>
              Supabase creates the user, stores names in <code className="rounded bg-muted px-1 py-0.5 text-xs">user_metadata</code>,
              and emails a confirmation link.
            </li>
            <li>After confirming, they log in and are redirected to the dashboard.</li>
            <li>On the dashboard, they add wallets and thresholds — all stored in Supabase.</li>
            <li>Vercel Cron + Moralis + Resend take over from there for automated monitoring.</li>
          </ol>
        </div>
      </section>
    </div>
  )
}

