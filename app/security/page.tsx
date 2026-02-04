export default function SecurityPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Security
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Security Overview</h1>
          <p className="mt-4 text-lg text-blue-100">
            Share the approved security overview you want published.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Security practices</h2>
          <p className="mt-3 text-gray-600">
            Kuneo is built to meet the expectations of regulated financial institutions.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Encryption',
                detail: 'TLS in transit and encryption at rest for sensitive data.'
              },
              {
                title: 'Access controls',
                detail: 'Role-based access with least-privilege enforcement.'
              },
              {
                title: 'Monitoring',
                detail: 'Continuous logging, anomaly detection, and auditability.'
              },
              {
                title: 'Incident response',
                detail: 'Documented response procedures with rapid escalation.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600">
            For security questionnaires or coordinated disclosure, contact
            {' '}
            <a href="mailto:kuneo.tech@gmail.com" className="font-semibold text-blue-700">
              kuneo.tech@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
