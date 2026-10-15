import { Sun, Leaf, BadgeCheck, IndianRupee } from "lucide-react";
import { usps } from "../data/products";
import { useReveal } from "../hooks/useReveal";
import { useCountUp } from "../hooks/useCountUp";

const icons = [Leaf, IndianRupee, Sun, BadgeCheck];

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCountUp(target);
  return (
    <div>
      <p className="font-display text-5xl font-medium text-sun sm:text-6xl">
        <span ref={ref}>{value.toLocaleString("en-IN")}</span>
        <span className="font-accent italic">{suffix}</span>
      </p>
      <p className="mt-2 text-[13px] uppercase tracking-[0.18em] text-cream/50">{label}</p>
    </div>
  );
}

export default function Usp() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      {/* Sun glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-sun/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-16 max-w-2xl">
          <p className="reveal mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-sun">
            <span className="h-px w-10 bg-sun" /> USP of SunShell
          </p>
          <h2 className="reveal font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl" style={{ transitionDelay: "100ms" }}>
            Affordable green energy —
            <br />
            <em className="font-accent italic text-cream/60">anywhere, everywhere.</em>
          </h2>
        </div>

        {/* Stats */}
        <div className="reveal mb-20 grid grid-cols-2 gap-10 border-y border-cream/10 py-12 sm:grid-cols-4" style={{ transitionDelay: "150ms" }}>
          <Stat target={25} suffix=" yrs" label="Panel lifespan" />
          <Stat target={90} suffix="%" label="Max bill savings" />
          <Stat target={5} suffix=" yrs" label="Street light warranty" />
          <Stat target={100} suffix="%" label="Customer satisfaction" />
        </div>

        {/* USP grid */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u, i) => {
            const Icon = icons[i];
            return (
              <div
                key={u.title}
                className="reveal group bg-ink p-8 transition-colors duration-500 hover:bg-ink-soft"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-sun/30 text-sun transition-all duration-500 group-hover:bg-sun group-hover:text-ink">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="mb-3 font-display text-xl font-medium tracking-tight">{u.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-cream/55">{u.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
