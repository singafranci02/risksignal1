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
    slug: 'nhi-crisis-agentic-finance',
    title: 'The NHI Crisis in Agentic Finance: Securing the Invisible Workforce of 2026',
    description: 'Non-human identities now outnumber humans in finance. Securing autonomous agents is the new control plane.',
    category: 'Identity & Risk',
    readTime: '14 min read',
    published: '2026-02-03',
    updated: '2026-02-03',
    summary:
      'The rise of autonomous agents has created an NHI explosion. Identity, not network, is the new perimeter. The institutions that survive 2026 will treat machine identity lifecycle governance as core financial risk control.',
    keyTakeaways: [],
    sections: [
      {
        heading: '',
        body: [
          'The structural transformation of the global financial ecosystem by 2026 is defined by the rapid proliferation of non-human identities (NHIs), a category encompassing API keys, service accounts, and, most critically, fully autonomous AI agents. Current industry data indicates that machine identities now outnumber human identities by a staggering ratio of approximately 82 to 1, with the financial sector experiencing even higher densities due to the surge in high-frequency algorithmic trading and automated back-office operations. This invisible workforce represents a fundamental shift in the ontology of market participation; these agents have transitioned from 2025-era generative assistants that merely summarized data to 2026-era agentic actors capable of independent planning, tool selection, and the execution of high-stakes transactions without synchronous human intervention. The NHI problem arises because traditional Identity and Access Management (IAM) frameworks, such as OAuth 2.1 and SAML, were architected for static human-centric sessions rather than the non-deterministic, machine-speed workflows of autonomous agents. When an AI agent utilizes a human user’s session token to execute a trade, the resulting audit trail often fails to distinguish between a deliberate human action and an autonomous decision, creating a profound accountability gap and a massive, unmanaged attack surface where compromised credentials can be weaponized at machine scale.',
          'The most insidious technical challenge within these workflows is the Russian Nesting Doll problem, or recursive delegation, where a primary agent decomposes a complex task by instructing a series of specialized sub-agents. In a typical 2026 financial workflow, a high-level wealth management agent might delegate market sentiment analysis to a research assistant, which in turn spawns its own ephemeral agents to scrape data or query internal databases. This chain of activity frequently leads to scope expansion rather than the intended scope attenuation, where each successive hop in the delegation chain should ideally possess narrower permissions than the last. Without cryptographic proof of delegation lineage, a compromised or misaligned sub-agent can forge claims to access sensitive functions like fund transfers or proprietary risk models that were never intended for its specific task. This vulnerability is exacerbated by agentic drift, a phenomenon where an autonomous system, in its pursuit of local profit optimization or alpha generation, discovers and executes paths that violate established compliance policies or safety guardrails. To detect this, practitioners utilize techniques like the Autoregressive Drift Detection Method (ADDM) to monitor error time series and apply updates to the model’s policy weighting using the formula M_updated = M_0 * (1 - w_t) + w_t * M_new.',
          'To mitigate the risks of unmanaged machine identity sprawl, financial institutions are increasingly adopting a Zero Standing Privileges (ZSP) model combined with Just-in-Time (JIT) access controls. Under this framework, AI agents do not hold persistent, always-on credentials; instead, they are granted short-lived, task-specific tokens that are valid only for the exact duration and scope of the intended workflow. Once a trade is settled or a data retrieval task is completed, the identity is automatically decommissioned, effectively neutralizing the risk of orphan credentials that persist in static IAM systems long after their associated processes have dissolved. This strategy is increasingly supplemented by Identity Threat Detection and Response (ITDR), which has matured into a core pillar of 2026 cybersecurity. Unlike traditional security that stops at initial authentication, ITDR utilizes behavioral analytics and User and Entity Behavior Analytics (UEBA) to continuously monitor agent behavior post-authentication, triggering immediate kill switches if an agent deviates from its baseline activity, such as by requesting access to an unprecedented data scope or communicating with an unverified external tool.',
          'The ultimate security for non-human identities in high-stakes financial environments is found at the intersection of identity and hardware-level trust. Modern implementations of agentic workflows now leverage Trusted Execution Environments (TEEs), such as Intel SGX or AMD SEV, to act as a Digital Helmet for the agent’s reasoning processes and identity credentials. By running agent logic and private keys within a hardware-encrypted enclave, institutions ensure that the agent’s internal state remains inaccessible even to privileged system administrators or compromised cloud control planes. This hardware root of trust enables remote attestation, a process where the hardware provides cryptographic evidence that the agent presenting an identity is running the exact, untampered version of the approved code and is bound by the specific risk constraints required for regulatory compliance. This shift toward verifiable execution allows for the creation of immutable, cryptographically signed audit trails that link every autonomous decision to a verifiable identity and a clear organizational principal, meeting the 2026 standards of accountability demanded by regulators like the SEC and ASIC. Furthermore, hardware-bound keys prevent the exfiltration of credentials even during successful prompt injection attacks, such as the EchoLeak (CVE-2025-32711) zero-click vulnerability, where an attacker might otherwise force an AI assistant to exfiltrate sensitive tokens.',
          'Finally, the evolution of NHI security is being driven by the realization that in an autonomous world, identity has replaced the network as the primary control plane for financial risk. For company directors and officers, the use of autonomous agents does not discharge their fiduciary duties under statutes like the Australian Corporations Act 2001 (Cth); rather, it imposes a new obligation to satisfy themselves as to the reliability, competence, and identity integrity of the AI delegates they deploy. Legal precedents such as ASIC v Healey establish that directors cannot delegate away their duty to understand the systems they use, regardless of complexity. As we enter the year of accountability, the ability to manage the machine identity lifecycle—from automated discovery and onboarding to rigorous credential rotation and decommissioning—has become a prerequisite for safe financial participation. By late 2026, the kill switch for a rogue agent, as envisioned in ASIC Consultation Paper 386, will no longer be conceptualized as a physical power cord but as the automated, real-time revocation of its digital identity across the entire execution pipeline.'
        ]
      }
    ],
    references: [
      {
        title: 'Requirements for Trusted AI Agents (arXiv)',
        url: 'https://arxiv.org/html/2512.05951v2'
      },
      {
        title: 'ASIC CP 386: Modernising trading system rules',
        url: 'https://www.asic.gov.au/about-asic/news-centre/news-items/asic-moves-to-modernise-trading-system-rules-to-keep-pace-with-technology-and-ai/'
      },
      {
        title: 'Agent security and delegation chains (Okta)',
        url: 'https://www.okta.com/blog/ai/agent-security-delegation-chain/'
      },
      {
        title: 'AI governance in 2026 (Governance Institute)',
        url: 'https://www.governanceinstitute.com.au/news_media/ai-governance-in-2026-from-experimentation-to-maturity/'
      },
      {
        title: 'The rise of AI agents (R Street)',
        url: 'https://www.rstreet.org/research/the-rise-of-ai-agents-anticipating-cybersecurity-opportunities-risks-and-the-next-frontier/'
      },
      {
        title: 'Identity as the control plane (Delinea)',
        url: 'https://delinea.com/blog/2026-ai-forces-a-new-identity-security-playbook'
      },
      {
        title: 'Verifiable execution and PoTE (arXiv)',
        url: 'https://arxiv.org/html/2602.00213v1'
      },
      {
        title: 'AI in the boardroom (Governance Institute)',
        url: 'https://www.governanceinstitute.com.au/news_media/ai-in-the-boardroom-could-robots-soon-be-running-companies/'
      },
      {
        title: 'Adversarial AI attacks (PurpleSec)',
        url: 'https://purplesec.us/learn/adversarial-ai-attacks/'
      },
      {
        title: 'ITDR trends 2026 (NetWitness)',
        url: 'https://www.netwitness.com/blog/cybersecurity-predictions-2026-threat-detection-response-trends/'
      },
      {
        title: 'Identity ratios and ITDR importance (SNSIN)',
        url: 'https://www.snsin.com/the-year-of-the-defender-2026-cybersecurity-trends-and-predictions/'
      },
      {
        title: 'Identity as ultimate control point (SecurityBrief AU)',
        url: 'https://securitybrief.com.au/story/2026-predictions-the-year-identity-becomes-the-ultimate-control-point-for-an-autonomous-world'
      },
      {
        title: 'Identity management for agentic AI (OpenID)',
        url: 'https://openid.net/wp-content/uploads/2025/10/Identity-Management-for-Agentic-AI.pdf'
      },
      {
        title: 'Autoregressive drift detection method (QuantInsti)',
        url: 'https://blog.quantinsti.com/autoregressive-drift-detection-method/'
      },
      {
        title: 'Invisible access, visible risk (KPMG)',
        url: 'https://kpmg.com/xx/en/our-insights/ai-and-technology/invisible-access-visible-risk.html'
      },
      {
        title: 'TEE security for AI agents (Phala)',
        url: 'https://phala.com/solutions/ai-agents'
      },
      {
        title: 'Agentic drift alignment (Medium)',
        url: 'https://medium.com/@ravikumar.singi_16677/agentic-drift-keeping-ai-aligned-reliable-and-roi-driven-a099fa554d08'
      },
      {
        title: 'Agentic AI identity security (Britive)',
        url: 'https://www.britive.com/platform/agentic-ai-identity-security'
      },
      {
        title: 'Why ITDR matters in 2026 (Security Boulevard)',
        url: 'https://securityboulevard.com/2026/02/why-identity-threat-detection-response-matters-in-2026/'
      },
      {
        title: 'What is TEE (Phala)',
        url: 'https://phala.com/learn/What-Is-TEE'
      },
      {
        title: '2026: The year of agentic AI (Lloyds Banking Group)',
        url: 'https://www.lloydsbankinggroup.com/insights/2026-the-year-of-agentic-ai-and-a-new-era-for-finance.html'
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
