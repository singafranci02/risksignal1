export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Legal
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-blue-100">
            We will publish the approved privacy policy once provided.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Privacy policy</h2>
          <p className="mt-3 text-sm text-gray-600">
            Effective date: 3 February 2026
          </p>

          <div className="mt-6 space-y-6 text-sm text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Overview</h3>
              <p className="mt-2">
                Kuneo respects your privacy and complies with the Australian Privacy Principles
                (APPs). This policy describes how we collect, use, and safeguard personal
                information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Information we collect</h3>
              <ul className="mt-2 space-y-2">
                <li>• Contact details such as name, email, and role</li>
                <li>• Account and authentication data</li>
                <li>• Usage and device data for product improvement</li>
                <li>• Compliance and audit metadata you provide</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">How we use information</h3>
              <ul className="mt-2 space-y-2">
                <li>• Provide and improve the governance platform</li>
                <li>• Maintain security, auditability, and compliance features</li>
                <li>• Communicate product updates and support responses</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sharing</h3>
              <p className="mt-2">
                We do not sell personal information. We only share data with trusted service
                providers that support platform delivery, subject to confidentiality and
                security obligations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Security & retention</h3>
              <p className="mt-2">
                We apply encryption in transit, access controls, and monitoring. Data is retained
                only as long as necessary for service delivery and regulatory requirements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Your rights</h3>
              <p className="mt-2">
                You may request access, correction, or deletion of your personal information by
                contacting us at kuneo.tech@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
