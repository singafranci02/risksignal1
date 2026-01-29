import { connect, NatsConnection, JetStreamClient } from 'nats'
import { logger } from './logger.js'

let nc: NatsConnection | null = null
let js: JetStreamClient | null = null

export async function getNatsConnection(): Promise<NatsConnection> {
  if (nc) return nc

  const servers = process.env.NATS_URL || 'nats://localhost:4222'
  
  logger.info({ servers }, 'Connecting to NATS')
  
  nc = await connect({
    servers,
    name: 'risksignal-ingestion',
    maxReconnectAttempts: -1,
    reconnectTimeWait: 1000,
  })

  logger.info('Connected to NATS successfully')

  // Handle connection events
  ;(async () => {
    for await (const status of nc!.status()) {
      logger.info({ status: status.type }, 'NATS connection status')
    }
  })().catch((err) => {
    logger.error({ err }, 'NATS status monitoring error')
  })

  return nc
}

export async function getJetStream(): Promise<JetStreamClient> {
  if (js) return js

  const connection = await getNatsConnection()
  js = connection.jetstream()
  
  logger.info('JetStream client initialized')
  
  return js
}

export async function closeNats(): Promise<void> {
  if (nc) {
    await nc.drain()
    await nc.close()
    nc = null
    js = null
    logger.info('NATS connection closed')
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  logger.info('Received SIGINT, closing NATS connection')
  await closeNats()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  logger.info('Received SIGTERM, closing NATS connection')
  await closeNats()
  process.exit(0)
})
