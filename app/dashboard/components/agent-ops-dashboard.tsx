'use client'

import { useState } from 'react'
import { Activity, Shield, Lock, CheckCircle2, AlertTriangle, Clock, BarChart3, Terminal, Download, KeyRound, Link2 } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

export function AgentOpsDashboard() {
  const lastHeartbeat = new Date(Date.now() - 2 * 60 * 1000)
  const [copied, setCopied] = useState(false)
  const bridgeToken = 'kuneo_live_8f3d9b******9a2'

  const metrics = [
    {
      label: 'Runtime Uptime',
      value: '99.98%',
      description: 'Last 30 days',
      icon: Activity,
    },
    {
      label: 'Avg Latency',
      value: '42ms',
      description: 'Order round-trip',
      icon: BarChart3,
    },
    {
      label: 'Heartbeat',
      value: '15s',
      description: `Last ${formatDistanceToNow(lastHeartbeat, { addSuffix: true })}`,
      icon: Clock,
    },
    {
      label: 'Broker Link',
      value: 'MT5',
      description: 'Read-only telemetry',
      icon: Shield,
    },
  ]

  const guardrails = [
    { label: 'Max Drawdown', value: '12%', status: 'Enforced' },
    { label: 'Exposure Cap', value: '2.5x', status: 'Enforced' },
    { label: 'Position Limit', value: '8 instruments', status: 'Enforced' },
    { label: 'Kill Switch', value: 'Armed', status: 'Ready' },
  ]

  const integrityStatus = [
    { label: 'API Health', status: 'Healthy', tone: 'bg-emerald-500' },
    { label: 'TEE Status', status: 'Verified', tone: 'bg-emerald-500' },
    { label: 'Broker Sync', status: 'Degraded', tone: 'bg-amber-500' },
    { label: 'Telemetry Relay', status: 'Healthy', tone: 'bg-emerald-500' },
  ]

  const approvals = [
    {
      title: 'Soft Limit Override',
      detail: 'Increase max drawdown to 18% for 24h',
      signers: '2 of 4 signers',
    },
    {
      title: 'Exposure Adjustment',
      detail: 'Raise exposure cap to 3.0x on BTC',
      signers: '1 of 4 signers',
    },
  ]

  const proofFeed = [
    '0x4f12a9b1',
    '0x83be1c7a',
    '0x2d7f4aa6',
    '0x5b9c02e1',
    '0x90cd4f21',
    '0x1a6f7b3c',
  ]

  const complianceBadges = [
    { label: 'MiCA Compliant', detail: 'EU Markets in Crypto-Assets' },
    { label: 'ASIC RG 265', detail: 'Financial risk governance' },
    { label: 'SEC 17a-4', detail: 'Immutable audit trails' },
  ]

  const telemetry = [
    { label: 'Order ACK Rate', value: '99.9%', status: 'Healthy' },
    { label: 'Reject Ratio', value: '0.3%', status: 'Healthy' },
    { label: 'Risk Checks', value: '4,812/day', status: 'Normal' },
    { label: 'Session Sync', value: 'Active', status: 'Synced' },
  ]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bridgeToken)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Agent Operations Header */}
      <div className="rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Agent Operations Console
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Designed for MetaTrader 5 workflows. No strategy code or broker credentials are stored — only signed, read-only telemetry.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-slate-800/40 bg-white/80 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
              Operational
            </span>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.label}
                className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 font-mono">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {metric.description}
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-900 p-2">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            )
          })}

          {/* Proof of Compliance Feed */}
          <div className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md xl:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Hardware Attestations
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Proof of Compliance
                </p>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <Shield className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="mt-3 max-h-20 space-y-2 overflow-y-auto rounded-lg bg-slate-900 px-3 py-2">
              {proofFeed.map((hash) => (
                <div key={hash} className="flex items-center justify-between text-xs text-slate-200 font-mono">
                  <span>{hash}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Runtime + Guardrails */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                Broker Runtime & Integrity
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Live status from the MT5 bridge without exposing private strategy logic.
              </p>
            </div>
            <div className="rounded-lg bg-slate-900 p-2">
              <Terminal className="h-5 w-5 text-white" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Shield className="h-4 w-4" />
                Secure Tunnel
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Encrypted telemetry stream with rotating keys.
              </p>
            </div>
            <div className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Terminal className="h-4 w-4" />
                Strategy Runtime
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Running inside user-owned environment. No code upload required.
              </p>
            </div>
            <div className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="h-4 w-4" />
                Session Health
              </div>
              <p className="mt-2 text-xs text-slate-500">
                4 reconnects in last 24h · Average 12s recovery.
              </p>
            </div>
            <div className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Lock className="h-4 w-4" />
                Data Scope
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Only execution metadata, fills, and risk signals are shared.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {integrityStatus.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-slate-800/20 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur-md"
              >
                <span className="font-medium text-slate-700">{item.label}</span>
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.tone}`}></span>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  Risk Guardrails
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Enforced without touching your strategy code.
                </p>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <Shield className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {guardrails.map((rule) => (
                <div
                  key={rule.label}
                  className="flex items-center justify-between rounded-lg border border-slate-800/20 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {rule.label}
                    </p>
                    <p className="text-xs text-slate-500 font-mono">
                      {rule.value}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                    <CheckCircle2 className="h-3 w-3" />
                    {rule.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  Pending Approvals
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Human-in-the-Loop overrides require four-eyes sign-off.
                </p>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {approvals.map((approval) => (
                <div key={approval.title} className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{approval.title}</p>
                      <p className="mt-1 text-xs text-slate-500">{approval.detail}</p>
                      <p className="mt-2 text-xs font-mono text-slate-500">{approval.signers}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="rounded-md bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        Approve
                      </button>
                      <button className="rounded-md border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  Intent vs. Execution Drift
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Divergence between strategy intent and live execution.
                </p>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <Activity className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <svg className="h-12 w-32" viewBox="0 0 120 40" fill="none">
                <path
                  d="M2 30 L18 26 L34 28 L50 20 L66 22 L82 12 L98 16 L118 8"
                  stroke="#2563eb"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Drift Index
                </p>
                <p className="text-lg font-semibold tracking-tight text-slate-900 font-mono">
                  0.42%
                </p>
                <p className="text-xs text-emerald-600">Within tolerance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secure MT5 Bridge Setup */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                Secure MT5 Bridge Setup
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Connect once, share only execution metadata. Strategy code and broker credentials never leave your machine.
              </p>
            </div>
            <div className="rounded-lg bg-slate-900 p-2">
              <Link2 className="h-5 w-5 text-white" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Download className="h-4 w-4" />
                Step 1 · Download Bridge
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Install the lightweight MT5 telemetry bridge.
              </p>
            </div>
            <div className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <KeyRound className="h-4 w-4" />
                Step 2 · Generate Token
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Read-only token scoped to risk signals and fills.
              </p>
            </div>
            <div className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Terminal className="h-4 w-4" />
                Step 3 · Paste into MT5
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Start streaming telemetry in under 60 seconds.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Read-only Bridge Token
              </p>
              <p className="mt-1 font-mono text-sm text-slate-900">
                {bridgeToken}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="rounded-lg border border-slate-800/30 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition-colors hover:bg-slate-50"
            >
              {copied ? 'Copied' : 'Copy Token'}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  Zero-Knowledge Privacy
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  We only receive the signals needed to verify operational health.
                </p>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <Lock className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                'No strategy code uploads',
                'No broker credentials stored',
                'Read-only execution metadata',
                'Risk analytics derived locally',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-slate-800/20 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur-md"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  Compliance Certifications
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Verified governance frameworks and audit readiness.
                </p>
              </div>
              <div className="rounded-lg bg-slate-900 p-2">
                <Shield className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {complianceBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center justify-between rounded-lg border border-slate-800/20 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur-md"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{badge.label}</p>
                    <p className="text-xs text-slate-500">{badge.detail}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry */}
      <div className="rounded-2xl border border-slate-800/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
              Execution Telemetry
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Health signals, execution metadata, and risk compliance in real time.
            </p>
          </div>
          <div className="rounded-lg bg-slate-900 p-2">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {telemetry.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-slate-900 font-mono">
                {item.value}
              </p>
              <div className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500">
                {item.status === 'Healthy' ? (
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                ) : (
                  <AlertTriangle className="h-3 w-3 text-amber-500" />
                )}
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
