import { useState } from "react";
import { faqs } from "../data/products";
import { Plus } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Faq() {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" ref={ref} className="bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="reveal">
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" /> FAQ
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
              Questions,
              <br />
              <em className="font-accent italic text-ink-mute">answered.</em>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-mute">
              Everything you need to know before going solar. Still curious? Our engineers are one call away.
            </p>
          </div>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f, i) => (
              <div key={f.q} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className={`font-display text-lg font-medium tracking-tight transition-colors sm:text-xl ${open === i ? "text-ink" : "text-ink/70"}`}>
                    {f.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      open === i ? "rotate-45 border-sun-deep bg-sun text-ink" : "border-ink/15 text-ink-mute"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className="max-w-2xl overflow-hidden text-[14.5px] leading-relaxed text-ink-mute">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
