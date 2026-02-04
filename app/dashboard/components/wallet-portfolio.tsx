'use client'

import { Wallet, TrendingUp, DollarSign, ExternalLink, ShieldCheck } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { formatDistanceToNow } from 'date-fns'

interface WalletPortfolioProps {
  wallets: any[]
  snapshots: any[]
}

export function WalletPortfolio({ wallets, snapshots }: WalletPortfolioProps) {
  // Mock data for chart
  const chartData = [
    { time: '00:00', value: 4200000 },
    { time: '04:00', value: 4350000 },
    { time: '08:00', value: 4180000 },
    { time: '12:00', value: 4520000 },
    { time: '16:00', value: 4680000 },
    { time: '20:00', value: 4750000 },
    { time: 'Now', value: 4820000 },
  ]

  const concentration = [
    { asset: 'BTC', level: 5, value: '38%' },
    { asset: 'ETH', level: 4, value: '24%' },
    { asset: 'SOL', level: 3, value: '14%' },
    { asset: 'USD', level: 2, value: '12%' },
    { asset: 'ALT', level: 1, value: '12%' },
  ]

  const totalValue = wallets.reduce((sum, w) => sum + (w.min_balance_usd || 0), 0)

  return (
    <div className="rounded-2xl border border-slate-800/40 bg-white/70 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="border-b border-slate-800/20 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Portfolio Overview
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Real-time wallet monitoring across {wallets.length} address{wallets.length !== 1 ? 'es' : ''}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-500">
              Total Monitored Value
            </p>
            <p className="text-2xl font-semibold tracking-tight text-slate-900 font-mono">
              ${totalValue.toLocaleString()}
            </p>
            <div className="mt-1 flex items-center justify-end gap-1 text-blue-600">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-semibold font-mono">+12.5% (24h)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-[2fr,1fr]">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.8} />
              <XAxis 
                dataKey="time" 
                stroke="#94a3b8" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#94a3b8" 
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  color: '#0f172a'
                }}
                formatter={(value: any) => [
                  `$${value.toLocaleString()}`,
                  'Monitored Value · Compliance Check: PASS'
                ]}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#2563eb" 
                strokeWidth={2}
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Concentration Heatmap */}
        <div className="rounded-lg border border-slate-800/20 bg-white/80 p-4 shadow-sm backdrop-blur-md">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Concentration Heatmap
            </p>
            <ShieldCheck className="h-4 w-4 text-blue-600" />
          </div>
          <div className="mt-4 space-y-3">
            {concentration.map((row) => (
              <div key={row.asset} className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">{row.asset}</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span
                        key={`${row.asset}-${idx}`}
                        className={`h-2.5 w-2.5 rounded-sm ${
                          idx < row.level ? 'bg-blue-600' : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-slate-500">{row.value}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Risk-adjusted performance balanced across top allocations.
          </p>
        </div>
      </div>

      {/* Wallet List */}
      <div className="border-t border-slate-800/20">
        <div className="p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Monitored Wallets
          </h3>
          
          {wallets.length === 0 ? (
            <div className="rounded-lg border-2 border-dashed border-slate-200 p-8 text-center">
              <Wallet className="mx-auto h-12 w-12 text-slate-300" />
              <p className="mt-2 text-sm font-medium text-slate-500">
                No wallets monitored yet
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Add your first wallet to start tracking
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="group flex items-center justify-between rounded-lg border border-slate-800/20 bg-white/80 p-4 transition-all hover:border-slate-800/40 hover:shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                      <Wallet className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-mono text-sm font-medium text-slate-900">
                          {wallet.wallet_address.slice(0, 6)}...{wallet.wallet_address.slice(-4)}
                        </p>
                        <button className="opacity-0 transition-opacity group-hover:opacity-100">
                          <ExternalLink className="h-3 w-3 text-slate-400 hover:text-slate-900" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-500">
                        Added {formatDistanceToNow(new Date(wallet.created_at), { addSuffix: true })}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-slate-400" />
                      <p className="text-sm font-semibold text-slate-900 font-mono">
                        ${wallet.min_balance_usd?.toLocaleString() || '0'}
                      </p>
                    </div>
                    <p className="text-xs text-slate-500">
                      Threshold
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
