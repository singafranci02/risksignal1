-- RiskSignal ClickHouse Schema
-- Log Lake for High-Fidelity Risk Intelligence

-- 1. Raw Signals Table (Primary Log Lake)
CREATE TABLE IF NOT EXISTS risksignal.raw_signals (
    event_time DateTime64(3) CODEC(Delta, ZSTD(3)),
    source_id LowCardinality(String),
    event_type Enum8(
        'transaction' = 1,
        'auth' = 2,
        'log' = 3,
        'market' = 4,
        'wallet_snapshot' = 5,
        'risk_event' = 6
    ),
    payload String CODEC(ZSTD(3)),  -- JSON compressed
    severity UInt8 DEFAULT 0,
    trace_id UUID,
    user_id String DEFAULT '',
    wallet_address LowCardinality(String) DEFAULT '',
    INDEX idx_user_id user_id TYPE bloom_filter GRANULARITY 1,
    INDEX idx_wallet wallet_address TYPE bloom_filter GRANULARITY 1
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(event_time)
ORDER BY (event_time, source_id, event_type)
TTL event_time + INTERVAL 90 DAY  -- 90-day retention
SETTINGS index_granularity = 8192;

-- 2. Transaction Signals (Optimized View)
CREATE TABLE IF NOT EXISTS risksignal.transaction_signals (
    event_time DateTime64(3) CODEC(Delta, ZSTD(3)),
    trace_id UUID,
    user_id String,
    wallet_address LowCardinality(String),
    transaction_hash String,
    amount Decimal(20, 8),
    currency LowCardinality(String),
    from_address String,
    to_address String,
    chain LowCardinality(String),
    risk_score Float32 DEFAULT 0.0,
    is_flagged UInt8 DEFAULT 0,
    INDEX idx_user user_id TYPE bloom_filter GRANULARITY 1,
    INDEX idx_wallet wallet_address TYPE bloom_filter GRANULARITY 1,
    INDEX idx_hash transaction_hash TYPE bloom_filter GRANULARITY 1
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(event_time)
ORDER BY (event_time, wallet_address)
TTL event_time + INTERVAL 180 DAY
SETTINGS index_granularity = 8192;

-- 3. Wallet Snapshots (Time-Series)
CREATE TABLE IF NOT EXISTS risksignal.wallet_snapshots_ch (
    captured_at DateTime64(3) CODEC(Delta, ZSTD(3)),
    wallet_address LowCardinality(String),
    net_worth_usd Decimal(20, 2),
    token_count UInt16,
    snapshot_data String CODEC(ZSTD(3)),  -- JSON
    INDEX idx_wallet wallet_address TYPE bloom_filter GRANULARITY 1
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(captured_at)
ORDER BY (captured_at, wallet_address)
TTL captured_at + INTERVAL 365 DAY
SETTINGS index_granularity = 8192;

-- 4. Risk Events (Aggregated)
CREATE TABLE IF NOT EXISTS risksignal.risk_events_ch (
    detected_at DateTime64(3) CODEC(Delta, ZSTD(3)),
    event_id UUID,
    policy_id UUID,
    wallet_address LowCardinality(String),
    event_type LowCardinality(String),
    severity Enum8('LOW' = 1, 'MEDIUM' = 2, 'HIGH' = 3, 'CRITICAL' = 4),
    status Enum8('OPEN' = 1, 'ACKNOWLEDGED' = 2, 'RESOLVED' = 3, 'FALSE_POSITIVE' = 4),
    violation_data String CODEC(ZSTD(3)),
    INDEX idx_wallet wallet_address TYPE bloom_filter GRANULARITY 1,
    INDEX idx_policy policy_id TYPE bloom_filter GRANULARITY 1
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(detected_at)
ORDER BY (detected_at, severity, wallet_address)
TTL detected_at + INTERVAL 730 DAY  -- 2-year retention for compliance
SETTINGS index_granularity = 8192;

-- 5. Materialized View: Hourly Risk Aggregates
CREATE MATERIALIZED VIEW IF NOT EXISTS risksignal.hourly_risk_scores
ENGINE = SummingMergeTree()
PARTITION BY toYYYYMM(hour)
ORDER BY (hour, wallet_address, severity)
AS SELECT
    toStartOfHour(detected_at) AS hour,
    wallet_address,
    severity,
    count() AS event_count,
    countIf(status = 'OPEN') AS open_count,
    countIf(status = 'RESOLVED') AS resolved_count
FROM risksignal.risk_events_ch
GROUP BY hour, wallet_address, severity;

-- 6. Materialized View: Daily Transaction Volume
CREATE MATERIALIZED VIEW IF NOT EXISTS risksignal.daily_transaction_volume
ENGINE = SummingMergeTree()
PARTITION BY toYYYYMM(day)
ORDER BY (day, wallet_address, chain)
AS SELECT
    toDate(event_time) AS day,
    wallet_address,
    chain,
    count() AS tx_count,
    sum(amount) AS total_volume_usd,
    avg(amount) AS avg_amount_usd,
    max(amount) AS max_amount_usd
FROM risksignal.transaction_signals
GROUP BY day, wallet_address, chain;

-- 7. Alert History (Notification Tracking)
CREATE TABLE IF NOT EXISTS risksignal.alert_history_ch (
    sent_at DateTime64(3) CODEC(Delta, ZSTD(3)),
    alert_id UUID,
    risk_event_id UUID,
    channel Enum8('EMAIL' = 1, 'SMS' = 2, 'SLACK' = 3, 'WEBHOOK' = 4),
    recipient LowCardinality(String),
    status Enum8('PENDING' = 1, 'SENT' = 2, 'DELIVERED' = 3, 'FAILED' = 4),
    retry_count UInt8 DEFAULT 0,
    INDEX idx_event risk_event_id TYPE bloom_filter GRANULARITY 1
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(sent_at)
ORDER BY (sent_at, channel, status)
TTL sent_at + INTERVAL 180 DAY
SETTINGS index_granularity = 8192;

-- Performance Optimization: Create dictionaries for frequently accessed data
CREATE DICTIONARY IF NOT EXISTS risksignal.wallet_metadata_dict (
    wallet_address String,
    user_id String,
    label String,
    risk_tier UInt8
)
PRIMARY KEY wallet_address
SOURCE(CLICKHOUSE(
    HOST 'localhost'
    PORT 9000
    USER 'admin'
    PASSWORD 'risksignal_dev_2026'
    DB 'risksignal'
    TABLE 'wallet_metadata'
))
LIFETIME(MIN 300 MAX 600)
LAYOUT(HASHED());

-- Metadata table for dictionary
CREATE TABLE IF NOT EXISTS risksignal.wallet_metadata (
    wallet_address String,
    user_id String,
    label String DEFAULT '',
    risk_tier UInt8 DEFAULT 0,
    updated_at DateTime DEFAULT now()
)
ENGINE = ReplacingMergeTree(updated_at)
ORDER BY wallet_address;
