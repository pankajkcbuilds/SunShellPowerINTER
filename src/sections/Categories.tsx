import { useEffect, useState } from "react";
import { categories } from "../data/products";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Categories() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);

  // auto-rotate the featured category on mobile-less view
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % categories.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="categories" ref={ref} className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div className="reveal">
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" /> Our Range
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Four families.
              <br />
              <em className="font-accent italic text-ink-mute">One sun.</em>
            </h2>
          </div>
          <p className="reveal max-w-sm text-[15px] leading-relaxed text-ink-mute" style={{ transitionDelay: "120ms" }}>
            Check out our wide range of solar products — trustworthy, affordable, and built to keep the
            environment clean.
          </p>
        </div>

        {/* Editorial split: image left, accordion list right */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Sticky image panel */}
          <div className="reveal relative hidden overflow-hidden rounded-3xl lg:block">
            {categories.map((c, i) => (
              <img
                key={c.id}
                src={c.image}
                alt={c.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                  i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="relative aspect-[4/3.4]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/80 to-transparent p-8">
              <div>
                <p className="font-accent text-lg italic text-sun">{categories[active].tagline}</p>
                <p className="font-display text-3xl font-medium text-cream">{categories[active].title}</p>
              </div>
              <span className="font-display text-5xl font-light text-cream/40">{categories[active].index}</span>
            </div>
          </div>

          {/* Category list */}
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {categories.map((c, i) => (
              <div
                key={c.id}
                className="reveal group cursor-pointer py-7 transition-colors sm:py-8"
                style={{ transitionDelay: `${i * 90}ms` }}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-5">
                    <span
                      className={`pt-1.5 font-display text-sm transition-colors ${
                        i === active ? "text-gold" : "text-ink-mute/50"
                      }`}
                    >
                      {c.index}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-[26px] font-medium tracking-tight transition-all sm:text-3xl ${
                          i === active ? "translate-x-1 text-ink" : "text-ink/70"
                        }`}
                      >
                        {c.title}
                      </h3>
                      {/* Mobile image */}
                      <div className="mt-4 overflow-hidden rounded-2xl lg:hidden">
                        <img src={c.image} alt={c.title} className="aspect-[16/10] w-full object-cover" loading="lazy" />
                      </div>
                      <div
                        className={`grid transition-all duration-500 ${
                          i === active ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-md text-[14.5px] leading-relaxed text-ink-mute">{c.description}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {c.items.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-ink/15 px-3.5 py-1.5 text-[12px] font-medium text-ink/80 transition-colors group-hover:border-gold/40"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      i === active
                        ? "rotate-0 border-sun-deep bg-sun text-ink"
                        : "-rotate-45 border-ink/15 text-ink-mute"
                    }`}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
