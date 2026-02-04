export default function HelpCenterPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Help Center
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Support & Resources</h1>
          <p className="mt-4 text-lg text-blue-100">
            Provide the help center content or link you want to publish.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">How can we help?</h2>
          <p className="mt-3 text-gray-600">
            Find quick answers or reach the team for compliance and governance support.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                question: 'How do I start a governance program?',
                answer: 'Create a policy baseline, connect your agents, and define guardrails.'
              },
              {
                question: 'Can I export audit logs?',
                answer: 'Yes. Reports are available in PDF and JSON/API formats.'
              },
              {
                question: 'Which regulations are supported?',
                answer: 'ASIC RG 265, EU AI Act, SEC/FINRA, and more regional frameworks.'
              },
              {
                question: 'Do you provide compliance advice?',
                answer: 'We provide tooling and evidence. Legal interpretations remain with you.'
              }
            ].map((item) => (
              <div key={item.question} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
            Need help? Email kuneo.tech@gmail.com and we will respond within 1–2 business days.
          </div>
        </div>
      </section>
    </div>
  )
}
