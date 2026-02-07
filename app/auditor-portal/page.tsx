import Link from 'next/link'
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  FileCheck,
  Shield,
  Cpu,
  Activity,
  Eye,
} from 'lucide-react'

export default function AuditorPortalPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm backdrop-blur-sm">
              <FileCheck className="h-4 w-4 text-blue-300" />
              <span className="font-mono font-semibold text-blue-200">Conformity Hub</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Auditor’s Portal
            </h1>
            <p className="text-lg text-slate-300">
              Traceability and accountability for 2026 enforcement. Built to map directly
              to the EU AI Act Annex III requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/ai-governance/regulations"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-900 shadow-lg transition-all hover:scale-105"
              >
                View EU AI Act Mapping
                <Shield className="h-4 w-4" />
              </Link>
              <Link
                href="/risk-signal"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50"
              >
                Open RiskSignal
                <Activity className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conformity Assessment */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Conformity Assessment Dashboard
              </h2>
              <p className="mt-2 text-gray-600">
                Annex III risk classification and control readiness across all active agents.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Presumption of Conformity: Enabled
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600">Annex III Risk</span>
                <AlertTriangle className="h-4 w-4 text-amber-600" />
              </div>
              <div className="mt-4 text-3xl font-bold text-gray-900">High</div>
              <p className="mt-2 text-sm text-gray-600">
                Category: Financial services & critical infrastructure.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600">System Risk Score</span>
                <BarChart3 className="h-4 w-4 text-blue-600" />
              </div>
              <div className="mt-4 text-3xl font-bold text-gray-900">0.27</div>
              <p className="mt-2 text-sm text-gray-600">
                Threshold: 0.35 (safe zone).
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600">Drift Index</span>
                <Eye className="h-4 w-4 text-purple-600" />
              </div>
              <div className="mt-4 text-3xl font-bold text-gray-900">1.2%</div>
              <p className="mt-2 text-sm text-gray-600">
                Rolling 30-day behavioral drift.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-600">Pre-Trade Latency</span>
                <Cpu className="h-4 w-4 text-sky-600" />
              </div>
              <div className="mt-4 text-3xl font-bold text-gray-900">42ms</div>
              <p className="mt-2 text-sm text-gray-600">
                Deterministic sequence modeling enforced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Rationale Feed */}
      <section className="border-t border-gray-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Decision Rationale Feed (XAI)
            </h2>
            <p className="mt-2 text-gray-600">
              Every blocked trade comes with an evidence trail and explainable rationale.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                id: 'TX-8421',
                reason: 'Drawdown breach',
                policy: 'MaxDailyLoss: -2.5%',
                score: '0.91',
                hash: '0x8d2f4e...a1b7c9',
              },
              {
                id: 'TX-8418',
                reason: 'Whitelist violation',
                policy: 'AssetAllowlist: BTC, ETH',
                score: '0.88',
                hash: '0x4f92ab...e9c120',
              },
              {
                id: 'TX-8412',
                reason: 'Latency anomaly',
                policy: 'ExecutionWindow: < 60ms',
                score: '0.83',
                hash: '0x2c9d10...0f4a2b',
              },
            ].map((item) => (
              <div key={item.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-600">{item.id}</div>
                    <div className="mt-1 text-lg font-bold text-gray-900">{item.reason}</div>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    Risk score: <span className="font-semibold text-gray-900">{item.score}</span>
                  </div>
                </div>
                <div className="mt-4 grid gap-2 text-sm text-gray-600 md:grid-cols-2">
                  <div>
                    Policy: <span className="font-medium text-gray-900">{item.policy}</span>
                  </div>
                  <div className="md:text-right">
                    Evidence hash:{' '}
                    <span className="font-mono text-gray-900">{item.hash}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Registry */}
      <section className="border-t border-gray-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Agent Registry</h2>
            <p className="mt-2 text-gray-600">
              Active NHI inventory with permission scope and hardware root-of-trust status.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 gap-0 border-b border-gray-200 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-600 md:grid-cols-4">
              <div>NHI</div>
              <div>Permissions</div>
              <div>Root of Trust</div>
              <div>Status</div>
            </div>
            {[
              {
                nhi: 'NHI-7f2a9b4d',
                permissions: 'Trade: BTC/ETH, Max 1.5% allocation',
                root: 'TEE Attested • Intel SGX',
                status: 'Active',
              },
              {
                nhi: 'NHI-1c4d8e9f',
                permissions: 'Trade: Index ETFs, Max 2% drawdown',
                root: 'TEE Attested • AMD SEV',
                status: 'Active',
              },
              {
                nhi: 'NHI-9b2c6a1e',
                permissions: 'Trade: Stablecoin arb, Max 0.75% exposure',
                root: 'TEE Attested • Nitro Enclaves',
                status: 'Quarantined',
              },
            ].map((row) => (
              <div
                key={row.nhi}
                className="grid grid-cols-1 gap-4 border-b border-gray-200 px-6 py-4 text-sm text-gray-700 md:grid-cols-4"
              >
                <div className="font-mono text-gray-900">{row.nhi}</div>
                <div>{row.permissions}</div>
                <div>{row.root}</div>
                <div className={row.status === 'Active' ? 'text-emerald-700' : 'text-amber-700'}>
                  {row.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
