'use client'

import { useState } from 'react'
import { X, Copy, CheckCircle2, Code, Link2, ExternalLink } from 'lucide-react'

interface AddAgentModalProps {
  userId: string
  onClose: () => void
  onAgentAdded: (agent: any) => void
}

export function AddAgentModal({ userId, onClose, onAgentAdded }: AddAgentModalProps) {
  const [step, setStep] = useState(1)
  const [agentName, setAgentName] = useState('')
  const [broker, setBroker] = useState('')
  const [connectionMethod, setConnectionMethod] = useState<'webhook' | 'broker-api'>('webhook')
  const [copiedWebhook, setCopiedWebhook] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)
  
  // Generate unique webhook URL and API key for this agent
  const apiKey = `kuneo_live_${userId.slice(0, 8)}_${Date.now().toString(36)}`
  const webhookUrl = `https://api.kuneo.tech/v1/agents/telemetry/${apiKey}`

  const handleCopyWebhook = async () => {
    try {
      await navigator.clipboard.writeText(webhookUrl)
      setCopiedWebhook(true)
      setTimeout(() => setCopiedWebhook(false), 2000)
    } catch {
      setCopiedWebhook(false)
    }
  }

  const handleCopyCode = async () => {
    const code = connectionMethod === 'webhook' ? mql5Code : pythonCode
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    } catch {
      setCopiedCode(false)
    }
  }

  const handleFinish = () => {
    // Save to database
    const newAgent = {
      id: Date.now().toString(),
      name: agentName,
      broker: broker,
      status: 'inactive',
      uptime: '0%',
      latency: '--',
      trades: '0',
      apiKey: apiKey,
      webhookUrl: webhookUrl,
      connectionMethod: connectionMethod,
      created_at: new Date().toISOString()
    }
    onAgentAdded(newAgent)
  }

  // Code snippets
  const mql5Code = `// Add this to your MT5 Expert Advisor
string KUNEO_WEBHOOK = "${webhookUrl}";

void SendKuneoTelemetry() {
   string payload = "{";
   payload += "\\"balance\\":" + DoubleToString(AccountInfoDouble(ACCOUNT_BALANCE), 2) + ",";
   payload += "\\"equity\\":" + DoubleToString(AccountInfoDouble(ACCOUNT_EQUITY), 2) + ",";
   payload += "\\"margin\\":" + DoubleToString(AccountInfoDouble(ACCOUNT_MARGIN), 2) + ",";
   payload += "\\"positions\\":" + IntegerToString(PositionsTotal());
   payload += "}";
   
   char data[], result[];
   StringToCharArray(payload, data);
   string headers = "Content-Type: application/json\\r\\n";
   WebRequest("POST", KUNEO_WEBHOOK, headers, 5000, data, result, headers);
}

// Call SendKuneoTelemetry() every 60 seconds or on trade events`

  const pythonCode = `# Add this to your Python trading bot
import requests
import time

KUNEO_WEBHOOK = "${webhookUrl}"

def send_kuneo_telemetry(balance, equity, positions):
    payload = {
        "balance": balance,
        "equity": equity,
        "positions": positions,
        "timestamp": int(time.time())
    }
    requests.post(KUNEO_WEBHOOK, json=payload, timeout=5)

# Call every 60 seconds or on trade events
# send_kuneo_telemetry(account.balance, account.equity, len(open_positions))`

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
                  Broker / Platform
                </label>
                <input
                  type="text"
                  value={broker}
                  onChange={(e) => setBroker(e.target.value)}
                  placeholder="e.g., IC Markets, Pepperstone, Interactive Brokers"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Connection Method
                </label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConnectionMethod('webhook')}
                    className={`rounded-lg border p-4 text-left transition-all ${
                      connectionMethod === 'webhook'
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20'
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <Code className="h-5 w-5 text-gray-700 mb-2" />
                    <div className="font-semibold text-gray-900">Webhook</div>
                    <div className="mt-1 text-xs text-gray-600">
                      Add code snippet to your EA/bot
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setConnectionMethod('broker-api')}
                    className={`rounded-lg border p-4 text-left transition-all ${
                      connectionMethod === 'broker-api'
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20'
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    <Link2 className="h-5 w-5 text-gray-700 mb-2" />
                    <div className="font-semibold text-gray-900">Broker API</div>
                    <div className="mt-1 text-xs text-gray-600">
                      Connect via broker's API (if supported)
                    </div>
                  </button>
                </div>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Zero-Knowledge:</strong> Your strategy code and credentials 
                  stay on your machine. We only receive read-only account metrics (balance, positions, etc.).
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Your Webhook URL (Read-Only)
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={webhookUrl}
                    readOnly
                    className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 font-mono text-xs text-gray-900"
                  />
                  <button
                    onClick={handleCopyWebhook}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {copiedWebhook ? (
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
                  This webhook can only receive data. It cannot execute trades or access your credentials.
                </p>
              </div>

              {connectionMethod === 'webhook' && (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Code Snippet (MQL5 or Python)
                    </h3>
                    <button
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {copiedCode ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copy Code
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-xs text-gray-100">
                    <code>{mql5Code}</code>
                  </pre>
                  <p className="mt-3 text-xs text-gray-600">
                    Add this function to your existing MT5 Expert Advisor or Python bot. 
                    Call it every 60 seconds or after trade events.
                  </p>
                </div>
              )}

              {connectionMethod === 'broker-api' && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Coming Soon:</strong> Direct broker API integration 
                    (MetaQuotes API, Interactive Brokers TWS, etc.) will be available in the next release.
                    <br /><br />
                    For now, use the <strong>Webhook</strong> method to connect your agent.
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      Integration Complete
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Your agent is registered. Here's what happens next:
                    </p>
                    <ol className="mt-4 space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                          1
                        </span>
                        <span>
                          Add the webhook code to your existing MT5 EA or trading bot
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                          2
                        </span>
                        <span>
                          For MT5: Enable <strong>Allow WebRequest</strong> in Tools → Options → Expert Advisors, 
                          and add <code className="rounded bg-gray-200 px-1 py-0.5 font-mono text-xs">https://api.kuneo.tech</code> to allowed URLs
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                          3
                        </span>
                        <span>
                          Start your trading bot - telemetry will begin flowing to your dashboard within 60 seconds
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                          4
                        </span>
                        <span>
                          Configure risk policies and compliance rules from the dashboard
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div className="text-sm text-gray-700">
                    <strong>What we receive:</strong> Balance, equity, margin, open positions count (sent every 60s or on trade events).
                    <br />
                    <strong>What stays private:</strong> Your strategy logic, broker credentials, API keys, trade signals.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://kuneo.tech/docs/webhook-integration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  View integration docs
                </a>
                <span className="text-gray-400">·</span>
                <a
                  href="https://kuneo.tech/docs/webhook-examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  <Code className="h-4 w-4" />
                  More code examples
                </a>
              </div>
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
