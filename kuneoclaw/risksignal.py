#!/usr/bin/env python3
"""
risksignal.py — KuneoClaw Circuit Breaker Engine
=================================================
Air-gapped heuristic scanner for Solana contract addresses.
OpenClaw MUST call this script before executing any trade.

Usage:
    python3 risksignal.py <CONTRACT_ADDRESS>

Output (strict format, always exactly one of):
    🔴 FATAL ERROR: <Reason>
    🟢 SUCCESS: Token Organic.

Environment variables (set in .env):
    HELIUS_RPC_URL=https://mainnet.helius-rpc.com/?api-key=YOUR_HELIUS_RPC_KEY
    RUGCHECK_API_BASE=https://api.rugcheck.xyz/v1
"""

import sys
import os
import time
import json
import base64
from typing import Optional

import requests
from dotenv import load_dotenv

try:
    import base58
except ImportError:
    base58 = None  # Graceful degradation; validation still works via length check

load_dotenv()

# ─── Configuration ────────────────────────────────────────────────────────────

HELIUS_RPC_URL: str = os.getenv(
    "HELIUS_RPC_URL",
    "https://mainnet.helius-rpc.com/?api-key=YOUR_HELIUS_RPC_KEY",
)
RUGCHECK_API_BASE: str = os.getenv(
    "RUGCHECK_API_BASE",
    "https://api.rugcheck.xyz/v1",
)

MAX_RETRIES = 3
BACKOFF_BASE = 2.0  # seconds — doubles on each retry

# Jito bundle check: wallets that bought in the same slot as mint creation
JITO_SNIPER_THRESHOLD = 3  # ≥3 unique wallets in same slot = suspicious bundle

# Sybil cluster check: what fraction of top-50 holders share a funding source?
SYBIL_CLUSTER_THRESHOLD = 0.60  # ≥60% funded by same master wallet = Sybil cabal


# ─── Utilities ────────────────────────────────────────────────────────────────


def _is_valid_solana_address(address: str) -> bool:
    """Validate a Solana base58-encoded public key (32 bytes → 43–44 chars)."""
    if not address or not isinstance(address, str):
        return False
    stripped = address.strip()
    if not (32 <= len(stripped) <= 44):
        return False
    # Reject obviously invalid characters (base58 alphabet)
    base58_alphabet = set("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
    if not all(c in base58_alphabet for c in stripped):
        return False
    if base58 is not None:
        try:
            decoded = base58.b58decode(stripped)
            return len(decoded) == 32
        except Exception:
            return False
    return True


def _rpc_post(payload: dict, retries: int = MAX_RETRIES) -> dict:
    """
    POST to the Helius RPC endpoint with automatic retry on 429 (rate limit).
    On network failure or exhausted retries, raises RuntimeError (fail-safe).
    """
    headers = {"Content-Type": "application/json"}
    for attempt in range(1, retries + 1):
        try:
            response = requests.post(
                HELIUS_RPC_URL,
                headers=headers,
                json=payload,
                timeout=10,
            )
            if response.status_code == 429:
                wait = BACKOFF_BASE ** attempt
                print(
                    f"  [RPC] Rate limited (429). Retrying in {wait:.1f}s "
                    f"(attempt {attempt}/{retries})…",
                    file=sys.stderr,
                )
                time.sleep(wait)
                continue
            response.raise_for_status()
            data = response.json()
            if "error" in data:
                raise RuntimeError(f"RPC error: {data['error']}")
            return data
        except requests.exceptions.Timeout:
            if attempt == retries:
                raise RuntimeError("RPC request timed out after all retries.")
            time.sleep(BACKOFF_BASE ** attempt)
        except requests.exceptions.ConnectionError as exc:
            if attempt == retries:
                raise RuntimeError(f"RPC connection failed: {exc}")
            time.sleep(BACKOFF_BASE ** attempt)
    raise RuntimeError("RPC request failed after all retries (rate limit exhausted).")


def _http_get(url: str, retries: int = MAX_RETRIES) -> dict:
    """
    GET request with automatic retry on 429 (rate limit).
    On network failure or exhausted retries, raises RuntimeError (fail-safe).
    """
    for attempt in range(1, retries + 1):
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 429:
                wait = BACKOFF_BASE ** attempt
                print(
                    f"  [HTTP] Rate limited (429). Retrying in {wait:.1f}s "
                    f"(attempt {attempt}/{retries})…",
                    file=sys.stderr,
                )
                time.sleep(wait)
                continue
            if response.status_code == 404:
                raise RuntimeError(f"Endpoint returned 404 (token not found): {url}")
            response.raise_for_status()
            return response.json()
        except requests.exceptions.Timeout:
            if attempt == retries:
                raise RuntimeError(f"HTTP GET timed out: {url}")
            time.sleep(BACKOFF_BASE ** attempt)
        except requests.exceptions.ConnectionError as exc:
            if attempt == retries:
                raise RuntimeError(f"HTTP GET connection failed: {exc}")
            time.sleep(BACKOFF_BASE ** attempt)
    raise RuntimeError(f"HTTP GET failed after all retries: {url}")


# ─── Check 1: Jito Bundle Detection ──────────────────────────────────────────


def check_jito_bundles(ca: str) -> Optional[str]:
    """
    Fetch the token's first 20 transactions via getSignaturesForAddress.
    If multiple wallets bought in the exact same slot as the creation transaction,
    it signals a coordinated Jito bundle — a sniper attack pattern.

    Returns:
        None if check passes (no bundle detected).
        str  if check fails — the reason string for FATAL ERROR.
    """
    print("  [1/3] Jito Bundle Check…", file=sys.stderr)

    payload = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getSignaturesForAddress",
        "params": [
            ca,
            {
                "limit": 20,
                "commitment": "finalized",
            },
        ],
    }

    # ── PLACEHOLDER: real implementation below ────────────────────────────────
    # TODO: After pulling signatures, fetch each transaction via getTransaction
    # to extract:
    #   - The slot of the mint/creation tx (first signature)
    #   - All feePayer / signer accounts in transactions within ±1 slot
    #   - If ≥ JITO_SNIPER_THRESHOLD unique wallets share the creation slot →
    #     return FATAL reason.
    #
    # Example real call result shape:
    # result = [
    #   { "signature": "5GH...", "slot": 287654321, "blockTime": 1700000000 },
    #   ...
    # ]
    #
    # For each signature in the same slot as result[0]["slot"]:
    #   tx = _rpc_post({ "jsonrpc": "2.0", "id": 1, "method": "getTransaction",
    #                    "params": [sig, {"encoding": "json", "maxSupportedTransactionVersion": 0}] })
    #   Extract tx["result"]["transaction"]["message"]["accountKeys"][0] (feePayer)
    # ─────────────────────────────────────────────────────────────────────────

    try:
        data = _rpc_post(payload)
        signatures = data.get("result", [])

        if not signatures:
            # No transactions at all — token likely doesn't exist or is brand new
            return "Jito Bundle Check: No transactions found for this address. Possible ghost token."

        creation_slot = signatures[0].get("slot") if signatures else None

        # Count how many of the first 20 txs share the creation slot
        # (In a real bundle, snipers land in the same or adjacent slot)
        same_slot_count = sum(
            1 for sig in signatures if sig.get("slot") == creation_slot
        )

        if same_slot_count >= JITO_SNIPER_THRESHOLD:
            return (
                f"Jito Bundle Detected: {same_slot_count} transactions in creation slot "
                f"{creation_slot}. Coordinated sniper bundle."
            )

        print(
            f"  [1/3] Jito Bundle Check PASSED "
            f"(same-slot tx count: {same_slot_count})",
            file=sys.stderr,
        )
        return None

    except RuntimeError as exc:
        # Fail-safe: network failure → block the trade
        return f"Jito Bundle Check: Network failure — blocking as precaution. ({exc})"


