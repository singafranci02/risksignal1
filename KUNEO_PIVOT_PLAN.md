# 🎯 Kuneo - AI Agent Governance Platform
## Strategic Pivot Plan

---

## 1. Brand & Messaging Transformation

### Name Change
- **Old**: RiskSignal
- **New**: Kuneo
- **Scope**: Website only (keep codebase/repo as RiskSignal for now)

### Visual Identity
- **Theme**: Keep monochrome black base
- **Enhancement**: Add strategic gradients for visual appeal
- **Focus**: Professional, institutional-grade aesthetic

### Core Messaging Shift
- **From**: "Monitoring crypto wallets"
- **To**: "Infrastructure layer for autonomous financial agents"
- **Positioning**: The "Digital Helmet" and governance engine for AI agents

---

## 2. Website Content Strategy

### New Hero Section
**Headline**: Deploy Autonomous Agents with Absolute Certainty

**Sub-headline**: The infrastructure layer that transforms experimental AI scripts into compliant, institutional-grade financial vehicles. Define the rules. We enforce the logic at the infrastructure level.

**Value Proposition**: Verifiable Agentic Finance

### The Three Pillars (Core Services)

#### 1. Kuneo Core (Real-Time Monitoring)
- Auditing engine for cross-custodian mandates
- Detects "Agentic Drift" and AI hallucinations
- Real-time violation tracking

#### 2. The Digital Helmet (Verifiable Execution)
- Hardware-secured environments (TEEs)
- Isolated AI logic execution
- Tamper-proof strategy enforcement
- Parameter-constrained fund access

#### 3. Agent Intelligence Hub
- Global AI regulation knowledge base
- MiCA, EU AI Act, ASIC ERS compliance
- Pre-built rule templates
- Agentic trading frameworks
- Drawdown limits & recursive loop protection

---

## 3. New Page: AI Governance

### Purpose
Dedicated page explaining the governance layer for autonomous agents

### Key Sections
1. **The Problem**: AI agents as "black boxes"
2. **The Solution**: Mathematical constraints at infrastructure level
3. **How It Works**: Rule definition → Enforcement → Audit trail
4. **Compliance**: Regulatory frameworks supported
5. **Use Cases**: Institutional examples

---

## 4. Technical Architecture

### New Components to Build

#### A. Agent Rules Dashboard
- **Purpose**: Define and manage "Sentinel Rules"
- **Features**:
  - Rule management table (Name, Target Agent, Threshold, Status)
  - Create/Edit modal
  - Rule types: Asset Exposure, Correlation Drift, Transaction Frequency, Gas Burn Limit
  - Toggle active/paused status

#### B. Database Schema Updates
```sql
-- New Tables
agent_rules (
  id, user_id, agent_address, rule_type, 
  threshold_params JSONB, is_active, created_at
)

violation_audit_trail (
  id, rule_id, agent_address, violation_type,
  detected_value, threshold_value, timestamp,
  severity, resolution_status
)

compliance_templates (
  id, name, description, regulatory_framework,
  required_rules JSONB, region
)
```

#### C. Sentinel Logic Engine (Edge Function)
- Fetch active rules
- Query portfolio state (Moralis/Alchemy)
- Compare against thresholds
- Log violations
- Trigger alerts

#### D. Knowledge Hub Component
- Compliance template cards
- Regulatory requirement breakdowns
- Pre-configured rule sets
- Templates: ASIC ERS, MiCA, EU AI Act

---

## 5. Implementation Phases

### Phase 1: Branding & Content (Priority)
- [ ] Update all "RiskSignal" references to "Kuneo"
- [ ] Rewrite hero section
- [ ] Update navigation (add "AI Governance" page)
- [ ] Rewrite home page with three pillars
- [ ] Add gradient accents to monochrome theme

### Phase 2: AI Governance Page
- [ ] Create `/ai-governance` route
- [ ] Build problem/solution narrative
- [ ] Add compliance framework section
- [ ] Include use case examples
- [ ] Add "Digital Helmet" explainer

### Phase 3: Rules Dashboard (MVP)
- [ ] Create `AgentRulesDashboard` component
- [ ] Build rule creation modal
- [ ] Implement rule types dropdown
- [ ] Add rule management table
- [ ] Style with institutional theme

### Phase 4: Backend Infrastructure
- [ ] Create `agent_rules` table
- [ ] Create `violation_audit_trail` table
- [ ] Build Supabase functions for CRUD operations
- [ ] Implement validation logic
- [ ] Add error handling

### Phase 5: Sentinel Engine
- [ ] Create Edge Function for rule evaluation
- [ ] Integrate Moralis/Alchemy API
- [ ] Build comparison logic
- [ ] Implement violation logging
- [ ] Add alert triggers

