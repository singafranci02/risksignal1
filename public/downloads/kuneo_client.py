"""
Kuneo Client Library for Python Trading Agents
Installation: pip install httpx
Usage: See examples at bottom of file
"""

import httpx
import asyncio
import time
from typing import Optional, Dict, Any, Literal
from datetime import datetime
import json


class KuneoClient:
    """
    Async client for connecting Python trading agents to Kuneo governance platform.
    
    Features:
    - Real-time telemetry streaming
    - Pre-flight trade validation
    - Emergency halt monitoring
    - Zero-latency async operations
    """
    
    def __init__(
        self,
        api_key: str,
        base_url: str = "https://kuneo.tech",
        timeout: float = 5.0,
        auto_heartbeat: bool = True,
        heartbeat_interval: int = 60
    ):
        """
        Initialize Kuneo client.
        
        Args:
            api_key: Your unique API key from Kuneo dashboard
            base_url: Kuneo API endpoint (default: https://kuneo.tech)
            timeout: Request timeout in seconds
            auto_heartbeat: Automatically send heartbeat every N seconds
            heartbeat_interval: Seconds between heartbeats (default: 60)
        """
        self.api_key = api_key
        self.base_url = base_url.rstrip('/')
        self.telemetry_url = f"{self.base_url}/api/telemetry/{api_key}"
        self.validate_url = f"{self.base_url}/api/validate-trade"
        self.timeout = timeout
        
        self.auto_heartbeat = auto_heartbeat
        self.heartbeat_interval = heartbeat_interval
        self._heartbeat_task: Optional[asyncio.Task] = None
        self._is_halted = False
        self._last_telemetry: Dict[str, Any] = {}
        
        self.client = httpx.AsyncClient(timeout=timeout)
    
    async def start(self):
        """Start the client and begin auto-heartbeat if enabled."""
        if self.auto_heartbeat:
            self._heartbeat_task = asyncio.create_task(self._heartbeat_loop())
    
    async def stop(self):
        """Stop the client and cleanup."""
        if self._heartbeat_task:
            self._heartbeat_task.cancel()
            try:
                await self._heartbeat_task
            except asyncio.CancelledError:
                pass
        await self.client.aclose()
    
    async def send_telemetry(
        self,
        balance: float,
        equity: float,
        margin: Optional[float] = None,
        margin_free: Optional[float] = None,
        positions: int = 0,
        unrealized_pnl: Optional[float] = None,
        realized_pnl: Optional[float] = None,
        event_type: Literal['heartbeat', 'trade', 'position_opened', 'position_closed'] = 'heartbeat',
        attestation: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Send telemetry data to Kuneo.
        
        Args:
            balance: Account balance
            equity: Current equity
            margin: Used margin (optional)
            margin_free: Free margin (optional)
            positions: Number of open positions
            unrealized_pnl: Unrealized P&L (optional)
            realized_pnl: Realized P&L (optional)
            event_type: Type of event triggering telemetry
            attestation: Hardware attestation hash (optional)
        
        Returns:
            Response dict with status, action, and any violations
        """
        payload = {
            "balance": balance,
            "equity": equity,
            "margin": margin,
            "margin_free": margin_free,
            "positions": positions,
            "unrealized_pnl": unrealized_pnl,
            "realized_pnl": realized_pnl,
            "event_type": event_type,
            "attestation": attestation,
            "timestamp": int(time.time() * 1000)
        }
        
        # Remove None values
        payload = {k: v for k, v in payload.items() if v is not None}
        
        try:
            response = await self.client.post(
                self.telemetry_url,
                json=payload,
                headers={"Content-Type": "application/json"}
            )
            
            result = response.json()
            
            # Check if we've been halted
            if result.get('action') == 'HALT' or result.get('status') == 'HALTED':
                self._is_halted = True
                print(f"⚠️  KUNEO HALT: {result.get('message', 'Agent halted by governance system')}")
            
            # Cache last telemetry for heartbeat
            self._last_telemetry = payload
            
            return result
            
        except Exception as e:
            print(f"❌ Kuneo telemetry error: {e}")
            return {"status": "ERROR", "action": "CONTINUE", "error": str(e)}
    
    async def validate_trade(
        self,
        symbol: str,
        action: Literal['buy', 'sell'],
        volume: float,
        current_balance: float,
        current_equity: float,
        open_positions: int,
        price: Optional[float] = None,
        stop_loss: Optional[float] = None,
        take_profit: Optional[float] = None
    ) -> Dict[str, Any]:
        """
        Pre-flight validation before executing a trade.
        Call this BEFORE mt5.order_send() or your broker's trade execution.
        
        Args:
            symbol: Trading symbol (e.g., 'EURUSD')
            action: 'buy' or 'sell'
            volume: Position size in lots
            current_balance: Current account balance
            current_equity: Current equity
            open_positions: Number of currently open positions
            price: Entry price (optional)
            stop_loss: Stop loss level (optional)
            take_profit: Take profit level (optional)
        
        Returns:
            Dict with 'validation' (PASS/FAIL), 'action' (CONTINUE/REJECT_TRADE), 
            and optional 'token' for audit trail
        """
        payload = {
            "api_key": self.api_key,
            "symbol": symbol,
            "action": action,
            "volume": volume,
            "current_balance": current_balance,
            "current_equity": current_equity,
            "open_positions": open_positions,
            "price": price,
            "stop_loss": stop_loss,
            "take_profit": take_profit,
            "timestamp": int(time.time() * 1000)
        }
        
        # Remove None values
        payload = {k: v for k, v in payload.items() if v is not None}
        
        try:
            response = await self.client.post(
                self.validate_url,
                json=payload,
                headers={"Content-Type": "application/json"}
            )
            
            result = response.json()
            
            if result.get('validation') == 'FAIL':
                print(f"❌ Trade REJECTED by Kuneo: {result.get('reason')}")
                if 'violations' in result:
                    for v in result['violations']:
                        print(f"   - {v.get('policy')}: {v.get('message')}")
            
            return result
            
        except Exception as e:
            print(f"❌ Kuneo validation error: {e}")
            # On error, reject trade to be safe
            return {
                "validation": "ERROR",
                "action": "REJECT_TRADE",
                "reason": "Validation system unavailable",
                "error": str(e)
            }
    
    def is_halted(self) -> bool:
        """Check if agent has been halted by governance system."""
        return self._is_halted
    
    async def _heartbeat_loop(self):
        """Internal: Auto-send heartbeat telemetry."""
        await asyncio.sleep(5)  # Initial delay
        
        while True:
            try:
                if self._last_telemetry:
                    # Re-send last telemetry as heartbeat
                    await self.send_telemetry(
                        **{k: v for k, v in self._last_telemetry.items() 
                           if k in ['balance', 'equity', 'margin', 'margin_free', 
                                    'positions', 'unrealized_pnl', 'realized_pnl']},
                        event_type='heartbeat'
                    )
                
                await asyncio.sleep(self.heartbeat_interval)
                
            except asyncio.CancelledError:
                break
            except Exception as e:
                print(f"Heartbeat error: {e}")
                await asyncio.sleep(self.heartbeat_interval)


# ============================================================================
# EXAMPLE USAGE
# ============================================================================

async def example_mt5_integration():
    """Example: Integration with MetaTrader 5 via MetaTrader5 Python package"""
    import MetaTrader5 as mt5
    
    # Initialize Kuneo client
    kuneo = KuneoClient(
        api_key="kuneo_live_abc123_xyz789",  # Get from dashboard
        auto_heartbeat=True,
        heartbeat_interval=60
    )
    
    await kuneo.start()
    
    try:
        # Initialize MT5
        if not mt5.initialize():
            print("MT5 initialization failed")
            return
        
        # Main trading loop
        while True:
            # Check if halted
            if kuneo.is_halted():
                print("⚠️  Agent halted by Kuneo - stopping all operations")
                break
            
            # Get account info
            account_info = mt5.account_info()
            balance = account_info.balance
            equity = account_info.equity
            margin = account_info.margin
            margin_free = account_info.margin_free
            
            # Count open positions
            positions = mt5.positions_total()
            
            # Send telemetry
            await kuneo.send_telemetry(
                balance=balance,
                equity=equity,
                margin=margin,
                margin_free=margin_free,
                positions=positions
            )
            
            # Example: Before opening a new trade
            symbol = "EURUSD"
            lot_size = 0.01
            
            # PRE-FLIGHT CHECK
            validation = await kuneo.validate_trade(
                symbol=symbol,
                action="buy",
                volume=lot_size,
                current_balance=balance,
                current_equity=equity,
                open_positions=positions
            )
            
            if validation.get('validation') == 'PASS':
                # Governance approved - execute trade
                request = {
                    "action": mt5.TRADE_ACTION_DEAL,
                    "symbol": symbol,
                    "volume": lot_size,
                    "type": mt5.ORDER_TYPE_BUY,
                    "price": mt5.symbol_info_tick(symbol).ask,
                    "deviation": 10,
                    "magic": 234000,
                    "comment": f"kuneo_validated_{validation.get('token', '')[:8]}",
                    "type_time": mt5.ORDER_TIME_GTC,
                    "type_filling": mt5.ORDER_FILLING_IOC,
                }
                
                result = mt5.order_send(request)
                
                # Send trade event telemetry
                await kuneo.send_telemetry(
                    balance=balance,
                    equity=equity,
                    positions=positions,
                    event_type='trade'
                )
            else:
                print(f"Trade rejected: {validation.get('reason')}")
            
            await asyncio.sleep(60)  # Check every minute
            
    finally:
        await kuneo.stop()
        mt5.shutdown()


async def example_custom_strategy():
    """Example: Integration with custom Python trading strategy"""
    
    kuneo = KuneoClient(api_key="your_api_key_here")
    await kuneo.start()
    
    try:
        # Your trading strategy class
        class MyStrategy:
            def __init__(self):
                self.balance = 10000.0
                self.equity = 10000.0
                self.positions = []
            
            async def execute_trade(self, signal):
                # Pre-flight validation
                validation = await kuneo.validate_trade(
                    symbol=signal['symbol'],
                    action=signal['action'],
                    volume=signal['size'],
                    current_balance=self.balance,
                    current_equity=self.equity,
                    open_positions=len(self.positions)
                )
                
                if validation.get('validation') == 'PASS':
                    # Execute your trade logic here
                    print(f"✅ Trade approved and executed: {signal}")
                    
                    # Send telemetry after trade
                    await kuneo.send_telemetry(
                        balance=self.balance,
                        equity=self.equity,
                        positions=len(self.positions),
                        event_type='trade'
                    )
                else:
                    print(f"❌ Trade rejected by governance: {validation.get('reason')}")
        
        strategy = MyStrategy()
        
        # Your trading loop
        while not kuneo.is_halted():
            # Your strategy logic here
            await asyncio.sleep(1)
            
    finally:
        await kuneo.stop()


if __name__ == "__main__":
    # Run example
    asyncio.run(example_mt5_integration())