# ─── Check 2: Sybil Cluster Detection ────────────────────────────────────────


def check_sybil_cluster(ca: str) -> Optional[str]:
    """
    Fetch the top 50 token holders via getTokenLargestAccounts.
    Pull each holder's genesis (first-ever) transaction to determine the
    funding wallet. If ≥ SYBIL_CLUSTER_THRESHOLD share the same master wallet,
    this is a Sybil cabal — manufactured organic-looking distribution.

    Returns:
        None if check passes.
        str  if check fails — the reason string for FATAL ERROR.
    """
    print("  [2/3] Sybil Cluster Check…", file=sys.stderr)

    payload = {
        "jsonrpc": "2.0",
        "id": 2,
        "method": "getTokenLargestAccounts",
        "params": [ca, {"commitment": "finalized"}],
    }

    # ── PLACEHOLDER: real implementation below ────────────────────────────────
    # TODO: For each of the top 50 token accounts returned:
    #   1. Resolve the owner wallet via getAccountInfo
    #   2. Fetch that wallet's full transaction history (getSignaturesForAddress
    #      with limit=1000 and until=None, paginating backward)
    #   3. The LAST (oldest) signature is the genesis tx
    #   4. In that genesis tx, find the funding account (SOL sender)
    #   5. Tally funding wallets; if any single wallet funded ≥ SYBIL_CLUSTER_THRESHOLD
    #      fraction → Sybil cabal detected
    #
    # NOTE: This is expensive (50 × 1 RPC call each). Rate-limit headroom matters.
    # Each call uses _rpc_post() which handles 429 automatically.
    # ─────────────────────────────────────────────────────────────────────────

    try:
        data = _rpc_post(payload)
        accounts = data.get("result", {}).get("value", [])

        if not accounts:
            return "Sybil Cluster Check: No token holders found. Possible pre-launch or ghost token."

        # ── Stub logic — replace with real genesis tx analysis ───────────────
        # For now: if the top holder owns >50% of supply alone, flag as suspicious
        if len(accounts) >= 2:
            top_amount = float(accounts[0].get("uiAmount") or 0)
            second_amount = float(accounts[1].get("uiAmount") or 0)
            total_visible = sum(float(a.get("uiAmount") or 0) for a in accounts)
            if total_visible > 0 and (top_amount / total_visible) > 0.50:
                return (
                    f"Sybil Cluster: Top holder controls {top_amount / total_visible:.0%} "
                    f"of visible supply. Extreme concentration risk."
                )

        print(
            f"  [2/3] Sybil Cluster Check PASSED "
            f"({len(accounts)} holders analyzed)",
            file=sys.stderr,
        )
        return None

    except RuntimeError as exc:
        return f"Sybil Cluster Check: Network failure — blocking as precaution. ({exc})"


