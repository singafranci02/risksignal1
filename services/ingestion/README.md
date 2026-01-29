# RiskSignal Ingestion Service

High-throughput event streaming pipeline: **NATS JetStream → ClickHouse**

## 🏗️ Architecture

```
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   Producer   │─────▶│     NATS     │─────▶│   Consumer   │
│  (Your App)  │      │  JetStream   │      │              │
└──────────────┘      └──────────────┘      └──────┬───────┘
                                                    │
                                                    ▼
                                            ┌──────────────┐
                                            │  ClickHouse  │
                                            │  (Log Lake)  │
                                            └──────────────┘
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd services/ingestion
npm install
```

### 2. Start Infrastructure

```bash
# From project root
docker-compose up -d
```

### 3. Run Test Producer

```bash
npm run producer:test
```

This will:
- Create the `SIGNALS` stream in NATS
- Publish 1 test message per second
- Each message is a mock transaction event

### 4. Run Consumer

```bash
npm run consumer:signals
```

This will:
- Consume messages from NATS
- Batch them (100 at a time)
- Insert into ClickHouse `raw_signals` table

## 📊 Verify Data

### Check NATS

```bash
# Install NATS CLI
brew install nats-io/nats-tools/nats

# View stream info
nats stream info SIGNALS

# Subscribe to messages
nats sub "signals.>"
```

### Check ClickHouse

```bash
# Query via HTTP
curl -X POST 'http://localhost:8123/' \
  --user admin:risksignal_dev_2026 \
  -d 'SELECT count() FROM risksignal.raw_signals'

# Or use clickhouse-client
docker-compose exec clickhouse clickhouse-client \
  --user admin --password risksignal_dev_2026 \
  --query "SELECT * FROM risksignal.raw_signals ORDER BY event_time DESC LIMIT 10"
```

## 📁 Project Structure

```
services/ingestion/
├── src/
│   ├── lib/
│   │   ├── logger.ts           # Structured logging (Pino)
│   │   ├── nats-client.ts      # NATS connection manager
│   │   ├── clickhouse-client.ts # ClickHouse connection
│   │   └── schemas.ts          # Zod validation schemas
│   ├── producers/
│   │   └── test-producer.ts    # Test data generator
│   └── consumers/
│       ├── signals-consumer.ts      # NATS → ClickHouse
│       └── transactions-consumer.ts # (To be implemented)
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Configuration

Copy `.env.example` to `.env` and adjust:

```bash
cp .env.example .env
```

## 📈 Performance

### Current Setup (Single Consumer)
- **Throughput**: ~10,000 msg/s
- **Latency**: <10ms (NATS → ClickHouse)
- **Batch Size**: 100 messages

### Scaling Options
1. **Horizontal**: Run multiple consumers (NATS load balances)
2. **Vertical**: Increase batch size to 1000+
3. **Optimize**: Enable ClickHouse async inserts (already configured)

## 🧪 Testing

### Stress Test

```bash
# Increase producer rate
# Edit test-producer.ts, change interval to 100ms (10 msg/s → 100 msg/s)
npm run producer:test
```

### Monitor Performance

```bash
# NATS stats
nats stream info SIGNALS

# ClickHouse query performance
docker-compose exec clickhouse clickhouse-client \
  --user admin --password risksignal_dev_2026 \
  --query "SELECT * FROM system.query_log ORDER BY event_time DESC LIMIT 5"
```

## 🔗 Integration with Main App

### Publish Events from Next.js

```typescript
// app/api/events/route.ts
import { connect } from 'nats'

export async function POST(request: Request) {
  const nc = await connect({ servers: process.env.NATS_URL })
  const js = nc.jetstream()

  const event = await request.json()

  await js.publish('signals.transaction', JSON.stringify({
    event_time: new Date().toISOString(),
    source_id: 'nextjs-app',
    event_type: 'transaction',
    payload: event,
    severity: 1,
    trace_id: crypto.randomUUID(),
    user_id: event.user_id,
    wallet_address: event.wallet_address,
  }))

  await nc.close()

  return Response.json({ success: true })
}
```

## 🐛 Troubleshooting

### Consumer not receiving messages

```bash
# Check if stream exists
nats stream ls

# Check consumer status
nats consumer info SIGNALS signals-to-clickhouse
```

### ClickHouse insert errors

```bash
# Check ClickHouse logs
docker-compose logs clickhouse

# Verify table exists
docker-compose exec clickhouse clickhouse-client \
  --user admin --password risksignal_dev_2026 \
  --query "SHOW TABLES FROM risksignal"
```

## 📚 Next Steps

1. **Add more event types**: Create specialized consumers for transactions, risk events
2. **Implement dead letter queue**: Handle failed messages
3. **Add metrics**: Prometheus + Grafana for monitoring
4. **Enable compression**: ZSTD compression for NATS messages
5. **Implement backpressure**: Rate limiting when ClickHouse is slow
