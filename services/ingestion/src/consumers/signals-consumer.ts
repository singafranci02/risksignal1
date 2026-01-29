#!/usr/bin/env tsx
import { getJetStream } from '../lib/nats-client.js'
import { getClickHouseClient } from '../lib/clickhouse-client.js'
import { logger } from '../lib/logger.js'
import { RawSignalSchema } from '../lib/schemas.js'

async function main() {
  const js = await getJetStream()
  const ch = getClickHouseClient()

  logger.info('Starting signals consumer')

  // Create consumer
  const consumer = await js.consumers.get('SIGNALS', 'signals-to-clickhouse')
    .catch(async () => {
      logger.info('Creating consumer signals-to-clickhouse')
      return await js.consumers.add('SIGNALS', {
        durable_name: 'signals-to-clickhouse',
        ack_policy: 'explicit',
        deliver_policy: 'all',
        filter_subject: 'signals.>',
        max_ack_pending: 100,
      })
    })

  // Consume messages
  const messages = await consumer.consume({
    max_messages: 100,
  })

  let processedCount = 0
  const batchSize = 100
  let batch: any[] = []

  for await (const msg of messages) {
    try {
      const data = JSON.parse(msg.string())
      const signal = RawSignalSchema.parse(data)

      batch.push({
        event_time: signal.event_time,
        source_id: signal.source_id,
        event_type: signal.event_type,
        payload: JSON.stringify(signal.payload),
        severity: signal.severity,
        trace_id: signal.trace_id,
        user_id: signal.user_id || '',
        wallet_address: signal.wallet_address || '',
      })

      // Batch insert to ClickHouse
      if (batch.length >= batchSize) {
        await ch.insert({
          table: 'raw_signals',
          values: batch,
          format: 'JSONEachRow',
        })

        logger.info(
          { count: batch.length, total: processedCount += batch.length },
          'Inserted batch to ClickHouse'
        )

        batch = []
      }

      msg.ack()
    } catch (err) {
      logger.error({ err, msg: msg.string() }, 'Failed to process message')
      msg.nak()
    }
  }

  // Flush remaining batch
  if (batch.length > 0) {
    await ch.insert({
      table: 'raw_signals',
      values: batch,
      format: 'JSONEachRow',
    })
    logger.info({ count: batch.length }, 'Flushed final batch')
  }
}

main().catch((err) => {
  logger.error({ err }, 'Consumer failed')
  process.exit(1)
})
