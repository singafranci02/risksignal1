export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Legal
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-lg text-blue-100">
            We will publish the approved terms once provided.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Copy needed</h2>
          <p className="mt-3 text-gray-600">
            Please share your finalized terms of service text, including usage guidelines and
            liability terms.
          </p>
        </div>
      </section>
    </div>
  )
}
