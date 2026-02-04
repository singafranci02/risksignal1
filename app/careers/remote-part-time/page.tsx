import Link from 'next/link'

export default function RemotePartTimeApplicationPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Remote Part-Time Application
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Software Engineer (Remote, Part-Time)
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            We are building high-trust governance infrastructure for autonomous finance. This
            role is focused on core platform execution, auditability, and compliance tooling.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">How to apply</h2>
          <p className="mt-3 text-gray-600">
            We keep the process light. Please share:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>• A short note about your experience building production systems</li>
            <li>• Links to work you are proud of (GitHub, portfolio, case studies)</li>
            <li>• Your availability for part-time collaboration</li>
          </ul>
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
            Application intake details are intentionally brief. Share the essentials and we will
            respond with next steps.
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Contact us to apply
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700"
            >
              Back to careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
