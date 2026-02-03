import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileCheck, Scale, ArrowRight, CheckCircle2, AlertTriangle, Building2, BookOpen, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEC & FINRA AI Compliance for United States | Kuneo',
  description: 'Complete guide to US AI agent compliance. Meet SEC Reg BI, FINRA 3110, SEC 17a-4, and Dodd-Frank requirements for autonomous financial agents in the United States.',
  keywords: ['SEC compliance', 'FINRA AI regulation', 'Reg BI', 'FINRA 3110', 'SEC 17a-4', 'Dodd-Frank AI', 'US financial AI'],
  openGraph: {
    title: 'US SEC & FINRA AI Compliance | Kuneo',
    description: 'Deploy compliant AI agents in the United States. Full SEC, FINRA, and Dodd-Frank compliance framework.',
    url: 'https://risksignal1-orpin.vercel.app/ai-governance/regulations/united-states',
    siteName: 'Kuneo',
    locale: 'en_US',
    type: 'article',
  },
}

export default function UnitedStatesRegulationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SEC & FINRA AI Compliance Framework for United States",
    "description": "Comprehensive guide to deploying compliant AI agents under United States regulation",
    "author": {
      "@type": "Organization",
      "name": "Kuneo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kuneo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://risksignal1-orpin.vercel.app/logo.png"
      }
    },
    "datePublished": "2026-01-28",
    "dateModified": "2026-01-28"
  }

  const regulations = [
    {
      code: 'Reg BI',
      title: 'Regulation Best Interest',
      agency: 'SEC',
      description: 'Broker-dealers must act in the best interest of retail customers when making recommendations',
      requirements: [
        'Disclose material facts about relationship and conflicts',
        'Exercise reasonable diligence in recommendations',
        'Establish policies to mitigate conflicts of interest',
        'Document compliance with best interest obligation'
      ],
      kuneoSolution: 'Automated conflict detection with explainable AI recommendations and complete audit trails for SEC examination'
    },
    {
      code: 'FINRA 3110',
      title: 'Supervisory Procedures',
      agency: 'FINRA',
      description: 'Member firms must establish and maintain supervisory procedures for algorithmic trading',
      requirements: [
        'Written supervisory procedures for AI trading systems',
        'Designated supervisory personnel for algorithm oversight',
        'Pre-use testing and post-deployment monitoring',
        'Annual review of supervisory procedures'
      ],
      kuneoSolution: 'Human-in-the-loop oversight dashboard with approval workflows and automated annual compliance reports'
    },
    {
      code: 'SEC 17a-4',
      title: 'Electronic Record Retention',
      agency: 'SEC',
      description: 'Requirements for preserving electronic records of securities transactions',
      requirements: [
        'Records must be preserved in non-rewriteable format (WORM)',
        'Retention period: 6 years minimum',
        'Duplicate copies stored separately',
        'Ability to download and reproduce records'
      ],
      kuneoSolution: 'Append-only cryptographic logs with 7-year retention and instant SEC 17a-4 compliant export'
    },
    {
      code: 'Dodd-Frank',
      title: 'Systematic Risk Monitoring',
      agency: 'Multiple',
      description: 'Enhanced supervision of systemically important financial institutions',
      requirements: [
        'Enhanced prudential standards for large institutions',
        'Living wills and stress testing',
        'Risk-based capital requirements',
        'Orderly liquidation authority'
      ],
      kuneoSolution: 'Real-time risk aggregation across AI agents with scenario stress testing and automated regulatory reporting'
    }
  ]

  const finraAlgoRules = [
    {
      rule: 'Pre-Deployment Testing',
      description: 'Comprehensive testing before algorithm goes live',
      checks: ['Backtesting with historical data', 'Paper trading simulation', 'Risk limit validation', 'Kill-switch functionality']
    },
    {
      rule: 'Real-Time Monitoring',
      description: 'Continuous supervision of algorithmic trading',
      checks: ['Order flow analysis', 'Market impact assessment', 'Anomaly detection', 'Regulatory threshold alerts']
    },
    {
      rule: 'Post-Trade Review',
      description: 'Regular review of algorithm performance',
      checks: ['Trade reconstruction', 'Best execution analysis', 'Compliance exception review', 'Quarterly performance reports']
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-16">
        {/* Hero */}
        <section>
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <Link href="/ai-governance" className="hover:text-blue-600">AI Governance</Link>
            <span>/</span>
            <Link href="/ai-governance/regulations" className="hover:text-blue-600">Regulations</Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">United States</span>
          </div>

          <div className="mb-8 flex items-center gap-4">
            <span className="text-6xl">🇺🇸</span>
            <div>
              <h1 className="mb-2 text-4xl font-bold text-gray-900">
                US SEC & FINRA AI Agent Compliance
              </h1>
              <p className="text-xl text-gray-600">
                Reg BI, FINRA 3110, SEC 17a-4 & Dodd-Frank Requirements for Algorithmic Trading
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              What is SEC & FINRA AI Compliance?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              SEC & FINRA AI Compliance ensures that autonomous financial agents used in US securities markets 
              meet the Securities and Exchange Commission's and FINRA's standards for best interest obligations, 
              supervisory procedures, and record retention. Kuneo provides infrastructure to deploy AI agents that 
              automatically comply with Reg BI, FINRA 3110, SEC 17a-4, and Dodd-Frank requirements.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-indigo-200 bg-white p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                <div>
                  <p className="font-semibold text-gray-900">For Broker-Dealers</p>
                  <p className="text-sm text-gray-600">Reg BI best interest compliance</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-indigo-200 bg-white p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600" />
                <div>
                  <p className="font-semibold text-gray-900">For RIAs</p>
                  <p className="text-sm text-gray-600">Fiduciary duty with AI explainability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Framework */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            US Regulatory Framework for AI Agents
          </h2>
          <div className="space-y-6">
            {regulations.map((reg) => (
              <div key={reg.code} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                        {reg.code}
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                        {reg.agency}
                      </div>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{reg.title}</h3>
                    <p className="text-gray-600">{reg.description}</p>
                  </div>
                  <Scale className="h-12 w-12 text-gray-300" />
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Requirements</h4>
                    <ul className="space-y-2">
                      {reg.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">Kuneo Solution</h4>
                    <div className="rounded-lg bg-indigo-50 p-4">
                      <p className="text-sm text-gray-700">{reg.kuneoSolution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FINRA Algo Trading Rules */}
        <section className="rounded-2xl bg-gray-50 p-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            FINRA Algorithmic Trading Requirements
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {finraAlgoRules.map((rule) => (
              <div key={rule.rule} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-gray-900">{rule.rule}</h3>
                <p className="mb-4 text-sm text-gray-600">{rule.description}</p>
                <ul className="space-y-2">
                  {rule.checks.map((check, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-indigo-600" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SEC Examination Focus Areas */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            SEC Examination Focus Areas for AI Trading
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Governance & Oversight</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Board-level oversight of AI systems</li>
                <li>• Clear accountability structures</li>
                <li>• Risk management frameworks</li>
                <li>• Third-party vendor management</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-700">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Testing & Validation</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pre-deployment testing protocols</li>
                <li>• Ongoing performance monitoring</li>
                <li>• Model validation procedures</li>
                <li>• Bias and discrimination testing</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Documentation</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Written policies and procedures</li>
                <li>• Algorithm logic documentation</li>
                <li>• Decision audit trails</li>
                <li>• Exception reporting logs</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Client Protection</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Disclosure of AI usage to clients</li>
                <li>• Best execution analysis</li>
                <li>• Conflict of interest management</li>
                <li>• Fair and equitable treatment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Official US Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="https://www.sec.gov/rules/final/2019/34-86031.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
            >
              <ExternalLink className="mt-1 h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-600" />
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">SEC Regulation Best Interest</h3>
                <p className="text-sm text-gray-600">Official Reg BI release from SEC</p>
              </div>
            </a>

            <a
              href="https://www.finra.org/rules-guidance/rulebooks/finra-rules/3110"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
            >
              <ExternalLink className="mt-1 h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-600" />
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">FINRA Rule 3110</h3>
                <p className="text-sm text-gray-600">Supervisory procedures from FINRA</p>
              </div>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Deploy SEC & FINRA Compliant AI Agents Today
          </h2>
          <p className="mb-8 text-lg text-indigo-100">
            Pre-configured templates for US securities regulation
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-indigo-900 shadow-2xl transition-all hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/ai-governance/documentation"
              className="flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <span>View Documentation</span>
              <BookOpen className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
