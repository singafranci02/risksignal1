import Link from 'next/link'
import { Shield, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Platform', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentation', href: '/how-it-works' },
      { label: 'API Reference', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
    resources: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Community', href: '#' },
    ],
  }

  return (
    <footer className="border-t border-zinc-800 bg-black">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-white opacity-20 blur-md" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <Shield className="h-6 w-6 text-black" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  RiskSignal
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Intelligence Platform
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
              Enterprise-grade blockchain risk monitoring with AI-powered anomaly detection. 
              Protect your assets with real-time intelligence.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@risksignal.io"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <span>&copy; {year} RiskSignal, Inc.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              System Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
