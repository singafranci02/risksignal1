# RiskSignal Infrastructure

## 🏗️ Architecture Overview

This infrastructure implements the **Ingestion Layer** from the Technical Spec with startup-friendly, free/open-source components:

```
┌─────────────────────────────────────────────────────────────┐
│                    INGESTION LAYER                           │
│                                                              │
│  ┌──────────┐      ┌──────────────┐      ┌──────────────┐ │
│  │  NATS    │─────▶│  ClickHouse  │◀────▶│  Supabase    │ │
│  │JetStream │      │  (Log Lake)  │      │ (Postgres)   │ │
│  └──────────┘      └──────────────┘      └──────────────┘ │
│       │                    │                      │         │
│       │                    │                      │         │
│  ┌────▼────────────────────▼──────────────────────▼──────┐ │
│  │              Redis (Caching Layer)                     │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## 📦 Components

### 1. **NATS JetStream** (Message Broker)
- **Purpose**: High-throughput event streaming
- **Why**: Lightweight, free, 200k-400k msg/s, <1ms latency
- **Alternative to**: Redpanda (spec recommendation, but requires more resources)
- **Ports**: 
  - `4222` - Client connections
  - `8222` - HTTP monitoring
  - `6222` - Cluster routes

### 2. **ClickHouse** (OLAP Database)
- **Purpose**: Petabyte-scale log storage and analytics
- **Why**: 20-40x compression, sub-100ms queries on billions of rows
- **Ports**:
  - `8123` - HTTP interface
  - `9000` - Native client

### 3. **Redis** (Cache)
- **Purpose**: Fast key-value store for session data and rate limiting
- **Port**: `6379`

### 4. **Supabase** (Operational DB)
- **Purpose**: Transactional data (policies, users, alerts)
- **Already configured**: You're using this for the policy engine

## 🚀 Quick Start

### Start Infrastructure

```bash
# Start all services
docker-compose up -d

# Start with monitoring UI (dev mode)
docker-compose --profile dev up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f clickhouse
docker-compose logs -f nats
```

### Stop Infrastructure

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (⚠️ deletes all data)
docker-compose down -v
```

## 🔧 Configuration

### ClickHouse

**Connection Details**:
- Host: `localhost:8123` (HTTP) or `localhost:9000` (Native)
- User: `admin`
- Password: `risksignal_dev_2026`
- Database: `risksignal`

**Test Connection**:
```bash
curl http://localhost:8123/ping
# Should return: Ok.

# Run a query
curl -X POST 'http://localhost:8123/' \
  --user admin:risksignal_dev_2026 \
  -d 'SELECT version()'
```

**Schema**:
- `raw_signals` - All events from NATS
- `transaction_signals` - Blockchain transactions
- `wallet_snapshots_ch` - Historical wallet data
- `risk_events_ch` - Policy violations
- `alert_history_ch` - Notification log

### NATS JetStream

**Connection Details**:
- URL: `nats://localhost:4222`
- Monitoring: `http://localhost:8222`

**Test Connection**:
```bash
# Install NATS CLI
brew install nats-io/nats-tools/nats

# Check server info
nats server info

# Create a stream
nats stream add SIGNALS \
  --subjects "signals.>" \
  --storage file \
  --retention limits \
  --max-age 7d

# Publish a test message
nats pub signals.test "Hello RiskSignal"

# Subscribe
nats sub "signals.>"
```

**Streams** (to be created):
- `SIGNALS` - Raw events
- `TRANSACTIONS` - Blockchain transactions
- `RISK_EVENTS` - Policy violations

### Redis

**Connection Details**:
- Host: `localhost:6379`
- No password (dev mode)

**Test Connection**:
```bash
redis-cli ping
# Should return: PONG

redis-cli set test "Hello"
redis-cli get test
```

## 📊 Monitoring

### NATS Surveyor (Dev Only)
- URL: `http://localhost:7777`
- Shows real-time message rates, stream stats

### ClickHouse System Tables
```sql
-- Query performance
SELECT * FROM system.query_log ORDER BY event_time DESC LIMIT 10;

-- Table sizes
SELECT 
    table,
    formatReadableSize(sum(bytes)) AS size
FROM system.parts
WHERE active
GROUP BY table;

-- Current queries
SELECT * FROM system.processes;
```

## 🔐 Security Notes

⚠️ **This is a development setup**. For production:

1. **Change default passwords** in `docker-compose.yml`
2. **Enable TLS** for all services
3. **Use secrets management** (Vault, AWS Secrets Manager)
4. **Restrict network access** (firewall rules)
5. **Enable authentication** on NATS
6. **Use read-only users** for ClickHouse queries

## 💰 Cost Comparison

| Component | Managed Service | Self-Hosted (This Setup) |
|-----------|----------------|--------------------------|
| NATS | N/A | **Free** |
| ClickHouse | $500-2000/mo | **Free** |
| Redis | $15-100/mo | **Free** |
| **Total** | $515-2100/mo | **$0/mo** (just server costs) |

## 📈 Scaling Path

When you outgrow this setup:

1. **NATS** → Migrate to NATS cluster (3+ nodes)
2. **ClickHouse** → Add replicas, use ClickHouse Cloud
3. **Redis** → Redis Cluster or managed Redis
4. **Consider** → Redpanda (if you need Kafka compatibility)

## 🐛 Troubleshooting

### ClickHouse won't start
```bash
# Check logs
docker-compose logs clickhouse

# Common issue: port already in use
lsof -i :8123
lsof -i :9000
```

### NATS connection refused
```bash
# Check if running
docker-compose ps nats

# Restart
docker-compose restart nats
```

### Out of disk space
```bash
# Check volume sizes
docker system df -v

# Clean up old data
docker-compose exec clickhouse clickhouse-client \
  --user admin --password risksignal_dev_2026 \
  --query "OPTIMIZE TABLE risksignal.raw_signals FINAL"
```

## 📚 Next Steps

1. **Set up producers** to publish events to NATS
2. **Create consumers** to move data from NATS → ClickHouse
3. **Build queries** for the dashboard
4. **Implement vector embeddings** using pgvector in Supabase

## 🔗 Resources

- [NATS Docs](https://docs.nats.io/)
- [ClickHouse Docs](https://clickhouse.com/docs)
- [Redis Docs](https://redis.io/docs/)
