-- Migration: Create user_preferences table for notification settings
-- Description: Stores per-user alert configuration and channel preferences

CREATE TABLE IF NOT EXISTS user_preferences (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email_enabled BOOLEAN DEFAULT TRUE,
  sms_enabled BOOLEAN DEFAULT FALSE,
  slack_enabled BOOLEAN DEFAULT FALSE,
  phone_number TEXT,
  slack_webhook_url TEXT,
  quiet_hours_start TIME,
  quiet_hours_end TIME,
  timezone TEXT DEFAULT 'UTC',
  severity_threshold severity_level DEFAULT 'MEDIUM',
  alert_frequency_minutes INTEGER DEFAULT 60,
  notification_preferences JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_phone CHECK (phone_number IS NULL OR phone_number ~ '^\+[1-9]\d{1,14}$'),
  CONSTRAINT valid_slack_webhook CHECK (slack_webhook_url IS NULL OR slack_webhook_url ~ '^https://hooks\.slack\.com/'),
  CONSTRAINT valid_alert_frequency CHECK (alert_frequency_minutes >= 15 AND alert_frequency_minutes <= 1440),
  CONSTRAINT valid_notification_prefs CHECK (jsonb_typeof(notification_preferences) = 'object')
);

-- Indexes
CREATE INDEX idx_user_preferences_timezone ON user_preferences(timezone);

-- Enable Row Level Security
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own preferences"
  ON user_preferences FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own preferences"
  ON user_preferences FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own preferences"
  ON user_preferences FOR UPDATE
  USING (auth.uid() = user_id);

-- Trigger to auto-update updated_at
CREATE TRIGGER update_user_preferences_updated_at
  BEFORE UPDATE ON user_preferences
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to check if alert should be sent based on user preferences
CREATE OR REPLACE FUNCTION should_send_alert(
  target_user_id UUID,
  alert_severity severity_level,
  alert_channel alert_channel
)
RETURNS BOOLEAN AS $$
DECLARE
  prefs user_preferences;
  current_time_utc TIME;
BEGIN
  SELECT * INTO prefs
  FROM user_preferences
  WHERE user_id = target_user_id;
  
  -- If no preferences, use defaults (send everything)
  IF prefs IS NULL THEN
    RETURN TRUE;
  END IF;
  
  -- Check severity threshold
  IF alert_severity::TEXT < prefs.severity_threshold::TEXT THEN
    RETURN FALSE;
  END IF;
  
  -- Check channel-specific settings
  IF alert_channel = 'EMAIL' AND NOT prefs.email_enabled THEN
    RETURN FALSE;
  END IF;
  
  IF alert_channel = 'SMS' AND (NOT prefs.sms_enabled OR prefs.phone_number IS NULL) THEN
    RETURN FALSE;
  END IF;
  
  IF alert_channel = 'SLACK' AND (NOT prefs.slack_enabled OR prefs.slack_webhook_url IS NULL) THEN
    RETURN FALSE;
  END IF;
  
  -- Check quiet hours (if configured)
  IF prefs.quiet_hours_start IS NOT NULL AND prefs.quiet_hours_end IS NOT NULL THEN
    current_time_utc := CURRENT_TIME AT TIME ZONE prefs.timezone;
    
    IF prefs.quiet_hours_start < prefs.quiet_hours_end THEN
      -- Normal case: quiet hours within same day
      IF current_time_utc BETWEEN prefs.quiet_hours_start AND prefs.quiet_hours_end THEN
        RETURN FALSE;
      END IF;
    ELSE
      -- Overnight case: quiet hours span midnight
      IF current_time_utc >= prefs.quiet_hours_start OR current_time_utc <= prefs.quiet_hours_end THEN
        RETURN FALSE;
      END IF;
    END IF;
  END IF;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql STABLE;

-- Comments
COMMENT ON TABLE user_preferences IS 'Per-user notification settings and alert delivery preferences';
COMMENT ON COLUMN user_preferences.quiet_hours_start IS 'Do not send alerts during this time window (user timezone)';
COMMENT ON COLUMN user_preferences.severity_threshold IS 'Only send alerts at or above this severity level';
COMMENT ON FUNCTION should_send_alert IS 'Returns true if alert should be delivered based on user preferences';
