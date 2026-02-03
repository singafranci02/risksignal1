import Link from 'next/link'
import { Shield, Lock, FileCheck, Brain, ArrowRight, CheckCircle2, AlertTriangle, Zap, Eye, TrendingUp, BarChart3, FileText, Scale, BookOpen, Sparkles } from 'lucide-react'

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

  const steps = [
    {
      number: '01',
      title: 'Define Rules',
      description: 'Set mathematical constraints for your AI agent (drawdown limits, exposure caps, transaction frequency)',
    },
    {
      number: '02',
      title: 'Deploy Agent',
      description: 'Launch your agent within the Digital Helmet (TEE-secured environment)',
    },
    {
      number: '03',
      title: 'Real-Time Enforcement',
      description: 'Every decision is evaluated against your rules before execution',
    },
    {
      number: '04',
      title: 'Immutable Logging',
      description: 'All actions are cryptographically logged for audit and compliance',
    },
    {
      number: '05',
      title: 'Continuous Monitoring',
      description: 'Detect drift, anomalies, and violations with instant alerts',
    },
  ]

  return (
    <div className="space-y-16">
      {/* Introduction */}
      <section>
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-gray-900">Core Technology</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            What is AI Agent Governance?
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            AI Agent Governance is the infrastructure layer that transforms experimental AI scripts 
            into compliant, institutional-grade financial vehicles. It provides mathematical constraints, 
            verifiable execution, and immutable audit trails for autonomous financial agents.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">The Problem</h3>
              <p className="text-sm text-gray-600">
                AI agents make autonomous decisions, but their reasoning is opaque. Traditional 
                monitoring tools cannot provide the transparency and control required by institutions.
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Our Solution</h3>
              <p className="text-sm text-gray-600">
                Infrastructure-level enforcement through hardware-secured environments, mathematical 
                constraints, and real-time verification with immutable audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Core Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            const colorClasses = {
              blue: 'from-blue-600 to-blue-700',
              indigo: 'from-indigo-600 to-indigo-700',
              emerald: 'from-emerald-600 to-emerald-700',
              purple: 'from-purple-600 to-purple-700',
            }[feature.color]

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colorClasses} shadow-lg`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="rounded-2xl bg-gray-50 p-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">How It Works</h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-lg font-bold text-white shadow-lg">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Explore More</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quickLinks.map((link) => {
            const Icon = link.icon
            const colorClasses = {
              blue: 'from-blue-600 to-blue-700 hover:shadow-blue-500/30',
              indigo: 'from-indigo-600 to-indigo-700 hover:shadow-indigo-500/30',
              emerald: 'from-emerald-600 to-emerald-700 hover:shadow-emerald-500/30',
            }[link.color]

            return (
              <Link
                key={link.title}
                href={link.href}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colorClasses} shadow-lg transition-shadow group-hover:shadow-xl`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{link.title}</h3>
                <p className="mb-4 text-gray-600">{link.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-center shadow-2xl">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Ready to Deploy Compliant AI Agents?
        </h2>
        <p className="mb-8 text-lg text-blue-100">
          Start building with our governance infrastructure today
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/profile"
            className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all hover:scale-105"
          >
            <span>Get Started Free</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/ai-governance/documentation"
            className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
          >
            <span>View Documentation</span>
            <FileText className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
