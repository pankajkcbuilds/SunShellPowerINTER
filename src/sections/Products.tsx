import { useMemo, useRef, useState } from "react";
import { products } from "../data/products";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const groups = ["All", "Street Lights", "Solar Pumps", "Inverters & EV"] as const;

export default function Products() {
  const ref = useReveal<HTMLElement>();
  const [group, setGroup] = useState<(typeof groups)[number]>("All");
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scroll: 0, moved: false });

  const list = useMemo(
    () => (group === "All" ? products : products.filter((p) => p.group === group)),
    [group]
  );

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 20 : 340;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, scroll: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    el.scrollLeft = drag.current.scroll - dx;
  };
  const endDrag = () => (drag.current.down = false);

  return (
    <section id="products" ref={ref} className="overflow-hidden bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="reveal">
            <p className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" /> Featured Products
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Engineered for
              <br />
              <em className="font-accent italic text-ink-mute">Indian conditions.</em>
            </h2>
          </div>
          <div className="reveal flex gap-2" style={{ transitionDelay: "120ms" }}>
            <button
              onClick={() => scrollBy(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              aria-label="Scroll left"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
              aria-label="Scroll right"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="reveal mb-10 flex flex-wrap gap-2" style={{ transitionDelay: "180ms" }}>
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                group === g
                  ? "bg-ink text-cream"
                  : "border border-ink/15 text-ink-mute hover:border-ink/40 hover:text-ink"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Drag-enabled carousel with snap */}
      <div className="reveal" style={{ transitionDelay: "240ms" }}>
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 active:cursor-grabbing sm:px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]"
        >
          {list.map((p) => (
            <article
              key={p.name}
              data-card
              className="group w-[300px] shrink-0 snap-start select-none rounded-3xl border border-ink/10 bg-cream p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-ink/10 sm:w-[340px]"
            >
              <div className="relative mb-5 overflow-hidden rounded-2xl bg-[#F6F1E3]">
                <img
                  src={p.image}
                  alt={p.name}
                  draggable={false}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sun">
                  {p.tag}
                </span>
              </div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{p.group}</p>
              <h3 className="mb-2 font-display text-[21px] font-medium leading-snug tracking-tight">{p.name}</h3>
              <p className="mb-4 text-[13.5px] leading-relaxed text-ink-mute">{p.desc}</p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {p.specs.map((s) => (
                  <span key={s} className="rounded-md bg-cream-dark px-2.5 py-1 text-[11px] font-medium text-ink/70">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href="#enquiry"
                onClick={(e) => drag.current.moved && e.preventDefault()}
                className="flex items-center justify-between rounded-xl border border-ink/12 px-4 py-3 text-[13px] font-semibold transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-sun"
              >
                Enquire Now
                <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-2 px-5 text-center text-[12px] uppercase tracking-[0.25em] text-ink-mute/60 sm:text-left sm:px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]">
          Drag to explore
        </p>
      </div>
    </section>
  );
}
