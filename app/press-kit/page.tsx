export default function PressKitPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-white">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Press Kit
          </div>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Kuneo Media Resources</h1>
          <p className="mt-4 text-lg text-blue-100">
            Share approved brand assets, leadership bios, and product descriptions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Company description</h2>
            <p className="mt-3 text-gray-600">
              Kuneo is the governance layer for autonomous financial agents. We secure AI execution
              inside hardware-enforced environments, validate policies in real time, and generate
              regulator-ready audit trails so institutions can deploy AI with confidence.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div>
                <span className="font-semibold text-gray-900">Founded:</span> 2024
              </div>
              <div>
                <span className="font-semibold text-gray-900">HQ:</span> Sydney, NSW, Australia
              </div>
              <div>
                <span className="font-semibold text-gray-900">Focus:</span> AI governance, compliance infrastructure, and auditability
              </div>
            <div>
              <span className="font-semibold text-gray-900">Media contact:</span> kuneo.tech@gmail.com
            </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">Brand assets</h3>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
              <img src="/images/logos/kuneo-cone.svg" alt="Kuneo cone logo" className="h-16 w-16" />
              <p className="mt-4 text-sm text-gray-600">
                Primary logo mark (SVG).
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="/images/logos/kuneo-cone.svg"
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700"
                >
                  Download SVG
                </a>
                <a
                  href="/logo.svg"
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700"
                >
                  Alternate Logo
                </a>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-600">
              Please do not modify the logo colors or proportions. Use the blue gradient version
              for digital media.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
