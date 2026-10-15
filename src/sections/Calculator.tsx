import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { ArrowRight, Zap } from "lucide-react";

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export default function Calculator() {
  const ref = useReveal<HTMLElement>();
  const [bill, setBill] = useState(3000);
  const [usage, setUsage] = useState<"home" | "commercial">("home");

  const tariff = usage === "home" ? 7 : 9; // ₹/kWh assumption
  const monthlyUnits = bill / tariff;
  const systemKw = Math.max(1, Math.ceil(monthlyUnits / 120));
  const solarFraction = usage === "home" ? 0.85 : 0.8;
  const monthlySaving = bill * solarFraction;
  const yearlySaving = monthlySaving * 12;
  const co2 = (monthlyUnits * solarFraction * 12 * 0.82) / 1000; // tonnes CO2/yr
  const cost = systemKw * (usage === "home" ? 55000 : 48000);
  const payback = cost / yearlySaving;

  return (
    <section id="calculator" ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="reveal mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" /> Savings Calculator
            </p>
            <h2 className="reveal font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl" style={{ transitionDelay: "80ms" }}>
              See what the sun
              <br />
              <em className="font-accent italic text-ink-mute">could save you.</em>
            </h2>
            <p className="reveal mt-5 max-w-md text-[15px] leading-relaxed text-ink-mute" style={{ transitionDelay: "160ms" }}>
              Move the slider to your average monthly electricity bill and get an instant estimate of your
              savings, system size and payback period.
            </p>

            <div className="reveal mt-10" style={{ transitionDelay: "240ms" }}>
              <div className="mb-4 flex gap-2">
                {(["home", "commercial"] as const).map((u) => (
                  <button
                    key={u}
                    onClick={() => setUsage(u)}
                    className={`rounded-full px-5 py-2.5 text-[13px] font-semibold capitalize transition-all ${
                      usage === u ? "bg-ink text-cream" : "border border-ink/15 text-ink-mute hover:border-ink/40"
                    }`}
                  >
                    {u === "home" ? "Home" : "Commercial"}
                  </button>
                ))}
              </div>
              <div className="flex items-baseline justify-between">
                <label className="text-[13px] font-medium uppercase tracking-wider text-ink-mute">
                  Monthly electricity bill
                </label>
                <span className="font-display text-3xl font-semibold">{formatINR(bill)}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={usage === "home" ? 25000 : 200000}
                step={500}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="sun-range mt-4 w-full"
              />
              <div className="mt-1 flex justify-between text-[11px] text-ink-mute/60">
                <span>{formatINR(1000)}</span>
                <span>{formatINR(usage === "home" ? 25000 : 200000)}</span>
              </div>
            </div>
          </div>

          {/* Result card */}
          <div className="reveal relative overflow-hidden rounded-3xl bg-ink p-8 text-cream sm:p-10" style={{ transitionDelay: "200ms" }}>
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sun/20 blur-[80px]" />
            <div className="relative">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun text-ink">
                  <Zap size={18} />
                </span>
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-cream/70">Your estimate</p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                <div>
                  <p className="font-display text-4xl font-medium text-sun">{formatINR(yearlySaving)}</p>
                  <p className="mt-1.5 text-[12px] uppercase tracking-wider text-cream/50">Yearly savings</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-medium">{systemKw} kW</p>
                  <p className="mt-1.5 text-[12px] uppercase tracking-wider text-cream/50">Suggested system</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-medium">{payback.toFixed(1)} yrs</p>
                  <p className="mt-1.5 text-[12px] uppercase tracking-wider text-cream/50">Payback period</p>
                </div>
                <div>
                  <p className="font-display text-4xl font-medium">{co2.toFixed(1)} t</p>
                  <p className="mt-1.5 text-[12px] uppercase tracking-wider text-cream/50">CO₂ avoided / year</p>
                </div>
              </div>
              <div className="mt-9 border-t border-cream/10 pt-6">
                <p className="mb-5 text-[13px] leading-relaxed text-cream/60">
                  Indicative estimate only — actual figures depend on site conditions, tariff and subsidy eligibility.
                </p>
                <a
                  href="#enquiry"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-sun py-4 text-[14px] font-semibold text-ink transition-transform hover:scale-[1.02]"
                >
                  Get an exact quote
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
