import Link from 'next/link'
import { Check, ArrowRight, Zap, Shield, Users, Building2, Sparkles } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      description: 'Perfect for individual developers and small portfolios',
      icon: Zap,
      features: [
        'Monitor up to 5 wallets',
        'Hourly balance checks',
        'Email alerts',
        'Basic policy engine',
        'Community support',
        '30-day data retention',
      ],
      cta: 'Start Free',
      href: '/profile',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'per month',
      description: 'For startups and DAOs with active treasuries',
      icon: Shield,
      features: [
        'Monitor up to 50 wallets',
        '5-minute check intervals',
        'Advanced policy rules',
        'Multi-channel alerts (Email, SMS, Slack)',
        'Priority support',
        '90-day data retention',
        'Custom alert thresholds',
        'API access',
      ],
      cta: 'Start Free Trial',
      href: '/profile',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      description: 'Custom solutions for institutions and high-volume operations',
      icon: Building2,
      features: [
        'Unlimited wallets',
        'Real-time monitoring (<1min)',
        'Dedicated Slack channel',
        'Custom integrations',
        'SLA guarantees',
        'Unlimited data retention',
        'Advanced analytics',
        'White-label options',
        'Dedicated account manager',
        'Custom rule engine',
      ],
      cta: 'Contact Sales',
      href: '#contact',
      popular: false,
    },
  ]

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any charges.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and can arrange wire transfers for Enterprise customers.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Professional plan includes a 14-day free trial. No credit card required. Starter plan is free forever.',
    },
    {
      question: 'What happens if I exceed my wallet limit?',
      answer: 'We will notify you when you are approaching your limit. You can upgrade your plan or remove wallets to stay within your tier.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Annual billing saves you 20% compared to monthly billing. Contact sales for custom Enterprise pricing.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee on all paid plans. If you are not satisfied, we will refund your payment in full.',
    },
  ]

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-zinc-400">14-day free trial on Professional plan</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Simple, Transparent Pricing
          </h1>
          
          <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-400">
            Start free and scale as you grow. No hidden fees, no surprises. 
            All plans include core monitoring features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border ${
                    plan.popular
                      ? 'border-white bg-zinc-900 shadow-2xl ring-2 ring-white'
                      : 'border-zinc-800 bg-zinc-900'
                  } p-8 transition-all hover:border-zinc-700`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1 text-xs font-semibold text-black">
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                    <Icon className="h-6 w-6 text-black" />
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mb-6 text-sm text-zinc-400">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period !== 'contact sales' && (
                        <span className="text-sm text-zinc-500">{plan.period}</span>
                      )}
                    </div>
                    {plan.period === 'contact sales' && (
                      <p className="mt-1 text-sm text-zinc-500">Custom pricing</p>
                    )}
                  </div>

                  <Link
                    href={plan.href}
                    className={`mb-8 flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                      plan.popular
                        ? 'bg-white text-black hover:scale-105 hover:shadow-xl'
                        : 'border border-zinc-800 bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-white" />
                        <span className="text-sm text-zinc-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Compare Plans</h2>
            <p className="text-lg text-zinc-400">
              Detailed feature breakdown across all tiers
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="pb-4 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="pb-4 text-center text-sm font-semibold text-white">Starter</th>
                  <th className="pb-4 text-center text-sm font-semibold text-white">Professional</th>
                  <th className="pb-4 text-center text-sm font-semibold text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr>
                  <td className="py-4 text-sm text-zinc-400">Monitored Wallets</td>
                  <td className="py-4 text-center text-sm text-white">5</td>
                  <td className="py-4 text-center text-sm text-white">50</td>
                  <td className="py-4 text-center text-sm text-white">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-zinc-400">Check Interval</td>
                  <td className="py-4 text-center text-sm text-white">Hourly</td>
                  <td className="py-4 text-center text-sm text-white">5 minutes</td>
                  <td className="py-4 text-center text-sm text-white">Real-time</td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-zinc-400">Email Alerts</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-zinc-400">SMS Alerts</td>
                  <td className="py-4 text-center text-zinc-600">—</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-zinc-400">Slack Integration</td>
                  <td className="py-4 text-center text-zinc-600">—</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-zinc-400">API Access</td>
                  <td className="py-4 text-center text-zinc-600">—</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-zinc-400">Data Retention</td>
                  <td className="py-4 text-center text-sm text-white">30 days</td>
                  <td className="py-4 text-center text-sm text-white">90 days</td>
                  <td className="py-4 text-center text-sm text-white">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-zinc-400">Support</td>
                  <td className="py-4 text-center text-sm text-white">Community</td>
                  <td className="py-4 text-center text-sm text-white">Priority</td>
                  <td className="py-4 text-center text-sm text-white">Dedicated</td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-zinc-400">SLA</td>
                  <td className="py-4 text-center text-zinc-600">—</td>
                  <td className="py-4 text-center text-zinc-600">—</td>
                  <td className="py-4 text-center"><Check className="mx-auto h-5 w-5 text-white" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-lg text-zinc-400">
              Everything you need to know about pricing and plans
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-zinc-800 pb-8 last:border-0">
                <h3 className="mb-3 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Still have questions?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
              Our team is here to help you find the right plan for your needs.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:scale-105 hover:shadow-xl"
              >
                Contact Sales
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-black px-8 py-4 text-base font-semibold text-white transition-colors hover:border-zinc-700 hover:bg-zinc-900"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
