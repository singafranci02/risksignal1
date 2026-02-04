export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Contact
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Talk with Kuneo</h1>
          <p className="mt-4 text-lg text-blue-100">
            Share your use case, compliance needs, or partnership inquiry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Email our team</h2>
            <p className="mt-3 text-gray-600">
              For product inquiries, compliance reviews, and partnership requests, reach us at:
            </p>
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              kuneo.tech@gmail.com
            </div>
            <p className="mt-4 text-sm text-gray-600">
              We respond within 1–2 business days.
            </p>
            <a
              href="mailto:kuneo.tech@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Email Kuneo
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Sydney HQ</h3>
            <p className="mt-3 text-sm text-gray-600">
              Kuneo operates from Sydney, NSW with a distributed engineering team.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div>
                <span className="font-semibold text-gray-900">Location:</span> Sydney, NSW, Australia
              </div>
              <div>
                <span className="font-semibold text-gray-900">Timezone:</span> AEDT / AEST
              </div>
              <div>
                <span className="font-semibold text-gray-900">Availability:</span> Mon–Fri, 9:00–18:00
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 text-xs text-gray-600">
              For compliance documentation or procurement requests, include your institution name,
              jurisdiction, and timeline.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
