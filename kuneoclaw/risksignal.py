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
from collections import Counter
from typing import Optional

import requests
from dotenv import load_dotenv

try:
    import base58
except ImportError:
    base58 = None  # Graceful degradation; validation still works via length/alphabet check

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

# ─── Jito Bundle Constants ────────────────────────────────────────────────────
# The 8 official Jito tip accounts on Solana mainnet.
# These are static infrastructure addresses — they never change.
# Source: https://jito-foundation.gitbook.io/mev/mev-payment-and-distribution/on-chain-addresses
JITO_TIP_ACCOUNTS = frozenset([
    "ADaUMid9yfUytqMBgopwjb2DTLSokTSzL1zt6iGPaS49",
    "Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY",
    "HFqU5x63VTqvQss8hp11i4wVV8bD44PvwucfZ2bU7gRe",
    "DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh",
    "96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5",
    "ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt",
    "3AVi9Tg9Uo68tJfuvoKvqKNWKkC5wPdSSdeBnizKZ6jT",
    "DttWaMuVvTiduZRnguLF7jNxTgiMBZ1hyAumKUi",
])
# A first buy must land within this many slots of the creation tx to be in the snipe window
JITO_SNIPE_WINDOW_SLOTS = 2
# >= this many bundled first-buys = confirmed sniper bundle
JITO_SNIPER_THRESHOLD = 2
# Maximum pages of 1000 signatures to paginate (safety valve for heavily traded tokens)
JITO_MAX_PAGINATION_PAGES = 10

# ─── Sybil Cluster Constants ──────────────────────────────────────────────────
SYBIL_TOP_HOLDER_COUNT = 20        # Analyse top 20 token holders
SYBIL_CLUSTER_THRESHOLD = 0.60    # >= 60% share same genesis funder = cabal
SYBIL_MAX_WALLET_PAGES = 5        # Cap wallet pagination at 5k txs per wallet

# ─── RugCheck Constants ───────────────────────────────────────────────────────
RUGCHECK_MIN_SCORE = 50            # Reject tokens scoring below 50/100
TOP10_HOLDER_THRESHOLD = 85.0     # Flag if top-10 hold >85% of supply
# Risk levels in the live RugCheck v1 API are "WARN" and "CRIT" (not DANGER/HIGH/CRITICAL)
RUGCHECK_BLOCK_LEVELS = {"CRIT", "WARN"}
RUGCHECK_BLOCK_NAMES = {
    "Honeypot",
    "MintAuthority",
    "FreezeAuthority",
    "LpNotBurned",
}


# ─── Utilities ────────────────────────────────────────────────────────────────


def _is_valid_solana_address(address: str) -> bool:
    """Validate a Solana base58-encoded public key (32 bytes -> 43-44 chars)."""
    if not address or not isinstance(address, str):
        return False
    stripped = address.strip()
    if not (32 <= len(stripped) <= 44):
        return False
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
                timeout=15,
            )
            if response.status_code == 429:
                wait = BACKOFF_BASE ** attempt
                print(
                    f"  [RPC] Rate limited (429). Retrying in {wait:.1f}s "
                    f"(attempt {attempt}/{retries})...",
                    file=sys.stderr,
                )
                time.sleep(wait)
                continue
            response.raise_for_status()
            data = response.json()
            if "error" in data and data["error"] is not None:
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
            response = requests.get(url, timeout=15)
            if response.status_code == 429:
                wait = BACKOFF_BASE ** attempt
                print(
                    f"  [HTTP] Rate limited (429). Retrying in {wait:.1f}s "
                    f"(attempt {attempt}/{retries})...",
                    file=sys.stderr,
                )
                time.sleep(wait)
                continue
            if response.status_code == 404:
                raise RuntimeError(f"404 - token not found in safety database: {url}")
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


# ─── Internal Helpers ─────────────────────────────────────────────────────────


def _fetch_all_signatures(address: str, max_pages: int) -> list:
    """
    Paginate getSignaturesForAddress from newest to oldest.

    IMPORTANT: getSignaturesForAddress always returns results in DESCENDING order
    (newest first). The LAST item in the returned list is the OLDEST tx (genesis).

    Returns the full flat list across all pages (up to max_pages * 1000 entries).
    """
    all_sigs = []
    before_cursor = None

    for _page in range(max_pages):
        params: dict = {"limit": 1000, "commitment": "finalized"}
        if before_cursor:
            params["before"] = before_cursor

        payload = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getSignaturesForAddress",
            "params": [address, params],
        }
        data = _rpc_post(payload)
        batch = data.get("result") or []

        if not batch:
            break

        all_sigs.extend(batch)

        if len(batch) < 1000:
            # Fewer than limit returned = we reached the beginning of history
            break

        before_cursor = batch[-1]["signature"]

    return all_sigs


