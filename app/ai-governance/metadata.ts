import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agent Governance & Regulatory Framework | Kuneo',
  description: 'Deploy autonomous financial agents with absolute certainty. Kuneo provides the governance infrastructure, mathematical constraints, and immutable audit trails for institutional AI.',
  keywords: ['AI Governance', 'Autonomous Agents', 'Financial AI Regulation', 'AI Compliance', 'Digital Helmet', 'TEE Security', 'Immutable Audit Trails'],
  openGraph: {
    title: 'Kuneo | Institutional-Grade AI Agent Governance',
    description: 'Hardware-secured execution and verifiable compliance for autonomous agents.',
    url: 'https://risksignal1-orpin.vercel.app/ai-governance',
    siteName: 'Kuneo',
    images: [
      {
        url: '/og-governance.png',
        width: 1200,
        height: 630,
        alt: 'Kuneo AI Governance Platform Interface',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuneo AI Governance',
    description: 'Transforming experimental scripts into compliant financial vehicles.',
    images: ['/og-governance.png'],
  },
}
