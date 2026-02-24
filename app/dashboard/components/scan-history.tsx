'use client'

import { CheckCircle2, ShieldAlert } from 'lucide-react'

interface ScanEntry {
  address: string
  result: 'RED' | 'GREEN'
  reason: string
  timestamp: string
}

// Demo seed data — in production, loaded from Supabase scan_results table
const DEMO_HISTORY: ScanEntry[] = [
  {
    address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    result: 'RED',
    reason: 'Jito Bundle: 9 wallets in creation slot',
    timestamp: '2 min ago',
  },
  {
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    result: 'GREEN',
    reason: 'Token Organic',
    timestamp: '5 min ago',
  },
  {
    address: 'So11111111111111111111111111111111111111111',
    result: 'RED',
    reason: 'Sybil Cluster: Top holder 73% of supply',
    timestamp: '12 min ago',
  },
  {
    address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    result: 'RED',
    reason: 'RugCheck: Mint Authority still active',
    timestamp: '28 min ago',
  },
  {
    address: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    result: 'GREEN',
    reason: 'Token Organic',
    timestamp: '41 min ago',
  },
  {
    address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    result: 'RED',
    reason: 'Jito Bundle: 5 wallets in creation slot',
    timestamp: '1 hr ago',
  },
  {
    address: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
    result: 'GREEN',
    reason: 'Token Organic',
    timestamp: '2 hr ago',
  },
  {
    address: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
    result: 'RED',
    reason: 'RugCheck: Freeze Authority still active',
    timestamp: '3 hr ago',
  },
]

function truncateAddress(addr: string): string {
  if (addr.length <= 16) return addr
  return `${addr.slice(0, 8)}…${addr.slice(-6)}`
}

export function ScanHistory() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-100 px-6 py-5">
        <h2 className="text-lg font-semibold text-gray-900">Scan History</h2>
        <p className="mt-0.5 text-sm text-gray-500">Recent circuit breaker decisions</p>
      </div>

      <div className="divide-y divide-gray-50">
        {DEMO_HISTORY.map((entry, i) => (
          <div key={i} className="flex items-center gap-4 px-6 py-4">
            {/* Result badge */}
            {entry.result === 'RED' ? (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100">
                <ShieldAlert className="h-4 w-4 text-red-600" />
              </div>
            ) : (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              </div>
            )}

            {/* Address + reason */}
            <div className="min-w-0 flex-1">
              <p className="font-mono text-xs font-semibold text-gray-900">
                {truncateAddress(entry.address)}
              </p>
              <p className="truncate text-xs text-gray-500">{entry.reason}</p>
            </div>

            {/* Badge + time */}
            <div className="flex flex-col items-end gap-1">
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                  entry.result === 'RED'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-emerald-100 text-emerald-700'
                }`}
              >
                {entry.result === 'RED' ? 'BLOCKED' : 'APPROVED'}
              </span>
              <span className="text-[10px] text-gray-400">{entry.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 px-6 py-4">
        <p className="text-center text-xs text-gray-400">
          Demo data — connect risksignal.py telemetry to populate live history
        </p>
      </div>
    </div>
  )
}
