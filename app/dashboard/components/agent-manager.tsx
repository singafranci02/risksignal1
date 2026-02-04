'use client'

import { useState, useEffect } from 'react'
import { Plus, Bot, Activity, Settings, Trash2, ExternalLink, Shield, Clock, BarChart3, Power } from 'lucide-react'
import { AddAgentModal } from './add-agent-modal'

interface AgentManagerProps {
  userId: string
}

export function AgentManager({ userId }: AgentManagerProps) {
  const [showAddModal, setShowAddModal] = useState(false)
  const [agents, setAgents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch agents on mount
  useEffect(() => {
    fetchAgents()
  }, [])

  const fetchAgents = async () => {
    try {
      const response = await fetch('/api/agents')
      if (response.ok) {
        const { agents: fetchedAgents } = await response.json()
        setAgents(fetchedAgents || [])
      }
    } catch (error) {
      console.error('Error fetching agents:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleHaltToggle = async (agentId: string, currentlyHalted: boolean) => {
    try {
      const response = await fetch(`/api/agents/${agentId}/halt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          halt: !currentlyHalted,
          reason: currentlyHalted ? 'Manual resume' : 'Manual halt by user'
        })
      })

      if (response.ok) {
        // Refresh agents
        fetchAgents()
      }
    } catch (error) {
      console.error('Error toggling halt:', error)
    }
  }

  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              AI Agent Operations
            </h2>
            <p className="mt-2 text-gray-600">
              Connect and monitor your MetaTrader 5 trading agents with real-time governance and risk controls.
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
          >
            <Plus className="h-4 w-4" />
            Add MT5 Agent
          </button>
        </div>

        {/* Agents List */}
        {loading ? (
          <div className="mt-8 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-2 text-sm text-gray-600">Loading agents...</p>
          </div>
        ) : agents.length === 0 ? (
          <div className="mt-8 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Bot className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              No MT5 Agents Connected
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Get started by connecting your first MetaTrader 5 trading agent. <br />
              We'll provide you with a secure bridge token and step-by-step setup instructions.
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Connect Your First Agent
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                {/* Status Indicator */}
                <div className="absolute right-4 top-4">
                  {agent.is_halted ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                      <Power className="h-3 w-3" />
                      Halted
                    </span>
                  ) : (
                    <span className="relative flex h-3 w-3">
                      {agent.status === 'active' && (
                        <>
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                        </>
                      )}
                      {agent.status === 'inactive' && (
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-gray-400"></span>
                      )}
                      {agent.status === 'error' && (
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                      )}
                    </span>
                  )}
                </div>

                {/* Agent Info */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                    <Bot className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      MetaTrader 5 · {agent.broker}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Activity className="h-3.5 w-3.5" />
                      Uptime
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {agent.last_heartbeat 
                        ? `${Math.round((Date.now() - new Date(agent.last_heartbeat).getTime()) / 1000 / 60)}m ago`
                        : 'Never'}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock className="h-3.5 w-3.5" />
                      Status
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {agent.status}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <BarChart3 className="h-3.5 w-3.5" />
                      Balance
                    </div>
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      ${agent.metadata?.last_balance?.toFixed(2) || '--'}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-2">
                  <button
                    onClick={() => handleHaltToggle(agent.id, agent.is_halted)}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      agent.is_halted
                        ? 'border-green-300 bg-green-50 text-green-700 hover:bg-green-100'
                        : 'border-red-300 bg-red-50 text-red-700 hover:bg-red-100'
                    }`}
                  >
                    <Power className="h-4 w-4" />
                    {agent.is_halted ? 'Resume' : 'Halt'}
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                    <Settings className="h-4 w-4" />
                    Config
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Card */}
        <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">
                Zero-Knowledge Architecture
              </h4>
              <p className="mt-1 text-sm text-gray-700">
                Your strategy code and broker credentials never leave your machine. 
                We only receive signed, read-only telemetry for governance and risk monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Agent Modal */}
      {showAddModal && (
        <AddAgentModal
          userId={userId}
          onClose={() => setShowAddModal(false)}
          onAgentAdded={(agent) => {
            setAgents([...agents, agent])
            setShowAddModal(false)
          }}
        />
      )}
    </>
  )
}
