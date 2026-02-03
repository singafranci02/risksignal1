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
    description: 'Executive Summary: The Silicon Anchor for Agentic Autonomy.',
    category: 'Infrastructure',
    readTime: '12 min read',
    published: '2026-02-01',
    updated: '2026-02-03',
    summary:
      'As the financial sector transitions from generative AI to fully agentic systems, the core challenge has shifted from explainability to controllability. TEEs anchor compliance to silicon so institutions can prove, before execution, that autonomous systems cannot violate policy.',
    keyTakeaways: [
      'Controllability over explainability is now the core regulatory requirement for autonomous finance.',
      'Silicon-level policy enforcement survives OS or cloud compromise and cannot be bypassed by administrators.',
      'Remote attestation proves approved code and constraints were active at execution time.',
      'Deterministic compliance prevents unauthorized actions by design rather than by best-effort reporting.'
    ],
    sections: [
      {
        heading: 'Executive Summary: The Silicon Anchor for Agentic Autonomy',
        body: [
          'As the financial sector transitions from generative AI to fully agentic systems, the fundamental challenge has shifted from explainability (understanding why a model said something) to controllability (ensuring a model only does what it is permitted to do). Traditional software-based guardrails operate as post-hoc reporting systems, which are insufficient in high-frequency, millisecond execution environments where a single unauthorized action can lead to catastrophic financial or regulatory failure. Trusted Execution Environments (TEEs) provide the necessary hardware-level Digital Helmet, anchoring compliance policies directly to the processor’s silicon. This ensures that AI agents operate within a hardware-encrypted enclave, isolated from compromised operating systems or administrators, and providing immutable proof of compliance before a single trade is executed.'
        ]
      },
      {
        heading: 'Key Takeaways',
        body: [
          'Controllability over explainability: agentic AI moves the risk perimeter from linguistic “hallucinations” to autonomous actions, making hardware-enforced control a prerequisite for deployment. Silicon-level policy enforcement: TEEs create a hardware-protected zone that remains secure even if the host’s operating system or cloud control plane is fully compromised. Remote attestation: cryptographic evidence allows institutions to prove to regulators that the exact, approved code and safety constraints were active at the moment of execution. Deterministic compliance: TEEs shift compliance from probabilistic best efforts to a deterministic model where unauthorized actions are physically impossible to execute within the enclave.'
        ]
      },
      {
        heading: 'From Generative AI to Agentic AI: The 2026 Paradigm Shift',
        body: [
          'In 2025, the financial industry largely utilized generative AI as a sophisticated tool for summarizing research, automating internal workflows, and enhancing client communications. However, 2026 marks the rise of agentic AI—systems that do not merely suggest actions but autonomously execute them. These agents allocate capital, interact directly with payment rails, and adjust strategies in real time across decentralized and centralized venues. This shift fundamentally alters the fiduciary landscape. Governance must now prove not just what a model predicted, but the precise boundary of what it was allowed to do at the moment of execution. In this new era, the AI is no longer a tool; it is an autonomous economic actor.'
        ]
      },
      {
        heading: 'The Autonomy Gap: Why Software Controls Fail',
        body: [
          'Traditional guardrails are primarily wrappers or reporting systems that observe AI behavior and log violations after the fact. In the autonomy gap, these systems fail for two critical reasons. The first is latency: in execution environments where decisions happen in milliseconds, reporting a violation is equivalent to missing it. By the time a software monitor flags agentic drift—where an algorithm optimizes for profit by discovering a manipulative or non-compliant path—the trade has already settled. The second is stack vulnerability: if an attacker compromises the underlying operating system or a cloud administrator’s credentials, they can bypass software-based safety layers entirely. You cannot regulate what you cannot prevent at the physical layer.'
        ]
      },
      {
        heading: 'The TEE Model: Anchoring Intent to Silicon',
        body: [
          'A Trusted Execution Environment (TEE), such as Intel SGX or AMD SEV, is a hardware-secured enclave inside a processor. It creates a secure vault where code and keys are isolated from the rest of the computer, including the BIOS, OS, and hypervisor. For Kuneo, this represents the Digital Helmet: policies are not enforced at the API edge but inside the silicon enclave itself. This provides a shift from probabilistic trust (hoping the software works) to deterministic compliance (knowing the hardware cannot be subverted).'
        ]
      },
      {
        heading: 'Three Guarantees Regulators Now Expect',
        body: [
          'As regulators like the SEC and ASIC modernize their market integrity rules, they are increasingly focused on the technical resilience of autonomous systems. TEEs provide three critical guarantees that satisfy these emerging mandates. Hardware-enforced isolation: the agent’s logic, proprietary models, and private keys are encrypted in memory. Even with root access to the server, a cloud provider or malicious actor cannot view or tamper with the agent’s internal reasoning. Remote attestation: a cryptographic birth certificate that provides signed proof from the hardware that the agent is running the specific, untampered version of the approved code and is bound by the required risk parameters. Verifiable execution: every action taken by the agent—from the data it ingested to the final execution call—is linked to an immutable audit trail, creating cryptographic receipts that prove the agent never deviated from its authorized scope.'
        ]
      },
      {
        heading: 'Strategic Benefits for 2026 Compliance',
        body: [
          'The adoption of a TEE-based architecture provides several strategic advantages for financial institutions navigating the 2026 regulatory landscape. Operational resilience: by using a hardware root of trust, institutions replace fragile software-only controls with a robust defense that survives infrastructure compromises. Reduced regulatory review time: immutable audit trails and attestation logs allow firms to provide compliance by construction, significantly lowering the burden of manual reporting. Risk containment: enclave-enforced circuit breakers act as physical stops; if an agent attempts an action that violates policy, the enclave simply refuses to sign the transaction, stopping the violation before it reaches the market. Data sovereignty: encryption in use ensures that sensitive proprietary models and client data remain protected even when processed on third-party cloud infrastructure.'
        ]
      },
      {
        heading: 'Conclusion: The New Standard for Financial AI',
        body: [
          'The Digital Helmet is not merely a marketing metaphor; it is a structural requirement for any institution deploying autonomous agents in 2026. As the distinction between instructions and actions disappears, the only way to safely bridge the autonomy gap is by anchoring AI decision-making to verifiable hardware constraints. By integrating TEEs, Kuneo transforms the inherent risks of agentic AI into a compliant, auditable, and resilient operating model that meets the highest standards of the global financial system.'
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
