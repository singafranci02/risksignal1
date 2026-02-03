import Link from 'next/link'
import { Shield, Lock, FileCheck, Brain, ArrowRight, CheckCircle2, AlertTriangle, Zap, Eye, TrendingUp, BarChart3, FileText, Scale, BookOpen } from 'lucide-react'

export default function AIGovernanceOverview() {
  const features = [
    {
      icon: Shield,
      title: 'The Digital Helmet',
      description: 'Hardware-secured execution environments (TEEs) that isolate AI logic and enforce mathematical constraints.',
      color: 'blue',
    },
    {
      icon: Lock,
      title: 'Verifiable Execution',
      description: 'Tamper-proof strategy enforcement with cryptographic proof of compliance at every decision point.',
      color: 'indigo',
    },
    {
      icon: FileCheck,
      title: 'Immutable Audit Trails',
      description: 'Append-only logs of every rule evaluation, exportable for regulators and stakeholders.',
      color: 'emerald',
    },
    {
      icon: Brain,
      title: 'Intelligent Monitoring',
      description: 'Real-time detection of agentic drift, hallucinations, and behavioral anomalies.',
      color: 'purple',
    },
  ]

  const quickLinks = [
    {
      title: 'Documentation',
      description: 'Technical specifications, integration guides, and API references',
      href: '/ai-governance/documentation',
      icon: FileText,
      color: 'blue',
    },
    {
      title: 'Regulations',
      description: 'Regulatory frameworks for Australia, EU, and United States',
      href: '/ai-governance/regulations',
      icon: Scale,
      color: 'indigo',
    },
    {
      title: 'Rule Library',
      description: 'Pre-built compliance templates and rule configurations',
      href: '/ai-governance/rules',
      icon: BookOpen,
      color: 'emerald',
    },
  ]

  return (
    <div className="space-y-16">
      {/* Introduction */}
      <section>
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-100">
            What is AI Agent Governance?
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-slate-300">
            AI Agent Governance is the infrastructure layer that transforms experimental AI scripts 
            into compliant, institutional-grade financial vehicles. It provides mathematical constraints, 
            verifiable execution, and immutable audit trails for autonomous financial agents.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
              <h3 className="mb-2 font-semibold text-slate-100">The Problem</h3>
              <p className="text-sm text-slate-400">
                AI agents make autonomous decisions, but their reasoning is opaque. Traditional 
                monitoring tools cannot provide the transparency and control required by institutions.
              </p>
            </div>
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
              <h3 className="mb-2 font-semibold text-blue-400">Our Solution</h3>
              <p className="text-sm text-slate-300">
                Infrastructure-level enforcement through hardware-secured environments, mathematical 
                constraints, and real-time verification with immutable audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section>
        <h2 className="mb-8 text-2xl font-bold text-slate-100">Core Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            const colorClasses = {
              blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
              indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
              emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
              purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
            }[feature.color]

            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border ${colorClasses}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="mb-8 text-2xl font-bold text-slate-100">How It Works</h2>
        <div className="space-y-4">
          {[
            {
              step: '1',
              title: 'Define Your Rules',
              description: 'Set constraints in plain language: "Max 15% in any single asset", "Halt if drawdown exceeds 20%"',
            },
            {
              step: '2',
              title: 'Mathematical Translation',
              description: 'Our engine translates rules into mathematical constraints enforced at the infrastructure level',
            },
            {
              step: '3',
              title: 'TEE Isolation',
              description: 'Your agent runs in a hardware-secured Trusted Execution Environment with tamper-proof execution',
            },
            {
              step: '4',
              title: 'Real-Time Verification',
              description: 'Every decision is checked against your rules in <50ms with immediate violation alerts',
            },
            {
              step: '5',
              title: 'Immutable Audit Trail',
              description: 'Every rule evaluation is logged in an append-only audit trail for compliance reporting',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-lg border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="mb-8 text-2xl font-bold text-slate-100">Explore Documentation</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quickLinks.map((link) => {
            const Icon = link.icon
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              indigo: 'from-indigo-500 to-indigo-600',
              emerald: 'from-emerald-500 to-emerald-600',
            }[link.color]

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${colorClasses}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-slate-100">
                  {link.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-slate-400">{link.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-100">
            Ready to Deploy Verifiable AI Agents?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-slate-300">
            Start building with Kuneo's governance infrastructure. Deploy autonomous agents 
            with mathematical certainty and regulatory compliance.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/ai-governance/documentation"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-slate-100 transition-colors hover:bg-slate-700"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
