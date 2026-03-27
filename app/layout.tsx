import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getkuneo.com'),
  title: 'Kuneo – RiskSignal Helmet for OpenClaw',
  description:
    'Air-gapped Solana trading guard for OpenClaw. SKILL.md + local risksignal.py—your wallet keys stay in the script, the LLM never touches them.',
  alternates: {
    canonical: './',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            {/* Global navigation */}
            <SiteHeader />
            <main className="flex-1 bg-[var(--content-bg)]/90 text-[var(--content-foreground)]">
              {children}
            </main>
            <SiteFooter />
          </div>
          <Analytics />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}

