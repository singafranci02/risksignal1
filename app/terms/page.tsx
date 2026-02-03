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

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Terms of service</h2>
          <p className="mt-3 text-sm text-gray-600">Effective date: 3 February 2026</p>

          <div className="mt-6 space-y-6 text-sm text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Acceptance</h3>
              <p className="mt-2">
                By accessing Kuneo, you agree to these terms and any applicable policies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Use of service</h3>
              <ul className="mt-2 space-y-2">
                <li>• Use the platform only for lawful, authorized purposes</li>
                <li>• Maintain the confidentiality of access credentials</li>
                <li>• Do not attempt to bypass security or governance controls</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Customer responsibilities</h3>
              <p className="mt-2">
                You are responsible for the accuracy of data and configuration inputs, and for
                ensuring governance policies align with your regulatory obligations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Intellectual property</h3>
              <p className="mt-2">
                Kuneo retains all rights to the platform, software, and documentation. You retain
                ownership of your data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Disclaimers</h3>
              <p className="mt-2">
                Kuneo provides governance tooling but does not provide legal or financial advice.
                You remain responsible for compliance decisions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Limitation of liability</h3>
              <p className="mt-2">
                To the maximum extent permitted by law, Kuneo is not liable for indirect or
                consequential losses arising from platform use.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Governing law</h3>
              <p className="mt-2">
                These terms are governed by the laws of New South Wales, Australia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
