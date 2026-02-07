import Link from 'next/link'
import Image from 'next/image'
import { 
  Shield, 
  Lock, 
  Eye, 
  Terminal, 
  Download, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  FileCheck,
  Activity,
  Key,
  Server,
  GitBranch,
  Cpu,
  Fingerprint
} from 'lucide-react'

export default function RetailShieldPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Dark Terminal Aesthetic */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Badge */}
            <div className="text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="font-mono font-semibold text-blue-300">
                  NHI Governance Infrastructure
                </span>
              </div>

              <h1 className="mb-6 font-mono text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                The Autonomous
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Retail Shield
                </span>
              </h1>

              <p className="mb-10 text-lg leading-relaxed text-slate-300 sm:text-xl">
                Bridge the <span className="font-semibold text-white">"Autonomy Gap"</span> between
                retail bots built in Cursor and institutional-grade security infrastructure.
                <span className="font-mono text-blue-400"> Zero-knowledge verification. Hardware roots of trust.</span>
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/profile"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
                >
                  <span className="relative">Enable Retail Shield</span>
                  <Zap className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#compliance-checker"
                  className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
                >
                  Run Compliance Check
                  <FileCheck className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 lg:justify-start">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-blue-400" />
                  <span className="font-mono">TEE-Backed Isolation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fingerprint className="h-4 w-4 text-blue-400" />
                  <span className="font-mono">Hardware-Attested Reasoning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Key className="h-4 w-4 text-blue-400" />
                  <span className="font-mono">NHI Credential Rotation</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/30" />
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/hero/digital-helmet-anchor.png"
                    alt="Digital Helmet visual anchor"
                    fill
                    className="object-contain object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>
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

      {/* The Core Problem */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The Retail Trading Crisis
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Retail traders are rapidly deploying autonomous Non-Human Identities (NHIs) 
              that manage end-to-end trading workflows—but lack institutional security infrastructure.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Blind Spot 1 */}
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                NHI Identity Crisis
              </h3>
              <p className="text-gray-700">
                <span className="font-semibold text-red-700">{"<20%"}</span> of retail traders have 
                formal processes to offboard and rotate API keys, leaving agent identities exposed to credential misuse.
              </p>
            </div>

            {/* Blind Spot 2 */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                <Eye className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Semantic Obfuscation
              </h3>
              <p className="text-gray-700">
                AI agents are <span className="font-mono text-amber-700">probabilistic</span>—
                their trustworthiness depends on <em>current behavior</em>, which can shift suddenly based on market data.
              </p>
            </div>

            {/* Blind Spot 3 */}
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Server className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Hardware Vulnerability
              </h3>
              <p className="text-gray-700">
                Without <span className="font-mono text-orange-700">TEEs</span>, agent memory can be 
                "poisoned" by false market data or prompt injections, leading to unsafe automated decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy-First Verification */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Lock className="h-4 w-4" />
                Zero-Knowledge Security
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Privacy-First Verification
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Institutions and retail "whales" are terrified of strategy leakage. 
                Kuneo verifies <span className="font-semibold text-gray-900">Risk Signals</span> without 
                ever seeing your <span className="font-mono text-blue-600">Private Code</span>.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Private Execution Pools</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Your strategy code executes in isolated TEE environments—never transmitted to Kuneo servers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Signed Risk Signals Only</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      We receive cryptographically signed telemetry (balance, drawdown, positions) — not your alpha.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hardware Attestation</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Every signal includes a TEE attestation hash proving execution integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Diagram */}
            <div className="rounded-2xl border-2 border-slate-800/40 bg-white/70 p-8 shadow-2xl backdrop-blur-md">
              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-6 w-6 text-green-600" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-green-900">Strategy Code</div>
                      <div className="font-mono text-xs text-green-600">Stays Local</div>
                    </div>
                  </div>
                  <Lock className="h-5 w-5 text-green-600" />
                </div>

                <div className="flex justify-center">
                  <GitBranch className="h-8 w-8 text-slate-400" />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="flex items-center gap-3">
                    <Activity className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-blue-900">Risk Signals</div>
                      <div className="font-mono text-xs text-blue-600">Signed + Attested</div>
                    </div>
                  </div>
                  <Fingerprint className="h-5 w-5 text-blue-600" />
                </div>

                <div className="flex justify-center">
                  <svg className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-purple-600" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-purple-900">Kuneo Platform</div>
                      <div className="font-mono text-xs text-purple-600">Policy Enforcement Only</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deterministic Kill-Switch */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              <Zap className="h-4 w-4" />
              Pre-Trade Intercept
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Deterministic Kill-Switch Dashboard
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Retail bots can "drift" and execute thousands of trades per minute during high volatility. 
              Our hardware-level intercept <span className="font-semibold text-gray-900">stops trades before they hit the exchange</span>.
            </p>
          </div>

          {/* Timeline Visual */}
          <div className="mt-16 overflow-hidden rounded-2xl border-2 border-slate-800/40 bg-white p-8 shadow-2xl">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-amber-500 to-red-500" />

              {/* Events */}
              <div className="space-y-8">
                {/* Event 1 */}
                <div className="relative flex items-start gap-6 pl-20">
                  <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-blue-500 shadow-lg">
                    <Activity className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-slate-500">t = 0ms</div>
                    <h3 className="text-lg font-bold text-gray-900">Agent Generates Trade Signal</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Buy 1.5 lots EURUSD @ 1.0850
                    </p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="relative flex items-start gap-6 pl-20">
                  <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-amber-500 shadow-lg">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-slate-500">t = 12ms</div>
                    <h3 className="text-lg font-bold text-gray-900">Pre-Flight Validation</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Kuneo checks active policies: Drawdown = 6.2% → Exceeds 5% limit
                    </p>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      <AlertTriangle className="h-3 w-3" />
                      POLICY VIOLATION DETECTED
                    </div>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="relative flex items-start gap-6 pl-20">
                  <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-red-500 shadow-lg animate-pulse">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-slate-500">t = 18ms</div>
                    <h3 className="text-lg font-bold text-gray-900">Hardware-Level Disconnect</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      MT5 bridge halted at TEE level. Trade never reaches broker.
                    </p>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                      <CheckCircle2 className="h-3 w-3" />
                      TRADE REJECTED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Basic Bot vs. Kuneo Shield
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The difference between experimental scripts and institutional-grade governance
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-red-700">Basic Bot (No Governance)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-700">Kuneo Shield (Governed)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Identity</td>
                  <td className="px-6 py-4 text-gray-600">Static API Keys (Exposed)</td>
                  <td className="px-6 py-4 text-gray-900">NHI with Rotated Credentials</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Safety</td>
                  <td className="px-6 py-4 text-gray-600">Post-trade Alerts (Reactive)</td>
                  <td className="px-6 py-4 text-gray-900">Pre-trade Enforcement (Proactive)</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Trust</td>
                  <td className="px-6 py-4 text-gray-600">"Black Box" (Opaque)</td>
                  <td className="px-6 py-4 text-gray-900">Hardware-Attested Reasoning</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Resilience</td>
                  <td className="px-6 py-4 text-gray-600">Software-only</td>
                  <td className="px-6 py-4 text-gray-900">Silicon-level Isolation (TEEs)</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Compliance</td>
                  <td className="px-6 py-4 text-gray-600">No audit trail</td>
                  <td className="px-6 py-4 text-gray-900">Immutable cryptographic logs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Regulatory-Ready Audit Trail */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl border-2 border-blue-200 bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">ASIC/SEC Compliance Hub</h3>
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-sm font-semibold text-gray-900">Audit Trail Status</div>
                        <div className="mt-1 text-xs text-gray-600">Last export: 2 hours ago</div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Trade Decisions Logged</span>
                      <span className="font-mono font-semibold text-gray-900">1,247</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Human-in-the-Loop Events</span>
                      <span className="font-mono font-semibold text-gray-900">34</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Policy Violations</span>
                      <span className="font-mono font-semibold text-gray-900">7</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Attestation Hashes</span>
                      <span className="font-mono font-semibold text-gray-900">1,247</span>
                    </div>
                  </div>

                  <button className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-md transition-all hover:bg-blue-700">
                    <div className="flex items-center justify-center gap-2">
                      <Download className="h-5 w-5" />
                      Download Immutable Audit (PDF/JSON)
                    </div>
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Cryptographically signed · Tamper-proof · Regulator-ready
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <FileCheck className="h-4 w-4" />
                Regulatory Compliance
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Regulatory-Ready Audit Trail
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Regulators like ASIC and the SEC are increasingly focused on the "Black Box" problem 
                and accountability for automated trades.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Every Decision Rationale Logged</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Immutable cryptographic log of why each trade was approved or rejected
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Proof of Human-in-the-Loop</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Demonstrates human oversight for critical risk thresholds
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">One-Click Regulator Export</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Generate ASIC RG 265 or SEC 17a-4 compliant reports instantly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Built on Next-Gen Infrastructure Standards
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Kuneo aligns with emerging industry frameworks for deterministic agent runtimes and NHI governance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm">
              <h3 className="mb-3 text-lg font-bold">Amadeus Protocol & Bitte.ai</h3>
              <p className="text-sm text-slate-300">
                Deterministic Agent Runtimes with TEE-backed privacy for verifiable execution
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm">
              <h3 className="mb-3 text-lg font-bold">Thales AI Security Fabric</h3>
              <p className="text-sm text-slate-300">
                Addresses OWASP Top 10 for LLMs, preventing prompt injection and data poisoning attacks
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm">
              <h3 className="mb-3 text-lg font-bold">NIST 800-207 (Zero Trust)</h3>
              <p className="text-sm text-slate-300">
                Continuous real-time authentication for NHIs, moving beyond static API key models
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Service Compliance Checker */}
      <section id="compliance-checker" className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              2026 EU AI Act Compliance Checker
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See if your Cursor-built agent meets the new regulatory standards
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-2xl">
            <div className="space-y-6">
              {[
                { q: 'Does your agent have pre-deployment testing?', status: 'unknown' },
                { q: 'Do you maintain an audit trail of decisions?', status: 'unknown' },
                { q: 'Can you halt the agent remotely?', status: 'unknown' },
                { q: 'Do you use hardware-level isolation (TEEs)?', status: 'unknown' },
                { q: 'Are API credentials rotated regularly?', status: 'unknown' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <span className="text-gray-700">{item.q}</span>
                  <div className="flex gap-2">
                    <button className="rounded-lg border border-green-300 bg-white px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50">
                      Yes
                    </button>
                    <button className="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
                      No
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-blue-50 p-6 text-center">
              <p className="text-sm text-gray-700">
                Answer all questions to see your compliance score and get personalized recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Ready to Shield Your Retail Agent?
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Join the next generation of governed autonomous trading
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-2xl transition-all hover:scale-105"
            >
              Enable Retail Shield
              <Shield className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              Talk to Governance Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
