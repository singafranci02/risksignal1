-- Migration: Create risk_events table for violation tracking
-- Description: Records all detected policy violations with historical context

CREATE TYPE event_status AS ENUM (
  'OPEN',
  'ACKNOWLEDGED',
  'RESOLVED',
  'FALSE_POSITIVE'
);

CREATE TABLE IF NOT EXISTS risk_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  policy_id UUID NOT NULL REFERENCES policies(id) ON DELETE CASCADE,
  wallet_address TEXT NOT NULL,
  event_type policy_type NOT NULL,
  severity severity_level NOT NULL,
  status event_status NOT NULL DEFAULT 'OPEN',
  violation_data JSONB NOT NULL,
  metadata JSONB DEFAULT '{}',
  detected_at TIMESTAMPTZ DEFAULT NOW(),
  acknowledged_at TIMESTAMPTZ,
  resolved_at TIMESTAMPTZ,
  
  -- Constraints
  CONSTRAINT valid_wallet_address CHECK (wallet_address ~ '^0x[a-fA-F0-9]{40}$'),
  CONSTRAINT valid_violation_data CHECK (jsonb_typeof(violation_data) = 'object'),
  CONSTRAINT resolved_after_detected CHECK (resolved_at IS NULL OR resolved_at >= detected_at),
  CONSTRAINT acknowledged_after_detected CHECK (acknowledged_at IS NULL OR acknowledged_at >= detected_at)
);

-- Indexes for querying and analytics
CREATE INDEX idx_risk_events_policy_id ON risk_events(policy_id);
CREATE INDEX idx_risk_events_wallet_address ON risk_events(wallet_address);
CREATE INDEX idx_risk_events_status ON risk_events(status);
CREATE INDEX idx_risk_events_detected_at ON risk_events(detected_at DESC);
CREATE INDEX idx_risk_events_severity ON risk_events(severity);
CREATE INDEX idx_risk_events_unresolved ON risk_events(status) WHERE status IN ('OPEN', 'ACKNOWLEDGED');

-- Composite index for common query patterns
CREATE INDEX idx_risk_events_wallet_status ON risk_events(wallet_address, status);

-- Enable Row Level Security
ALTER TABLE risk_events ENABLE ROW LEVEL SECURITY;

-- RLS Policies (inherit from policies table)
CREATE POLICY "Users can view risk events for their policies"
  ON risk_events FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM policies
      WHERE policies.id = risk_events.policy_id
      AND policies.user_id = auth.uid()
    )
  );

CREATE POLICY "System can insert risk events"
  ON risk_events FOR INSERT
  WITH CHECK (TRUE); -- Edge function will handle this

CREATE POLICY "Users can update their risk events"
  ON risk_events FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM policies
      WHERE policies.id = risk_events.policy_id
      AND policies.user_id = auth.uid()
    )
  );

-- Function to auto-resolve old events
CREATE OR REPLACE FUNCTION auto_resolve_stale_events()
RETURNS void AS $$
BEGIN
  UPDATE risk_events
  SET 
    status = 'RESOLVED',
    resolved_at = NOW(),
    metadata = jsonb_set(
      COALESCE(metadata, '{}'),
      '{auto_resolved}',
      'true'
    )
  WHERE 
    status = 'OPEN'
    AND detected_at < NOW() - INTERVAL '7 days';
END;
$$ LANGUAGE plpgsql;

-- Comments for documentation
COMMENT ON TABLE risk_events IS 'Historical log of all policy violations detected by the monitoring system';
COMMENT ON COLUMN risk_events.violation_data IS 'Details of the violation (e.g., {"current_balance": 4800000, "threshold": 5000000})';
COMMENT ON COLUMN risk_events.metadata IS 'Additional context (e.g., blockchain transaction hashes, user notes)';
COMMENT ON COLUMN risk_events.status IS 'Lifecycle state of the risk event';