### Phase 6: Knowledge Hub
- [ ] Create compliance template cards
- [ ] Build regulatory framework database
- [ ] Add template detail pages
- [ ] Include rule configuration guides
- [ ] Add regulatory tooltips throughout UI

### Phase 7: Advanced Features
- [ ] Multi-source aggregator (multiple wallets + CEX APIs)
- [ ] Immutable audit log export
- [ ] Certified audit report generation
- [ ] Regulatory tooltip system
- [ ] Real-time dashboard updates

---

## 6. Design Enhancements

### Gradient Strategy
- **Primary Gradient**: White → Zinc-400 → Zinc-600 (for headlines)
- **Accent Gradient**: Zinc-900 → Black → Zinc-900 (for cards)
- **Hover Effects**: Subtle gradient shifts on interactive elements
- **Status Indicators**: Green/Yellow/Red gradients for rule states

### Visual Hierarchy
- **Hero**: Large gradients for impact
- **Cards**: Subtle gradients for depth
- **Buttons**: Gradient borders on hover
- **Icons**: Gradient fills for emphasis

---

## 7. Content Updates by Page

### Home Page
- Hero: New headline + sub-headline
- Replace "Features" with "Three Pillars"
- Update stats bar (agents monitored, rules enforced, violations prevented)
- Rewrite "How It Works" for agent context
- Update use cases (AI trading bots, autonomous treasuries)

### About Page
- Mission: Focus on AI agent governance
- Problem: AI agents as black boxes
- Solution: Infrastructure-level enforcement
- Team: Add AI/compliance expertise

### Pricing Page
- Rename tiers: Starter → Developer, Pro → Institutional, Enterprise → Custom
- Update features for agent context
- Add "Rules per Agent" metric
- Include "Audit Trail Retention"

### New: AI Governance Page
- Full explainer on governance layer
- Regulatory compliance section
- Digital Helmet concept
- Use case studies
- Integration guide

---

## 8. Key Messaging Points

### For Developers
- "Build AI agents without regulatory fear"
- "Infrastructure-level safety nets"
- "Pre-built compliance templates"

### For Institutions
- "Verifiable execution environments"
- "Immutable audit trails"
- "Global regulatory compliance"

### For Regulators
- "Transparent rule enforcement"
- "Exportable audit logs"
- "Framework-specific templates"

---

## 9. Technical Specifications

### Rule Types
1. **Asset Exposure**: Max % in single token
2. **Correlation Drift**: Portfolio correlation limits
3. **Transaction Frequency**: Max trades per period
4. **Gas Burn Limit**: Max gas spend per day
5. **Drawdown Limit**: Max portfolio loss %
6. **Recursive Loop Protection**: Detect infinite loops
7. **Slippage Tolerance**: Max acceptable slippage
8. **Liquidity Threshold**: Min liquidity requirements

### Regulatory Frameworks
- **MiCA** (EU Markets in Crypto-Assets)
- **EU AI Act** (Article 12 - Traceability)
- **ASIC ERS** (Australian Securities)
- **SEC Guidelines** (US)
- **FCA Rules** (UK)

### Audit Trail Requirements
- Timestamp (ISO 8601)
- Rule ID + Agent Address
- Check Result (Pass/Fail)
- Actual vs Threshold Values
- Action Taken
- Immutable (append-only)

---

## 10. Success Metrics

### User Engagement
- Rules created per user
- Active agents monitored
- Violations detected
- Compliance templates used

### Technical Performance
- Rule evaluation latency (<100ms)
- Audit log write speed
- Alert delivery time
- Dashboard load time

### Business Metrics
- Developer signups
- Institutional conversions
- Template downloads
- Audit report exports

---

## 11. Next Steps

### Immediate Actions (Today)
1. Update branding (RiskSignal → Kuneo)
2. Rewrite hero section
3. Add gradient enhancements
4. Create AI Governance page structure

### This Week
1. Build Agent Rules Dashboard UI
2. Create database schema
3. Implement basic CRUD operations
4. Build Knowledge Hub component

### This Month
1. Deploy Sentinel Engine
2. Add compliance templates
3. Implement audit trail export
4. Launch beta with select users

---

## 12. Risk Mitigation

### Technical Risks
- **Risk**: Rule evaluation performance at scale
- **Mitigation**: Implement caching, batch processing

### Business Risks
- **Risk**: Regulatory interpretation varies by region
- **Mitigation**: Add disclaimers, offer customization

### User Experience Risks
- **Risk**: Complex rule configuration
- **Mitigation**: Pre-built templates, guided setup

---

**Status**: Ready for implementation
**Priority**: Phase 1 (Branding & Content)
**Timeline**: 2-4 weeks for full pivot
