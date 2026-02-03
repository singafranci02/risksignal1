import { FileText, Download, ExternalLink, Code, Terminal, Book, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function DocumentationPage() {
  const documents = [
    {
      category: 'Getting Started',
      items: [
        {
          title: 'Quick Start Guide',
          description: 'Deploy your first governed AI agent in 10 minutes',
          type: 'PDF',
          size: '2.4 MB',
          updated: '2026-01-28',
        },
        {
          title: 'Architecture Overview',
          description: 'Technical architecture and system design principles',
          type: 'PDF',
          size: '5.1 MB',
          updated: '2026-01-25',
        },
        {
          title: 'Integration Guide',
          description: 'Step-by-step integration with existing systems',
          type: 'PDF',
          size: '3.8 MB',
          updated: '2026-01-20',
        },
      ],
    },
    {
      category: 'Technical Specifications',
      items: [
        {
          title: 'Rule Engine API Reference',
          description: 'Complete API documentation for rule definition and execution',
          type: 'PDF',
          size: '8.2 MB',
          updated: '2026-01-28',
        },
        {
          title: 'TEE Implementation Guide',
          description: 'Trusted Execution Environment setup and configuration',
          type: 'PDF',
          size: '6.5 MB',
          updated: '2026-01-22',
        },
        {
          title: 'Audit Trail Specification',
          description: 'Immutable logging format and export procedures',
          type: 'PDF',
          size: '4.3 MB',
          updated: '2026-01-18',
        },
      ],
    },
    {
      category: 'Compliance & Regulatory',
      items: [
        {
          title: 'Regulatory Mapping Document',
          description: 'How Kuneo features map to regulatory requirements',
          type: 'PDF',
          size: '7.8 MB',
          updated: '2026-01-26',
        },
        {
          title: 'Audit Report Template',
          description: 'Standard template for compliance reporting',
          type: 'DOCX',
          size: '1.2 MB',
          updated: '2026-01-15',
        },
        {
          title: 'Security Whitepaper',
          description: 'Comprehensive security architecture and threat model',
          type: 'PDF',
          size: '9.4 MB',
          updated: '2026-01-10',
        },
      ],
    },
  ]

  const codeExamples = [
    {
      title: 'Define a Simple Rule',
      language: 'TypeScript',
      code: `const rule = {
  name: "Max Exposure Limit",
  type: "ASSET_EXPOSURE",
  threshold: {
    maxPercentage: 15,
    asset: "any"
  },
  severity: "HIGH",
  action: "ALERT"
};`,
    },
    {
      title: 'Create a Drawdown Protection Rule',
      language: 'TypeScript',
      code: `const drawdownRule = {
  name: "Portfolio Drawdown Protection",
  type: "DRAWDOWN_LIMIT",
  threshold: {
    maxDrawdownPercent: 20,
    timeWindow: "24h"
  },
  severity: "CRITICAL",
  action: "HALT_TRADING"
};`,
    },
  ]

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-slate-100">
            Technical Documentation
          </h2>
          <p className="text-lg text-slate-400">
            Comprehensive guides, specifications, and references for implementing AI agent governance
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <Book className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-slate-100">Guides</h3>
            <p className="text-sm text-slate-400">
              Step-by-step tutorials for common implementation scenarios
            </p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-slate-100">API Reference</h3>
            <p className="text-sm text-slate-400">
              Complete API documentation with code examples
            </p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold text-slate-100">CLI Tools</h3>
            <p className="text-sm text-slate-400">
              Command-line utilities for deployment and management
            </p>
          </div>
        </div>
      </section>

      {/* Document Library */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-slate-100">Document Library</h2>
        <div className="space-y-8">
          {documents.map((section) => (
            <div key={section.category}>
              <h3 className="mb-4 text-lg font-semibold text-slate-200">
                {section.category}
              </h3>
              <div className="space-y-3">
                {section.items.map((doc) => (
                  <div
                    key={doc.title}
                    className="group flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 p-4 transition-all hover:border-slate-700 hover:bg-slate-800"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-800">
                        <FileText className="h-5 w-5 text-slate-400" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold text-slate-100">
                          {doc.title}
                        </h4>
                        <p className="mb-2 text-sm text-slate-400">
                          {doc.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>Updated {doc.updated}</span>
                        </div>
                      </div>
                    </div>
                    <button className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-100">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-slate-100">Code Examples</h2>
        <div className="space-y-6">
          {codeExamples.map((example) => (
            <div key={example.title} className="rounded-lg border border-slate-800 bg-slate-900">
              <div className="border-b border-slate-800 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-100">{example.title}</h3>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-400">
                    {example.language}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4">
                  <code className="text-sm text-slate-300">{example.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Steps */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-slate-100">Integration Steps</h2>
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: 'Install the SDK',
              description: 'Add Kuneo SDK to your project via npm or yarn',
              command: 'npm install @kuneo/agent-sdk',
            },
            {
              step: 2,
              title: 'Configure Your Agent',
              description: 'Define your agent's parameters and constraints',
              command: 'kuneo init --agent-type trading',
            },
            {
              step: 3,
              title: 'Define Rules',
              description: 'Create rule configurations for your use case',
              command: 'kuneo rules create --template asic-ers',
            },
            {
              step: 4,
              title: 'Deploy to TEE',
              description: 'Deploy your agent to a hardware-secured environment',
              command: 'kuneo deploy --env production',
            },
            {
              step: 5,
              title: 'Monitor & Audit',
              description: 'Access real-time monitoring and export audit logs',
              command: 'kuneo logs --export --format pdf',
            },
          ].map((step) => (
            <div
              key={step.step}
              className="flex gap-4 rounded-lg border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold text-slate-100">{step.title}</h3>
                <p className="mb-3 text-sm text-slate-400">{step.description}</p>
                <div className="rounded-lg bg-slate-950 p-3">
                  <code className="text-sm text-emerald-400">{step.command}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Resources */}
      <section>
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-100">
            Need Help?
          </h2>
          <p className="mb-6 text-slate-300">
            Our team is here to help you implement AI agent governance successfully
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors hover:bg-slate-700"
            >
              <Book className="h-5 w-5 text-blue-400" />
              <div>
                <div className="font-semibold text-slate-100">Knowledge Base</div>
                <div className="text-xs text-slate-400">Browse articles</div>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors hover:bg-slate-700"
            >
              <ExternalLink className="h-5 w-5 text-indigo-400" />
              <div>
                <div className="font-semibold text-slate-100">Community Forum</div>
                <div className="text-xs text-slate-400">Ask questions</div>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 p-4 transition-colors hover:bg-slate-700"
            >
              <Terminal className="h-5 w-5 text-emerald-400" />
              <div>
                <div className="font-semibold text-slate-100">Support Ticket</div>
                <div className="text-xs text-slate-400">Get direct help</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
