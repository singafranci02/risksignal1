'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Shield, CheckCircle2, ArrowRight, BookOpen, ExternalLink, ChevronDown, FileText, AlertCircle, Award, Building2 } from 'lucide-react'
import { countryRegs, CountryRegulation } from '@/data/regulations'

const glassCard =
  'rounded-xl border border-blue-500/20 bg-slate-900/60 shadow-lg shadow-blue-500/10 backdrop-blur-md'

interface RegulationPageClientProps {
  regulation: CountryRegulation
}

export default function RegulationPageClient({ regulation: reg }: RegulationPageClientProps) {
  const [openAccordion, setOpenAccordion] = useState<string>('requirements')

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? '' : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Grid overlay across entire page */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,41,59,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem]"
        aria-hidden
      />

      <div className="relative z-10">
        {/* Breadcrumb – glassmorphic bar */}
        <div className="border-b border-blue-500/20 bg-slate-900/60 shadow-lg shadow-blue-500/10 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300" aria-label="Breadcrumb">
              <Link href="/" className="font-medium text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <Link href="/ai-governance" className="font-medium text-white hover:text-blue-400 transition-colors">
                AI Governance
              </Link>
              <span className="text-slate-500">/</span>
              <Link href="/ai-governance/regulations" className="font-medium text-white hover:text-blue-400 transition-colors">
                Regulations
              </Link>
              <span className="text-slate-500">/</span>
              <span className="font-semibold text-blue-400">{reg.country}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <Image
              src="/images/hero/about-hero.png"
              alt=""
              fill
              className="object-cover opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-blue-950/60 to-slate-950/90" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-8 flex items-center gap-6">
              <span className="text-8xl drop-shadow-lg" role="img" aria-label={`${reg.country} flag`}>
                {reg.flag}
              </span>
              <div>
                <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {reg.country} Regulatory Compliance
                </h1>
                <p className="text-2xl font-medium text-blue-400">{reg.framework}</p>
              </div>
            </div>

            {/* Summary – glassmorphic, glowing border */}
            <div className={`max-w-4xl ${glassCard} p-6`}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
                  <Building2 className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <h2 className="mb-2 text-xl font-bold text-white">{reg.body}</h2>
                  <p className="text-lg leading-relaxed text-slate-300">{reg.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content – same gradient context, grid visible via fixed overlay */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          {/* Quick Stats – glassmorphic */}
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            <div className={`${glassCard} p-6`}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                <Shield className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">Framework</h3>
              <p className="text-lg font-bold text-white">{reg.framework}</p>
            </div>
            <div className={`${glassCard} p-6`}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                <FileText className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">Requirements</h3>
              <p className="text-lg font-bold text-white">{reg.requirements.length} Key Areas</p>
            </div>
            <div className={`${glassCard} p-6`}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                <Award className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">Kuneo Solutions</h3>
              <p className="text-lg font-bold text-white">{reg.kuneoSolutions.length} Compliance Tools</p>
            </div>
          </div>

          {/* Accordions – glassmorphic panels and inner cards */}
          <div className="mb-16 space-y-6">
            <div className={`${glassCard} overflow-hidden`}>
              <button
                onClick={() => toggleAccordion('requirements')}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Regulatory Requirements</h2>
                </div>
                <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform ${openAccordion === 'requirements' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'requirements' && (
                <div className="border-t border-blue-500/20 bg-slate-900/40 p-6 backdrop-blur-md">
                  <p className="mb-6 text-slate-300">
                    What {reg.body} expects from financial AI systems operating in {reg.country}.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {reg.requirements.map((req, idx) => (
                      <div key={idx} className={`${glassCard} p-5`}>
                        <div className="flex items-start gap-3">
                          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-sm font-bold text-blue-400">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-2 font-bold text-white">{req.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-300">{req.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`${glassCard} overflow-hidden`}>
              <button
                onClick={() => toggleAccordion('solutions')}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">How Kuneo Ensures Compliance</h2>
                </div>
                <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform ${openAccordion === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'solutions' && (
                <div className="border-t border-blue-500/20 bg-slate-900/40 p-6 backdrop-blur-md">
                  <p className="mb-6 text-slate-300">
                    Hardware-secured infrastructure that makes {reg.framework} compliance automatic.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {reg.kuneoSolutions.map((solution, idx) => (
                      <div key={idx} className={`${glassCard} p-5`}>
                        <div className="flex items-start gap-3">
                          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
                            <CheckCircle2 className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-2 font-bold text-white">{solution.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-300">{solution.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`${glassCard} overflow-hidden`}>
              <button
                onClick={() => toggleAccordion('implementation')}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Implementation Roadmap</h2>
                </div>
                <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform ${openAccordion === 'implementation' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'implementation' && (
                <div className="border-t border-blue-500/20 bg-slate-900/40 p-6 backdrop-blur-md">
                  <p className="mb-6 text-slate-300">
                    Step-by-step process to achieve {reg.framework} compliance with Kuneo.
                  </p>
                  <div className="space-y-4">
                    {reg.implementationSteps.map((step, idx) => (
                      <div key={idx} className={`${glassCard} flex gap-4 p-5`}>
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/30 text-lg font-bold text-blue-400">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-bold text-white">{step.title}</h3>
                          <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`${glassCard} overflow-hidden`}>
              <button
                onClick={() => toggleAccordion('resources')}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Official Resources</h2>
                </div>
                <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform ${openAccordion === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === 'resources' && (
                <div className="border-t border-blue-500/20 bg-slate-900/40 p-6 backdrop-blur-md">
                  <p className="mb-6 text-slate-300">
                    Direct links to {reg.body} guidance and documentation.
                  </p>
                  <div className="space-y-3">
                    {reg.officialResources.map((resource, idx) => (
                      <a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-between ${glassCard} p-4 transition-all hover:border-blue-400/30`}
                      >
                        <div className="flex items-center gap-3">
                          <ExternalLink className="h-5 w-5 text-blue-400" />
                          <span className="font-semibold text-white group-hover:text-blue-400">{resource.title}</span>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Other Countries – glassmorphic cards */}
          <div className="border-t border-blue-500/20 pt-16">
            <h3 className="mb-8 text-2xl font-bold text-white">Explore Other Regions</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {countryRegs
                .filter((r) => r.slug !== reg.slug)
                .map((otherReg) => (
                  <Link
                    key={otherReg.slug}
                    href={`/ai-governance/regulations/${otherReg.slug}`}
                    className={`group flex items-center gap-4 ${glassCard} p-4 transition-all hover:border-blue-400/30`}
                  >
                    <span className="text-4xl" role="img" aria-hidden>{otherReg.flag}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-blue-400">{otherReg.country}</h4>
                      <p className="text-sm text-slate-400">{otherReg.framework}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-400" />
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="border-t border-blue-500/20 py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Deploy Compliant AI Agents in {reg.country}?
            </h2>
            <p className="mb-8 text-xl text-slate-300">
              Get started with Kuneo&apos;s {reg.framework}-compliant governance infrastructure
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/profile"
                className="group flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-blue-500/30"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/ai-governance/documentation"
                className="group flex items-center gap-2 rounded-xl border-2 border-blue-500/30 bg-slate-900/60 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-blue-400/50 hover:bg-slate-900/80"
              >
                <span>View Documentation</span>
                <BookOpen className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
