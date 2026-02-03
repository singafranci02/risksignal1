import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Zap, Eye, CheckCircle2, TrendingUp, Activity, Lock, Clock, Bell, BarChart3, Terminal, Layers, Brain, FileCheck, AlertTriangle, Users, Building2, Sparkles, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-900/80" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span className="font-semibold text-white">
                Verifiable Agentic Finance
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Deploy Autonomous Agents
              <br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                with Absolute Certainty
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-10 text-lg leading-relaxed text-blue-100 sm:text-xl">
              The infrastructure layer that transforms experimental AI scripts into compliant, 
              institutional-grade financial vehicles. <span className="font-semibold text-white">Define the rules. 
              We enforce the logic at the infrastructure level.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/profile"
                className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
              >
                <span className="relative">Start Building</span>
                <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/ai-governance"
                className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
              >
                View Governance Layer
                <Shield className="h-5 w-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-white" />
                <span>Hardware-Secured TEEs</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-white" />
                <span>Immutable Audit Trails</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-white" />
                <span>Global Compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full text-white" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">
                $2.4B+
              </div>
              <div className="text-sm text-gray-600">Agent Capital Secured</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">
                10K+
              </div>
              <div className="text-sm text-gray-600">Rules Enforced Daily</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">
                &lt;50ms
              </div>
              <div className="text-sm text-gray-600">Rule Evaluation</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">
                100%
              </div>
              <div className="text-sm text-gray-600">Audit Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Three Pillars of Agent Governance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A complete infrastructure stack for deploying autonomous financial agents with institutional-grade safety
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Pillar 1: Kuneo Core */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                  <Activity className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  Kuneo Core
                </h3>
                <p className="mb-2 text-sm font-semibold text-blue-600">Real-Time Monitoring</p>
                
                <p className="mb-6 text-gray-600">
                  Our auditing engine tracks cross-custodian mandates and detects "Agentic Drift" 
                  or AI hallucinations in real-time. Every transaction, every decision, every movement 
                  of capital is logged and verified against your defined parameters.
                </p>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Cross-custodian portfolio aggregation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Real-time rule evaluation (&lt;50ms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>Anomaly detection & drift alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: The Digital Helmet - HIGHLIGHTED */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-blue-600 bg-gradient-to-br from-blue-600 to-blue-700 p-8 shadow-2xl transition-all hover:shadow-blue-500/50 hover:scale-105">
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  CORE TECHNOLOGY
                </span>
              </div>
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold text-white">
                  The Digital Helmet
                </h3>
                <p className="mb-2 text-sm font-semibold text-blue-100">Verifiable Execution</p>
                
                <p className="mb-6 text-blue-50">
                  Hardware-secured environments (TEEs) that isolate your AI's logic, ensuring strategies 
                  cannot be tampered with and funds cannot be accessed outside of set parameters. 
                  Mathematical certainty replaces blind trust.
                </p>
                
                <ul className="space-y-2 text-sm text-blue-50">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>TEE-based execution isolation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Cryptographic proof of compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                    <span>Zero-knowledge verification</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: Agent Intelligence Hub */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 shadow-lg">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  Agent Intelligence Hub
                </h3>
                <p className="mb-2 text-sm font-semibold text-indigo-600">Compliance Knowledge Base</p>
                
                <p className="mb-6 text-gray-600">
                  A knowledge base of global AI regulations (MiCA, EU AI Act, ASIC ERS) and pre-built 
                  rule templates for agentic trading, from drawdown limits to recursive loop protection. 
                  Deploy compliant agents in minutes, not months.
                </p>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                    <span>50+ pre-built compliance templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                    <span>Multi-jurisdiction support (AU, EU, US)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600" />
                    <span>Auto-updating regulatory framework</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature Showcase */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              See the Technology in Action
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Cutting-edge infrastructure that powers verifiable agentic finance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Digital Helmet Visual - SWAPPED to abstract art */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/features/verification.png" 
                  alt="Digital Helmet Technology"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/75 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Digital Helmet</h3>
                  <p className="text-sm text-blue-100">Hardware-secured execution environments</p>
                </div>
              </div>
            </div>

            {/* Real-Time Monitoring */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/features/monitoring.png" 
                  alt="Real-time monitoring"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/75 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Real-Time Monitoring</h3>
                  <p className="text-sm text-indigo-100">Sub-50ms rule evaluation & detection</p>
                </div>
              </div>
            </div>

            {/* Verification System - SWAPPED to developer coding */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/features/digital-helmet.png" 
                  alt="Verification system"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/75 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <FileCheck className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Immutable Audit Trails</h3>
                  <p className="text-sm text-purple-100">Cryptographic proof for regulators</p>
                </div>
              </div>
            </div>

            {/* AI Technology - REPLACED trading setup */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/images/features/ai-technology.png" 
                  alt="AI technology infrastructure"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/75 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Agent Intelligence</h3>
                  <p className="text-sm text-emerald-100">Advanced governance algorithms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Problem */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                <AlertTriangle className="h-4 w-4" />
                The Challenge
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                AI Agents Are Powerful But Unpredictable
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <Terminal className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Black Box Problem</h3>
                    <p className="text-gray-600">
                      AI agents make thousands of decisions per second. Without infrastructure-level 
                      constraints, you have no guarantee they will stay within your risk parameters.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <FileCheck className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Regulatory Uncertainty</h3>
                    <p className="text-gray-600">
                      Global regulators (SEC, MiCA, ASIC) are demanding explainability and audit trails. 
                      Traditional AI deployments cannot provide this level of transparency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <Building2 className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Institutional Barriers</h3>
                    <p className="text-gray-600">
                      Banks, hedge funds, and treasuries cannot deploy AI agents without mathematical 
                      proof of compliance and immutable audit trails.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                Our Solution
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Infrastructure-Level Governance & Enforcement
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Lock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Mathematical Constraints</h3>
                    <p className="text-gray-600">
                      Our Digital Helmet uses hardware-secured TEEs to enforce rules at the infrastructure 
                      level. Your agent cannot violate constraints—it's mathematically impossible.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Immutable Audit Trails</h3>
                    <p className="text-gray-600">
                      Every decision, transaction, and state change is logged with cryptographic proof. 
                      Export certified audit reports for regulators in one click.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Verifiable Execution</h3>
                    <p className="text-gray-600">
                      Zero-knowledge proofs allow third parties to verify your agent's compliance without 
                      revealing proprietary strategies or sensitive data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Built for the Future of Finance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From autonomous trading to treasury management, Kuneo powers the next generation of financial infrastructure
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Use Case 1 */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Autonomous Trading Agents
                </h3>
                <p className="text-blue-100">
                  Deploy AI-powered trading strategies with mathematical guarantees
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Max Drawdown Protection</div>
                      <div className="text-sm text-gray-600">Automatically halt trading if losses exceed 15%</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Asset Concentration Limits</div>
                      <div className="text-sm text-gray-600">Prevent over-exposure to any single asset</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Transaction Frequency Caps</div>
                      <div className="text-sm text-gray-600">Prevent wash trading and market manipulation</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Institutional Treasury Management
                </h3>
                <p className="text-indigo-100">
                  Automate treasury operations with board-approved constraints
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Liquidity Thresholds</div>
                      <div className="text-sm text-gray-600">Maintain minimum cash reserves at all times</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Multi-Signature Approvals</div>
                      <div className="text-sm text-gray-600">Large transactions require board approval</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Compliance Reporting</div>
                      <div className="text-sm text-gray-600">Automated audit trails for regulators</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section (Placeholder) */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 text-6xl text-blue-600">"</div>
          <blockquote className="mb-8 text-2xl font-medium leading-relaxed text-gray-900">
            Kuneo transformed how we deploy AI agents. The Digital Helmet gives us mathematical certainty 
            that our strategies stay within risk parameters—something we could never achieve before.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image 
                src="/images/testimonials/client-1.png" 
                alt="Sarah Chen"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-sm text-gray-600">CTO, Apex Capital</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Transform AI Scripts into
            <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Institutional-Grade Vehicles
            </span>
          </h2>
          <p className="mb-10 text-lg text-blue-100">
            Join leading institutions deploying autonomous agents with absolute certainty
          </p>
          
          {/* Trust Signals */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-white" />
              <span>Free developer tier</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-white" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-white" />
              <span>Deploy in minutes</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
            >
              <span>Get Started Free</span>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/ai-governance"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              <span>Explore Documentation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
