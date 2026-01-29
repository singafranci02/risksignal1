import { z } from 'zod'

// Event Types
export const EventTypeSchema = z.enum([
  'transaction',
  'auth',
  'log',
  'market',
  'wallet_snapshot',
  'risk_event',
])

export type EventType = z.infer<typeof EventTypeSchema>

// Base Signal Schema
export const RawSignalSchema = z.object({
  event_time: z.string().datetime(),
  source_id: z.string(),
  event_type: EventTypeSchema,
  payload: z.record(z.unknown()),
  severity: z.number().int().min(0).max(255).default(0),
  trace_id: z.string().uuid(),
  user_id: z.string().optional(),
  wallet_address: z.string().optional(),
})

export type RawSignal = z.infer<typeof RawSignalSchema>

// Transaction Signal Schema
export const TransactionSignalSchema = z.object({
  event_time: z.string().datetime(),
  trace_id: z.string().uuid(),
  user_id: z.string(),
  wallet_address: z.string(),
  transaction_hash: z.string(),
  amount: z.number(),
  currency: z.string(),
  from_address: z.string(),
  to_address: z.string(),
  chain: z.string(),
  risk_score: z.number().min(0).max(1).default(0),
  is_flagged: z.number().int().min(0).max(1).default(0),
})

export type TransactionSignal = z.infer<typeof TransactionSignalSchema>

// Wallet Snapshot Schema
export const WalletSnapshotSchema = z.object({
  captured_at: z.string().datetime(),
  wallet_address: z.string(),
  net_worth_usd: z.number(),
  token_count: z.number().int(),
  snapshot_data: z.record(z.unknown()),
})

export type WalletSnapshot = z.infer<typeof WalletSnapshotSchema>

// Risk Event Schema
export const RiskEventSchema = z.object({
  detected_at: z.string().datetime(),
  event_id: z.string().uuid(),
  policy_id: z.string().uuid(),
  wallet_address: z.string(),
  event_type: z.string(),
  severity: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  status: z.enum(['OPEN', 'ACKNOWLEDGED', 'RESOLVED', 'FALSE_POSITIVE']),
  violation_data: z.record(z.unknown()),
})

export type RiskEvent = z.infer<typeof RiskEventSchema>
