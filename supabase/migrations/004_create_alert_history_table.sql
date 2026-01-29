-- Migration: Create alert_history table for notification audit trail
-- Description: Tracks all alert delivery attempts across multiple channels

CREATE TYPE alert_channel AS ENUM (
  'EMAIL',
  'SMS',
  'SLACK',
  'WEBHOOK',
  'PUSH_NOTIFICATION'
);

CREATE TYPE alert_status AS ENUM (
  'PENDING',
  'SENT',
  'DELIVERED',
  'FAILED',
  'BOUNCED',
  'SUPPRESSED'
);

CREATE TABLE IF NOT EXISTS alert_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  risk_event_id UUID NOT NULL REFERENCES risk_events(id) ON DELETE CASCADE,
  channel alert_channel NOT NULL,
  recipient TEXT NOT NULL,
  status alert_status NOT NULL DEFAULT 'PENDING',
  message_content TEXT,
  metadata JSONB DEFAULT '{}',
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  delivered_at TIMESTAMPTZ,
  failed_at TIMESTAMPTZ,
  error_message TEXT,
  retry_count INTEGER DEFAULT 0,
  
  -- Constraints
  CONSTRAINT valid_recipient CHECK (LENGTH(recipient) > 0),
  CONSTRAINT valid_metadata CHECK (jsonb_typeof(metadata) = 'object'),
  CONSTRAINT max_retries CHECK (retry_count <= 5)
);

-- Indexes for delivery tracking and analytics
CREATE INDEX idx_alert_history_risk_event_id ON alert_history(risk_event_id);
CREATE INDEX idx_alert_history_channel ON alert_history(channel);
CREATE INDEX idx_alert_history_status ON alert_history(status);
CREATE INDEX idx_alert_history_sent_at ON alert_history(sent_at DESC);
CREATE INDEX idx_alert_history_recipient ON alert_history(recipient);
CREATE INDEX idx_alert_history_failed ON alert_history(status, sent_at) WHERE status = 'FAILED';

-- Composite index for deduplication checks
CREATE INDEX idx_alert_history_event_channel ON alert_history(risk_event_id, channel, sent_at DESC);

-- Enable Row Level Security
ALTER TABLE alert_history ENABLE ROW LEVEL SECURITY;

-- RLS Policies (inherit from risk_events → policies)
CREATE POLICY "Users can view their alert history"
  ON alert_history FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM risk_events re
      JOIN policies p ON p.id = re.policy_id
      WHERE re.id = alert_history.risk_event_id
      AND p.user_id = auth.uid()
    )
  );

CREATE POLICY "System can insert alerts"
  ON alert_history FOR INSERT
  WITH CHECK (TRUE); -- Edge function handles this

CREATE POLICY "System can update alerts"
  ON alert_history FOR UPDATE
  USING (TRUE); -- For status updates from webhooks

-- Function to check if alert should be rate-limited
CREATE OR REPLACE FUNCTION should_rate_limit_alert(
  target_event_id UUID,
  target_channel alert_channel,
  lookback_minutes INTEGER DEFAULT 60
)
RETURNS BOOLEAN AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO recent_count
  FROM alert_history
  WHERE risk_event_id = target_event_id
    AND channel = target_channel
    AND status IN ('SENT', 'DELIVERED')
    AND sent_at > NOW() - (lookback_minutes || ' minutes')::INTERVAL;
  
  RETURN recent_count >= 3; -- Max 3 alerts per hour per channel
END;
$$ LANGUAGE plpgsql STABLE;

-- Function to get alert delivery rate
CREATE OR REPLACE FUNCTION get_alert_delivery_rate(
  hours_ago INTEGER DEFAULT 24
)
RETURNS NUMERIC AS $$
DECLARE
  total_sent INTEGER;
  total_delivered INTEGER;
BEGIN
  SELECT COUNT(*) INTO total_sent
  FROM alert_history
  WHERE sent_at > NOW() - (hours_ago || ' hours')::INTERVAL
    AND status IN ('SENT', 'DELIVERED', 'FAILED');
  
  SELECT COUNT(*) INTO total_delivered
  FROM alert_history
  WHERE sent_at > NOW() - (hours_ago || ' hours')::INTERVAL
    AND status = 'DELIVERED';
  
  IF total_sent = 0 THEN
    RETURN 0;
  END IF;
  
  RETURN (total_delivered::NUMERIC / total_sent::NUMERIC) * 100;
END;
$$ LANGUAGE plpgsql STABLE;

-- Function to retry failed alerts
CREATE OR REPLACE FUNCTION retry_failed_alerts()
RETURNS INTEGER AS $$
DECLARE
  retried_count INTEGER;
BEGIN
  UPDATE alert_history
  SET 
    status = 'PENDING',
    retry_count = retry_count + 1,
    metadata = jsonb_set(
      COALESCE(metadata, '{}'),
      '{retried_at}',
      to_jsonb(NOW())
    )
  WHERE status = 'FAILED'
    AND retry_count < 5
    AND sent_at > NOW() - INTERVAL '1 hour';
  
  GET DIAGNOSTICS retried_count = ROW_COUNT;
  RETURN retried_count;
END;
$$ LANGUAGE plpgsql;

-- Comments for documentation
COMMENT ON TABLE alert_history IS 'Audit log of all notification delivery attempts with status tracking';
COMMENT ON COLUMN alert_history.metadata IS 'Provider-specific data (e.g., {"message_id": "msg_123", "provider": "resend"})';
COMMENT ON COLUMN alert_history.retry_count IS 'Number of delivery retry attempts (max 5)';
COMMENT ON FUNCTION should_rate_limit_alert IS 'Returns true if alert should be suppressed due to rate limiting';
