import { NextRequest, NextResponse } from 'next/server'

// Base58 alphabet for basic Solana address validation
const BASE58_ALPHABET = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/

function isValidSolanaAddress(address: string): boolean {
  const trimmed = address.trim()
  return trimmed.length >= 32 && trimmed.length <= 44 && BASE58_ALPHABET.test(trimmed)
}

// ─────────────────────────────────────────────────────────────────────────────
// STUB: In production, this endpoint would:
//   1. Invoke the local risksignal.py script via a subprocess or sidecar
//   2. Forward the stdout output back to the client
//   3. The Python script handles all RPC calls to Helius + RugCheck API
//
// For the dashboard demo, we return a deterministic mock result based on
// the last character of the address (simulates realistic RED/GREEN mix).
// ─────────────────────────────────────────────────────────────────────────────

const MOCK_BLOCKS = [
  {
    result: 'RED' as const,
    reason: 'Jito Bundle Detected: 7 transactions in creation slot 287654321. Coordinated sniper bundle.',
    checks: {
      jito: { passed: false, detail: '7 wallets in creation slot — Jito bundle signature' },
      sybil: { passed: true, detail: 'Holder distribution appears normal' },
      rugcheck: { passed: true, detail: 'Mint and Freeze authorities are null' },
    },
  },
  {
    result: 'RED' as const,
    reason: 'Sybil Cluster: Top holder controls 73% of visible supply. Extreme concentration risk.',
    checks: {
      jito: { passed: true, detail: 'No bundle activity detected in creation slot' },
      sybil: { passed: false, detail: 'Top holder: 73% of supply — Sybil cabal pattern' },
      rugcheck: { passed: true, detail: 'Mint and Freeze authorities are null' },
    },
  },
  {
    result: 'RED' as const,
    reason: 'RugCheck Failed: Mint Authority still active (7xKXtg2C…) | Freeze Authority still active (4zMMC9sR…)',
    checks: {
      jito: { passed: true, detail: 'No bundle activity detected in creation slot' },
      sybil: { passed: true, detail: 'Holder distribution appears normal' },
      rugcheck: { passed: false, detail: 'Mint Authority live — infinite supply risk. Freeze Authority live — honeypot.' },
    },
  },
]

const MOCK_GREEN = {
  result: 'GREEN' as const,
  reason: null,
  checks: {
    jito: { passed: true, detail: 'No bundle activity detected in creation slot' },
    sybil: { passed: true, detail: 'Holder distribution appears organic across 48 wallets' },
    rugcheck: { passed: true, detail: 'Mint Authority null. Freeze Authority null. No critical risk flags.' },
  },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const address: string = body?.address ?? ''

    if (!address || !isValidSolanaAddress(address)) {
      return NextResponse.json(
        { error: 'Invalid Solana contract address.' },
        { status: 400 }
      )
    }

    // Deterministic mock: last char code mod 4 decides result
    // 0-2 → one of the RED scenarios; 3 → GREEN
    const charCode = address.charCodeAt(address.length - 1)
    const bucket = charCode % 4

    const mockResult = bucket < 3 ? MOCK_BLOCKS[bucket] : MOCK_GREEN

    // Simulate scan latency (50–250ms)
    await new Promise((resolve) => setTimeout(resolve, 80 + (charCode % 170)))

    return NextResponse.json({
      address,
      ...mockResult,
      scannedAt: new Date().toISOString(),
      // The raw output string as risksignal.py would print it
      rawOutput:
        mockResult.result === 'RED'
          ? `🔴 FATAL ERROR: ${mockResult.reason}`
          : '🟢 SUCCESS: Token Organic.',
    })
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    )
  }
}
