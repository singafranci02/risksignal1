export default function PricingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Pricing</h1>
        <p className="max-w-2xl text-muted-foreground">
          Simple, transparent pricing designed for teams that take treasury and
          wallet risk seriously. Start free and scale as you grow.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        <section className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Starter</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Perfect for solo builders and small portfolios.
          </p>
          <p className="mt-4 text-3xl font-bold">$0</p>
          <p className="text-xs text-muted-foreground">forever</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Monitor up to 3 wallets</li>
            <li>• Hourly balance checks</li>
            <li>• Email alerts</li>
          </ul>
        </section>
        <section className="flex flex-col rounded-2xl border border-primary/40 bg-card p-6 shadow-lg ring-1 ring-primary/40">
          <h2 className="text-lg font-semibold">Pro</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            For startups and DAOs with active treasuries.
          </p>
          <p className="mt-4 text-3xl font-bold">$49</p>
          <p className="text-xs text-muted-foreground">per month</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Monitor up to 25 wallets</li>
            <li>• 5‑minute check interval</li>
            <li>• Advanced alert rules</li>
            <li>• Priority support</li>
          </ul>
        </section>
        <section className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Enterprise</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Custom solutions for funds, exchanges, and fintechs.
          </p>
          <p className="mt-4 text-3xl font-bold">Let&apos;s talk</p>
          <p className="text-xs text-muted-foreground">Custom pricing</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Unlimited wallets</li>
            <li>• Dedicated slack channel</li>
            <li>• Custom integrations</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

