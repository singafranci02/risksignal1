export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">About RiskSignal</h1>
        <p className="max-w-2xl text-muted-foreground">
          RiskSignal was built for founders, traders, and finance teams who
          can&apos;t afford to wake up to surprise balance drops.
        </p>
      </header>
      <div className="prose prose-invert max-w-none">
        <p>
          We&apos;ve seen too many teams lose sleep — and money — because a hot
          wallet drained overnight, a trading bot misbehaved, or a protocol
          exploit hit while everyone was offline. Most monitoring tools are
          either too generic (meant for servers, not wallets) or too complex to
          set up.
        </p>
        <p>
          RiskSignal focuses on one thing: giving you a clear, opinionated
          safety net around your on‑chain balances. Connect your wallets, set
          thresholds that match your risk appetite, and let our background
          jobs watch the chain and alert you when something looks off.
        </p>
        <p>
          Under the hood, we leverage Supabase for secure auth and storage,
          Moralis for accurate net worth data, and Resend for reliable email
          delivery. The stack is modern, type‑safe, and designed to scale with
          your needs.
        </p>
      </div>
    </div>
  )
}

