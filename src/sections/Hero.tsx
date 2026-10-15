import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Solar3DScene from "./Solar3DScene";

const slides = [
  {
    image: "/images/hero1.jpg",
    kicker: "Solar Products",
    title: ["Energy is future.", "Make it", "bright."],
    accentWord: "bright.",
    desc: "A complete range of solar pumps, rooftop plants, street lights and EV infrastructure — a solution for your every need.",
    cta: "Explore Products",
  },
  {
    image: "/images/hero2.jpg",
    kicker: "Rooftop Systems",
    title: ["Your roof is a", "power", "plant."],
    accentWord: "power",
    desc: "Premium panels engineered to last 20–25 years — cutting bills by up to 90% for homes, businesses and industry.",
    cta: "Rooftop Solutions",
  },
  {
    image: "/images/hero3.jpg",
    kicker: "Street Lighting",
    title: ["Light that never", "asks the", "grid."],
    accentWord: "grid.",
    desc: "All-in-one solar street lights with MPPT controllers, 5-year warranty and multi-day backup — anywhere, everywhere.",
    cta: "Street Lights",
  },
];

const DURATION = 5000;
const heroVideo = "/videos/sunshell-hero.mp4";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const paused = useRef(false);

  const go = useCallback((i: number) => {
    setIdx((i + slides.length) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    let raf: number;
    let last = performance.now();
    const tick = (now: number) => {
      if (!paused.current) {
        setProgress((p) => {
          const np = p + (now - last) / DURATION;
          if (np >= 1) {
            setIdx((i) => (i + 1) % slides.length);
            return 0;
          }
          return np;
        });
      }
      last = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const s = slides[idx];

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={heroVideo}
          poster={slides[0].image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/78 via-ink/28 to-ink/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,217,57,0.20),transparent_34%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-48">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
          <div key={idx} className="max-w-3xl">
            <p className="mb-5 flex animate-fade-up items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-sun [animation-delay:100ms]">
              <span className="h-px w-10 bg-sun" /> {s.kicker}
            </p>
            <h1 className="font-display text-[13vw] font-medium leading-[1.02] tracking-tight text-cream sm:text-7xl lg:text-[86px]">
              <span className="block animate-fade-up [animation-delay:200ms]">{s.title[0]}</span>
              <span className="block animate-fade-up [animation-delay:320ms]">
                {s.title[1]}{" "}
                <em className="font-accent font-normal italic text-sun">{s.accentWord}</em>
              </span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-[15.5px] leading-relaxed text-cream/75 [animation-delay:450ms]">
              {s.desc}
            </p>
            <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:580ms]">
              <a
                href="#categories"
                className="group flex items-center gap-2.5 rounded-full bg-sun px-7 py-3.5 text-[14px] font-semibold text-ink shadow-[0_18px_50px_rgba(255,217,57,0.22)] transition-transform hover:scale-[1.04]"
              >
                {s.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#calculator"
                className="flex items-center gap-2.5 rounded-full border border-cream/30 bg-cream/5 px-7 py-3.5 text-[14px] font-semibold text-cream backdrop-blur-sm transition-colors hover:border-sun hover:text-sun"
              >
                Estimate My Savings
              </a>
            </div>
          </div>

          <div className="hidden animate-fade-up lg:block [animation-delay:420ms]">
            <Solar3DScene />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-16 flex items-center gap-6">
          <div className="flex gap-2">
            <button
              onClick={() => go(idx - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-sun hover:text-sun"
              aria-label="Previous slide"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => go(idx + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-sun hover:text-sun"
              aria-label="Next slide"
            >
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="flex flex-1 items-center gap-3 sm:max-w-xs">
            {slides.map((sl, i) => (
              <button
                key={sl.kicker}
                onClick={() => go(i)}
                className="group relative h-6 flex-1"
                aria-label={`Go to ${sl.kicker}`}
              >
                <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-cream/20" />
                {i === idx && (
                  <span
                    className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-sun"
                    style={{ width: `${progress * 100}%` }}
                  />
                )}
                {i < idx && (
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-sun/60" />
                )}
              </button>
            ))}
          </div>
          <p className="hidden font-display text-sm text-cream/50 sm:block">
            {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
