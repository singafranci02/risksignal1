import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileCheck, Scale, ArrowRight, CheckCircle2, AlertTriangle, Building2, BookOpen, ExternalLink, Eye, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'EU AI Act Compliance for Autonomous Agents | Kuneo',
  description: 'Complete guide to EU AI Act compliance. Meet Article 12 transparency, Article 13 human oversight, Article 52 high-risk requirements, and GDPR obligations for AI agents in Europe.',
  keywords: ['EU AI Act', 'European AI regulation', 'Article 12 compliance', 'Article 13 oversight', 'GDPR AI', 'high-risk AI systems'],
  openGraph: {
    title: 'EU AI Act Compliance | Kuneo',
    description: 'Deploy compliant AI agents in Europe. Full EU AI Act and GDPR compliance framework.',
    url: 'https://risksignal1-orpin.vercel.app/ai-governance/regulations/european-union',
    siteName: 'Kuneo',
    locale: 'en_EU',
    type: 'article',
  },
}

export default function EuropeanUnionRegulationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "EU AI Act Compliance Framework for Autonomous Agents",
    "description": "Comprehensive guide to deploying compliant AI agents under European Union regulation",
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
      article: 'Article 12',
      title: 'Transparency and Traceability',
      description: 'High-risk AI systems must be designed to ensure appropriate logging and traceability',
      requirements: [
        'Automatic logging of events throughout system lifecycle',
        'Enable traceability of system\'s functioning',
        'Facilitate monitoring and post-market monitoring',
        'Ensure appropriate level of explainability'
      ],
      kuneoSolution: 'Cryptographic immutable logs with automatic event capture, explainability metadata, and compliance timeline visualization',
      riskLevel: 'High-Risk'
    },
    {
      article: 'Article 13',
      title: 'Human Oversight',
      description: 'High-risk AI systems must be designed to allow effective human oversight',
      requirements: [
        'Enable human intervention during system operation',
        'Provide ability to override or stop the system',
        'Ensure interpretability of outputs',
        'Identify and mitigate risks of automation bias'
      ],
      kuneoSolution: 'Emergency kill-switch, approval workflows for threshold decisions, and real-time human oversight dashboard with drift alerts',
      riskLevel: 'High-Risk'
    },
    {
      article: 'Article 52',
      title: 'Transparency for Specific AI Systems',
      description: 'Users must be informed when interacting with AI systems in specific contexts',
      requirements: [
        'Disclose AI-generated content to end users',
        'Inform when AI is used for emotion recognition',
        'Transparency in biometric categorization',
        'Clear labeling of AI-generated deep fakes'
      ],
      kuneoSolution: 'Automatic AI disclosure in all user interactions with agent activity badges and decision provenance tracking',
      riskLevel: 'Transparency Obligation'
    },
    {
      article: 'GDPR',
      title: 'Data Protection & Privacy',
      description: 'General Data Protection Regulation requirements for AI processing personal data',
      requirements: [
        'Legal basis for processing personal data',
        'Data minimization and purpose limitation',
        'Right to explanation for automated decisions',
        'Data breach notification within 72 hours'
      ],
      kuneoSolution: 'Privacy-preserving audit logs with PII encryption, automated breach detection, and GDPR-compliant data retention policies',
      riskLevel: 'Mandatory'
    }
  ]

  const riskCategories = [
    {
      level: 'High-Risk',
      description: 'AI systems used in financial services, credit scoring, or critical infrastructure',
      color: 'red',
      requirements: 'Full compliance with Articles 8-15, including transparency, human oversight, and accuracy requirements'
    },
    {
      level: 'Limited Risk',
      description: 'AI systems with transparency obligations (chatbots, recommendation systems)',
      color: 'yellow',
      requirements: 'Must inform users they are interacting with AI (Article 52)'
    },
    {
      level: 'Minimal Risk',
      description: 'AI systems with no specific obligations under the Act',
      color: 'green',
      requirements: 'Voluntary codes of conduct encouraged'
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
            <span className="font-semibold text-gray-900">European Union</span>
          </div>

          <div className="mb-8 flex items-center gap-4">
            <span className="text-6xl">🇪🇺</span>
            <div>
              <h1 className="mb-2 text-4xl font-bold text-gray-900">
                EU AI Act Compliance for Autonomous Agents
              </h1>
              <p className="text-xl text-gray-600">
                Articles 12, 13, 52 & GDPR Requirements for High-Risk AI Systems
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              What is EU AI Act Compliance?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              EU AI Act Compliance ensures that autonomous financial agents classified as "high-risk AI systems" 
              under the European Union's AI Act meet requirements for transparency, human oversight, and data governance. 
              Kuneo provides infrastructure to automatically comply with Articles 12, 13, 52, and GDPR obligations.
            </p>
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span className="font-semibold text-red-900">High-Risk Classification</span>
              </div>
              <p className="text-sm text-red-800">
                Autonomous financial agents are classified as <strong>high-risk AI systems</strong> under the EU AI Act 
                due to their use in credit scoring, portfolio management, and financial decisions. This triggers mandatory 
                compliance with Articles 8-15.
              </p>
            </div>
          </div>
        </section>

        {/* Risk Classification */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            EU AI Act Risk Categories
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {riskCategories.map((category) => {
              const colorClasses = {
                red: 'border-red-200 bg-gradient-to-br from-red-50 to-white',
                yellow: 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-white',
                green: 'border-green-200 bg-gradient-to-br from-green-50 to-white',
              }[category.color]

              const badgeColors = {
                red: 'bg-red-100 text-red-700',
                yellow: 'bg-yellow-100 text-yellow-700',
                green: 'bg-green-100 text-green-700',
              }[category.color]

              return (
                <div key={category.level} className={`rounded-2xl border p-6 shadow-lg ${colorClasses}`}>
                  <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${badgeColors}`}>
                    {category.level}
                  </div>
                  <p className="mb-4 text-sm text-gray-700">{category.description}</p>
                  <div className="rounded-lg bg-white p-3 text-xs text-gray-600">
                    {category.requirements}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Regulatory Framework */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            EU AI Act Articles for Financial Agents
          </h2>
          <div className="space-y-6">
            {regulations.map((reg) => (
              <div key={reg.article} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                        {reg.article}
                      </div>
                      <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                        reg.riskLevel === 'High-Risk' ? 'bg-red-100 text-red-700' :
                        reg.riskLevel === 'Mandatory' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {reg.riskLevel}
                      </div>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{reg.title}</h3>
                    <p className="text-gray-600">{reg.description}</p>
                  </div>
                  <Scale className="h-12 w-12 text-gray-300" />
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">EU Requirements</h4>
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
                    <div className="rounded-lg bg-blue-50 p-4">
                      <p className="text-sm text-gray-700">{reg.kuneoSolution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="rounded-2xl bg-gray-50 p-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            EU AI Act Implementation Timeline
          </h2>
          <div className="space-y-4">
            <div className="flex gap-6 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-xs font-bold text-white">
                NOW
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Immediate Action Required</h3>
                <p className="mb-2 text-gray-600">
                  High-risk AI systems must begin compliance preparation immediately
                </p>
                <div className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">
                  <AlertTriangle className="h-4 w-4" />
                  Start compliance assessment today
                </div>
              </div>
            </div>

            <div className="flex gap-6 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-xs font-bold text-white">
                2026
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Full Enforcement Begins</h3>
                <p className="text-gray-600">
                  All high-risk AI systems must demonstrate full compliance with Articles 8-15
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Official EU Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52021PC0206"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
            >
              <ExternalLink className="mt-1 h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-600" />
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Official EU AI Act Text</h3>
                <p className="text-sm text-gray-600">Full legislative text from EUR-Lex</p>
              </div>
            </a>

            <a
              href="https://gdpr.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg"
            >
              <ExternalLink className="mt-1 h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-600" />
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">GDPR Compliance Guide</h3>
                <p className="text-sm text-gray-600">Official GDPR portal and resources</p>
              </div>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Deploy EU-Compliant AI Agents Today
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Pre-configured templates for EU AI Act and GDPR compliance
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-blue-900 shadow-2xl transition-all hover:scale-105"
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