def _has_jito_tip(tx_result: dict) -> bool:
    """
    Return True if a transaction result (from getTransaction with jsonParsed encoding)
    contains a SOL transfer to any of the 8 Jito tip accounts.

    Checks both inner instructions (CPI, most common location) and
    top-level instructions (less common but valid).
    """
    meta = tx_result.get("meta") or {}

    # Inner instructions (CPIs) - the most common location for Jito tips
    for group in (meta.get("innerInstructions") or []):
        for ix in group.get("instructions", []):
            parsed = ix.get("parsed") or {}
            if (
                isinstance(parsed, dict)
                and parsed.get("type") == "transfer"
                and parsed.get("info", {}).get("destination") in JITO_TIP_ACCOUNTS
            ):
                return True

    # Top-level instructions (less common but possible)
    message = (tx_result.get("transaction") or {}).get("message", {})
    for ix in (message.get("instructions") or []):
        parsed = ix.get("parsed") or {}
        if (
            isinstance(parsed, dict)
            and parsed.get("type") == "transfer"
            and parsed.get("info", {}).get("destination") in JITO_TIP_ACCOUNTS
        ):
            return True

    return False


def _fetch_transaction(signature: str) -> Optional[dict]:
    """
    Fetch a single transaction with jsonParsed encoding.
    Returns the full RPC response dict, or None if result is empty.
    """
    payload = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getTransaction",
        "params": [
            signature,
            {
                "encoding": "jsonParsed",
                "commitment": "finalized",
                "maxSupportedTransactionVersion": 0,
            },
        ],
    }
    data = _rpc_post(payload)
    return data if data.get("result") else None


def _resolve_token_account_owner(ata: str) -> Optional[str]:
    """
    Given a token account (ATA) address, return the owning wallet pubkey.

    IMPORTANT: getTokenLargestAccounts returns token account addresses (ATAs),
    not wallet addresses. This function resolves the actual owner via
    getAccountInfo with jsonParsed encoding.
    """
    payload = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getAccountInfo",
        "params": [ata, {"encoding": "jsonParsed", "commitment": "finalized"}],
    }
    try:
        data = _rpc_post(payload)
        return data["result"]["value"]["data"]["parsed"]["info"]["owner"]
    except (TypeError, KeyError, RuntimeError):
        return None


def _get_genesis_sig_info(wallet: str) -> Optional[dict]:
    """
    Paginate through a wallet's full transaction history to find its oldest
    (genesis) transaction. Returns the signature-info dict for that tx.
    """
    before = None
    last_batch: list = []

    for _ in range(SYBIL_MAX_WALLET_PAGES):
        params: dict = {"limit": 1000, "commitment": "finalized"}
        if before:
            params["before"] = before
        payload = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getSignaturesForAddress",
            "params": [wallet, params],
        }
        try:
            data = _rpc_post(payload)
        except RuntimeError:
            break
        batch = data.get("result") or []
        if not batch:
            break
        last_batch = batch
        if len(batch) < 1000:
            break
        before = batch[-1]["signature"]

    return last_batch[-1] if last_batch else None


def _get_funding_wallet(genesis_signature: str, funded_wallet: str) -> Optional[str]:
    """
    Given a wallet's genesis transaction, identify the account that sent SOL
    to fund it (preBalance > postBalance, and is not the funded wallet itself).
    """
    tx_data = _fetch_transaction(genesis_signature)
    if not tx_data:
        return None

    result = tx_data.get("result") or {}
    meta = result.get("meta") or {}
    pre_balances: list = meta.get("preBalances") or []
    post_balances: list = meta.get("postBalances") or []

    # Account keys may be dicts (jsonParsed) or plain strings
    raw_keys = (
        (result.get("transaction") or {})
        .get("message", {})
        .get("accountKeys", [])
    )
    account_keys = [
        (k.get("pubkey") if isinstance(k, dict) else k) for k in raw_keys
    ]

    for pre, post, key in zip(pre_balances, post_balances, account_keys):
        if key and key != funded_wallet and pre > post:
            # This account lost SOL and is not the wallet being funded
            return key

    return None


# ─── Check 1: Jito Bundle Detection ──────────────────────────────────────────


