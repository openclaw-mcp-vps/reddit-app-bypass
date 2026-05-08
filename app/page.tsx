export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <div className="inline-block bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Reddit Without the Noise
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Browse Reddit on Mobile —{" "}
          <span className="text-[#58a6ff]">No App Prompts. Ever.</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 leading-relaxed">
          Get a personal clean-reddit subdomain that strips all app download banners and redirects.
          Bookmark it. Use it forever.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Get Clean Reddit — $3/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant setup.</p>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { step: "1", label: "Subscribe", desc: "Pay $3/mo via secure checkout" },
            { step: "2", label: "Get Your URL", desc: "Receive your personal clean-reddit subdomain" },
            { step: "3", label: "Browse Free", desc: "No more app prompts, ever" }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] text-2xl font-bold mb-1">{item.step}</div>
              <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
              <div className="text-[#8b949e] text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Simple Pricing</div>
          <div className="text-5xl font-bold text-white mb-1">$3</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto">
            {[
              "Personal clean-reddit subdomain",
              "Zero app download prompts",
              "Works on all mobile browsers",
              "Instant activation",
              "Cancel anytime"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="inline-block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Start Clean Browsing
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-bold text-white mb-6 text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it work?",
              a: "We proxy Reddit's mobile pages server-side, stripping all app-download banners and redirect scripts before delivering clean HTML to your browser."
            },
            {
              q: "Will it work on my phone?",
              a: "Yes. It works in any mobile browser — Safari, Chrome, Firefox — on iOS and Android."
            },
            {
              q: "Can I cancel anytime?",
              a: "Absolutely. Cancel with one click from your billing portal. No questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-16">
        &copy; {new Date().getFullYear()} Clean Reddit. Not affiliated with Reddit Inc.
      </footer>
    </main>
  );
}
