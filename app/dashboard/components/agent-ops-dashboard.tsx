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
      <div className="rounded-xl border border-zinc-800 bg-black p-6 shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Agent Operations Console
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Designed for MetaTrader 5 workflows. No strategy code or broker credentials are stored — only signed, read-only telemetry.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-200">
              Operational
            </span>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.label}
                className="rounded-lg border border-zinc-800 bg-zinc-900 p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {metric.description}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-2">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Runtime + Guardrails */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-zinc-800 bg-black p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">
                Broker Runtime & Integrity
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Live status from the MT5 bridge without exposing private strategy logic.
              </p>
            </div>
          <div className="rounded-lg bg-white p-2">
            <Terminal className="h-5 w-5 text-black" />
          </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Shield className="h-4 w-4" />
                Secure Tunnel
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Encrypted telemetry stream with rotating keys.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Terminal className="h-4 w-4" />
                Strategy Runtime
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Running inside user-owned environment. No code upload required.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Clock className="h-4 w-4" />
                Session Health
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                4 reconnects in last 24h · Average 12s recovery.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Lock className="h-4 w-4" />
                Data Scope
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Only execution metadata, fills, and risk signals are shared.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-black p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">
                Risk Guardrails
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Enforced without touching your strategy code.
              </p>
            </div>
            <div className="rounded-lg bg-white p-2">
              <Shield className="h-5 w-5 text-black" />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {guardrails.map((rule) => (
              <div
                key={rule.label}
                className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    {rule.label}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {rule.value}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-semibold text-zinc-300">
                  <CheckCircle2 className="h-3 w-3" />
                  {rule.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secure MT5 Bridge Setup */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-zinc-800 bg-black p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">
                Secure MT5 Bridge Setup
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Connect once, share only execution metadata. Strategy code and broker credentials never leave your machine.
              </p>
            </div>
            <div className="rounded-lg bg-white p-2">
              <Link2 className="h-5 w-5 text-black" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Download className="h-4 w-4" />
                Step 1 · Download Bridge
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Install the lightweight MT5 telemetry bridge.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <KeyRound className="h-4 w-4" />
                Step 2 · Generate Token
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Read-only token scoped to risk signals and fills.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Terminal className="h-4 w-4" />
                Step 3 · Paste into MT5
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Start streaming telemetry in under 60 seconds.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-lg border border-zinc-800 bg-zinc-900 p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Read-only Bridge Token
              </p>
              <p className="mt-1 font-mono text-sm text-white">
                {bridgeToken}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-200 transition-colors hover:bg-zinc-800"
            >
              {copied ? 'Copied' : 'Copy Token'}
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-black p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">
                Zero-Knowledge Privacy
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                We only receive the signals needed to verify operational health.
              </p>
            </div>
            <div className="rounded-lg bg-white p-2">
              <Lock className="h-5 w-5 text-black" />
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
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300"
              >
                <CheckCircle2 className="h-4 w-4 text-white" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Telemetry */}
      <div className="rounded-xl border border-zinc-800 bg-black p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">
              Execution Telemetry
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Health signals, execution metadata, and risk compliance in real time.
            </p>
          </div>
          <div className="rounded-lg bg-white p-2">
            <BarChart3 className="h-5 w-5 text-black" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {telemetry.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-zinc-800 bg-zinc-900 p-4"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {item.label}
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                {item.value}
              </p>
              <div className="mt-2 inline-flex items-center gap-1 text-xs text-zinc-400">
                {item.status === 'Healthy' ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <AlertTriangle className="h-3 w-3" />
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
