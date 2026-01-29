import { z } from 'zod'

// Enums
export const policyTypeSchema = z.enum([
  'NET_WORTH',
  'ASSET_CONCENTRATION',
  'UNAUTHORIZED_TOKEN',
  'TRANSACTION_VOLUME',
  'WALLET_AGE',
])

export const severityLevelSchema = z.enum(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'])

export const eventStatusSchema = z.enum([
  'OPEN',
  'ACKNOWLEDGED',
  'RESOLVED',
  'FALSE_POSITIVE',
])

export const alertChannelSchema = z.enum([
  'EMAIL',
  'SMS',
  'SLACK',
  'WEBHOOK',
  'PUSH_NOTIFICATION',
])

export const alertStatusSchema = z.enum([
  'PENDING',
  'SENT',
  'DELIVERED',
  'FAILED',
  'BOUNCED',
  'SUPPRESSED',
])

// Wallet Address Validation
export const ethereumAddressSchema = z
  .string()
  .trim()
  .length(42, 'Ethereum address must be 42 characters')
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid Ethereum address format')

// Policy Config Schemas
export const netWorthPolicyConfigSchema = z.object({
  type: z.literal('NET_WORTH'),
  threshold: z.number().positive('Threshold must be positive'),
  currency: z.literal('USD'),
  comparison: z.enum(['LESS_THAN', 'GREATER_THAN']),
})

export const assetConcentrationPolicyConfigSchema = z.object({
  type: z.literal('ASSET_CONCENTRATION'),
  asset_symbol: z.string().min(1).max(20).toUpperCase(),
  max_percentage: z.number().min(0).max(100, 'Percentage must be 0-100'),
  include_stablecoins: z.boolean().optional().default(false),
})

export const unauthorizedTokenPolicyConfigSchema = z.object({
  type: z.literal('UNAUTHORIZED_TOKEN'),
  whitelist: z.array(ethereumAddressSchema).min(1, 'Whitelist cannot be empty'),
  check_mode: z.enum(['STRICT', 'ALLOW_STABLECOINS', 'ALLOW_BLUECHIP']),
})

export const transactionVolumePolicyConfigSchema = z.object({
  type: z.literal('TRANSACTION_VOLUME'),
  max_transactions: z.number().int().positive(),
  time_window_hours: z.number().int().min(1).max(168), // Max 1 week
  transaction_types: z
    .array(z.enum(['SEND', 'RECEIVE', 'SWAP', 'APPROVE']))
    .optional(),
})

export const walletAgePolicyConfigSchema = z.object({
  type: z.literal('WALLET_AGE'),
  min_age_days: z.number().int().min(1),
})

export const policyConfigSchema = z.discriminatedUnion('type', [
  netWorthPolicyConfigSchema,
  assetConcentrationPolicyConfigSchema,
  unauthorizedTokenPolicyConfigSchema,
  transactionVolumePolicyConfigSchema,
  walletAgePolicyConfigSchema,
])

// Policy Creation Schema
export const createPolicySchema = z.object({
  wallet_address: ethereumAddressSchema,
  policy_type: policyTypeSchema,
  policy_name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  config: policyConfigSchema,
  severity: severityLevelSchema.default('MEDIUM'),
  is_active: z.boolean().default(true),
})

// Policy Update Schema
export const updatePolicySchema = z.object({
  policy_name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  config: policyConfigSchema.optional(),
  severity: severityLevelSchema.optional(),
  is_active: z.boolean().optional(),
})

// User Preferences Schema
export const userPreferencesSchema = z.object({
  email_enabled: z.boolean().default(true),
  sms_enabled: z.boolean().default(false),
  slack_enabled: z.boolean().default(false),
  phone_number: z
    .string()
    .regex(/^\+[1-9]\d{1,14}$/, 'Invalid E.164 phone number format')
    .nullable()
    .optional(),
  slack_webhook_url: z
    .string()
    .url()
    .startsWith('https://hooks.slack.com/', 'Invalid Slack webhook URL')
    .nullable()
    .optional(),
  quiet_hours_start: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format (HH:MM)').nullable().optional(),
  quiet_hours_end: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format (HH:MM)').nullable().optional(),
  timezone: z.string().default('UTC'),
  severity_threshold: severityLevelSchema.default('MEDIUM'),
  alert_frequency_minutes: z.number().int().min(15).max(1440).default(60),
  notification_preferences: z.record(z.unknown()).default({}),
})

// Risk Event Update Schema (for user actions)
export const updateRiskEventSchema = z.object({
  status: eventStatusSchema,
  metadata: z.record(z.unknown()).optional(),
})

// Export types
export type PolicyType = z.infer<typeof policyTypeSchema>
export type SeverityLevel = z.infer<typeof severityLevelSchema>
export type PolicyConfig = z.infer<typeof policyConfigSchema>
export type CreatePolicyInput = z.infer<typeof createPolicySchema>
export type UpdatePolicyInput = z.infer<typeof updatePolicySchema>
export type UserPreferencesInput = z.infer<typeof userPreferencesSchema>
export type UpdateRiskEventInput = z.infer<typeof updateRiskEventSchema>
