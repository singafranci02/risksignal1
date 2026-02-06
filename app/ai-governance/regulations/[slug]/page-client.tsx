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
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/ai-governance" className="transition-colors hover:text-white">AI Governance</Link>
            <span>/</span>
            <Link href="/ai-governance/regulations" className="transition-colors hover:text-white">Regulations</Link>
            <span>/</span>
            <span className="font-semibold text-white">{reg.country}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/about-hero.png"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-5xl">{reg.flag}</span>
            <div>
              <h1 className="mb-2 text-5xl font-bold text-white">
                {reg.country} Regulatory Compliance
              </h1>
              <p className="text-2xl text-sky-200">{reg.framework}</p>
            </div>
          </div>
          <div className="max-w-4xl rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <Building2 className="mt-1 h-6 w-6 flex-shrink-0 text-sky-400" />
              <div>
                <h2 className="mb-2 text-xl font-semibold text-white">{reg.body}</h2>
                <p className="text-lg leading-relaxed text-slate-300">{reg.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Quick Stats */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-slate-800/80 p-6 shadow-lg backdrop-blur-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/20">
              <Shield className="h-6 w-6 text-sky-400" />
            </div>
            <h3 className="mb-2 font-bold text-white">Framework</h3>
            <p className="text-sm text-slate-400">{reg.framework}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/80 p-6 shadow-lg backdrop-blur-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
              <CheckCircle2 className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="mb-2 font-bold text-white">Requirements</h3>
            <p className="text-sm text-slate-400">{reg.requirements.length} Key Areas</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/80 p-6 shadow-lg backdrop-blur-sm">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/20">
              <Award className="h-6 w-6 text-sky-400" />
            </div>
            <h3 className="mb-2 font-bold text-white">Kuneo Solutions</h3>
            <p className="text-sm text-slate-400">{reg.kuneoSolutions.length} Compliance Tools</p>
          </div>
        </div>

        {/* Accordions */}
        <div className="mb-16 space-y-4">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-800/80 shadow-lg backdrop-blur-sm">
            <button
              onClick={() => toggleAccordion('requirements')}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-sky-400" />
                <h2 className="text-2xl font-bold text-white">Regulatory Requirements</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform ${openAccordion === 'requirements' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'requirements' && (
              <div className="border-t border-white/10 bg-slate-900/50 p-6">
                <p className="mb-6 text-slate-400">
                  What {reg.body} expects from financial AI systems operating in {reg.country}.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {reg.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-white/10 bg-slate-800/80 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sm font-bold text-sky-400">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-bold text-white">{req.title}</h3>
                          <p className="text-sm leading-relaxed text-slate-400">{req.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-800/80 shadow-lg backdrop-blur-sm">
            <button
              onClick={() => toggleAccordion('solutions')}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">How Kuneo Ensures Compliance</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform ${openAccordion === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'solutions' && (
              <div className="border-t border-white/10 bg-slate-900/50 p-6">
                <p className="mb-6 text-slate-400">
                  Hardware-secured infrastructure that makes {reg.framework} compliance automatic.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {reg.kuneoSolutions.map((solution, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-white/10 bg-slate-800/80 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-bold text-white">{solution.title}</h3>
                          <p className="text-sm leading-relaxed text-slate-400">{solution.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-800/80 shadow-lg backdrop-blur-sm">
            <button
              onClick={() => toggleAccordion('implementation')}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-sky-400" />
                <h2 className="text-2xl font-bold text-white">Implementation Roadmap</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform ${openAccordion === 'implementation' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'implementation' && (
              <div className="border-t border-white/10 bg-slate-900/50 p-6">
                <p className="mb-6 text-slate-400">
                  Step-by-step process to achieve {reg.framework} compliance with Kuneo.
                </p>
                <div className="space-y-4">
                  {reg.implementationSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 rounded-lg border border-white/10 bg-slate-800/80 p-5"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 font-bold text-white">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-800/80 shadow-lg backdrop-blur-sm">
            <button
              onClick={() => toggleAccordion('resources')}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-slate-400" />
                <h2 className="text-2xl font-bold text-white">Official Resources</h2>
              </div>
              <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform ${openAccordion === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {openAccordion === 'resources' && (
              <div className="border-t border-white/10 bg-slate-900/50 p-6">
                <p className="mb-6 text-slate-400">
                  Direct links to {reg.body} guidance and documentation.
                </p>
                <div className="space-y-3">
                  {reg.officialResources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-white/10 bg-slate-800/80 p-4 transition-all hover:border-sky-500/30 hover:bg-slate-800"
                    >
                      <div className="flex items-center gap-3">
                        <ExternalLink className="h-5 w-5 text-sky-400" />
                        <span className="font-semibold text-white group-hover:text-sky-400">{resource.title}</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky-400" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Other Countries */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="mb-8 text-2xl font-bold text-white">Explore Other Regions</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countryRegs
              .filter((r) => r.slug !== reg.slug)
              .map((otherReg) => (
                <Link
                  key={otherReg.slug}
                  href={`/ai-governance/regulations/${otherReg.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-800/80 p-4 shadow-lg backdrop-blur-sm transition-all hover:border-sky-500/30 hover:bg-slate-800"
                >
                  <span className="text-3xl">{otherReg.flag}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-sky-400">
                      {otherReg.country}
                    </h4>
                    <p className="text-xs text-slate-500">{otherReg.framework}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky-400" />
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="border-t border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-16">
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
              className="group flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-blue-500/50"
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
