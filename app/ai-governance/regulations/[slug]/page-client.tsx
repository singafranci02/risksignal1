'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Shield, CheckCircle2, ArrowRight, BookOpen, ExternalLink, ChevronDown, FileText, AlertCircle, Award, Building2 } from 'lucide-react'
import { countryRegs, CountryRegulation } from '@/data/regulations'

const cardClass = 'rounded-xl border border-gray-200 bg-white p-5 shadow-sm'

interface RegulationPageClientProps {
  regulation: CountryRegulation
}

export default function RegulationPageClient({ regulation: reg }: RegulationPageClientProps) {
  const [openAccordion, setOpenAccordion] = useState<string>('requirements')

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? '' : section)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-governance" className="hover:text-blue-600 transition-colors">AI Governance</Link>
            <span>/</span>
            <Link href="/ai-governance/regulations" className="hover:text-blue-600 transition-colors">Regulations</Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">{reg.country}</span>
          </nav>
        </div>
      </div>

      {/* Hero – no image, white + blue accent */}
      <section className="border-b border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-6">
            <span className="text-7xl" role="img" aria-label={`${reg.country} flag`}>
              {reg.flag}
            </span>
            <div>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {reg.country} Regulatory Compliance
              </h1>
              <p className="text-xl font-medium text-blue-600">{reg.framework}</p>
            </div>
          </div>

          <div className="max-w-4xl rounded-xl border border-blue-200 bg-blue-50/50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                <Building2 className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h2 className="mb-2 text-xl font-bold text-gray-900">{reg.body}</h2>
                <p className="text-lg leading-relaxed text-gray-700">{reg.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Quick Stats */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <Shield className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">Framework</h3>
            <p className="text-lg font-bold text-gray-900">{reg.framework}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <FileText className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">Requirements</h3>
            <p className="text-lg font-bold text-gray-900">{reg.requirements.length} Key Areas</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <Award className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">Kuneo Solutions</h3>
            <p className="text-lg font-bold text-gray-900">{reg.kuneoSolutions.length} Compliance Tools</p>
          </div>
        </div>

        {/* Accordions */}
        <div className="mb-16 space-y-4">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion('requirements')}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Regulatory Requirements</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-gray-500 transition-transform ${openAccordion === 'requirements' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'requirements' && (
              <div className="border-t border-gray-200 bg-gray-50/80 p-6">
                <p className="mb-6 text-gray-700">
                  What {reg.body} expects from financial AI systems operating in {reg.country}.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {reg.requirements.map((req, idx) => (
                    <div key={idx} className={cardClass}>
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-bold text-gray-900">{req.title}</h3>
                          <p className="text-sm leading-relaxed text-gray-600">{req.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion('solutions')}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">How Kuneo Ensures Compliance</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-gray-500 transition-transform ${openAccordion === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'solutions' && (
              <div className="border-t border-gray-200 bg-gray-50/80 p-6">
                <p className="mb-6 text-gray-700">
                  Hardware-secured infrastructure that makes {reg.framework} compliance automatic.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {reg.kuneoSolutions.map((solution, idx) => (
                    <div key={idx} className={cardClass}>
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-bold text-gray-900">{solution.title}</h3>
                          <p className="text-sm leading-relaxed text-gray-600">{solution.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion('implementation')}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Implementation Roadmap</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-gray-500 transition-transform ${openAccordion === 'implementation' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'implementation' && (
              <div className="border-t border-gray-200 bg-gray-50/80 p-6">
                <p className="mb-6 text-gray-700">
                  Step-by-step process to achieve {reg.framework} compliance with Kuneo.
                </p>
                <div className="space-y-4">
                  {reg.implementationSteps.map((step, idx) => (
                    <div key={idx} className={`${cardClass} flex gap-4`}>
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-bold text-gray-900">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion('resources')}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Official Resources</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-gray-500 transition-transform ${openAccordion === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'resources' && (
              <div className="border-t border-gray-200 bg-gray-50/80 p-6">
                <p className="mb-6 text-gray-700">
                  Direct links to {reg.body} guidance and documentation.
                </p>
                <div className="space-y-3">
                  {reg.officialResources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-200 hover:bg-blue-50/50"
                    >
                      <div className="flex items-center gap-3">
                        <ExternalLink className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600">{resource.title}</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Other Countries */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="mb-8 text-2xl font-bold text-gray-900">Explore Other Regions</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countryRegs
              .filter((r) => r.slug !== reg.slug)
              .map((otherReg) => (
                <Link
                  key={otherReg.slug}
                  href={`/ai-governance/regulations/${otherReg.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50/50"
                >
                  <span className="text-4xl" role="img" aria-hidden>{otherReg.flag}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">{otherReg.country}</h4>
                    <p className="text-sm text-gray-500">{otherReg.framework}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* CTA – blue bar */}
      <section className="border-t border-gray-200 bg-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Ready to Deploy Compliant AI Agents in {reg.country}?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Get started with Kuneo&apos;s {reg.framework}-compliant governance infrastructure
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="group flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/ai-governance/documentation"
              className="group flex items-center gap-2 rounded-xl border-2 border-white/80 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <span>View Documentation</span>
              <BookOpen className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
