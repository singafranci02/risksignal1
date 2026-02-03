export default function StatusPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            System Status
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Platform Status</h1>
          <p className="mt-4 text-lg text-blue-100">
            Live operational status for Kuneo governance services.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <h2 className="text-2xl font-bold text-gray-900">All systems operational</h2>
          </div>
          <p className="mt-3 text-gray-600">
            Live uptime status across governance, audit, and reporting services.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { name: 'Policy Enforcement API', status: 'Operational' },
              { name: 'Audit Trail Storage', status: 'Operational' },
              { name: 'Compliance Reporting', status: 'Operational' },
              { name: 'Rules Engine', status: 'Operational' }
            ].map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm"
              >
                <span className="font-medium text-gray-900">{service.name}</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {service.status}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-500">
            For incident reports, email kuneo.tech@gmail.com.
          </p>
        </div>
      </section>
    </div>
  )
}
