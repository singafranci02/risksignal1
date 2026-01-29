import Link from 'next/link'
import { Shield, Target, Zap, Users, ArrowRight, CheckCircle2, TrendingUp, Lock, Eye } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-grade security with SOC 2 compliance. Your data is encrypted at rest and in transit. We never ask for private keys.',
    },
    {
      icon: Zap,
      title: 'Real-Time Intelligence',
      description: 'Sub-second detection and alerting. Our infrastructure is built for speed and reliability with 99.9% uptime SLA.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'No hidden fees, no surprises. Open pricing, clear documentation, and honest communication with our users.',
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your success is our success. Dedicated support, comprehensive documentation, and continuous product improvements.',
    },
  ]

  const team = [
    {
      role: 'Engineering',
      description: 'Built by engineers who understand blockchain infrastructure and risk management at scale.',
    },
    {
      role: 'Security',
      description: 'Security experts with backgrounds in fintech and institutional trading platforms.',
    },
    {
      role: 'Product',
      description: 'Product leaders who have built monitoring tools for Fortune 500 companies.',
    },
  ]

  const stats = [
    { label: 'Assets Monitored', value: '$2.4B+' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Alert Latency', value: '<100ms' },
    { label: 'Customers', value: '500+' },
  ]

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Building the Future of
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                Blockchain Risk Intelligence
              </span>
            </h1>
            
            <p className="mb-8 text-lg leading-relaxed text-zinc-400">
              RiskSignal was born from a simple problem: institutional teams needed 
              enterprise-grade blockchain monitoring, but existing tools were either 
              too generic or impossibly complex.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white">
                <Target className="h-8 w-8 text-black" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white">Our Mission</h2>
              <div className="space-y-4 text-lg text-zinc-400">
                <p>
                  We're building the risk intelligence platform that blockchain-native 
                  companies deserve. No more waking up to surprise balance drops, 
                  unauthorized transactions, or protocol exploits.
        </p>
        <p>
                  Our platform combines real-time blockchain data, AI-powered anomaly 
                  detection, and institutional-grade alerting to give risk teams the 
                  visibility and control they need.
        </p>
        <p>
                  We believe that blockchain risk monitoring should be as sophisticated 
                  as traditional financial risk management—but faster, more transparent, 
                  and built for the on-chain world.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white">
                <TrendingUp className="h-8 w-8 text-black" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white">The Problem We Solve</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-white" />
                  <div>
                    <h3 className="mb-2 font-semibold text-white">Treasury Blind Spots</h3>
                    <p className="text-zinc-400">
                      Traditional monitoring tools don't understand blockchain. Teams need 
                      real-time visibility into wallet balances, token concentrations, and 
                      on-chain activity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-white" />
                  <div>
                    <h3 className="mb-2 font-semibold text-white">Alert Fatigue</h3>
                    <p className="text-zinc-400">
                      Generic alerting systems create noise. We use intelligent deduplication 
                      and escalation to ensure critical alerts get immediate attention.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-white" />
                  <div>
                    <h3 className="mb-2 font-semibold text-white">Compliance Gaps</h3>
                    <p className="text-zinc-400">
                      Institutional teams need audit trails, policy enforcement, and 
                      compliance reporting. We provide enterprise-grade logging and analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:border-zinc-700"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{value.title}</h3>
                  <p className="text-zinc-400">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Built by Experts</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Our team brings decades of experience from leading fintech and blockchain companies
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.role}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">{member.role}</h3>
                <p className="text-zinc-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Technology Stack</h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Built on modern, battle-tested infrastructure
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 font-semibold text-white">Blockchain Data</h3>
              <p className="text-sm text-zinc-400">
                Moralis Deep Index API for accurate, real-time wallet data across multiple chains
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 font-semibold text-white">Database</h3>
              <p className="text-sm text-zinc-400">
                Supabase (PostgreSQL) with row-level security and real-time subscriptions
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 font-semibold text-white">Compute</h3>
              <p className="text-sm text-zinc-400">
                Supabase Edge Functions (Deno) for serverless, globally distributed execution
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 font-semibold text-white">Analytics</h3>
              <p className="text-sm text-zinc-400">
                ClickHouse for OLAP queries and historical trend analysis
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 font-semibold text-white">Messaging</h3>
              <p className="text-sm text-zinc-400">
                NATS JetStream for event streaming and real-time data pipelines
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 font-semibold text-white">Alerts</h3>
              <p className="text-sm text-zinc-400">
                Multi-channel delivery via Resend (Email), Twilio (SMS), and Slack webhooks
        </p>
      </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Join Leading Risk Teams
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
              Start monitoring your blockchain assets with enterprise-grade intelligence.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:scale-105 hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-black px-8 py-4 text-base font-semibold text-white transition-colors hover:border-zinc-700 hover:bg-zinc-900"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
