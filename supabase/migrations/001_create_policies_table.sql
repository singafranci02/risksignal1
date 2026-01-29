-- Migration: Create policies table for declarative risk rules
-- Description: Stores user-defined risk policies with flexible JSONB config

CREATE TYPE policy_type AS ENUM (
  'NET_WORTH',
  'ASSET_CONCENTRATION',
  'UNAUTHORIZED_TOKEN',
  'TRANSACTION_VOLUME',
  'WALLET_AGE'
);

CREATE TYPE severity_level AS ENUM (
  'CRITICAL',
  'HIGH',
  'MEDIUM',
  'LOW'
);

CREATE TABLE IF NOT EXISTS policies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  wallet_address TEXT NOT NULL,
  policy_type policy_type NOT NULL,
  policy_name TEXT NOT NULL,
  description TEXT,
  config JSONB NOT NULL,
  severity severity_level NOT NULL DEFAULT 'MEDIUM',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Constraints
  CONSTRAINT valid_wallet_address CHECK (wallet_address ~ '^0x[a-fA-F0-9]{40}$'),
  CONSTRAINT valid_config CHECK (jsonb_typeof(config) = 'object')
);

-- Indexes for performance
CREATE INDEX idx_policies_user_id ON policies(user_id);
CREATE INDEX idx_policies_wallet_address ON policies(wallet_address);
CREATE INDEX idx_policies_active ON policies(is_active) WHERE is_active = TRUE;
CREATE INDEX idx_policies_type ON policies(policy_type);

-- Enable Row Level Security
ALTER TABLE policies ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own policies"
  ON policies FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own policies"
  ON policies FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own policies"
  ON policies FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own policies"
  ON policies FOR DELETE
  USING (auth.uid() = user_id);

-- Function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_policies_updated_at
  BEFORE UPDATE ON policies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE policies IS 'User-defined risk monitoring policies with flexible configuration';
COMMENT ON COLUMN policies.config IS 'JSONB object containing policy-specific parameters (e.g., {"threshold": 5000000, "currency": "USD"})';
COMMENT ON COLUMN policies.severity IS 'Alert priority level for violation notifications';
