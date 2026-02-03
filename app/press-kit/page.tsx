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

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Content needed</h2>
          <p className="mt-3 text-gray-600">
            Provide the official press kit materials and we will publish them here.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-gray-700">
            <li>• Brand logo files (SVG, PNG)</li>
            <li>• Short company description (50–100 words)</li>
            <li>• Leadership bios and headshots</li>
            <li>• Product screenshots approved for media use</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
