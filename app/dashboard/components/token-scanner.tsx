'use client'

import { useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Search,
  ShieldAlert,
  ShieldCheck,
  X,
} from 'lucide-react'

interface CheckDetail {
  passed: boolean
  detail: string
}

interface ScanResult {
  address: string
  result: 'RED' | 'GREEN'
  reason: string | null
  checks: {
    jito: CheckDetail
    sybil: CheckDetail
    rugcheck: CheckDetail
  }
  scannedAt: string
  rawOutput: string
}

const CHECK_LABELS: Record<keyof ScanResult['checks'], string> = {
  jito: 'Jito Bundle Check',
  sybil: 'Sybil Cluster Check',
  rugcheck: 'RugCheck API',
}

function truncateAddress(addr: string): string {
  if (addr.length <= 16) return addr
  return `${addr.slice(0, 8)}…${addr.slice(-8)}`
}

export function TokenScanner() {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ScanResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleScan() {
    const trimmed = address.trim()
    if (!trimmed) return

    setLoading(true)
    setResult(null)
    setError(null)

    try {
      const res = await fetch('/api/scan-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: trimmed }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Scan failed. Check the address and try again.')
        return
      }

      setResult(data as ScanResult)
    } catch {
      setError('Network error — could not reach the scanner. Check your connection.')
    } finally {
      setLoading(false)
    }
  }

  function handleClear() {
    setAddress('')
    setResult(null)
    setError(null)
  }

  const isValid =
    address.trim().length >= 32 &&
    address.trim().length <= 44 &&
    /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/.test(
      address.trim()
    )

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
      {/* Header */}
      <div className="border-b border-gray-100 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
            <ShieldAlert className="h-5 w-5 text-blue-300" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">KuneoClaw Circuit Breaker</h2>
            <p className="text-sm text-slate-400">
              Paste a Solana contract address — we run all three heuristic checks before you trade.
            </p>
          </div>
        </div>
      </div>

      {/* Scanner Input */}
      <div className="px-8 py-6">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && isValid && !loading && handleScan()}
              placeholder="Enter Solana Contract Address (e.g. 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU)"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-10 pl-11 font-mono text-sm text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 focus:outline-none"
            />
            {address && (
              <button
                onClick={handleClear}
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            onClick={handleScan}
            disabled={!isValid || loading}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Scanning…
              </>
            ) : (
              <>
                <ShieldAlert className="h-4 w-4" />
                Scan Token
              </>
            )}
          </button>
        </div>

        {/* Address validity hint */}
        {address && !isValid && (
          <p className="mt-2 text-xs text-amber-600">
            Solana addresses are 32–44 base58 characters.
          </p>
        )}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="mx-8 mb-6 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <div className="flex items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
            <p className="text-sm font-semibold text-blue-700">Running KuneoClaw checks…</p>
          </div>
          <div className="mt-4 space-y-2">
            {['Jito Bundle Check', 'Sybil Cluster Check', 'RugCheck API'].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                <span className="font-mono text-xs text-blue-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="mx-8 mb-6 rounded-xl border border-red-200 bg-red-50 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mx-8 mb-6">
          {result.result === 'RED' ? (
            <div className="overflow-hidden rounded-xl border border-red-200 bg-red-50">
              <div className="flex items-center gap-3 bg-red-600 px-6 py-4">
                <ShieldAlert className="h-6 w-6 text-white" />
                <div>
                  <p className="font-bold text-white">BLOCKED — FATAL ERROR</p>
                  <p className="font-mono text-xs text-red-200">
                    {truncateAddress(result.address)}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-sm font-semibold text-red-800">{result.reason}</p>
                <div className="space-y-3">
                  {(Object.entries(result.checks) as [keyof ScanResult['checks'], CheckDetail][]).map(
                    ([key, check]) => (
                      <div key={key} className="flex items-start gap-3">
                        {check.passed ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        ) : (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                        )}
                        <div>
                          <p className="text-xs font-semibold text-gray-700">
                            {CHECK_LABELS[key]}
                          </p>
                          <p className="text-xs text-gray-500">{check.detail}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-4 rounded-lg bg-red-100 px-4 py-3">
                  <p className="font-mono text-xs text-red-700">{result.rawOutput}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
              <div className="flex items-center gap-3 bg-emerald-600 px-6 py-4">
                <ShieldCheck className="h-6 w-6 text-white" />
                <div>
                  <p className="font-bold text-white">APPROVED — Token Organic</p>
                  <p className="font-mono text-xs text-emerald-200">
                    {truncateAddress(result.address)}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {(Object.entries(result.checks) as [keyof ScanResult['checks'], CheckDetail][]).map(
                    ([key, check]) => (
                      <div key={key} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <div>
                          <p className="text-xs font-semibold text-gray-700">
                            {CHECK_LABELS[key]}
                          </p>
                          <p className="text-xs text-gray-500">{check.detail}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-4 rounded-lg bg-emerald-100 px-4 py-3">
                  <p className="font-mono text-xs text-emerald-700">{result.rawOutput}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
