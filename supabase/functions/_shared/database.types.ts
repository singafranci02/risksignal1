// Database types for Supabase Edge Functions
// This is a simplified version - in production, generate with: npx supabase gen types typescript

export type Database = {
  public: {
    Tables: {
      policies: {
        Row: {
          id: string
          user_id: string
          wallet_address: string
          policy_type: string
          policy_name: string
          description: string | null
          config: any
          severity: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['policies']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['policies']['Insert']>
      }
      risk_events: {
        Row: {
          id: string
          policy_id: string
          wallet_address: string
          event_type: string
          severity: string
          status: string
          violation_data: any
          metadata: any
          detected_at: string
          acknowledged_at: string | null
          resolved_at: string | null
        }
        Insert: Omit<Database['public']['Tables']['risk_events']['Row'], 'id' | 'detected_at'>
        Update: Partial<Database['public']['Tables']['risk_events']['Insert']>
      }
      wallet_snapshots: {
        Row: {
          id: string
          wallet_address: string
          net_worth_usd: number
          snapshot_data: any
          captured_at: string
        }
        Insert: Omit<Database['public']['Tables']['wallet_snapshots']['Row'], 'id' | 'captured_at'>
        Update: Partial<Database['public']['Tables']['wallet_snapshots']['Insert']>
      }
      alert_history: {
        Row: {
          id: string
          risk_event_id: string
          channel: string
          recipient: string
          status: string
          message_content: string | null
          metadata: any
          sent_at: string
          delivered_at: string | null
          failed_at: string | null
          error_message: string | null
          retry_count: number
        }
        Insert: Omit<Database['public']['Tables']['alert_history']['Row'], 'id' | 'sent_at' | 'delivered_at' | 'failed_at'>
        Update: Partial<Database['public']['Tables']['alert_history']['Insert']>
      }
      user_preferences: {
        Row: {
          user_id: string
          email_enabled: boolean
          sms_enabled: boolean
          slack_enabled: boolean
          phone_number: string | null
          slack_webhook_url: string | null
          quiet_hours_start: string | null
          quiet_hours_end: string | null
          timezone: string
          severity_threshold: string
          alert_frequency_minutes: number
          notification_preferences: any
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['user_preferences']['Row'], 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['user_preferences']['Insert']>
      }
    }
  }
}
