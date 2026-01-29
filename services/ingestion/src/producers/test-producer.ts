#!/usr/bin/env tsx
import { getNatsConnection } from '../lib/nats-client.js'
import { logger } from '../lib/logger.js'
import { RawSignalSchema } from '../lib/schemas.js'
import { randomUUID } from 'crypto'

async function main() {
  const nc = await getNatsConnection()
  const js = nc.jetstream()

  logger.info('Starting test producer')

  // Ensure stream exists
  const jsm = await nc.jetstreamManager()
  
  try {
    await jsm.streams.info('SIGNALS')
    logger.info('Stream SIGNALS already exists')
  } catch {
    logger.info('Creating stream SIGNALS')
    await jsm.streams.add({
      name: 'SIGNALS',
      subjects: ['signals.>'],
      storage: 'file',
      retention: 'limits',
      max_age: 7 * 24 * 60 * 60 * 1_000_000_000, // 7 days in nanoseconds
      max_bytes: 10 * 1024 * 1024 * 1024, // 10GB
    })
  }

  // Publish test signals
  let count = 0
  const interval = setInterval(async () => {
    const signal = RawSignalSchema.parse({
      event_time: new Date().toISOString(),
      source_id: 'test-producer',
      event_type: 'transaction',
      payload: {
        amount: Math.random() * 1000,
        currency: 'USD',
        description: `Test transaction ${count}`,
      },
      severity: Math.floor(Math.random() * 4),
      trace_id: randomUUID(),
      user_id: `user_${Math.floor(Math.random() * 100)}`,
      wallet_address: `0x${Math.random().toString(16).slice(2, 42)}`,
    })

    try {
      const ack = await js.publish(
        `signals.${signal.event_type}`,
        JSON.stringify(signal)
      )
      
      logger.info(
        { 
          subject: `signals.${signal.event_type}`,
          seq: ack.seq,
          count: ++count 
        },
        'Published signal'
      )
    } catch (err) {
      logger.error({ err }, 'Failed to publish signal')
    }
  }, 1000) // 1 message per second

  // Graceful shutdown
  process.on('SIGINT', () => {
    clearInterval(interval)
    logger.info('Stopping producer')
    process.exit(0)
  })
}

main().catch((err) => {
  logger.error({ err }, 'Producer failed')
  process.exit(1)
})
