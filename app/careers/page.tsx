import Link from 'next/link'

export default function CareersPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Careers at Kuneo
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            We are hiring software engineers
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Help us build the governance layer for autonomous finance. We are looking for
            engineers who care about security, compliance, and infrastructure quality.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/careers/remote-part-time"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-lg"
            >
              Remote part-time application
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              Learn about Kuneo
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Role focus</h2>
            <p className="mt-3 text-gray-600">
              You will work on governance infrastructure, compliance reporting, and high-trust
              audit systems for AI agents.
            </p>
            <div className="mt-6 space-y-4 text-sm text-gray-700">
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900">What you will build</h3>
                <ul className="mt-3 space-y-2">
                  <li>Governance workflows and policy enforcement services</li>
                  <li>Regulatory reporting and export tooling</li>
                  <li>Secure data pipelines and audit trails</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900">What we value</h3>
                <ul className="mt-3 space-y-2">
                  <li>Experience shipping production systems</li>
                  <li>Strong TypeScript / full-stack fundamentals</li>
                  <li>Security-first engineering mindset</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Current opening</h3>
            <div className="mt-4 rounded-xl border border-blue-200 bg-white p-5">
              <p className="text-sm font-semibold text-blue-700">Software Engineer</p>
              <p className="mt-2 text-sm text-gray-600">
                Remote • Part-time • Building core governance infrastructure
              </p>
              <Link
                href="/careers/remote-part-time"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
              >
                Apply for this role
              </Link>
            </div>
            <p className="mt-5 text-xs text-gray-600">
              We keep the process lightweight. Share a short note about your experience and the
              impact you want to have.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
