'use client'

import { useState } from 'react'
import { X, Download, Copy, CheckCircle2, Terminal, ExternalLink } from 'lucide-react'

interface AddAgentModalProps {
  userId: string
  onClose: () => void
  onAgentAdded: (agent: any) => void
}

export function AddAgentModal({ userId, onClose, onAgentAdded }: AddAgentModalProps) {
  const [step, setStep] = useState(1)
  const [agentName, setAgentName] = useState('')
  const [broker, setBroker] = useState('') 
  const [copiedToken, setCopiedToken] = useState(false)
  
  // Generate a unique token for this agent
  const bridgeToken = `kuneo_${userId.slice(0, 8)}_${Date.now().toString(36)}`

  const handleCopyToken = async () => {
    try {
      await navigator.clipboard.writeText(bridgeToken)
      setCopiedToken(true)
      setTimeout(() => setCopiedToken(false), 2000)
    } catch {
      setCopiedToken(false)
    }
  }

  const handleFinish = () => {
    // Here you would actually save to database
    const newAgent = {
      id: Date.now().toString(),
      name: agentName,
      broker: broker,
      status: 'inactive',
      uptime: '0%',
      latency: '--',
      trades: '0',
      token: bridgeToken,
      created_at: new Date().toISOString()
    }
    onAgentAdded(newAgent)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Connect MT5 Trading Agent
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Step {step} of 3 · Set up secure telemetry bridge
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Agent Name
                </label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  placeholder="e.g., Main Trading Bot"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Broker Name
                </label>
                <input
                  type="text"
                  value={broker}
                  onChange={(e) => setBroker(e.target.value)}
                  placeholder="e.g., IC Markets, Pepperstone, etc."
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Important:</strong> Your strategy code and broker credentials 
                  stay private on your machine. We only receive anonymized telemetry for risk monitoring.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Download className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      Download Kuneo Bridge
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Install the lightweight telemetry bridge for MetaTrader 5
                    </p>
                    <button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                      <Download className="h-4 w-4" />
                      Download Bridge (v1.2.0)
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Your Bridge Token (Read-Only)
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={bridgeToken}
                    readOnly
                    className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 font-mono text-sm text-gray-900"
                  />
                  <button
                    onClick={handleCopyToken}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {copiedToken ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  This token is scoped to read-only telemetry. It cannot execute trades or access your credentials.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <Terminal className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      Install in MetaTrader 5
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Follow these steps to complete the setup:
                    </p>
                    <ol className="mt-4 space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                          1
                        </span>
                        <span>Open MetaTrader 5 and go to <strong>File → Open Data Folder</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                          2
                        </span>
                        <span>Navigate to <strong>MQL5 → Experts</strong> and paste the Kuneo Bridge EA</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                          3
                        </span>
                        <span>Restart MT5 and attach the EA to any chart</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                          4
                        </span>
                        <span>Paste your bridge token when prompted and enable <strong>Allow WebRequest</strong></span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div className="text-sm text-gray-700">
                    Once connected, your agent will appear in the dashboard with live telemetry. 
                    You can configure risk policies and compliance rules from the <strong>Policies</strong> tab.
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                <ExternalLink className="h-4 w-4" />
                View full setup documentation
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-200 p-6">
          <button
            onClick={() => {
              if (step > 1) setStep(step - 1)
            }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              step === 1
                ? 'cursor-not-allowed text-gray-400'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            disabled={step === 1}
          >
            Back
          </button>

          {step < 3 ? (
            <button
              onClick={() => {
                if (step === 1 && (!agentName || !broker)) return
                setStep(step + 1)
              }}
              disabled={step === 1 && (!agentName || !broker)}
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Finish Setup
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
