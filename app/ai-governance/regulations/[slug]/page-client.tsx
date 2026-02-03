'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Shield, CheckCircle2, ArrowRight, BookOpen, ExternalLink, ChevronDown, FileText, AlertCircle, Award, Building2 } from 'lucide-react'
import { countryRegs, CountryRegulation } from '@/data/regulations'

interface RegulationPageClientProps {
  regulation: CountryRegulation
}

export default function RegulationPageClient({ regulation: reg }: RegulationPageClientProps) {
  const [openAccordion, setOpenAccordion] = useState<string>('requirements')

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? '' : section)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-governance" className="hover:text-blue-600 transition-colors">AI Governance</Link>
            <span>/</span>
            <Link href="/ai-governance/regulations" className="hover:text-blue-600 transition-colors">Regulations</Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">{reg.country}</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Professional Image */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero/about-hero.png"
            alt={`${reg.country} regulatory landscape`}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{reg.flag}</span>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                {reg.country} Regulatory Compliance
              </h1>
              <p className="text-2xl text-blue-100">{reg.framework}</p>
            </div>
          </div>
          
          <div className="mt-8 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md max-w-4xl">
            <div className="flex items-start gap-3">
              <Building2 className="h-6 w-6 text-blue-200 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">{reg.body}</h2>
                <p className="text-lg leading-relaxed text-blue-50">
                  {reg.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        
        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Framework</h3>
            <p className="text-sm text-gray-600">{reg.framework}</p>
          </div>
          
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Requirements</h3>
            <p className="text-sm text-gray-600">{reg.requirements.length} Key Areas</p>
          </div>
          
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
              <Award className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Kuneo Solutions</h3>
            <p className="text-sm text-gray-600">{reg.kuneoSolutions.length} Compliance Tools</p>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4 mb-16">
          
          {/* Requirements Accordion */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => toggleAccordion('requirements')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Regulatory Requirements</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-gray-400 transition-transform ${openAccordion === 'requirements' ? 'rotate-180' : ''}`} />
            </button>
            
            {openAccordion === 'requirements' && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <p className="text-gray-600 mb-6">
                  What {reg.body} expects from financial AI systems operating in {reg.country}.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {reg.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">
                            {req.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{req.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Kuneo Solutions Accordion */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => toggleAccordion('solutions')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">How Kuneo Ensures Compliance</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-gray-400 transition-transform ${openAccordion === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            
            {openAccordion === 'solutions' && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <p className="text-gray-600 mb-6">
                  Hardware-secured infrastructure that makes {reg.framework} compliance automatic.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {reg.kuneoSolutions.map((solution, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-green-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">
                            {solution.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{solution.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Implementation Steps Accordion */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => toggleAccordion('implementation')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">Implementation Roadmap</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-gray-400 transition-transform ${openAccordion === 'implementation' ? 'rotate-180' : ''}`} />
            </button>
            
            {openAccordion === 'implementation' && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <p className="text-gray-600 mb-6">
                  Step-by-step process to achieve {reg.framework} compliance with Kuneo.
                </p>
                <div className="space-y-4">
                  {reg.implementationSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Official Resources Accordion */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => toggleAccordion('resources')}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-gray-600" />
                <h2 className="text-2xl font-bold text-gray-900">Official Resources</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-gray-400 transition-transform ${openAccordion === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            
            {openAccordion === 'resources' && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <p className="text-gray-600 mb-6">
                  Direct links to {reg.body} guidance and documentation.
                </p>
                <div className="space-y-3">
                  {reg.officialResources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Explore Other Regions</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countryRegs
              .filter(r => r.slug !== reg.slug)
              .map((otherReg) => (
                <Link
                  key={otherReg.slug}
                  href={`/ai-governance/regulations/${otherReg.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                >
                  <span className="text-3xl">{otherReg.flag}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                      {otherReg.country}
                    </h4>
                    <p className="text-xs text-gray-500">{otherReg.framework}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Ready to Deploy Compliant AI Agents in {reg.country}?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Get started with Kuneo's {reg.framework}-compliant governance infrastructure
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-xl transition-all hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/ai-governance/documentation"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
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
