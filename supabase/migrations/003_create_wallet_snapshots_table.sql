-- Migration: Create wallet_snapshots table for historical blockchain data
-- Description: Stores periodic snapshots of wallet state for trend analysis

CREATE TABLE IF NOT EXISTS wallet_snapshots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  wallet_address TEXT NOT NULL,
  net_worth_usd NUMERIC(20, 2) NOT NULL,
  snapshot_data JSONB NOT NULL,
  captured_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_wallet_address CHECK (wallet_address ~ '^0x[a-fA-F0-9]{40}$'),
  CONSTRAINT positive_net_worth CHECK (net_worth_usd >= 0),
  CONSTRAINT valid_snapshot_data CHECK (jsonb_typeof(snapshot_data) = 'object'),
  CONSTRAINT unique_wallet_snapshot UNIQUE (wallet_address, captured_at)
);

-- Indexes for time-series queries
CREATE INDEX idx_wallet_snapshots_address ON wallet_snapshots(wallet_address);
CREATE INDEX idx_wallet_snapshots_captured_at ON wallet_snapshots(captured_at DESC);
CREATE INDEX idx_wallet_snapshots_net_worth ON wallet_snapshots(net_worth_usd);

-- Composite index for wallet history queries
CREATE INDEX idx_wallet_snapshots_address_time ON wallet_snapshots(wallet_address, captured_at DESC);

-- Enable Row Level Security
ALTER TABLE wallet_snapshots ENABLE ROW LEVEL SECURITY;

-- RLS Policies (users can only see snapshots for their monitored wallets)
CREATE POLICY "Users can view snapshots for their monitored wallets"
  ON wallet_snapshots FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM policies
      WHERE policies.wallet_address = wallet_snapshots.wallet_address
      AND policies.user_id = auth.uid()
    )
  );

CREATE POLICY "System can insert snapshots"
  ON wallet_snapshots FOR INSERT
  WITH CHECK (TRUE); -- Edge function handles this

-- Function to clean up old snapshots (retain 90 days)
CREATE OR REPLACE FUNCTION cleanup_old_snapshots()
RETURNS void AS $$
BEGIN
  DELETE FROM wallet_snapshots
  WHERE captured_at < NOW() - INTERVAL '90 days';
END;
$$ LANGUAGE plpgsql;

-- Function to get latest snapshot for a wallet
CREATE OR REPLACE FUNCTION get_latest_snapshot(target_wallet TEXT)
RETURNS wallet_snapshots AS $$
  SELECT * FROM wallet_snapshots
  WHERE wallet_address = target_wallet
  ORDER BY captured_at DESC
  LIMIT 1;
$$ LANGUAGE sql STABLE;

-- Function to calculate net worth trend (percentage change)
CREATE OR REPLACE FUNCTION calculate_net_worth_trend(
  target_wallet TEXT,
  hours_ago INTEGER DEFAULT 24
)
RETURNS NUMERIC AS $$
DECLARE
  current_worth NUMERIC;
  previous_worth NUMERIC;
BEGIN
  SELECT net_worth_usd INTO current_worth
  FROM wallet_snapshots
  WHERE wallet_address = target_wallet
  ORDER BY captured_at DESC
  LIMIT 1;
  
  SELECT net_worth_usd INTO previous_worth
  FROM wallet_snapshots
  WHERE wallet_address = target_wallet
    AND captured_at <= NOW() - (hours_ago || ' hours')::INTERVAL
  ORDER BY captured_at DESC
  LIMIT 1;
  
  IF previous_worth IS NULL OR previous_worth = 0 THEN
    RETURN NULL;
  END IF;
  
  RETURN ((current_worth - previous_worth) / previous_worth) * 100;
END;
$$ LANGUAGE plpgsql STABLE;

-- Comments for documentation
COMMENT ON TABLE wallet_snapshots IS 'Time-series storage of wallet composition for historical analysis and trend detection';
COMMENT ON COLUMN wallet_snapshots.snapshot_data IS 'Complete blockchain state including tokens, NFTs, DeFi positions (e.g., {"tokens": [...], "nfts": [...], "protocols": [...]})';
COMMENT ON FUNCTION calculate_net_worth_trend IS 'Returns percentage change in net worth over specified time period';
