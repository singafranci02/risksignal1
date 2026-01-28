-- Create monitored_wallets table
CREATE TABLE IF NOT EXISTS monitored_wallets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  wallet_address TEXT NOT NULL,
  min_balance_usd DECIMAL(10, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT unique_user_wallet UNIQUE(user_id, wallet_address)
);

-- Enable Row Level Security
ALTER TABLE monitored_wallets ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own wallets
CREATE POLICY "Users can view their own wallets"
  ON monitored_wallets
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own wallets
CREATE POLICY "Users can insert their own wallets"
  ON monitored_wallets
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own wallets
CREATE POLICY "Users can update their own wallets"
  ON monitored_wallets
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Policy: Users can delete their own wallets
CREATE POLICY "Users can delete their own wallets"
  ON monitored_wallets
  FOR DELETE
  USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_monitored_wallets_user_id ON monitored_wallets(user_id);
CREATE INDEX IF NOT EXISTS idx_monitored_wallets_wallet_address ON monitored_wallets(wallet_address);
