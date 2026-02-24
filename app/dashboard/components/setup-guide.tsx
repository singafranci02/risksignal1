'use client'

import { CheckCircle2, Terminal } from 'lucide-react'

interface SetupStep {
  step: number
  title: string
  code?: string
  note?: string
}

const STEPS: SetupStep[] = [
  {
    step: 1,
    title: 'Copy the kuneoclaw/ folder',
    code: 'cp -r kuneoclaw/ ~/your-openclaw-project/',
    note: 'Or clone directly from the repo.',
  },
  {
    step: 2,
    title: 'Install Python dependencies',
    code: 'pip install -r kuneoclaw/requirements.txt',
  },
  {
    step: 3,
    title: 'Set your Helius RPC key',
    code: 'echo "HELIUS_RPC_URL=https://mainnet.helius-rpc.com/?api-key=YOUR_HELIUS_RPC_KEY" > kuneoclaw/.env',
    note: 'Get your free key at helius.dev',
  },
  {
    step: 4,
    title: 'Copy SKILL.md into OpenClaw',
    code: 'cp kuneoclaw/SKILL.md ~/your-openclaw-project/skills/',
    note: 'OpenClaw reads this to enforce the no-direct-trade constraint.',
  },
  {
    step: 5,
    title: 'Test the circuit breaker',
    code: 'python3 kuneoclaw/risksignal.py <CONTRACT_ADDRESS>',
    note: 'Should print 🔴 FATAL ERROR or 🟢 SUCCESS.',
  },
]

export function SetupGuide() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-100 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
            <Terminal className="h-4 w-4 text-slate-700" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Plug In the Helmet</h2>
            <p className="text-sm text-gray-500">5-step local setup guide</p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-50">
        {STEPS.map((s) => (
          <div key={s.step} className="px-6 py-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                {s.step}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                {s.code && (
                  <div className="mt-2 overflow-x-auto rounded-lg bg-slate-950 px-4 py-2.5">
                    <code className="whitespace-nowrap font-mono text-xs text-emerald-400">
                      {s.code}
                    </code>
                  </div>
                )}
                {s.note && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-400">
                    <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-500" />
                    {s.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 px-6 py-4">
        <p className="text-xs text-gray-400">
          Once set up, OpenClaw reads SKILL.md and will refuse to trade without running risksignal.py first.
        </p>
      </div>
    </div>
  )
}
