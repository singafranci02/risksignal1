import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Linkedin, Mail, ArrowUpRight, Phone, MapPin } from 'lucide-react'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Platform', href: '/' },
      { label: 'AI Governance', href: '/ai-governance' },
      { label: 'Insights', href: '/insights' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'How It Works', href: '/how-it-works' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press-kit' },
      { label: 'Contact', href: '/contact' },
      { label: 'Status', href: '/status' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security', href: '/security' },
      { label: 'Compliance', href: '/compliance' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
    resources: [
      { label: 'Documentation', href: '/ai-governance/documentation' },
      { label: 'Regulations', href: '/ai-governance/regulations' },
      { label: 'Rule Library', href: '/ai-governance/rules' },
      { label: 'Insights', href: '/insights' },
      { label: 'Help Center', href: '/help-center' },
    ],
  }

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100/80">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
              <p className="mt-2 text-gray-600">Get the latest updates on AI agent governance and compliance.</p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-500 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-blue-600 opacity-10 blur-md" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                  <Image
                    src="/logo.svg"
                    alt="Kuneo logo"
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-gray-900">
                  Kuneo
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  AI Agent Governance
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-600">
              The infrastructure layer for autonomous financial agents. Deploy AI with absolute certainty through verifiable execution and mathematical constraints.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-blue-600" />
                <a href="mailto:kuneo.tech@gmail.com" className="hover:text-blue-600 transition-colors">
                  kuneo.tech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+61 2 8000 0000</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Sydney, NSW, Australia</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:kuneo.tech@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
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
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-600 sm:flex-row">
          <div className="flex items-center gap-2">
            <span>&copy; {year} Kuneo, Inc.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="font-medium">System Status: Operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
