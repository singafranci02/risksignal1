import { Scale, Globe, FileCheck, CheckCircle2, ExternalLink, Download, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function RegulationsPage() {
  const regions = [
    {
      name: 'Australia',
      flag: '🇦🇺',
      frameworks: [
        {
          name: 'ASIC Electronic Retail Service (ERS)',
          authority: 'Australian Securities and Investments Commission',
          status: 'Active',
          lastUpdated: '2024-11-15',
          description: 'Requirements for automated trading systems and algorithmic decision-making in financial markets.',
          keyRequirements: [
            {
              title: 'Algorithm Testing',
              description: 'Comprehensive testing before deployment including stress testing and scenario analysis',
              kuneoFeature: 'TEE-isolated testing environments with automated scenario generation',
            },
            {
              title: 'Risk Controls',
              description: 'Pre-trade and post-trade risk controls including position limits and circuit breakers',
              kuneoFeature: 'Real-time rule evaluation with automatic halt mechanisms',
            },
            {
              title: 'Audit Logs',
              description: 'Detailed logging of all algorithmic decisions and market interactions',
              kuneoFeature: 'Immutable audit trails with millisecond-precision timestamps',
            },
            {
              title: 'Incident Reporting',
              description: 'Immediate reporting of system failures or unexpected behavior',
              kuneoFeature: 'Automated anomaly detection with instant alert escalation',
            },
          ],
          resources: [
            { title: 'ASIC RG 265 - Guidance on Algorithmic Trading', type: 'PDF', size: '1.8 MB' },
            { title: 'Kuneo ASIC Compliance Template', type: 'JSON', size: '45 KB' },
            { title: 'Implementation Checklist', type: 'PDF', size: '320 KB' },
          ],
        },
      ],
    },
    {
      name: 'European Union',
      flag: '🇪🇺',
      frameworks: [
        {
          name: 'EU AI Act',
          authority: 'European Commission',
          status: 'Enacted (Phased Implementation)',
          lastUpdated: '2024-12-01',
          description: 'Comprehensive regulation of AI systems with specific requirements for high-risk applications including financial services.',
          keyRequirements: [
            {
              title: 'Article 12: Traceability',
              description: 'Automatic logging of AI system operations to enable traceability of results',
              kuneoFeature: 'Append-only audit logs with cryptographic verification',
            },
            {
              title: 'Article 13: Transparency',
              description: 'Clear information about AI system capabilities, limitations, and decision-making logic',
              kuneoFeature: 'Rule visualization and plain-language explanations',
            },
            {
              title: 'Article 14: Human Oversight',
              description: 'Measures to enable human intervention and override of AI decisions',
              kuneoFeature: 'Emergency halt controls and manual override capabilities',
            },
            {
              title: 'Article 17: Quality Management',
              description: 'Quality management system for design, development, and deployment',
              kuneoFeature: 'Integrated testing, validation, and continuous monitoring',
            },
          ],
          resources: [
            { title: 'EU AI Act Full Text', type: 'PDF', size: '3.2 MB' },
            { title: 'Kuneo EU AI Act Compliance Guide', type: 'PDF', size: '2.1 MB' },
            { title: 'Article-by-Article Mapping', type: 'XLSX', size: '180 KB' },
          ],
        },
        {
          name: 'MiCA (Markets in Crypto-Assets)',
          authority: 'European Commission',
          status: 'Active',
          lastUpdated: '2024-10-20',
          description: 'Regulatory framework for crypto-asset service providers requiring operational resilience and risk management.',
          keyRequirements: [
            {
              title: 'Transaction Monitoring',
              description: 'Continuous monitoring of all crypto-asset transactions and holdings',
              kuneoFeature: 'Cross-custodian portfolio aggregation with real-time tracking',
            },
            {
              title: 'Risk Disclosure',
              description: 'Clear disclosure of risks associated with crypto-asset services',
              kuneoFeature: 'Automated risk scoring and client-facing dashboards',
            },
            {
              title: 'Operational Resilience',
              description: 'Business continuity and disaster recovery procedures',
              kuneoFeature: 'Multi-region deployment with automatic failover',
            },
            {
              title: 'Audit Requirements',
              description: 'Regular audits and compliance reporting to authorities',
              kuneoFeature: 'One-click audit report generation with certified exports',
            },
          ],
          resources: [
            { title: 'MiCA Regulation Text', type: 'PDF', size: '4.5 MB' },
            { title: 'Kuneo MiCA Compliance Template', type: 'JSON', size: '62 KB' },
            { title: 'CASP Requirements Checklist', type: 'PDF', size: '890 KB' },
          ],
        },
      ],
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      frameworks: [
        {
          name: 'SEC Algorithmic Trading Guidelines',
          authority: 'Securities and Exchange Commission',
          status: 'Active',
          lastUpdated: '2024-09-30',
          description: 'Guidance on algorithmic trading systems and automated investment advisers.',
          keyRequirements: [
            {
              title: 'Best Execution',
              description: 'Obligation to seek best execution for client orders',
              kuneoFeature: 'Multi-venue price monitoring and execution quality tracking',
            },
            {
              title: 'Conflict of Interest Management',
              description: 'Identification and management of conflicts in automated systems',
              kuneoFeature: 'Rule-based conflict detection and disclosure automation',
            },
            {
              title: 'Compliance Monitoring',
              description: 'Ongoing monitoring of algorithmic trading compliance',
              kuneoFeature: 'Real-time compliance checks with violation alerts',
            },
            {
              title: 'Record Keeping',
              description: 'Comprehensive records of algorithmic trading activities',
              kuneoFeature: 'Immutable audit logs with SEC-compliant retention',
            },
          ],
          resources: [
            { title: 'SEC Release No. 34-51808', type: 'PDF', size: '2.7 MB' },
            { title: 'Kuneo SEC Compliance Template', type: 'JSON', size: '51 KB' },
            { title: 'Broker-Dealer Requirements', type: 'PDF', size: '1.4 MB' },
          ],
        },
        {
          name: 'CFTC Automated Trading Rules',
          authority: 'Commodity Futures Trading Commission',
          status: 'Active',
          lastUpdated: '2024-11-10',
          description: 'Requirements for automated trading systems in derivatives markets.',
          keyRequirements: [
            {
              title: 'Pre-Trade Risk Controls',
              description: 'Automated controls to prevent erroneous orders',
              kuneoFeature: 'Real-time order validation against defined parameters',
            },
            {
              title: 'System Safeguards',
              description: 'Measures to ensure system reliability and security',
              kuneoFeature: 'Hardware-secured execution with redundancy',
            },
            {
              title: 'Testing Requirements',
              description: 'Regular testing of automated trading systems',
              kuneoFeature: 'Automated regression testing and scenario simulation',
            },
            {
              title: 'Audit Trail',
              description: 'Complete audit trail of all trading activity',
              kuneoFeature: 'Millisecond-precision logging with CFTC format export',
            },
          ],
          resources: [
            { title: 'CFTC Regulation AT', type: 'PDF', size: '3.1 MB' },
            { title: 'Kuneo CFTC Compliance Template', type: 'JSON', size: '48 KB' },
            { title: 'Testing Protocol Guide', type: 'PDF', size: '1.1 MB' },
          ],
        },
      ],
    },
  ]

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-slate-100">
            Regulatory Frameworks
          </h2>
          <p className="text-lg text-slate-400">
            Comprehensive coverage of AI agent regulations in Australia, European Union, and United States
          </p>
        </div>

        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
              <AlertCircle className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-blue-400">Important Note</h3>
              <p className="text-sm text-slate-300">
                Regulatory requirements are subject to change. This information is current as of January 2026. 
                Always consult with legal counsel for specific compliance requirements in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Frameworks */}
      {regions.map((region) => (
        <section key={region.name}>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-4xl">{region.flag}</span>
            <h2 className="text-2xl font-bold text-slate-100">{region.name}</h2>
          </div>

          <div className="space-y-8">
            {region.frameworks.map((framework) => (
              <div
                key={framework.name}
                className="rounded-xl border border-slate-800 bg-slate-900"
              >
                {/* Framework Header */}
                <div className="border-b border-slate-800 p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-slate-100">
                        {framework.name}
                      </h3>
                      <p className="mb-3 text-sm text-slate-400">
                        {framework.authority}
                      </p>
                      <p className="text-slate-300">{framework.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                        {framework.status}
                      </span>
                      <span className="text-xs text-slate-500">
                        Updated {framework.lastUpdated}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Requirements */}
                <div className="p-6">
                  <h4 className="mb-4 font-semibold text-slate-200">
                    Key Requirements & Kuneo Features
                  </h4>
                  <div className="space-y-4">
                    {framework.keyRequirements.map((req) => (
                      <div
                        key={req.title}
                        className="rounded-lg border border-slate-800 bg-slate-950 p-4"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <h5 className="font-semibold text-slate-100">{req.title}</h5>
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                        </div>
                        <p className="mb-3 text-sm text-slate-400">{req.description}</p>
                        <div className="rounded-lg bg-blue-500/5 p-3">
                          <p className="text-sm text-blue-300">
                            <span className="font-semibold">Kuneo Solution:</span> {req.kuneoFeature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="border-t border-slate-800 p-6">
                  <h4 className="mb-4 font-semibold text-slate-200">
                    Resources & Templates
                  </h4>
                  <div className="grid gap-3 md:grid-cols-3">
                    {framework.resources.map((resource) => (
                      <button
                        key={resource.title}
                        className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950 p-4 text-left transition-colors hover:bg-slate-800"
                      >
                        <FileCheck className="h-5 w-5 flex-shrink-0 text-slate-400" />
                        <div className="flex-1 min-w-0">
                          <div className="truncate text-sm font-medium text-slate-100">
                            {resource.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {resource.type} • {resource.size}
                          </div>
                        </div>
                        <Download className="h-4 w-4 flex-shrink-0 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Compliance Checklist */}
      <section>
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-100">
            Need Compliance Assistance?
          </h2>
          <p className="mb-6 text-slate-300">
            Our team can help you navigate regulatory requirements and implement compliant AI agent systems
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/ai-governance/documentation"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-slate-100 transition-colors hover:bg-slate-700"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
