// Auto-generated types for Supabase database schema
// DO NOT EDIT MANUALLY - regenerate using: npx supabase gen types typescript

export type PolicyType =
  | 'NET_WORTH'
  | 'ASSET_CONCENTRATION'
  | 'UNAUTHORIZED_TOKEN'
  | 'TRANSACTION_VOLUME'
  | 'WALLET_AGE'

export type SeverityLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'

export type EventStatus = 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED' | 'FALSE_POSITIVE'

export type AlertChannel =
  | 'EMAIL'
  | 'SMS'
  | 'SLACK'
  | 'WEBHOOK'
  | 'PUSH_NOTIFICATION'

export type AlertStatus =
  | 'PENDING'
  | 'SENT'
  | 'DELIVERED'
  | 'FAILED'
  | 'BOUNCED'
  | 'SUPPRESSED'

// Table Types
export interface Policy {
  id: string
  user_id: string
  wallet_address: string
  policy_type: PolicyType
  policy_name: string
  description: string | null
  config: PolicyConfig
  severity: SeverityLevel
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface RiskEvent {
  id: string
  policy_id: string
  wallet_address: string
  event_type: PolicyType
  severity: SeverityLevel
  status: EventStatus
  violation_data: ViolationData
  metadata: Record<string, unknown>
  detected_at: string
  acknowledged_at: string | null
  resolved_at: string | null
}

export interface WalletSnapshot {
  id: string
  wallet_address: string
  net_worth_usd: number
  snapshot_data: SnapshotData
  captured_at: string
}

export interface AlertHistory {
  id: string
  risk_event_id: string
  channel: AlertChannel
  recipient: string
  status: AlertStatus
  message_content: string | null
  metadata: Record<string, unknown>
  sent_at: string
  delivered_at: string | null
  failed_at: string | null
  error_message: string | null
  retry_count: number
}

export interface UserPreferences {
  user_id: string
  email_enabled: boolean
  sms_enabled: boolean
  slack_enabled: boolean
  phone_number: string | null
  slack_webhook_url: string | null
  quiet_hours_start: string | null
  quiet_hours_end: string | null
  timezone: string
  severity_threshold: SeverityLevel
  alert_frequency_minutes: number
  notification_preferences: Record<string, unknown>
  created_at: string
  updated_at: string
}

// Policy Config Types (discriminated union based on policy_type)
export type PolicyConfig =
  | NetWorthPolicyConfig
  | AssetConcentrationPolicyConfig
  | UnauthorizedTokenPolicyConfig
  | TransactionVolumePolicyConfig
  | WalletAgePolicyConfig

export interface NetWorthPolicyConfig {
  type: 'NET_WORTH'
  threshold: number
  currency: 'USD'
  comparison: 'LESS_THAN' | 'GREATER_THAN'
}

export interface AssetConcentrationPolicyConfig {
  type: 'ASSET_CONCENTRATION'
  asset_symbol: string
  max_percentage: number
  include_stablecoins?: boolean
}

export interface UnauthorizedTokenPolicyConfig {
  type: 'UNAUTHORIZED_TOKEN'
  whitelist: string[]
  check_mode: 'STRICT' | 'ALLOW_STABLECOINS' | 'ALLOW_BLUECHIP'
}

export interface TransactionVolumePolicyConfig {
  type: 'TRANSACTION_VOLUME'
  max_transactions: number
  time_window_hours: number
  transaction_types?: ('SEND' | 'RECEIVE' | 'SWAP' | 'APPROVE')[]
}

export interface WalletAgePolicyConfig {
  type: 'WALLET_AGE'
  min_age_days: number
}

// Violation Data Types
export type ViolationData =
  | NetWorthViolation
  | AssetConcentrationViolation
  | UnauthorizedTokenViolation
  | TransactionVolumeViolation
  | WalletAgeViolation

export interface NetWorthViolation {
  type: 'NET_WORTH'
  current_balance: number
  threshold: number
  difference: number
  percentage_change: number
}

export interface AssetConcentrationViolation {
  type: 'ASSET_CONCENTRATION'
  asset_symbol: string
  current_percentage: number
  max_percentage: number
  total_value_usd: number
}

export interface UnauthorizedTokenViolation {
  type: 'UNAUTHORIZED_TOKEN'
  detected_tokens: Array<{
    symbol: string
    contract_address: string
    balance_usd: number
  }>
}

export interface TransactionVolumeViolation {
  type: 'TRANSACTION_VOLUME'
  transaction_count: number
  max_transactions: number
  time_window_hours: number
}

export interface WalletAgeViolation {
  type: 'WALLET_AGE'
  wallet_age_days: number
  min_age_days: number
  first_transaction_date: string
}

// Snapshot Data Types
export interface SnapshotData {
  total_networth_usd: number
  chains: ChainSnapshot[]
  tokens: TokenBalance[]
  nfts?: NFTBalance[]
  defi_positions?: DeFiPosition[]
  captured_at: string
}

export interface ChainSnapshot {
  chain: string
  native_balance: string
  native_balance_usd: number
  token_count: number
}

export interface TokenBalance {
  symbol: string
  name: string
  contract_address: string
  balance: string
  balance_usd: number
  percentage_of_portfolio: number
  chain: string
  is_spam?: boolean
}

export interface NFTBalance {
  collection_name: string
  token_id: string
  contract_address: string
  estimated_value_usd: number
  chain: string
}

export interface DeFiPosition {
  protocol_name: string
  position_type: 'LENDING' | 'LIQUIDITY' | 'STAKING' | 'VAULT'
  value_usd: number
  chain: string
}

// Database Insert Types (omit auto-generated fields)
export type PolicyInsert = Omit<Policy, 'id' | 'created_at' | 'updated_at'>
export type RiskEventInsert = Omit<RiskEvent, 'id' | 'detected_at'>
export type WalletSnapshotInsert = Omit<WalletSnapshot, 'id' | 'captured_at'>
export type AlertHistoryInsert = Omit<
  AlertHistory,
  'id' | 'sent_at' | 'delivered_at' | 'failed_at'
>
export type UserPreferencesInsert = Omit<
  UserPreferences,
  'created_at' | 'updated_at'
>

// Database Update Types (all fields optional except id)
export type PolicyUpdate = Partial<Omit<Policy, 'id' | 'user_id' | 'created_at'>>
export type RiskEventUpdate = Partial<
  Omit<RiskEvent, 'id' | 'policy_id' | 'detected_at'>
>
export type UserPreferencesUpdate = Partial<
  Omit<UserPreferences, 'user_id' | 'created_at'>
>
