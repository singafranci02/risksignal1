//+------------------------------------------------------------------+
//|                                                  KuneoBridge.mq5 |
//|                                          Kuneo Telemetry Bridge |
//|                                              https://kuneo.tech |
//+------------------------------------------------------------------+
#property copyright "Kuneo"
#property link      "https://kuneo.tech"
#property version   "1.20"
#property strict

//--- Input Parameters
input string BridgeToken = "";  // Your Kuneo Bridge Token
input int    HeartbeatInterval = 60;  // Heartbeat interval in seconds
input bool   EnableTelemetry = true;  // Enable telemetry transmission

//--- Global Variables
datetime lastHeartbeat = 0;
string apiEndpoint = "https://api.kuneo.tech/v1/telemetry";

//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit()
{
   //--- Validate token
   if(StringLen(BridgeToken) < 10)
   {
      Alert("Kuneo Bridge: Invalid or missing token. Please configure in EA settings.");
      return(INIT_FAILED);
   }
   
   //--- Check WebRequest permissions
   if(!TerminalInfoInteger(TERMINAL_DLLS_ALLOWED))
   {
      Alert("Kuneo Bridge: Please enable 'Allow WebRequest' in Tools → Options → Expert Advisors");
      return(INIT_FAILED);
   }
   
   Print("Kuneo Bridge initialized successfully. Token: ", StringSubstr(BridgeToken, 0, 8), "...");
   Print("Telemetry endpoint: ", apiEndpoint);
   
   //--- Send initial connection
   SendTelemetry("CONNECTED");
   
   return(INIT_SUCCEEDED);
}

//+------------------------------------------------------------------+
//| Expert deinitialization function                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
{
   SendTelemetry("DISCONNECTED");
   Print("Kuneo Bridge stopped. Reason: ", reason);
}

//+------------------------------------------------------------------+
//| Expert tick function                                             |
//+------------------------------------------------------------------+
void OnTick()
{
   //--- Send heartbeat at intervals
   if(EnableTelemetry && (TimeCurrent() - lastHeartbeat) >= HeartbeatInterval)
   {
      SendHeartbeat();
      lastHeartbeat = TimeCurrent();
   }
}

//+------------------------------------------------------------------+
//| Send heartbeat with account metrics                              |
//+------------------------------------------------------------------+
void SendHeartbeat()
{
   string payload = "{";
   payload += "\"token\":\"" + BridgeToken + "\",";
   payload += "\"event\":\"HEARTBEAT\",";
   payload += "\"timestamp\":" + IntegerToString(TimeCurrent()) + ",";
   payload += "\"account\":{";
   payload += "\"balance\":" + DoubleToString(AccountInfoDouble(ACCOUNT_BALANCE), 2) + ",";
   payload += "\"equity\":" + DoubleToString(AccountInfoDouble(ACCOUNT_EQUITY), 2) + ",";
   payload += "\"margin_used\":" + DoubleToString(AccountInfoDouble(ACCOUNT_MARGIN), 2) + ",";
   payload += "\"margin_free\":" + DoubleToString(AccountInfoDouble(ACCOUNT_MARGIN_FREE), 2) + ",";
   payload += "\"open_positions\":" + IntegerToString(PositionsTotal()) + ",";
   payload += "\"open_orders\":" + IntegerToString(OrdersTotal());
   payload += "},";
   payload += "\"server\":\"" + AccountInfoString(ACCOUNT_SERVER) + "\",";
   payload += "\"broker\":\"" + AccountInfoString(ACCOUNT_COMPANY) + "\"";
   payload += "}";
   
   SendToAPI(payload);
}

//+------------------------------------------------------------------+
//| Send telemetry event                                             |
//+------------------------------------------------------------------+
void SendTelemetry(string eventType)
{
   string payload = "{";
   payload += "\"token\":\"" + BridgeToken + "\",";
   payload += "\"event\":\"" + eventType + "\",";
   payload += "\"timestamp\":" + IntegerToString(TimeCurrent()) + ",";
   payload += "\"terminal\":\"" + TerminalInfoString(TERMINAL_NAME) + " " + IntegerToString(TerminalInfoInteger(TERMINAL_BUILD)) + "\"";
   payload += "}";
   
   SendToAPI(payload);
}

//+------------------------------------------------------------------+
//| Send data to Kuneo API                                           |
//+------------------------------------------------------------------+
void SendToAPI(string payload)
{
   char data[];
   char result[];
   string headers = "Content-Type: application/json\r\n";
   
   StringToCharArray(payload, data, 0, StringLen(payload));
   
   int response = WebRequest(
      "POST",
      apiEndpoint,
      headers,
      5000,  // 5 second timeout
      data,
      result,
      headers
   );
   
   if(response == 200)
   {
      Print("Telemetry sent successfully");
   }
   else if(response == -1)
   {
      int error = GetLastError();
      Print("WebRequest error: ", error, ". Add 'https://api.kuneo.tech' to allowed URLs in Tools → Options → Expert Advisors → WebRequest");
   }
   else
   {
      Print("API returned status: ", response);
   }
}

//+------------------------------------------------------------------+
//| Trade event handler                                              |
//+------------------------------------------------------------------+
void OnTrade()
{
   //--- Send trade notification
   if(EnableTelemetry)
   {
      string payload = "{";
      payload += "\"token\":\"" + BridgeToken + "\",";
      payload += "\"event\":\"TRADE_EVENT\",";
      payload += "\"timestamp\":" + IntegerToString(TimeCurrent()) + ",";
      payload += "\"positions\":" + IntegerToString(PositionsTotal()) + ",";
      payload += "\"orders\":" + IntegerToString(OrdersTotal());
      payload += "}";
      
      SendToAPI(payload);
   }
}
//+------------------------------------------------------------------+
