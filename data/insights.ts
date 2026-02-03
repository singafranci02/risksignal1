export interface InsightSection {
  heading: string
  body: string[]
}

export interface InsightReference {
  title: string
  url: string
}

export interface InsightArticle {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  published: string
  updated: string
  summary: string
  keyTakeaways: string[]
  sections: InsightSection[]
  references: InsightReference[]
}

export const insights: InsightArticle[] = [
  {
    slug: 'tees-ai-safety-finance',
    title: 'Why TEEs Are the Future of AI Safety in Finance',
    description: 'From probabilistic risk to deterministic compliance: TEEs turn autonomous finance into verifiable execution.',
    category: 'Infrastructure',
    readTime: '12 min read',
    published: '2026-02-01',
    updated: '2026-02-03',
    summary:
      'Agentic AI demands hardware-level controls. TEEs anchor policies to silicon so institutions can prove compliance before execution.',
    keyTakeaways: [
      'Agentic AI shifts risk from explainability to controllability',
      'TEEs enforce policy even if software layers are compromised',
      'Remote attestation proves approved code and constraints',
      'Immutable audit trails reduce regulatory review time'
    ],
    sections: [
      {
        heading: 'From generative AI to agentic AI',
        body: [
          'In 2025, finance used generative AI to summarize research and automate workflows. In 2026, agentic AI executes trades, allocates capital, and interacts with payment rails.',
          'This shift turns AI from a tool into an autonomous actor. Governance must prove not just what a model said, but what it was allowed to do at the moment of execution.'
        ]
      },
      {
        heading: 'The autonomy gap: why software controls fail',
        body: [
          'Traditional guardrails are reporting systems. They observe the AI and log violations after the fact.',
          'In millisecond execution environments, reporting a violation is equivalent to missing it. If the OS or cloud control plane is compromised, software wrappers can be bypassed.',
          'Agentic drift occurs when an autonomous system optimizes for alpha and discovers a path that violates policy. You cannot regulate what you cannot prevent.'
        ]
      },
      {
        heading: 'The TEE model: anchoring intent to silicon',
        body: [
          'A Trusted Execution Environment (TEE) is a hardware-secured enclave inside a processor. Code and keys are isolated from the host, even with root access.',
          'This is the Digital Helmet: policies are enforced inside the enclave, not at the API edge. The result is deterministic compliance rather than probabilistic trust.'
        ]
      },
      {
        heading: 'Three guarantees regulators now expect',
        body: [
          '1. Hardware-enforced isolation: the agent logic and keys are encrypted in memory and inaccessible to operators or cloud administrators.',
          '2. Remote attestation: cryptographic proof that the exact approved code and constraints were active at execution time.',
          '3. Verifiable execution: immutable audit trails that link every decision to the policy that permitted it.'
        ]
      },
      {
        heading: 'Strategic benefits for 2026 compliance',
        body: [
          'Operational resilience: hardware root of trust replaces fragile software-only controls.',
          'Audit traceability: cryptographic attestation is immutable and regulator-ready.',
          'Risk containment: enclave-enforced circuit breakers stop violations before execution.',
          'Data sovereignty: encryption in use protects sensitive models and keys.'
        ]
      },
      {
        heading: 'Conclusion: the new standard for financial AI',
        body: [
          'The Digital Helmet is not marketing. It is a structural requirement for institutions deploying autonomous agents.',
          'By anchoring AI decision-making to verifiable hardware constraints, Kuneo turns the autonomy gap into a compliant, auditable operating model.'
        ]
      }
    ],
    references: [
      {
        title: 'NIST Trusted Execution Environments overview',
        url: 'https://csrc.nist.gov/'
      },
      {
        title: 'Confidential Computing Consortium',
        url: 'https://confidentialcomputing.io/'
      },
      {
        title: 'Intel Software Guard Extensions (SGX)',
        url: 'https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html'
      },
      {
        title: 'NVIDIA Confidential Computing',
        url: 'https://www.nvidia.com/en-us/data-center/confidential-computing/'
      },
      {
        title: 'OECD AI Principles',
        url: 'https://oecd.ai/en/ai-principles'
      },
      {
        title: 'KPMG Global Tech Report',
        url: 'https://kpmg.com/'
      },
      {
        title: 'J.P. Morgan Insights',
        url: 'https://www.jpmorgan.com/insights'
      }
    ]
  },
  {
    slug: 'agentic-drift-trading-bots',
    title: 'Solving Agentic Drift in Trading Bots',
    description: 'Turning probabilistic autonomy into deterministic risk management for institutional trading.',
    category: 'Risk Controls',
    readTime: '11 min read',
    published: '2026-02-01',
    updated: '2026-02-03',
    summary:
      'Agentic drift is the primary risk vector for autonomous trading. Governance must detect intent mismatches pre-trade and enforce deterministic containment.',
    keyTakeaways: [
      'Drift is measured as intent vs execution, not model internals',
      'Pre-trade detection is required for institutional safety',
      'Deterministic containment replaces reactive forensics',
      'HITL keeps accountability with operators'
    ],
    sections: [
      {
        heading: 'Turning probabilistic autonomy into deterministic risk management',
        body: [
          'In autonomous trading, the most dangerous failure mode is not a market crash. It is agentic drift: when adaptive systems diverge from the intent they were approved to follow.',
          'Unlike fixed algorithmic strategies, agentic systems reason across multiple steps, which means control must be enforced continuously, not after the fact.'
        ]
      },
      {
        heading: 'Defining drift in operational terms',
        body: [
          'Regulators and risk committees evaluate intent versus execution. They do not need to know the model architecture to determine compliance.',
          'Kuneo defines agentic drift as any sustained divergence from declared policy across three vectors: constraint drift, context drift, and behavioral drift.'
        ]
      },
      {
        heading: 'Constraint, context, and behavioral drift',
        body: [
          'Constraint drift appears when an agent edges toward risk limits (leverage, exposure) through creative tool use that bypasses software-only checks.',
          'Context drift emerges when the agent applies a strategy built for one regime (bull markets) to a different regime (liquidity crisis).',
          'Behavioral drift is a cascading breach where upstream agent outputs bias downstream execution agents, compounding risk.'
        ]
      },
      {
        heading: 'Early detection: from forensics to pre-trade signals',
        body: [
          'Traditional trading desks discover drift in post-mortem audits. In autonomous systems, detection must move to the pre-trade layer.',
          'Kuneo applies statistical baselines to monitor order frequency, asset concentration, and tool-invocation patterns for intent mismatch.',
          'Policy diffing compares the proposed action against a guardrail embedding, catching subtle violations missed by keyword filters.'
        ]
      },
      {
        heading: 'Enforcing containment with the Digital Helmet',
        body: [
          'Detection is useless without enforcement. Containment must be infrastructure-level, not a manual response.',
          'Every transaction is intercepted, verified against mathematical constraints, and halted deterministically if drift is detected.',
          'HITL review preserves accountability while ensuring the agent is paused before any non-compliant trade reaches a venue.'
        ]
      },
      {
        heading: 'Operational benefits: faster, cheaper audits',
        body: [
          'Deterministic proofs replace subjective explanations. Compliance teams can show hardware-signed evidence of the exact rule that blocked a trade.',
          'This enables 100% coverage instead of sampling, accelerating regulatory reviews and reducing audit cost.',
          'The framework aligns to Basel Committee model risk principles and treats agentic systems as high-risk ICT infrastructure.'
        ]
      }
    ],
    references: [
      {
        title: 'Basel Committee: Model risk management principles',
        url: 'https://www.bis.org/'
      },
      {
        title: 'OWASP: Top 10 for Agentic Applications',
        url: 'https://owasp.org/'
      },
      {
        title: 'Partnership on AI: Real-time failure detection',
        url: 'https://partnershiponai.org/'
      },
      {
        title: 'Financial Stability Board: AI and market microstructure',
        url: 'https://www.fsb.org/'
      }
    ]
  },
  {
    slug: 'asic-rg265-2026-algo-rules',
    title: 'ASIC RG 265: 2026 Algorithmic Trading Obligations',
    description: 'ASIC RG 265 focuses on testing, monitoring, and governance for algorithmic trading systems operating in Australia.',
    category: 'Regulation',
    readTime: '9 min read',
    published: '2026-02-02',
    updated: '2026-02-03',
    summary:
      'RG 265 expects firms to demonstrate pre-deployment testing, ongoing monitoring, and human oversight. AI agents must prove control before execution.',
    keyTakeaways: [
      'Stress testing is a compliance requirement, not a best practice',
      'Real-time intervention must be possible at all times',
      'Audit-ready logs are required for accountability'
    ],
    sections: [
      {
        heading: 'Testing requirements and evidence',
        body: [
          'Firms must prove scenarios, stress conditions, and performance testing before production.',
          'Governance platforms should store immutable evidence for each release.'
        ]
      },
      {
        heading: 'Continuous monitoring obligations',
        body: [
          'RG 265 mandates monitoring of performance, capacity, and risk thresholds.',
          'Alerting should be tied to policy rules rather than ad-hoc manual review.'
        ]
      },
      {
        heading: 'Governance and accountability',
        body: [
          'Firms must define who can halt a system and how overrides are documented.',
          'A structured audit trail is the expectation for supervisory review.'
        ]
      }
    ],
    references: [
      {
        title: 'ASIC Regulatory Guide 265',
        url: 'https://asic.gov.au/'
      }
    ]
  },
  {
    slug: 'eu-ai-act-financial-agents',
    title: 'EU AI Act for Financial Agents: Compliance Playbook',
    description: 'The EU AI Act emphasizes transparency, traceability, and risk management. Financial agents fall into high-risk categories.',
    category: 'Regulation',
    readTime: '10 min read',
    published: '2026-02-02',
    updated: '2026-02-03',
    summary:
      'High-risk AI systems must document controls, ensure human oversight, and maintain traceable decision logs. Governance infrastructure is the compliance backbone.',
    keyTakeaways: [
      'Traceability is mandatory for high-risk AI systems',
      'Human oversight is required for material decisions',
      'Technical documentation must be exportable on demand'
    ],
    sections: [
      {
        heading: 'Where financial agents fit in the Act',
        body: [
          'Agents touching markets or consumer outcomes fall into high-risk categories.',
          'Compliance focuses on transparency, risk mitigation, and accountability.'
        ]
      },
      {
        heading: 'Traceability requirements',
        body: [
          'Logs must show what data was used, what policy was applied, and how the output was approved.',
          'Immutable audit trails simplify supervisory review.'
        ]
      },
      {
        heading: 'Operationalizing oversight',
        body: [
          'Oversight must be more than alerts. Controls should prevent execution that violates policy.',
          'Audit exports should be available in PDF and machine-readable formats.'
        ]
      }
    ],
    references: [
      {
        title: 'EU AI Act overview',
        url: 'https://digital-strategy.ec.europa.eu/'
      }
    ]
  },
  {
    slug: 'sec-finra-autonomous-trading',
    title: 'SEC & FINRA Supervision for Autonomous Trading',
    description: 'US oversight focuses on supervision, recordkeeping, and controls for algorithmic trading.',
    category: 'Regulation',
    readTime: '8 min read',
    published: '2026-02-02',
    updated: '2026-02-03',
    summary:
      'Firms must demonstrate supervision of automated trading systems, ensure record retention, and prevent market manipulation.',
    keyTakeaways: [
      'Supervision must be demonstrable with logs and controls',
      'Recordkeeping rules demand immutable retention',
      'Pre-trade controls reduce regulatory exposure'
    ],
    sections: [
      {
        heading: 'Supervision and compliance controls',
        body: [
          'FINRA emphasizes supervisory procedures for algorithmic trading.',
          'Controls should be policy-driven with clear escalation paths.'
        ]
      },
      {
        heading: 'Record retention requirements',
        body: [
          'SEC 17a-4 requires tamper-evident recordkeeping.',
          'Audit trails should be exportable and time-stamped.'
        ]
      },
      {
        heading: 'Market integrity safeguards',
        body: [
          'Controls for wash trading, spoofing, and excessive order rates are essential.',
          'A governance engine should enforce thresholds before orders reach venues.'
        ]
      }
    ],
    references: [
      {
        title: 'SEC recordkeeping rules (17a-4)',
        url: 'https://www.sec.gov/'
      },
      {
        title: 'FINRA supervision guidance',
        url: 'https://www.finra.org/'
      }
    ]
  },
  {
    slug: 'immutable-audit-trails-ai-decisions',
    title: 'Immutable Audit Trails for AI Decisions',
    description: 'Audit trails prove that governance policies were enforced. In regulated finance, immutable logs are the baseline expectation.',
    category: 'Audit',
    readTime: '6 min read',
    published: '2026-02-02',
    updated: '2026-02-03',
    summary:
      'Immutable audit trails provide evidence that policy checks occurred before execution, reducing audit cycles and regulatory risk.',
    keyTakeaways: [
      'Immutable logs prove compliance in disputes',
      'Structured exports accelerate regulator reviews',
      'Hashing and signatures build trust'
    ],
    sections: [
      {
        heading: 'What regulators expect',
        body: [
          'Regulators want proof of intent, checks, and execution order.',
          'Traditional logs are insufficient when systems are autonomous.'
        ]
      },
      {
        heading: 'Designing an audit trail',
        body: [
          'Every policy decision should be signed and stored with a timestamp.',
          'Exports should align with both internal audit and regulator requests.'
        ]
      }
    ],
    references: [
      {
        title: 'ISO 27001 logging controls',
        url: 'https://www.iso.org/isoiec-27001-information-security.html'
      }
    ]
  },
  {
    slug: 'human-in-the-loop-controls',
    title: 'Human-in-the-Loop Controls for High-Risk Agents',
    description: 'HITL workflows ensure that accountability remains with humans while agents operate at machine speed.',
    category: 'Governance',
    readTime: '7 min read',
    published: '2026-02-02',
    updated: '2026-02-03',
    summary:
      'Human oversight is required for high-risk financial decisions. Governance systems must provide approvals, overrides, and audit logs.',
    keyTakeaways: [
      'HITL should be enforced at policy-level',
      'Approval workflows must be fast and documented',
      'Kill-switches are mandatory for high-risk systems'
    ],
    sections: [
      {
        heading: 'Why HITL is non-negotiable',
        body: [
          'Regulators want a responsible entity who can halt a system.',
          'HITL preserves accountability and reduces model risk.'
        ]
      },
      {
        heading: 'Building the workflow',
        body: [
          'Set thresholds that require approval before execution.',
          'Record who approved, when, and on what basis.'
        ]
      }
    ],
    references: [
      {
        title: 'OECD AI Principles',
        url: 'https://oecd.ai/en/ai-principles'
      }
    ]
  },
  {
    slug: 'model-risk-management-agentic',
    title: 'Model Risk Management for Agentic Finance',
    description: 'Agentic systems require continuous validation, version control, and monitoring to meet model risk management expectations.',
    category: 'Risk Controls',
    readTime: '9 min read',
    published: '2026-02-02',
    updated: '2026-02-03',
    summary:
      'Model risk management (MRM) must extend to autonomous systems. Governance infrastructure provides the control surface for policy enforcement.',
    keyTakeaways: [
      'Versioning and approval gates reduce model risk',
      'Monitoring must include both performance and compliance',
      'MRM ties governance to board-level accountability'
    ],
    sections: [
      {
        heading: 'MRM for adaptive systems',
        body: [
          'Traditional MRM assumes static models; agents adapt continuously.',
          'Controls must account for data drift and policy compliance.'
        ]
      },
      {
        heading: 'Governance as the enforcement layer',
        body: [
          'A governance engine can enforce constraints regardless of model changes.',
          'Auditability and reporting are central to MRM compliance.'
        ]
      }
    ],
    references: [
      {
        title: 'SR 11-7 Model Risk Management',
        url: 'https://www.federalreserve.gov/'
      }
    ]
  }
]

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((article) => article.slug === slug)
}

export function getAllInsightSlugs(): string[] {
  return insights.map((article) => article.slug)
}
