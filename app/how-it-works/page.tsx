export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
              MT5 Bridge
            </div>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Zero‑Trust Execution Bridge
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              The institutional bridge for MetaTrader 5. Capture intent before execution, prove
              compliance at the silicon layer, and enforce deterministic kill‑switches in real time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
              <span className="rounded-full border border-white/20 px-3 py-1">Pre‑trade telemetry</span>
              <span className="rounded-full border border-white/20 px-3 py-1">TEE attestation</span>
              <span className="rounded-full border border-white/20 px-3 py-1">ASIC RG 265 ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Stack */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">The Kuneo Governance Stack</h2>
            <p className="mt-2 text-gray-600">
              The bridge is a compliance proxy for MT5, validating every Order_Send() before it hits the broker.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Pre‑Trade Risk Signal Interception</h3>
            <p className="mt-3 text-sm text-gray-600">
              Kuneo captures the Intent to Trade before execution, comparing pre‑trade vs post‑trade
              risk gaps in real time.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Digital Helmet (TEE)</h3>
            <p className="mt-3 text-sm text-gray-600">
              Bridge logic runs inside hardware‑attested enclaves so the kill‑switch cannot be disabled
              by a compromised server.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Deterministic Compliance Engine</h3>
            <p className="mt-3 text-sm text-gray-600">
              Validates every Order_Send() against ASIC RG 265 risk policies with immediate enforcement.
            </p>
          </div>
        </div>
      </section>

      {/* Live Telemetry Feed */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-900">Live Telemetry Feed</h3>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              PASS · Stream active
            </span>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
              <span>09:14:02 · Order Intent · EURUSD · BUY 0.8</span>
              <span className="font-semibold text-emerald-600">PASS</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
              <span>09:14:05 · Risk Collar · Max Drawdown 1.5%</span>
              <span className="font-semibold text-emerald-600">PASS</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
              <span>09:14:07 · Broker Dispatch · MT5 Server 12</span>
              <span className="font-semibold text-emerald-600">PASS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sequence Diagram */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Sequence Diagram</h3>
          <div className="mt-4 grid gap-3 text-sm text-gray-700 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">Trader/Agent</div>
            <div className="flex items-center justify-center text-gray-400">→</div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">Digital Helmet (TEE)</div>
            <div className="flex items-center justify-center text-gray-400">→</div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">Compliance Proxy</div>
            <div className="flex items-center justify-center text-gray-400">→</div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">MT5 Server</div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Trade intent is intercepted, validated, and hardware‑attested before execution.
          </p>
        </div>
      </section>

      {/* Evidence & Proofs */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Evidence for Audits</h3>
          <p className="mt-3 text-sm text-gray-600">
            The bridge generates C2PA‑signed audit proofs, providing immutable evidence for ASIC and EU AI Act reviews.
          </p>
        </div>
      </section>

      {/* User Journey */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Deployment Journey</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-gray-600">
            <li>Deploy the Digital Helmet inside your own TEE.</li>
            <li>Bind MT5 bridge credentials to hardware‑attested identity.</li>
            <li>Define risk policies and kill‑switch thresholds.</li>
            <li>Stream telemetry and enforce pre‑trade compliance in real time.</li>
          </ol>
        </div>
      </section>
    </div>
  )
}

