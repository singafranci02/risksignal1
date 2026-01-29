'use client'

import { Wallet, TrendingUp, DollarSign, ExternalLink } from 'lucide-react'
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

  const totalValue = wallets.reduce((sum, w) => sum + (w.min_balance_usd || 0), 0)

  return (
    <div className="rounded-xl border border-zinc-800 bg-black shadow-2xl">
      {/* Header */}
      <div className="border-b border-zinc-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              Portfolio Overview
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Real-time wallet monitoring across {wallets.length} address{wallets.length !== 1 ? 'es' : ''}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-zinc-400">
              Total Monitored Value
            </p>
            <p className="text-2xl font-bold text-white">
              ${totalValue.toLocaleString()}
            </p>
            <div className="mt-1 flex items-center justify-end gap-1 text-zinc-300">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">+12.5% (24h)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.5} />
              <XAxis 
                dataKey="time" 
                stroke="#71717a" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#71717a" 
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#000000',
                  border: '1px solid #27272a',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
                formatter={(value: any) => [`$${value.toLocaleString()}`, 'Net Worth']}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#ffffff" 
                strokeWidth={2}
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Wallet List */}
      <div className="border-t border-zinc-800">
        <div className="p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
            Monitored Wallets
          </h3>
          
          {wallets.length === 0 ? (
            <div className="rounded-lg border-2 border-dashed border-zinc-800 p-8 text-center">
              <Wallet className="mx-auto h-12 w-12 text-zinc-600" />
              <p className="mt-2 text-sm font-medium text-zinc-400">
                No wallets monitored yet
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                Add your first wallet to start tracking
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="group flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 p-4 transition-all hover:border-zinc-700"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                      <Wallet className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-mono text-sm font-medium text-white">
                          {wallet.wallet_address.slice(0, 6)}...{wallet.wallet_address.slice(-4)}
                        </p>
                        <button className="opacity-0 transition-opacity group-hover:opacity-100">
                          <ExternalLink className="h-3 w-3 text-zinc-500 hover:text-white" />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-500">
                        Added {formatDistanceToNow(new Date(wallet.created_at), { addSuffix: true })}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-zinc-500" />
                      <p className="text-sm font-semibold text-white">
                        ${wallet.min_balance_usd?.toLocaleString() || '0'}
                      </p>
                    </div>
                    <p className="text-xs text-zinc-500">
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
