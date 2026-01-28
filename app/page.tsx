import Link from "next/link"
import { ArrowRight, ShieldCheck, Bell, Wallet2, LineChart } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 border-b border-border pb-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-400">
            New • On‑chain risk monitoring
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Never get caught off‑guard by a{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              sudden balance drop
            </span>
            .
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            RiskSignal watches your crypto and DeFi wallets 24/7. When your
            holdings fall below critical thresholds, we instantly alert you by
            email so you can act before it&apos;s too late.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/profile">
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
                Get started for free
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View pricing
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Built on Supabase &amp; Moralis</span>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-amber-400" />
              <span>Real‑time email alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet2 className="h-4 w-4 text-sky-400" />
              <span>Monitor unlimited wallets</span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Live risk dashboard
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-300">
              <LineChart className="h-3 w-3" />
              Monitoring
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-slate-800/60 px-4 py-3">
              <div>
                <p className="text-xs font-medium text-slate-300">
                  Treasury wallet
                </p>
                <p className="text-[11px] text-slate-400">
                  0x2f3c...9bA4 • Min $250k
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-emerald-300">
                  $312,450
                </p>
                <p className="text-[11px] text-emerald-400">Healthy</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-800/40 px-4 py-3">
              <div>
                <p className="text-xs font-medium text-slate-300">
                  Trading hot wallet
                </p>
                <p className="text-[11px] text-slate-400">
                  0x8c7D...F12e • Min $25k
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-amber-300">
                  $21,430
                </p>
                <p className="text-[11px] text-amber-400">
                  Below threshold
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/80 p-4 text-xs text-slate-300">
              <p className="mb-1 font-semibold text-emerald-300">
                Upcoming alert
              </p>
              <p>
                &quot;If Trading hot wallet stays below $25,000 for 15 minutes,
                send critical alert to finance@company.com&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          How RiskSignal works
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Step 1
            </p>
            <h3 className="mb-1 text-sm font-semibold text-foreground">
              Connect your wallets
            </h3>
            <p className="text-sm text-muted-foreground">
              Add any EVM wallet address you want to monitor. We never ask for
              private keys — read‑only balances only.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Step 2
            </p>
            <h3 className="mb-1 text-sm font-semibold text-foreground">
              Set your risk thresholds
            </h3>
            <p className="text-sm text-muted-foreground">
              For each wallet, define a minimum USD balance. We continuously
              check live net worth using Moralis data.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Step 3
            </p>
            <h3 className="mb-1 text-sm font-semibold text-foreground">
              Get real‑time alerts
            </h3>
            <p className="text-sm text-muted-foreground">
              When a wallet drops below its threshold, we trigger an email via
              Resend so you can act immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="rounded-2xl border border-border bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-center md:text-left md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Ready to de‑risk your treasury?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            Start with a free account, connect your first wallets in minutes,
            and let RiskSignal watch your balances while you ship product.
          </p>
        </div>
        <div className="mt-4 flex flex-col items-center gap-3 md:mt-0 md:items-end">
          <Link href="/profile">
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow hover:bg-slate-100">
              Create your free account
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <p className="text-xs text-slate-300">
            No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}

