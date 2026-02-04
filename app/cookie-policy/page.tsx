export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Legal
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Cookie Policy</h1>
          <p className="mt-4 text-lg text-blue-100">
            We will publish the cookie policy once provided.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Cookie policy</h2>
          <p className="mt-3 text-sm text-gray-600">Effective date: 3 February 2026</p>

          <div className="mt-6 space-y-6 text-sm text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">What cookies are</h3>
              <p className="mt-2">
                Cookies are small files stored on your device to help websites function and
                improve performance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">How we use cookies</h3>
              <ul className="mt-2 space-y-2">
                <li>• Essential: authentication and session management</li>
                <li>• Functional: remember preferences and settings</li>
                <li>• Analytics: understand usage to improve product quality</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Managing preferences</h3>
              <p className="mt-2">
                You can control cookies through browser settings. Disabling essential cookies may
                impact platform functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
