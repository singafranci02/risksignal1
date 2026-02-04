==================================================================
KUNEO BRIDGE FOR METATRADER 5
Version 1.2.0
==================================================================

WHAT IS THIS?
-------------
The Kuneo Bridge is a lightweight Expert Advisor (EA) that sends
read-only telemetry from your MT5 terminal to your Kuneo dashboard.

ZERO-KNOWLEDGE ARCHITECTURE:
- Your strategy code stays private
- Your broker credentials stay private
- We only receive anonymized account metrics (balance, equity, positions)
- The EA cannot execute trades or access sensitive data

INSTALLATION INSTRUCTIONS
--------------------------

1. Open MetaTrader 5
2. Go to: File → Open Data Folder
3. Navigate to: MQL5 → Experts
4. Copy KuneoBridge.mq5 into this folder
5. Restart MetaTrader 5
6. Open any chart
7. Drag "KuneoBridge" from Navigator → Expert Advisors onto the chart
8. In the settings, paste your Bridge Token (from Kuneo dashboard)
9. Enable "Allow WebRequest" when prompted
10. Click OK

CONFIGURATION
-------------
Before the EA can send telemetry, you must:

1. Go to: Tools → Options → Expert Advisors
2. Check "Allow WebRequest for listed URL"
3. Add: https://api.kuneo.tech

Your EA will now send heartbeats every 60 seconds with:
- Account balance & equity
- Open positions count
- Margin utilization
- Connection status

TROUBLESHOOTING
---------------
If you see "WebRequest error":
→ Make sure https://api.kuneo.tech is in the allowed URLs list

If you see "Invalid token":
→ Copy your token exactly from the Kuneo dashboard

If the EA doesn't attach:
→ Check the "Experts" tab in MT5 terminal for error messages

SUPPORT
-------
Documentation: https://kuneo.tech/docs/mt5-bridge
Email: support@kuneo.tech
Dashboard: https://kuneo.tech/dashboard

==================================================================