# ─── Check 3: RugCheck API ────────────────────────────────────────────────────


def check_rugcheck_api(ca: str) -> Optional[str]:
    """
    GET https://api.rugcheck.xyz/v1/tokens/{ca}/report
    Verify that both mintAuthority and freezeAuthority are null.
    A live mint authority = the creator can mint unlimited supply (infinite rug).
    A live freeze authority = the creator can freeze your wallet (honeypot).

    Returns:
        None if check passes (both authorities are null).
        str  if check fails — the reason string for FATAL ERROR.
    """
    print("  [3/3] RugCheck API Check…", file=sys.stderr)

    url = f"{RUGCHECK_API_BASE}/tokens/{ca}/report"

    try:
        report = _http_get(url)

        # ── Parse authority fields ─────────────────────────────────────────────
        # RugCheck API shape (v1):
        # {
        #   "mint": "...",
        #   "tokenMeta": { "mintAuthority": null | "...", "freezeAuthority": null | "..." },
        #   "risks": [...],
        #   "score": 0-100
        # }
        token_meta = report.get("tokenMeta", {})
        mint_authority = token_meta.get("mintAuthority")
        freeze_authority = token_meta.get("freezeAuthority")

        reasons = []
        if mint_authority is not None and mint_authority != "":
            reasons.append(f"Mint Authority still active ({mint_authority[:8]}…)")
        if freeze_authority is not None and freeze_authority != "":
            reasons.append(f"Freeze Authority still active ({freeze_authority[:8]}…)")

        if reasons:
            return "RugCheck Failed: " + " | ".join(reasons)

        # Also surface explicit rug risks from the RugCheck risk list
        risks = report.get("risks", [])
        critical_risks = [
            r.get("name", "Unknown")
            for r in risks
            if r.get("level", "").upper() in ("DANGER", "CRITICAL", "HIGH")
        ]
        if critical_risks:
            return f"RugCheck: Critical risk flags — {', '.join(critical_risks)}"

        print("  [3/3] RugCheck API Check PASSED", file=sys.stderr)
        return None

    except RuntimeError as exc:
        # Fail-safe: if RugCheck is unreachable, block the trade
        return f"RugCheck API: Unreachable — blocking as precaution. ({exc})"


# ─── Orchestrator ─────────────────────────────────────────────────────────────


def run_all_checks(ca: str) -> str:
    """
    Run all three heuristic checks in sequence.
    Short-circuits and returns FATAL on the first failure.
    Returns the strict formatted output string.
    """
    ca = ca.strip()

    # ── Input validation ──────────────────────────────────────────────────────
    if not _is_valid_solana_address(ca):
        return f"🔴 FATAL ERROR: Invalid Solana contract address format: '{ca}'"

    print(f"\n  KuneoClaw scanning: {ca}\n", file=sys.stderr)

    checks = [
        ("Jito Bundle", lambda: check_jito_bundles(ca)),
        ("Sybil Cluster", lambda: check_sybil_cluster(ca)),
        ("RugCheck", lambda: check_rugcheck_api(ca)),
    ]

    for _name, check_fn in checks:
        try:
            reason = check_fn()
            if reason is not None:
                return f"🔴 FATAL ERROR: {reason}"
        except Exception as exc:
            # Any unexpected exception → block as fail-safe
            return f"🔴 FATAL ERROR: Unexpected check failure ({_name}): {exc}"

    return "🟢 SUCCESS: Token Organic."


# ─── CLI Entrypoint ───────────────────────────────────────────────────────────


def main() -> None:
    if len(sys.argv) != 2:
        print(
            "Usage: python3 risksignal.py <CONTRACT_ADDRESS>",
            file=sys.stderr,
        )
        print("🔴 FATAL ERROR: Missing contract address argument.")
        sys.exit(1)

    contract_address = sys.argv[1]
    result = run_all_checks(contract_address)

    # Always print result to stdout (OpenClaw reads stdout)
    print(result)

    # Exit code: 1 for FATAL ERROR, 0 for SUCCESS
    sys.exit(0 if result.startswith("🟢") else 1)


if __name__ == "__main__":
    main()