def check_jito_bundles(ca: str) -> Optional[str]:
    """
    Detect coordinated Jito sniper bundles.

    Algorithm:
    1. Paginate getSignaturesForAddress to find the creation (genesis) tx.
       getSignaturesForAddress returns NEWEST FIRST, so the creation tx is
       the LAST item after full pagination - NOT signatures[0].
    2. Extract the first N buys after creation (items just preceding the
       creation in the newest-first list, reversed to chronological order).
    3. For each first buy within the snipe window (creation_slot +/- 2 slots),
       call getTransaction with jsonParsed and check inner/top-level instructions
       for transfers to the 8 known Jito tip accounts.
    4. If >= JITO_SNIPER_THRESHOLD buys are bundled -> FATAL ERROR.

    Returns:
        None if check passes (no bundle detected).
        str  if check fails - the reason string for FATAL ERROR.
    """
    print("  [1/3] Jito Bundle Check...", file=sys.stderr)

    try:
        # Step 1 - paginate to the genesis tx
        all_sigs = _fetch_all_signatures(ca, max_pages=JITO_MAX_PAGINATION_PAGES)

        if not all_sigs:
            return "Jito Bundle Check: No transactions found. Token may not exist on-chain."

        # all_sigs is newest->oldest; the LAST item is the creation tx
        creation_sig_info = all_sigs[-1]
        creation_slot = creation_sig_info.get("slot")

        if creation_slot is None:
            return "Jito Bundle Check: Could not determine creation slot - blocking as precaution."

        # Step 2 - extract first buys
        # Layout: [newest, ..., buy_2, buy_1, CREATION]
        # Slice [-11:-1] = [buy_10, ..., buy_1]; reverse = [buy_1, buy_2, ...]
        first_buy_candidates = all_sigs[-11:-1]
        first_buy_candidates.reverse()

        if not first_buy_candidates:
            # Token exists but has no buys yet
            print("  [1/3] Jito Bundle Check PASSED (no buys after creation yet)", file=sys.stderr)
            return None

        # Step 3 - check each first buy for Jito tip transfers
        bundled_count = 0
        checked = 0

        for sig_info in first_buy_candidates[:10]:
            slot = sig_info.get("slot")
            if slot is None or slot > creation_slot + JITO_SNIPE_WINDOW_SLOTS:
                # Past the snipe window - organic sequential buys
                break

            tx_data = _fetch_transaction(sig_info["signature"])
            if not tx_data:
                checked += 1
                continue

            checked += 1
            if _has_jito_tip(tx_data["result"]):
                bundled_count += 1

        # Step 4 - verdict
        if bundled_count >= JITO_SNIPER_THRESHOLD:
            return (
                f"Jito Bundle Detected: {bundled_count}/{checked} first-buys paid Jito tips "
                f"within {JITO_SNIPE_WINDOW_SLOTS} slots of creation (slot {creation_slot}). "
                f"Coordinated sniper bundle."
            )

        print(
            f"  [1/3] Jito Bundle Check PASSED "
            f"({bundled_count}/{checked} first-buys bundled)",
            file=sys.stderr,
        )
        return None

    except RuntimeError as exc:
        return f"Jito Bundle Check: Network failure - blocking as precaution. ({exc})"


# ─── Check 2: Sybil Cluster Detection ────────────────────────────────────────


def check_sybil_cluster(ca: str) -> Optional[str]:
    """
    Detect Sybil cabals by tracing top holders back to their funding source.

    Algorithm:
    1. getTokenLargestAccounts -> top N token account (ATA) addresses.
       NOTE: These are ATA addresses, NOT wallet addresses.
    2. For each ATA, call getAccountInfo (jsonParsed) to resolve the owner wallet.
    3. For each wallet, paginate getSignaturesForAddress to find its genesis tx.
    4. In each genesis tx, identify the account that funded (sent SOL to) the wallet.
    5. Tally funding sources. If >= SYBIL_CLUSTER_THRESHOLD share one funder -> FATAL.

    Returns:
        None if check passes.
        str  if check fails - the reason string for FATAL ERROR.
    """
    print("  [2/3] Sybil Cluster Check...", file=sys.stderr)

    try:
        # Step 1 - get top token accounts (ATAs, not wallets)
        payload = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getTokenLargestAccounts",
            "params": [ca, {"commitment": "finalized"}],
        }
        data = _rpc_post(payload)
        token_accounts = (data.get("result") or {}).get("value") or []

        if not token_accounts:
            return "Sybil Cluster Check: No token holders found. Possible ghost token."

        token_accounts = token_accounts[:SYBIL_TOP_HOLDER_COUNT]

        # Step 2 - resolve ATA -> owner wallet
        print(
            f"  [2/3] Resolving {len(token_accounts)} token accounts to wallet owners...",
            file=sys.stderr,
        )
        wallet_owners = []
        for ta in token_accounts:
            owner = _resolve_token_account_owner(ta["address"])
            if owner:
                wallet_owners.append(owner)
            time.sleep(0.05)  # Gentle rate-limit courtesy

        if not wallet_owners:
            print("  [2/3] Sybil Cluster Check PASSED (owners could not be resolved)", file=sys.stderr)
            return None

        # Steps 3 + 4 - genesis tx -> funding source for each wallet
        print(
            f"  [2/3] Tracing genesis transactions for {len(wallet_owners)} wallets...",
            file=sys.stderr,
        )
        funding_sources = []
        for wallet in wallet_owners:
            genesis_info = _get_genesis_sig_info(wallet)
            if not genesis_info:
                continue
            funder = _get_funding_wallet(genesis_info["signature"], wallet)
            if funder:
                funding_sources.append(funder)
            time.sleep(0.05)

        if not funding_sources:
            # No funding data available - pass rather than block on incomplete data
            print("  [2/3] Sybil Cluster Check PASSED (funding data unavailable)", file=sys.stderr)
            return None

        # Step 5 - cluster analysis
        tally = Counter(funding_sources)
        top_funder, top_count = tally.most_common(1)[0]
        fraction = top_count / len(funding_sources)

        if fraction >= SYBIL_CLUSTER_THRESHOLD:
            return (
                f"Sybil Cluster: {top_count}/{len(funding_sources)} top holders funded by "
                f"same master wallet {top_funder[:8]}... — coordinated distribution."
            )

        print(
            f"  [2/3] Sybil Cluster Check PASSED "
            f"(top funder: {fraction:.0%} of resolved holders; "
            f"threshold: {SYBIL_CLUSTER_THRESHOLD:.0%})",
            file=sys.stderr,
        )
        return None

    except RuntimeError as exc:
        return f"Sybil Cluster Check: Network failure - blocking as precaution. ({exc})"


