-- Trading Agents table
CREATE TABLE IF NOT EXISTS trading_agents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    broker TEXT,
    connection_method TEXT CHECK (connection_method IN ('webhook', 'broker-api')),
    api_key TEXT UNIQUE NOT NULL,
    webhook_url TEXT,
    status TEXT DEFAULT 'inactive' CHECK (status IN ('active', 'inactive', 'error')),
    last_heartbeat TIMESTAMPTZ,
    is_halted BOOLEAN DEFAULT false,
    halt_reason TEXT,
    halt_timestamp TIMESTAMPTZ,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Agent Telemetry table
CREATE TABLE IF NOT EXISTS agent_telemetry (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id UUID NOT NULL REFERENCES trading_agents(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    balance NUMERIC(20, 2),
    equity NUMERIC(20, 2),
    margin_used NUMERIC(20, 2),
    margin_free NUMERIC(20, 2),
    positions_count INTEGER DEFAULT 0,
    unrealized_pnl NUMERIC(20, 2),
    realized_pnl NUMERIC(20, 2),
    event_type TEXT CHECK (event_type IN ('heartbeat', 'trade', 'position_opened', 'position_closed')),
    attestation_hash TEXT,
    timestamp TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Trade Validations table (Pre-flight checks)
CREATE TABLE IF NOT EXISTS trade_validations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id UUID NOT NULL REFERENCES trading_agents(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    symbol TEXT NOT NULL,
    action TEXT NOT NULL CHECK (action IN ('buy', 'sell')),
    volume NUMERIC(20, 8) NOT NULL,
    validation_result TEXT NOT NULL CHECK (validation_result IN ('PASS', 'FAIL', 'ERROR')),
    validation_token TEXT,
    violations JSONB,
    timestamp TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Agent Halt Log table
CREATE TABLE IF NOT EXISTS agent_halt_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id UUID NOT NULL REFERENCES trading_agents(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    action TEXT NOT NULL CHECK (action IN ('HALT', 'RESUME')),
    reason TEXT,
    timestamp TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Add agent_id column to risk_events if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'risk_events' AND column_name = 'agent_id'
    ) THEN
        ALTER TABLE risk_events ADD COLUMN agent_id UUID REFERENCES trading_agents(id) ON DELETE CASCADE;
    END IF;
END $$;

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_trading_agents_user_id ON trading_agents(user_id);
CREATE INDEX IF NOT EXISTS idx_trading_agents_api_key ON trading_agents(api_key);
CREATE INDEX IF NOT EXISTS idx_trading_agents_status ON trading_agents(status);

CREATE INDEX IF NOT EXISTS idx_agent_telemetry_agent_id ON agent_telemetry(agent_id);
CREATE INDEX IF NOT EXISTS idx_agent_telemetry_user_id ON agent_telemetry(user_id);
CREATE INDEX IF NOT EXISTS idx_agent_telemetry_timestamp ON agent_telemetry(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_agent_telemetry_event_type ON agent_telemetry(event_type);

CREATE INDEX IF NOT EXISTS idx_trade_validations_agent_id ON trade_validations(agent_id);
CREATE INDEX IF NOT EXISTS idx_trade_validations_timestamp ON trade_validations(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_trade_validations_result ON trade_validations(validation_result);

CREATE INDEX IF NOT EXISTS idx_agent_halt_log_agent_id ON agent_halt_log(agent_id);
CREATE INDEX IF NOT EXISTS idx_agent_halt_log_timestamp ON agent_halt_log(timestamp DESC);

-- Row Level Security (RLS) policies
ALTER TABLE trading_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_telemetry ENABLE ROW LEVEL SECURITY;
ALTER TABLE trade_validations ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_halt_log ENABLE ROW LEVEL SECURITY;

-- Trading Agents policies
CREATE POLICY "Users can view their own agents"
    ON trading_agents FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own agents"
    ON trading_agents FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own agents"
    ON trading_agents FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own agents"
    ON trading_agents FOR DELETE
    USING (auth.uid() = user_id);

-- Agent Telemetry policies
CREATE POLICY "Users can view their own agent telemetry"
    ON agent_telemetry FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Service role can insert agent telemetry"
    ON agent_telemetry FOR INSERT
    WITH CHECK (true); -- API will validate via agent_id/api_key

-- Trade Validations policies
CREATE POLICY "Users can view their own trade validations"
    ON trade_validations FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Service role can insert trade validations"
    ON trade_validations FOR INSERT
    WITH CHECK (true); -- API will validate

-- Agent Halt Log policies
CREATE POLICY "Users can view their own halt logs"
    ON agent_halt_log FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert halt logs"
    ON agent_halt_log FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for trading_agents
DROP TRIGGER IF EXISTS update_trading_agents_updated_at ON trading_agents;
CREATE TRIGGER update_trading_agents_updated_at
    BEFORE UPDATE ON trading_agents
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Function to detect inactive agents (no heartbeat for 5 minutes)
CREATE OR REPLACE FUNCTION mark_inactive_agents()
RETURNS void AS $$
BEGIN
    UPDATE trading_agents
    SET status = 'inactive'
    WHERE status = 'active'
    AND last_heartbeat < (now() - INTERVAL '5 minutes');
END;
$$ LANGUAGE plpgsql;

-- Comments for documentation
COMMENT ON TABLE trading_agents IS 'Stores registered AI trading agents with their connection details';
COMMENT ON TABLE agent_telemetry IS 'Real-time telemetry data pushed from trading agents';
COMMENT ON TABLE trade_validations IS 'Pre-flight trade validation results for compliance audit trail';
COMMENT ON TABLE agent_halt_log IS 'Audit log of agent halt/resume actions';
