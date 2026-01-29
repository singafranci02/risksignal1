'use client'

import { Shield, MoreVertical, Power, Edit, Trash2 } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface PolicyManagerProps {
  policies: any[]
}

export function PolicyManager({ policies }: PolicyManagerProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-black shadow-2xl">
      <div className="border-b border-zinc-800 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">
              Policy Manager
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              {policies.length} active monitoring rule{policies.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button className="rounded-lg border border-zinc-800 bg-zinc-900 p-2 hover:bg-zinc-800 transition-colors">
            <MoreVertical className="h-4 w-4 text-zinc-400" />
          </button>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-auto">
        {policies.length === 0 ? (
          <div className="p-8 text-center">
            <Shield className="mx-auto h-12 w-12 text-zinc-600" />
            <p className="mt-4 text-sm font-medium text-zinc-400">
              No policies configured
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              Create your first monitoring rule
            </p>
            <button className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-lg transition-transform hover:scale-105">
              Create Policy
            </button>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800 p-4">
            {policies.map((policy) => (
              <div
                key={policy.id}
                className="group py-4 first:pt-0 last:pb-0"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-white p-2 shadow-md">
                    <Shield className="h-4 w-4 text-black" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-white truncate">
                          {policy.policy_name}
                        </h3>
                        <p className="mt-0.5 text-xs text-zinc-500">
                          {policy.policy_type.replace('_', ' ')}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        {policy.is_active ? (
                          <span className="flex h-2 w-2 rounded-full bg-white">
                            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-zinc-400 opacity-75"></span>
                          </span>
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-zinc-700"></span>
                        )}
                      </div>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-md border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-xs font-medium text-zinc-300">
                        {policy.severity}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {formatDistanceToNow(new Date(policy.created_at), { addSuffix: true })}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                      <button className="flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-300 hover:bg-zinc-800">
                        <Edit className="h-3 w-3" />
                        Edit
                      </button>
                      <button className="flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-300 hover:bg-zinc-800">
                        <Power className="h-3 w-3" />
                        {policy.is_active ? 'Disable' : 'Enable'}
                      </button>
                      <button className="flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-300 hover:bg-zinc-800">
                        <Trash2 className="h-3 w-3" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