# ─── Check 3: RugCheck API ────────────────────────────────────────────────────


def check_rugcheck_api(ca: str) -> Optional[str]:
    """
    Query api.rugcheck.xyz for a comprehensive safety report.

    KEY FIX: Risk levels in the live RugCheck v1 API are "WARN" and "CRIT" —
    NOT "DANGER", "CRITICAL", or "HIGH" as originally coded. This caused all
    critical risk flags to be silently missed.

    Also adds: rugged field, score threshold, lpBurned, top10HoldersPercent.

    Returns:
        None if check passes (token appears safe).
        str  if a risk is detected - the reason string for FATAL ERROR.
    """
    print("  [3/3] RugCheck API Check...", file=sys.stderr)

    url = f"{RUGCHECK_API_BASE}/tokens/{ca}/report"

    try:
        report = _http_get(url)

        # 1. Already confirmed rug pull in RugCheck database
        if report.get("rugged") is True:
            return "RugCheck: Token already flagged as a confirmed rug pull."

        # 2. Overall safety score below threshold
        score = report.get("score")
        if score is not None and score < RUGCHECK_MIN_SCORE:
            return (
                f"RugCheck: Safety score {score}/100 is below minimum "
                f"threshold ({RUGCHECK_MIN_SCORE})."
            )

        # 3. Mint / Freeze authority — handle both v1 response shapes:
        #    Shape A: report["mintAuthority"] (top-level)
        #    Shape B: report["tokenMeta"]["mintAuthority"]
        NULL_AUTHORITY_VALUES = {None, "", "null", "11111111111111111111111111111111"}
        mint_auth = report.get("mintAuthority") or (
            (report.get("tokenMeta") or {}).get("mintAuthority")
        )
        freeze_auth = report.get("freezeAuthority") or (
            (report.get("tokenMeta") or {}).get("freezeAuthority")
        )

        reasons = []
        if mint_auth not in NULL_AUTHORITY_VALUES:
            reasons.append(f"Mint Authority still active ({str(mint_auth)[:8]}...)")
        if freeze_auth not in NULL_AUTHORITY_VALUES:
            reasons.append(f"Freeze Authority still active ({str(freeze_auth)[:8]}...)")
        if reasons:
            return "RugCheck Failed: " + " | ".join(reasons)

        # 4. LP not burned - creator can drain all liquidity at any time
        if report.get("lpBurned") is False:
            return (
                "RugCheck: Liquidity not burned — creator can withdraw "
                "all liquidity (soft rug risk)."
            )

        # 5. Named risk flags — CORRECT level values from live API: "WARN" / "CRIT"
        for risk in (report.get("risks") or []):
            level = (risk.get("level") or "").upper()
            name = risk.get("name") or ""
            if level in RUGCHECK_BLOCK_LEVELS and name in RUGCHECK_BLOCK_NAMES:
                return f"RugCheck: {name} — {risk.get('value', 'risk detected')}"

        # 6. Top-10 holder concentration guard
        top10 = report.get("top10HoldersPercent") or 0.0
        try:
            top10 = float(top10)
        except (TypeError, ValueError):
            top10 = 0.0
        if top10 > TOP10_HOLDER_THRESHOLD:
            return (
                f"RugCheck: Top 10 holders control {top10:.1f}% of supply — "
                f"extreme concentration risk."
            )

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

    # Input validation
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
            # Any unexpected exception -> block as fail-safe
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
