import Link from 'next/link'
import Image from 'next/image'
import { Shield, Target, Zap, Users, ArrowRight, CheckCircle2, TrendingUp, Lock, Eye, Award, Globe, Heart, Briefcase, AlertTriangle, FileCheck } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-grade security with SOC 2 compliance. Your data is encrypted at rest and in transit. We never ask for private keys.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pioneering the future of AI agent governance with cutting-edge technology and mathematical certainty.',
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
      icon: Briefcase,
      description: 'Built by engineers who understand blockchain infrastructure, AI systems, and risk management at scale.',
    },
    {
      role: 'Security',
      icon: Lock,
      description: 'Security experts with backgrounds in fintech, institutional trading platforms, and cryptographic systems.',
    },
    {
      role: 'Product',
      icon: Target,
      description: 'Product leaders who have built governance tools for Fortune 500 companies and regulatory bodies.',
    },
  ]

  const stats = [
    { label: 'Agent Capital Secured', value: '$2.4B+' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Rule Evaluation', value: '<50ms' },
    { label: 'Enterprise Customers', value: '120+' },
  ]

  const technology = [
    {
      name: 'Moralis',
      description: 'Blockchain data infrastructure',
      logo: '🔗',
    },
    {
      name: 'Supabase',
      description: 'Real-time database & auth',
      logo: '⚡',
    },
    {
      name: 'ClickHouse',
      description: 'High-performance analytics',
      logo: '📊',
    },
    {
      name: 'NATS',
      description: 'Event streaming',
      logo: '🚀',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/home-hero.png" 
            alt="Professional business environment"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/75 via-blue-900/65 to-blue-900/80" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Globe className="h-4 w-4 text-white" />
              <span className="font-semibold text-white">
                Trusted by Leading Institutions
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Building the Future of
              <br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                AI Agent Governance
              </span>
            </h1>
            
            <p className="mb-8 text-lg leading-relaxed text-blue-100">
              Kuneo was born from a simple problem: financial institutions needed 
              to deploy autonomous AI agents, but existing tools could not provide 
              the mathematical certainty and regulatory compliance required. Our{' '}
              <Link href="/ai-governance" className="font-semibold text-white underline decoration-blue-300 underline-offset-4 hover:decoration-white">
                AI Agent Governance Framework
              </Link>
              {' '}solves this with hardware-secured execution and immutable audit trails.
            </p>

            <Link
              href="/profile"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
            >
              <span>Join Us</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative">
          <svg className="w-full text-white" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Mission</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  We're building the governance infrastructure that enables autonomous AI agents 
                  to operate in financial markets with absolute certainty. No more black boxes, 
                  no more regulatory uncertainty, no more institutional barriers.
                </p>
                <p>
                  Our Digital Helmet technology provides mathematical proof that AI agents 
                  operate within defined parameters—transforming experimental scripts into 
                  institutional-grade financial vehicles.
                </p>
                <p>
                  We believe the future of finance is autonomous, but it must be verifiable, 
                  compliant, and trustworthy. That's what we're building.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">The Problem We Solve</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Black Box AI</h3>
                    <p className="text-gray-600">
                      Traditional AI deployments lack infrastructure-level constraints, 
                      making them unsuitable for financial applications.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <FileCheck className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Regulatory Gaps</h3>
                    <p className="text-gray-600">
                      Global regulators demand explainability and audit trails that 
                      standard AI systems cannot provide.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <Lock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Trust Deficit</h3>
                    <p className="text-gray-600">
                      Institutions cannot deploy AI without mathematical proof of 
                      compliance and immutable verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              World-Class Team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Built by experts in AI, blockchain, security, and financial infrastructure
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {team.map((member) => {
              const Icon = member.icon
              return (
                <div
                  key={member.role}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{member.role}</h3>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Built on Best-in-Class Technology
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We leverage industry-leading platforms to deliver unmatched performance and reliability
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technology.map((tech) => (
              <div
                key={tech.name}
                className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 text-center shadow-lg transition-all hover:shadow-2xl hover:scale-105"
              >
                <div className="mb-4 text-5xl">{tech.logo}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Join the Future of
            <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Autonomous Finance
            </span>
          </h2>
          <p className="mb-10 text-lg text-blue-100">
            Be part of the team building the infrastructure for the next generation of financial systems
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/pricing"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              <span>View Pricing</span>
              <Zap className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
