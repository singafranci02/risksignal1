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
              OpenClaw + Helmet
            </div>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              How the RiskSignal Helmet Works with OpenClaw
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              SKILL.md + local risksignal.py form a physical bottleneck: Telegram/WhatsApp → OpenClaw → skill → script → Solana.
              The LLM never builds the tx or sees your keys.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
              <span className="rounded-full border border-white/20 px-3 py-1">SKILL.md override</span>
              <span className="rounded-full border border-white/20 px-3 py-1">risksignal.py air‑gap</span>
              <span className="rounded-full border border-white/20 px-3 py-1">RugCheck · Sybil · Jito</span>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Stack */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">The RiskSignal Helmet Stack</h2>
            <p className="mt-2 text-gray-600">
              Three pieces: SKILL.md routes trading; the LLM runs the script; the script holds keys and blocks or signs.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">1. SKILL.md Override</h3>
            <p className="mt-3 text-sm text-gray-600">
              In ~/.openclaw you add a skill (e.g. RiskSignal_Trade.md). YAML trigger on &quot;buy&quot;, &quot;snipe&quot;, &quot;swap&quot;.
              Instructions: pass Contract Address to local risksignal.py and wait for output.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">2. Air‑Gapped Intercept</h3>
            <p className="mt-3 text-sm text-gray-600">
              OpenClaw runs python3 risksignal.py &lt;contract&gt; &lt;amount&gt;. The LLM does not build the Solana tx.
              Script does ~400ms scan (Helius, RugCheck, Jito, Sybil, LP, mint).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">3. Circuit Breaker</h3>
            <p className="mt-3 text-sm text-gray-600">
              Only risksignal.py holds your keys. Scam → script prints FATAL ERROR and halts. Safe → script signs, submits, prints SUCCESS + signature. OpenClaw relays that text to you.
            </p>
          </div>
        </div>
      </section>

      {/* Live Telemetry Feed */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-gray-900">Example: OpenClaw ↔ risksignal.py</h3>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Stream active
            </span>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
              <span>User (Telegram): Snipe 0.5 SOL of 7zDA...BAGS</span>
              <span className="font-semibold text-blue-600">Intent</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
              <span>OpenClaw: python3 risksignal.py 7zDA...BAGS 0.5</span>
              <span className="font-semibold text-amber-600">Invoke</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
              <span>Script: 🔴 FATAL ERROR: Sybil Cabal Detected. Trade aborted.</span>
              <span className="font-semibold text-red-600">BLOCKED</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
              <span>OpenClaw → User: RiskSignal blocked this trade. Token is a honeypot controlled by a Sybil cabal.</span>
              <span className="font-semibold text-emerald-600">Relay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sequence Diagram */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Sequence Diagram</h3>
          <div className="mt-4 grid gap-3 text-sm text-gray-700 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">You (Telegram/WhatsApp)</div>
            <div className="flex items-center justify-center text-gray-400">→</div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">OpenClaw (Gateway/LLM)</div>
            <div className="flex items-center justify-center text-gray-400">→</div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">RiskSignal skill → risksignal.py</div>
            <div className="flex items-center justify-center text-gray-400">→</div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">Solana (only if script signs)</div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Intent is parsed by OpenClaw; execution and keys live in risksignal.py. Script output is relayed back to you.
          </p>
        </div>
      </section>

      {/* Evidence & Proofs */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Evidence for Audits</h3>
          <p className="mt-3 text-sm text-gray-600">
            Audit = script output (block or success + reason) + signed tx. C2PA‑signed proofs available for ASIC and EU AI Act reviews.
          </p>
        </div>
      </section>

      {/* User Journey */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Deployment Journey</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-gray-600">
            <li>Add the RiskSignal skill (e.g. RiskSignal_Trade.md) to ~/.openclaw.</li>
            <li>Configure risksignal.py and wallet—keys only in the script.</li>
            <li>Define heuristics in the script (RugCheck, Sybil, Jito, LP, mint).</li>
            <li>Use OpenClaw via Telegram/WhatsApp; Helmet blocks or allows and relays the result back.</li>
          </ol>
        </div>
      </section>
    </div>
  )
}

