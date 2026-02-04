import Link from 'next/link'
import { Check, X, ArrowRight, Zap, Shield, Building2, Sparkles, HelpCircle } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      description: 'Perfect for developers and small projects',
      features: [
        { text: 'Up to 5 AI agents', included: true },
        { text: '10,000 rule evaluations/month', included: true },
        { text: 'Email alerts', included: true },
        { text: 'Basic audit logs (30 days)', included: true },
        { text: 'Community support', included: true },
        { text: 'SMS & Slack alerts', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'Priority support', included: false },
        { text: 'Custom SLA', included: false },
      ],
      cta: 'Get Started Free',
      ctaLink: '/profile',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'per month',
      description: 'For growing teams and production deployments',
      features: [
        { text: 'Up to 50 AI agents', included: true },
        { text: '1M rule evaluations/month', included: true },
        { text: 'Email, SMS & Slack alerts', included: true },
        { text: 'Advanced audit logs (1 year)', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Advanced analytics & dashboards', included: true },
        { text: 'Custom rule templates', included: true },
        { text: 'API access', included: true },
        { text: 'Custom SLA', included: false },
      ],
      cta: 'Start Free Trial',
      ctaLink: '/profile',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For institutions requiring maximum scale and support',
      features: [
        { text: 'Unlimited AI agents', included: true },
        { text: 'Unlimited rule evaluations', included: true },
        { text: 'All alert channels + custom integrations', included: true },
        { text: 'Unlimited audit log retention', included: true },
        { text: '24/7 dedicated support', included: true },
        { text: 'Custom deployment options', included: true },
        { text: 'White-label solution', included: true },
        { text: 'Custom SLA (99.99%+)', included: true },
        { text: 'Dedicated account manager', included: true },
      ],
      cta: 'Contact Sales',
      ctaLink: '#',
      popular: false,
    },
  ]

  const comparisonFeatures = [
    {
      category: 'Core Features',
      features: [
        { name: 'AI Agents', starter: '5', pro: '50', enterprise: 'Unlimited' },
        { name: 'Rule Evaluations/month', starter: '10K', pro: '1M', enterprise: 'Unlimited' },
        { name: 'Audit Log Retention', starter: '30 days', pro: '1 year', enterprise: 'Unlimited' },
        { name: 'API Access', starter: false, pro: true, enterprise: true },
      ],
    },
    {
      category: 'Alerts & Notifications',
      features: [
        { name: 'Email Alerts', starter: true, pro: true, enterprise: true },
        { name: 'SMS Alerts', starter: false, pro: true, enterprise: true },
        { name: 'Slack Integration', starter: false, pro: true, enterprise: true },
        { name: 'Custom Webhooks', starter: false, pro: true, enterprise: true },
      ],
    },
    {
      category: 'Support',
      features: [
        { name: 'Community Support', starter: true, pro: true, enterprise: true },
        { name: 'Priority Email Support', starter: false, pro: true, enterprise: true },
        { name: '24/7 Dedicated Support', starter: false, pro: false, enterprise: true },
        { name: 'Dedicated Account Manager', starter: false, pro: false, enterprise: true },
      ],
    },
  ]

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any charges.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and can arrange invoicing for Enterprise customers.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! The Starter plan is free forever. Professional and Enterprise plans include a 14-day free trial with no credit card required.',
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We will notify you when you approach your limits. You can upgrade at any time, or we will automatically throttle requests to stay within your plan.',
    },
    {
      question: 'Do you offer discounts for non-profits or educational institutions?',
      answer: 'Yes! We offer special pricing for qualified non-profits and educational institutions. Contact our sales team for details.',
    },
    {
      question: 'Can I get a refund?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you are not satisfied, contact us for a full refund.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="font-semibold text-white">
              14-day free trial • No credit card required
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100">
            Choose the plan that fits your needs. Scale as you grow. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border ${
                  plan.popular
                    ? 'border-blue-600 shadow-2xl shadow-blue-500/20 scale-105'
                    : 'border-gray-200 shadow-lg'
                } bg-white p-8 transition-all hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mb-4 text-gray-600">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                      ) : (
                        <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-300" />
                      )}
                      <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`group flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40'
                      : 'border-2 border-gray-200 bg-white text-gray-900 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Feature Comparison
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Compare plans side-by-side to find the perfect fit
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Professional
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <>
                      <tr key={category.category} className="border-b border-gray-200 bg-gray-50">
                        <td
                          colSpan={4}
                          className="px-6 py-3 text-sm font-semibold text-gray-900"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr
                          key={`${categoryIndex}-${featureIndex}`}
                          className="border-b border-gray-100"
                        >
                          <td className="px-6 py-4 text-sm text-gray-900">{feature.name}</td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.starter === 'boolean' ? (
                              feature.starter ? (
                                <Check className="mx-auto h-5 w-5 text-green-600" />
                              ) : (
                                <X className="mx-auto h-5 w-5 text-gray-300" />
                              )
                            ) : (
                              <span className="text-gray-900">{feature.starter}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.pro === 'boolean' ? (
                              feature.pro ? (
                                <Check className="mx-auto h-5 w-5 text-green-600" />
                              ) : (
                                <X className="mx-auto h-5 w-5 text-gray-300" />
                              )
                            ) : (
                              <span className="text-gray-900">{feature.pro}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.enterprise === 'boolean' ? (
                              feature.enterprise ? (
                                <Check className="mx-auto h-5 w-5 text-green-600" />
                              ) : (
                                <X className="mx-auto h-5 w-5 text-gray-300" />
                              )
                            ) : (
                              <span className="text-gray-900">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Have questions? We have answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
              >
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mb-10 text-lg text-blue-100">
            Join leading institutions deploying autonomous agents with absolute certainty
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/profile"
              className="group flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-900 shadow-2xl transition-all hover:scale-105 hover:shadow-blue-500/50"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#"
              className="group flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              <span>Contact Sales</span>
              <Building2 className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
