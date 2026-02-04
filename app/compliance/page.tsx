export default function CompliancePage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Compliance
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Compliance Overview</h1>
          <p className="mt-4 text-lg text-blue-100">
            Provide the compliance statements you want to share publicly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Compliance alignment</h2>
          <p className="mt-3 text-gray-600">
            Kuneo provides governance tooling that helps institutions demonstrate alignment with
            leading AI and financial regulations.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'ASIC RG 265',
                detail: 'Algorithmic trading governance, monitoring, and audit trails.'
              },
              {
                title: 'EU AI Act',
                detail: 'High-risk AI transparency, traceability, and oversight.'
              },
              {
                title: 'SEC / FINRA',
                detail: 'Supervision, record retention, and market integrity controls.'
              },
              {
                title: 'Data Privacy',
                detail: 'Alignment with Australian Privacy Principles and GDPR expectations.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Compliance requirements vary by jurisdiction. Kuneo provides governance tooling and
            audit outputs but does not provide legal advice.
          </p>
        </div>
      </section>
    </div>
  )
}
