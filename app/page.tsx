import Link from "next/link"
import { ArrowRight, Shield, Zap, Eye, CheckCircle2, TrendingUp, Activity, Lock, Clock, Bell, BarChart3, Terminal, Layers } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span className="text-zinc-400">Real-time blockchain intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Enterprise Risk
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                Monitoring Platform
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-10 text-lg leading-relaxed text-zinc-400 sm:text-xl">
              AI-powered blockchain risk detection for institutions. Monitor wallets, 
              detect anomalies, and respond to threats in real-time with enterprise-grade security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/profile"
                className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Start Monitoring
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#features"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-zinc-700 hover:bg-zinc-800"
              >
                View Features
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-white" />
                <span>Bank-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-white" />
                <span>24/7 monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-white" />
                <span>Sub-second alerts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-white">$2.4B+</div>
              <div className="text-sm text-zinc-500">Assets Monitored</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-white">99.9%</div>
              <div className="text-sm text-zinc-500">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-white">&lt;100ms</div>
              <div className="text-sm text-zinc-500">Alert Latency</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-zinc-500">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for Risk Teams
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Comprehensive blockchain risk monitoring with institutional-grade reliability
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <Activity className="h-6 w-6 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Real-Time Monitoring
              </h3>
              <p className="text-zinc-400">
                Continuous wallet surveillance with sub-second detection of balance changes, 
                suspicious transactions, and policy violations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Policy Engine
              </h3>
              <p className="text-zinc-400">
                Define custom risk policies with complex rules. Net worth thresholds, 
                asset concentration limits, and unauthorized token detection.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <Bell className="h-6 w-6 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Multi-Channel Alerts
              </h3>
              <p className="text-zinc-400">
                Instant notifications via Email, SMS, and Slack. Smart deduplication 
                and escalation paths for critical events.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <BarChart3 className="h-6 w-6 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Advanced Analytics
              </h3>
              <p className="text-zinc-400">
                Historical trend analysis, risk scoring, and predictive insights. 
                Export data for compliance and audit requirements.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <Lock className="h-6 w-6 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Enterprise Security
              </h3>
              <p className="text-zinc-400">
                SOC 2 compliant infrastructure. Row-level security, audit logs, 
                and encrypted data at rest and in transit.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <Terminal className="h-6 w-6 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Developer API
              </h3>
              <p className="text-zinc-400">
                RESTful API and webhooks for custom integrations. Build automated 
                workflows and connect to your existing tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Deploy enterprise risk monitoring in minutes
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-zinc-800 bg-black text-2xl font-bold text-white">
                01
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Connect Wallets
              </h3>
              <p className="text-zinc-400">
                Add wallet addresses to monitor. No private keys required - we use 
                read-only blockchain data via Moralis Deep Index API.
              </p>
              <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                <code className="text-xs text-zinc-400">
                  <span className="text-white">POST</span> /api/wallets<br />
                  <span className="text-zinc-600">{'{'}</span><br />
                  &nbsp;&nbsp;<span className="text-zinc-500">"address":</span> <span className="text-zinc-300">"0x..."</span><br />
                  <span className="text-zinc-600">{'}'}</span>
                </code>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-zinc-800 bg-black text-2xl font-bold text-white">
                02
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Define Policies
              </h3>
              <p className="text-zinc-400">
                Create custom risk policies with thresholds, rules, and severity levels. 
                Our rule engine evaluates policies in real-time.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  Net worth thresholds
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  Asset concentration limits
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  Unauthorized token detection
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-zinc-800 bg-black text-2xl font-bold text-white">
                03
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Receive Alerts
              </h3>
              <p className="text-zinc-400">
                Get instant notifications when policies are violated. Multi-channel 
                delivery with smart deduplication and escalation.
              </p>
              <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                  </span>
                  <span className="text-xs font-semibold text-white">CRITICAL ALERT</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Wallet 0x2f3c...9bA4 dropped below $250k threshold
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Risk Teams
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              From DeFi protocols to institutional treasuries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Use Case 1 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <TrendingUp className="h-5 w-5 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                DeFi Protocols
              </h3>
              <p className="mb-4 text-zinc-400">
                Monitor treasury wallets, liquidity pools, and multi-sig addresses. 
                Detect unauthorized withdrawals and maintain collateralization ratios.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Treasury balance monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Multi-sig transaction alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Liquidity pool health checks</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <Layers className="h-5 w-5 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Institutional Treasuries
              </h3>
              <p className="mb-4 text-zinc-400">
                Enterprise-grade monitoring for corporate crypto holdings. Compliance 
                reporting, audit trails, and real-time risk dashboards.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Asset concentration limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Compliance reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span>Audit-ready logs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-12 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
            
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Start Monitoring in Minutes
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
                Join risk teams protecting billions in blockchain assets. 
                No credit card required.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/profile"
                  className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Get Started Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-black px-8 py-4 text-base font-semibold text-white transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
                <span>✓ Free 14-day trial</span>
                <span>✓ No credit card required</span>
                <span>✓ Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
