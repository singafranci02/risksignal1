import { createClient, ClickHouseClient } from '@clickhouse/client'
import { logger } from './logger.js'

let client: ClickHouseClient | null = null

export function getClickHouseClient(): ClickHouseClient {
  if (client) return client

  const host = process.env.CLICKHOUSE_HOST || 'http://localhost:8123'
  const username = process.env.CLICKHOUSE_USER || 'admin'
  const password = process.env.CLICKHOUSE_PASSWORD || 'risksignal_dev_2026'
  const database = process.env.CLICKHOUSE_DB || 'risksignal'

  logger.info({ host, database }, 'Initializing ClickHouse client')

  client = createClient({
    host,
    username,
    password,
    database,
    compression: {
      request: true,
      response: true,
    },
    clickhouse_settings: {
      async_insert: 1,
      wait_for_async_insert: 0,
      async_insert_max_data_size: '10000000',
      async_insert_busy_timeout_ms: 1000,
    },
  })

  logger.info('ClickHouse client initialized')

  return client
}

export async function closeClickHouse(): Promise<void> {
  if (client) {
    await client.close()
    client = null
    logger.info('ClickHouse connection closed')
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  await closeClickHouse()
})

process.on('SIGTERM', async () => {
  await closeClickHouse()
})
