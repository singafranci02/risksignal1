export interface RegulationRequirement {
  title: string
  detail: string
}

export interface CountryRegulation {
  slug: string
  country: string
  flag: string
  body: string
  framework: string
  summary: string
  keyPoints: string[]
  requirements: RegulationRequirement[]
  kuneoSolutions: {
    title: string
    description: string
  }[]
  implementationSteps: {
    step: number
    title: string
    description: string
  }[]
  officialResources: {
    title: string
    url: string
  }[]
}

export const countryRegs: CountryRegulation[] = [
  {
    slug: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    body: 'ASIC (Australian Securities and Investments Commission)',
    framework: 'RG 265 - Algorithmic Trading',
    summary: 'ASIC RG 265 focuses on algorithmic trading, requiring firms to ensure their systems are robust, tested, and capable of real-time intervention. Autonomous agents must demonstrate pre-deployment testing, continuous monitoring, and human oversight mechanisms.',
    keyPoints: [
      'Pre-deployment stress testing and scenario analysis',
      'Real-time monitoring and kill-switch mechanisms',
      'Audit trails for all algorithmic decisions',
      'Risk management controls and position limits',
      'Staff training and governance frameworks'
    ],
    requirements: [
      {
        title: 'Algorithm Testing',
        detail: 'Comprehensive stress testing and scenario analysis required before deployment. Must include market stress conditions and edge cases.'
      },
      {
        title: 'Kill Switch Mechanism',
        detail: 'Mandatory real-time halt mechanisms to immediately stop rogue agents or unintended trading behavior.'
      },
      {
        title: 'Audit Trail Requirements',
        detail: 'Complete logging of all decisions, trades, and system changes with timestamps and versioning.'
      },
      {
        title: 'Risk Management Controls',
        detail: 'Pre-trade risk checks, position limits, and exposure monitoring across all portfolios.'
      },
      {
        title: 'Governance Framework',
        detail: 'Clear accountability structures, staff training programs, and escalation procedures for incidents.'
      },
      {
        title: 'System Resilience',
        detail: 'Business continuity planning, disaster recovery, and system redundancy requirements.'
      }
    ],
    kuneoSolutions: [
      {
        title: 'Hardware-Secured Testing Environment',
        description: 'Run stress tests in isolated TEEs before production deployment, ensuring algorithms behave correctly under extreme conditions.'
      },
      {
        title: 'Instant Kill-Switch via Digital Helmet',
        description: 'Human operators can immediately halt agent execution at the infrastructure level, not just the application layer.'
      },
      {
        title: 'Cryptographically Signed Audit Logs',
        description: 'Every agent decision is logged with immutable timestamps and cryptographic signatures, satisfying ASIC audit requirements.'
      },
      {
        title: 'Real-Time Risk Monitoring',
        description: 'Continuous monitoring of position limits, drawdown thresholds, and exposure caps with automatic alerts.'
      }
    ],
    implementationSteps: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'Review your current algorithmic trading systems against RG 265 requirements and identify gaps.'
      },
      {
        step: 2,
        title: 'Deploy Digital Helmet',
        description: 'Integrate Kuneo\'s TEE-based execution environment to enforce constraints at the infrastructure level.'
      },
      {
        step: 3,
        title: 'Configure Governance Rules',
        description: 'Set up pre-trade checks, position limits, kill-switch triggers, and escalation procedures.'
      },
      {
        step: 4,
        title: 'Enable Audit Logging',
        description: 'Activate immutable audit trails for all agent decisions and system changes.'
      },
      {
        step: 5,
        title: 'Ongoing Monitoring',
        description: 'Maintain continuous surveillance and generate compliance reports for ASIC audits.'
      }
    ],
    officialResources: [
      {
        title: 'ASIC RG 265: Guidance on Algorithmic Trading',
        url: 'https://asic.gov.au/regulatory-resources/find-a-document/regulatory-guides/rg-265-algorithmic-trading/'
      },
      {
        title: 'ASIC Market Integrity Rules',
        url: 'https://asic.gov.au/regulatory-resources/markets/market-integrity-rules/'
      }
    ]
  },
  {
    slug: 'singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    body: 'MAS (Monetary Authority of Singapore)',
    framework: 'FEAT Principles & PDPA Compliance',
    summary: 'MAS promotes responsible AI through FEAT principles: Fairness, Ethics, Accountability, and Transparency. Financial institutions must ensure AI systems are explainable, fair, and compliant with the Personal Data Protection Act (PDPA).',
    keyPoints: [
      'Explainability of AI decision-making processes',
      'Fairness and non-discrimination in outcomes',
      'Clear accountability and governance structures',
      'Transparency in AI model development and deployment',
      'Data protection and privacy compliance (PDPA)'
    ],
    requirements: [
      {
        title: 'Explainability',
        detail: 'Agents must provide human-readable justifications for financial decisions. Models cannot be pure "black boxes".'
      },
      {
        title: 'Fairness Testing',
        detail: 'Regular audits to ensure AI systems do not produce discriminatory outcomes or unfair treatment.'
      },
      {
        title: 'Data Governance',
        detail: 'Strict adherence to PDPA for personal data protection, with clear consent and purpose limitation.'
      },
      {
        title: 'Accountability Framework',
        detail: 'Designated individuals responsible for AI governance, with clear escalation paths and incident response.'
      },
      {
        title: 'Transparency Documentation',
        detail: 'Comprehensive documentation of AI models, training data, and decision logic for regulatory review.'
      },
      {
        title: 'Continuous Monitoring',
        detail: 'Ongoing surveillance of AI performance, bias detection, and drift monitoring.'
      }
    ],
    kuneoSolutions: [
      {
        title: 'Decision Provenance Tracking',
        description: 'Every agent decision includes a complete audit trail showing inputs, logic, and outputs for full explainability.'
      },
      {
        title: 'Bias Detection & Fairness Metrics',
        description: 'Automated monitoring for discriminatory patterns or unfair outcomes across customer segments.'
      },
      {
        title: 'PDPA-Compliant Data Handling',
        description: 'TEE-based data isolation ensures personal information is processed securely and only for authorized purposes.'
      },
      {
        title: 'Governance Dashboard',
        description: 'Centralized view of all AI agents, their status, recent decisions, and compliance metrics for MAS reporting.'
      }
    ],
    implementationSteps: [
      {
        step: 1,
        title: 'FEAT Assessment',
        description: 'Evaluate current AI systems against Fairness, Ethics, Accountability, and Transparency principles.'
      },
      {
        step: 2,
        title: 'Enable Explainability',
        description: 'Configure Kuneo to capture decision rationale and create human-readable explanation reports.'
      },
      {
        step: 3,
        title: 'Implement Data Governance',
        description: 'Set up PDPA-compliant data handling with consent management and purpose limitation.'
      },
      {
        step: 4,
        title: 'Deploy Monitoring',
        description: 'Activate continuous fairness monitoring and bias detection for all autonomous agents.'
      },
      {
        step: 5,
        title: 'Regular Audits',
        description: 'Schedule periodic reviews and generate MAS-ready compliance documentation.'
      }
    ],
    officialResources: [
      {
        title: 'MAS FEAT Principles for AI',
        url: 'https://www.mas.gov.sg/news/media-releases/2019/principles-to-promote-fairness-ethics-accountability-and-transparency-in-the-use-of-ai-and-data-analytics'
      },
      {
        title: 'Singapore Personal Data Protection Act',
        url: 'https://www.pdpc.gov.sg/overview-of-pdpa'
      }
    ]
  },
  {
    slug: 'european-union',
    country: 'European Union',
    flag: '🇪🇺',
    body: 'European Commission - EU AI Act',
    framework: 'EU AI Act (High-Risk AI Systems)',
    summary: 'The EU AI Act classifies financial AI systems as "high-risk," requiring strict governance, transparency, human oversight, and comprehensive documentation. Autonomous agents must comply with Articles 12, 13, and 52, plus GDPR for data protection.',
    keyPoints: [
      'High-risk classification for financial AI systems',
      'Mandatory transparency and traceability (Article 12)',
      'Human oversight requirements (Article 13)',
      'Conformity assessments and CE marking',
      'GDPR compliance for personal data processing'
    ],
    requirements: [
      {
        title: 'Article 12: Transparency & Traceability',
        detail: 'High-risk AI systems must be designed to automatically log events and enable traceability throughout their lifecycle.'
      },
      {
        title: 'Article 13: Human Oversight',
        detail: 'Measures must be in place to enable human intervention, including stop functionality and ability to override decisions.'
      },
      {
        title: 'Article 52: High-Risk Standards',
        detail: 'Financial AI systems must meet rigorous technical requirements including risk management, data quality, and robustness.'
      },
      {
        title: 'GDPR Compliance',
        detail: 'All personal data processing must comply with GDPR principles including lawfulness, fairness, and transparency.'
      },
      {
        title: 'Conformity Assessment',
        detail: 'High-risk AI systems require third-party conformity assessment before deployment and CE marking.'
      },
      {
        title: 'Documentation Requirements',
        detail: 'Comprehensive technical documentation and instructions for use must be maintained and accessible to authorities.'
      }
    ],
    kuneoSolutions: [
      {
        title: 'Article 12 Compliance: Automatic Logging',
        description: 'Immutable audit trails capture every agent action, decision rationale, and system state change for full traceability.'
      },
      {
        title: 'Article 13 Compliance: Human Override',
        description: 'Digital Helmet provides hardware-level kill-switch and human intervention capabilities that cannot be bypassed.'
      },
      {
        title: 'GDPR-Compliant Data Processing',
        description: 'TEE-based isolation ensures personal data is processed lawfully with purpose limitation and data minimization.'
      },
      {
        title: 'Conformity Documentation',
        description: 'Automated generation of technical documentation and compliance reports ready for notified body assessment.'
      }
    ],
    implementationSteps: [
      {
        step: 1,
        title: 'Risk Classification',
        description: 'Determine if your AI system qualifies as high-risk under EU AI Act definitions.'
      },
      {
        step: 2,
        title: 'Deploy Governance Infrastructure',
        description: 'Implement Kuneo\'s Digital Helmet for Article 12 and 13 compliance (logging + human oversight).'
      },
      {
        step: 3,
        title: 'Enable GDPR Controls',
        description: 'Configure data handling policies, consent management, and privacy-by-design measures.'
      },
      {
        step: 4,
        title: 'Prepare Documentation',
        description: 'Generate technical documentation, risk assessments, and conformity declarations.'
      },
      {
        step: 5,
        title: 'Conformity Assessment',
        description: 'Engage a notified body for third-party assessment and obtain CE marking before deployment.'
      }
    ],
    officialResources: [
      {
        title: 'EU AI Act - Official Text',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021PC0206'
      },
      {
        title: 'GDPR Official Portal',
        url: 'https://gdpr.eu/'
      },
      {
        title: 'EU AI Act High-Risk Systems List',
        url: 'https://artificialintelligenceact.eu/high-risk/'
      }
    ]
  },
  {
    slug: 'united-states',
    country: 'United States',
    flag: '🇺🇸',
    body: 'SEC & FINRA',
    framework: 'SEC Reg BI, FINRA 3110, Dodd-Frank',
    summary: 'US financial AI systems must comply with SEC Regulation Best Interest (Reg BI), FINRA supervisory requirements (Rule 3110), and Dodd-Frank systematic risk monitoring. The SEC has increased scrutiny on algorithmic trading and robo-advisors.',
    keyPoints: [
      'SEC Reg BI: Best interest obligations for client recommendations',
      'FINRA 3110: Supervisory procedures for algorithmic systems',
      'SEC 17a-4: Electronic record retention requirements',
      'Dodd-Frank: Systematic risk monitoring and reporting',
      'SEC examination priorities: AI governance and explainability'
    ],
    requirements: [
      {
        title: 'Regulation Best Interest (Reg BI)',
        detail: 'When AI makes recommendations, firms must act in the customer\'s best interest, not their own financial gain.'
      },
      {
        title: 'FINRA Rule 3110: Supervision',
        detail: 'Firms must establish and maintain supervisory systems for algorithmic trading, including regular testing and review.'
      },
      {
        title: 'SEC Rule 17a-4: Recordkeeping',
        detail: 'All communications, trades, and decisions must be preserved in immutable, non-rewritable format for 6+ years.'
      },
      {
        title: 'Dodd-Frank Reporting',
        detail: 'Large traders and systematic risk contributors must report positions and trading activity to regulators.'
      },
      {
        title: 'Algorithmic Trading Controls',
        detail: 'Pre-trade risk checks, order throttling, and kill switches required for high-frequency and algorithmic systems.'
      },
      {
        title: 'Model Risk Management',
        detail: 'Regular validation, back-testing, and stress testing of AI models with independent review.'
      }
    ],
    kuneoSolutions: [
      {
        title: 'Reg BI Compliance: Best Interest Enforcement',
        description: 'Configure rules to prevent agents from recommending products that benefit the firm over the client.'
      },
      {
        title: 'FINRA 3110: Supervisory Dashboard',
        description: 'Real-time monitoring of all algorithmic activity with alerts for suspicious patterns and compliance violations.'
      },
      {
        title: 'SEC 17a-4: Immutable Records',
        description: 'Cryptographically signed audit logs stored in tamper-proof format meeting SEC\'s WORM requirements.'
      },
      {
        title: 'Pre-Trade Risk Checks',
        description: 'Hardware-enforced position limits, concentration checks, and price deviation controls before order execution.'
      }
    ],
    implementationSteps: [
      {
        step: 1,
        title: 'Regulatory Mapping',
        description: 'Identify which SEC and FINRA rules apply to your specific use case (advisory, trading, market making).'
      },
      {
        step: 2,
        title: 'Deploy Supervisory Controls',
        description: 'Implement Kuneo\'s governance layer to satisfy FINRA 3110 supervisory requirements.'
      },
      {
        step: 3,
        title: 'Enable Immutable Recordkeeping',
        description: 'Activate SEC 17a-4 compliant logging for all agent communications and trading decisions.'
      },
      {
        step: 4,
        title: 'Configure Best Interest Rules',
        description: 'Set up policies to ensure AI recommendations prioritize client outcomes over firm revenue.'
      },
      {
        step: 5,
        title: 'Ongoing Compliance',
        description: 'Maintain regular testing, validation, and generate audit-ready reports for SEC examinations.'
      }
    ],
    officialResources: [
      {
        title: 'SEC Regulation Best Interest',
        url: 'https://www.sec.gov/regulation-best-interest'
      },
      {
        title: 'FINRA Rule 3110: Supervision',
        url: 'https://www.finra.org/rules-guidance/rulebooks/finra-rules/3110'
      },
      {
        title: 'SEC Rule 17a-4: Recordkeeping',
        url: 'https://www.sec.gov/rules/final/34-38245.txt'
      }
    ]
  },
  {
    slug: 'united-kingdom',
    country: 'United Kingdom',
    flag: '🇬🇧',
    body: 'FCA (Financial Conduct Authority)',
    framework: 'FCA Algorithmic Trading Requirements',
    summary: 'The FCA requires firms using algorithmic trading to have robust governance, testing, and monitoring frameworks. Systems must be resilient, tested, and capable of immediate shutdown. The FCA emphasizes consumer protection and market integrity.',
    keyPoints: [
      'Algorithmic trading governance and testing',
      'Real-time monitoring and kill-switch mechanisms',
      'Consumer protection and treating customers fairly',
      'Market abuse prevention and surveillance',
      'Senior Managers & Certification Regime (SM&CR) accountability'
    ],
    requirements: [
      {
        title: 'Algorithm Governance',
        detail: 'Clear governance structures with senior management accountability for algorithmic trading systems under SM&CR.'
      },
      {
        title: 'Pre-Deployment Testing',
        detail: 'Comprehensive testing in controlled environments before live deployment, including stress scenarios.'
      },
      {
        title: 'Real-Time Monitoring',
        detail: 'Continuous surveillance of algorithmic behavior with automated alerts for anomalous activity.'
      },
      {
        title: 'Kill-Switch Capability',
        detail: 'Ability to immediately halt algorithmic trading in case of malfunction or market disruption.'
      },
      {
        title: 'Consumer Protection',
        detail: 'AI systems must treat customers fairly and not exploit behavioral biases or vulnerabilities.'
      },
      {
        title: 'Market Abuse Prevention',
        detail: 'Controls to prevent market manipulation, spoofing, layering, and other abusive practices.'
      }
    ],
    kuneoSolutions: [
      {
        title: 'SM&CR Accountability Framework',
        description: 'Clear audit trails showing which senior manager approved agent deployment and configuration changes.'
      },
      {
        title: 'TEE-Based Testing Environment',
        description: 'Isolated pre-production environment for comprehensive algorithm testing before live deployment.'
      },
      {
        title: 'Real-Time Surveillance Dashboard',
        description: 'Continuous monitoring with FCA-aligned alerts for market abuse patterns and consumer harm indicators.'
      },
      {
        title: 'Hardware-Level Kill Switch',
        description: 'Instant agent shutdown capability that cannot be bypassed by software bugs or malicious code.'
      }
    ],
    implementationSteps: [
      {
        step: 1,
        title: 'SM&CR Mapping',
        description: 'Identify responsible senior managers and document accountability for AI trading systems.'
      },
      {
        step: 2,
        title: 'Deploy Testing Infrastructure',
        description: 'Set up Kuneo\'s TEE-based testing environment for pre-deployment validation.'
      },
      {
        step: 3,
        title: 'Enable Surveillance',
        description: 'Activate real-time monitoring for market abuse detection and consumer protection.'
      },
      {
        step: 4,
        title: 'Configure Kill Switch',
        description: 'Implement hardware-level emergency halt mechanisms accessible to compliance officers.'
      },
      {
        step: 5,
        title: 'FCA Reporting',
        description: 'Generate audit trails and compliance documentation ready for FCA supervision.'
      }
    ],
    officialResources: [
      {
        title: 'FCA Algorithmic Trading Compliance',
        url: 'https://www.fca.org.uk/markets/algorithmic-trading'
      },
      {
        title: 'FCA Senior Managers & Certification Regime',
        url: 'https://www.fca.org.uk/firms/senior-managers-certification-regime'
      }
    ]
  },
  {
    slug: 'hong-kong',
    country: 'Hong Kong',
    flag: '🇭🇰',
    body: 'SFC (Securities and Futures Commission)',
    framework: 'SFC Algorithmic Trading Guidelines',
    summary: 'The SFC requires licensed corporations using algorithmic trading to implement risk controls, conduct regular testing, and maintain proper governance. Systems must have pre-trade checks, circuit breakers, and comprehensive audit trails.',
    keyPoints: [
      'Risk management controls and pre-trade checks',
      'Regular testing and system validation',
      'Circuit breakers and throttling mechanisms',
      'Proper governance and accountability structures',
      'Staff competency and training requirements'
    ],
    requirements: [
      {
        title: 'Risk Management Framework',
        detail: 'Comprehensive risk controls including position limits, credit checks, and market impact analysis.'
      },
      {
        title: 'System Testing',
        detail: 'Regular testing in non-production environments with documented test results and issue resolution.'
      },
      {
        title: 'Pre-Trade Controls',
        detail: 'Automated checks for order validity, price limits, and regulatory compliance before execution.'
      },
      {
        title: 'Circuit Breakers',
        detail: 'Automatic suspension of trading when pre-defined risk thresholds are breached.'
      },
      {
        title: 'Governance Structure',
        detail: 'Clear lines of responsibility with senior management oversight and escalation procedures.'
      },
      {
        title: 'Audit Trail Requirements',
        detail: 'Complete logging of all orders, modifications, and system changes with regulatory retention periods.'
      }
    ],
    kuneoSolutions: [
      {
        title: 'Automated Risk Controls',
        description: 'Hardware-enforced position limits, exposure caps, and market impact thresholds that cannot be overridden.'
      },
      {
        title: 'TEE-Based Testing Environment',
        description: 'Isolated testing infrastructure for validating algorithm behavior before production deployment.'
      },
      {
        title: 'Circuit Breaker Integration',
        description: 'Configurable threshold-based automatic trading suspension with instant notification to compliance teams.'
      },
      {
        title: 'SFC-Compliant Audit Logs',
        description: 'Immutable audit trails meeting SFC record-keeping requirements with cryptographic integrity.'
      }
    ],
    implementationSteps: [
      {
        step: 1,
        title: 'SFC Requirements Review',
        description: 'Assess current systems against SFC algorithmic trading guidelines and identify gaps.'
      },
      {
        step: 2,
        title: 'Deploy Risk Controls',
        description: 'Implement Kuneo\'s pre-trade checks and position limit enforcement infrastructure.'
      },
      {
        step: 3,
        title: 'Configure Circuit Breakers',
        description: 'Set up automatic trading suspension rules based on risk thresholds and market conditions.'
      },
      {
        step: 4,
        title: 'Enable Audit Logging',
        description: 'Activate comprehensive logging for all algorithmic trading activity.'
      },
      {
        step: 5,
        title: 'Staff Training & Compliance',
        description: 'Train staff on governance procedures and maintain ongoing SFC compliance monitoring.'
      }
    ],
    officialResources: [
      {
        title: 'SFC Algorithmic Trading Guidelines',
        url: 'https://www.sfc.hk/en/Rules-and-standards/Codes-and-guidelines'
      }
    ]
  }
]

// Helper function to get regulation by slug
export function getRegulationBySlug(slug: string): CountryRegulation | undefined {
  return countryRegs.find(reg => reg.slug === slug)
}

// Helper function to get all regulation slugs (for static generation)
export function getAllRegulationSlugs(): string[] {
  return countryRegs.map(reg => reg.slug)
}
