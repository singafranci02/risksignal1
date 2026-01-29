# RiskSignal Production Migration Guide

## 🎯 Overview

This guide will walk you through deploying the production-grade RiskSignal architecture. The system has been completely rebuilt with enterprise-level patterns:

- **Database**: 5 new tables with RLS policies
- **Rule Engine**: Pluggable policy evaluation system
- **Edge Functions**: Serverless cron job handler
- **Alert Orchestration**: Multi-channel notifications with rate limiting
- **Dashboard**: React Query-powered UI (in progress)

---

## 📋 Prerequisites

1. **Supabase Project**: `https://kxzadyllgtiwmciwbdsm.supabase.co`
2. **Moralis API Key**: ✅ Already configured
3. **Resend API Key**: ✅ Already configured
4. **Optional**: Twilio (SMS), Slack (webhooks)

---

## 🚀 Deployment Steps

### Step 1: Run Database Migrations

Navigate to your Supabase project → **SQL Editor** and run these files **in order**:

```
supabase/migrations/001_create_policies_table.sql
supabase/migrations/002_create_risk_events_table.sql
supabase/migrations/003_create_wallet_snapshots_table.sql
supabase/migrations/004_create_alert_history_table.sql
supabase/migrations/005_create_user_preferences_table.sql
```

**Verification**: Run `SELECT * FROM policies LIMIT 1;` in the SQL Editor. It should return zero rows (no error).

---

### Step 2: Deploy Supabase Edge Function

1. **Install Supabase CLI** (if not installed):
   ```bash
   npm install -g supabase
   ```

2. **Link your project**:
   ```bash
   cd /Users/francescotomatis/Desktop/RiskSignal
   supabase login
   supabase link --project-ref kxzadyllgtiwmciwbdsm
   ```

3. **Deploy the Edge Function**:
   ```bash
   supabase functions deploy policy-checker --no-verify-jwt
   ```

4. **Set Environment Variables** in Supabase Dashboard → **Edge Functions** → **Settings**:
   ```
   MORALIS_API_KEY=eyJhbGciOiJI...
   RESEND_API_KEY=re_bBYM7VPk...
   ```

---

### Step 3: Configure Cron Job

Supabase Edge Functions support cron natively. In your Supabase Dashboard:

1. Navigate to **Edge Functions** → `policy-checker`
2. Click **"Add Cron Job"**
3. Set schedule: `0 * * * *` (every hour)
4. Authorization: Use `Bearer [YOUR_SERVICE_ROLE_KEY]`

**Alternative (Vercel Cron)**:
If you want to use Vercel instead, update `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/supabase-proxy",
      "schedule": "0 * * * *"
    }
  ]
}
```

Then create `/api/supabase-proxy/route.ts` that calls your Edge Function.

---

### Step 4: Migrate Old Data (Optional)

If you have existing wallets in the old `monitored_wallets` table, run this SQL:

```sql
INSERT INTO policies (user_id, wallet_address, policy_type, policy_name, config, severity, is_active)
SELECT 
  user_id,
  wallet_address,
  'NET_WORTH'::policy_type,
  'Legacy Balance Monitor',
  jsonb_build_object(
    'type', 'NET_WORTH',
    'threshold', min_balance_usd,
    'currency', 'USD',
    'comparison', 'LESS_THAN'
  ),
  'HIGH'::severity_level,
  true
FROM monitored_wallets;
```

---

### Step 5: Update Environment Variables

Add these to `.env.local` (for local dev) and Vercel/Supabase (for production):

```bash
# New variables for alert system
TWILIO_ACCOUNT_SID=your_account_sid_here  # Optional
TWILIO_AUTH_TOKEN=your_auth_token_here    # Optional
```

---

### Step 6: Deploy Frontend to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: Production-grade architecture with policy engine"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Set environment variables from `.env.local`

3. **Deploy**:
   - Vercel will auto-deploy on every push to `main`

---

## 🧪 Testing

### Test Policy Creation

1. Log in to your dashboard: `http://localhost:3000/dashboard`
2. The old "Add Wallet" form still works (it creates a NET_WORTH policy behind the scenes)
3. To test manually, insert a policy via SQL:

```sql
INSERT INTO policies (user_id, wallet_address, policy_type, policy_name, config, severity)
VALUES (
  'your_user_id_from_auth.users',
  '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',  -- Vitalik's wallet
  'NET_WORTH',
  'Test Policy',
  '{"type": "NET_WORTH", "threshold": 1000000, "currency": "USD", "comparison": "LESS_THAN"}',
  'HIGH'
);
```

### Test Edge Function

Invoke manually via Supabase Dashboard:

1. Go to **Edge Functions** → `policy-checker`
2. Click **"Invoke Function"**
3. Set headers: `Authorization: Bearer [SERVICE_ROLE_KEY]`
4. Check **Database** → `risk_events` table for new violations

---

## 📊 Database Schema Reference

### Policies
```typescript
{
  id: UUID
  user_id: UUID
  wallet_address: TEXT
  policy_type: 'NET_WORTH' | 'ASSET_CONCENTRATION' | 'UNAUTHORIZED_TOKEN'
  policy_name: TEXT
  config: JSONB  // Type-specific configuration
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  is_active: BOOLEAN
}
```

### Risk Events
```typescript
{
  id: UUID
  policy_id: UUID
  wallet_address: TEXT
  event_type: policy_type
  severity: severity_level
  status: 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED' | 'FALSE_POSITIVE'
  violation_data: JSONB  // Details of what triggered it
  detected_at: TIMESTAMPTZ
}
```

---

## 🔒 Security Checklist

- [ ] RLS policies are enabled on all tables
- [ ] Service role key is only in Edge Function environment
- [ ] Anon key is used in frontend
- [ ] CORS is configured in Supabase (if using external domains)
- [ ] Rate limiting is active (3 alerts per hour per event)

---

## 🐛 Troubleshooting

### "Function not found" error
- Ensure you ran `supabase functions deploy policy-checker`
- Check function logs in Supabase Dashboard

### "Unauthorized" errors
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set in Edge Function env vars
- Check cron job is sending `Authorization` header

### Policies not evaluating
- Check Edge Function logs for errors
- Verify Moralis API key is valid (`curl -H "X-API-Key: YOUR_KEY" https://deep-index.moralis.io/api/v2.2/wallets/0x...`)

---

## 📈 Next Steps (Sprint 5-6)

1. **Complete Dashboard UI** (policy builder, risk feed, analytics)
2. **Add structured logging** (Winston/Pino)
3. **Integrate Sentry** for error tracking
4. **Performance optimization** (caching, indexes)

---

## 🆘 Need Help?

Check:
- Supabase Logs: Dashboard → **Logs** → **Edge Functions**
- Database Queries: Dashboard → **SQL Editor**
- Network Tab: Browser DevTools for frontend API calls

