import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, Phone, Zap, Lightbulb, Droplets, Package } from "lucide-react";

const megaMenu = [
  {
    icon: Droplets,
    title: "Solar Pump",
    links: ["Solar Submersible Pump", "Surface Solar Pump", "Openwell Solar Pump", "Customized Solution"],
  },
  {
    icon: Lightbulb,
    title: "Solar Street Lights",
    links: ["All-in-One Street Light", "Two-in-One Street Light", "Solar Mini Mast"],
  },
  {
    icon: Zap,
    title: "Solar Power Plant",
    links: ["Power Plant for Home", "Commercial Power Plant", "Industrial Power Plant"],
  },
  {
    icon: Package,
    title: "Other Products",
    links: ["Solar Inverter", "EV Charging Stations"],
  },
];

const nav = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#products" },
  { label: "Solutions", href: "#categories" },
  { label: "Savings", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
];

const announcements = [
  "5-year warranty on all solar street lights",
  "Free energy audit for commercial rooftops",
  "Subsidies available under PM-KUSUM & rooftop schemes",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [annIdx, setAnnIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setAnnIdx((i) => (i + 1) % announcements.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-ink text-cream/90 text-[12.5px] tracking-wide">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
          <div className="relative h-5 flex-1 overflow-hidden sm:flex-none">
            {announcements.map((a, i) => (
              <p
                key={a}
                className={`absolute inset-0 flex items-center gap-2 transition-all duration-500 ${
                  i === annIdx ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sun" />
                {a}
              </p>
            ))}
          </div>
          <a href="tel:+917605007177" className="hidden items-center gap-2 hover:text-sun sm:flex">
            <Phone size={13} /> +91 76050 07177
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-500 ${
          scrolled ? "bg-cream/90 shadow-[0_1px_0_rgba(22,22,19,0.08)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <a href="#home" className="group flex items-baseline gap-1" onClick={() => setMobileOpen(false)}>
            <span className="font-display text-[26px] font-semibold leading-none tracking-tight">
              Sun<span className="text-gold transition-colors group-hover:text-sun-deep">Shell</span>
            </span>
            <span className={`text-[11px] font-medium uppercase tracking-[0.22em] ${scrolled ? "text-ink-mute" : "text-cream/80"}`}>
              Power
            </span>
          </a>

          {/* Desktop nav */}
          <nav className={`hidden items-center gap-7 text-[13.5px] font-medium lg:flex ${scrolled ? "text-ink" : "text-cream"}`}>
            {nav.slice(0, 2).map((n) => (
              <a key={n.label} href={n.href} className="opacity-80 transition-opacity hover:opacity-100">
                {n.label}
              </a>
            ))}

            {/* Mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button className="flex items-center gap-1 font-semibold text-sun-deep">
                Solar Products
                <ChevronDown size={14} className={`transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute left-1/2 top-full pt-5 transition-all duration-300 ${
                  menuOpen ? "visible -translate-x-1/2 translate-y-0 opacity-100" : "invisible -translate-x-1/2 translate-y-2 opacity-0"
                }`}
              >
                <div className="w-[720px] rounded-2xl border border-ink/10 bg-cream p-6 shadow-2xl shadow-ink/10">
                  <div className="grid grid-cols-4 gap-5">
                    {megaMenu.map((col) => (
                      <div key={col.title}>
                        <div className="mb-3 flex items-center gap-2 text-ink">
                          <col.icon size={16} className="text-gold" />
                          <p className="text-[13px] font-semibold">{col.title}</p>
                        </div>
                        <ul className="space-y-2">
                          {col.links.map((l) => (
                            <li key={l}>
                              <a
                                href="#products"
                                className="group/l flex items-center text-[12.5px] text-ink-mute transition-colors hover:text-ink"
                              >
                                {l}
                                <ArrowRight size={11} className="ml-1 -translate-x-1 opacity-0 transition-all group-hover/l:translate-x-0 group-hover/l:opacity-100" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between rounded-xl bg-sun px-5 py-3">
                    <p className="text-[13px] font-medium text-ink">Not sure what fits your need? Get a free consultation.</p>
                    <a href="#enquiry" className="flex items-center gap-1.5 text-[13px] font-semibold text-ink hover:gap-2.5 transition-all">
                      Talk to an expert <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {nav.slice(2).map((n) => (
              <a key={n.label} href={n.href} className="opacity-80 transition-opacity hover:opacity-100">{n.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#enquiry"
              className="group hidden items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-[13px] font-semibold text-ink transition-transform hover:scale-[1.03] sm:flex"
            >
              Get in Touch
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden ${scrolled ? "text-ink" : "text-cream"}`}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream transition-all duration-500 lg:hidden ${
          mobileOpen ? "max-h-[480px] border-b border-ink/10" : "max-h-0"
        }`}
      >
        <nav className="space-y-1 px-5 py-4 text-[15px] font-medium text-ink">
          {[...nav.slice(0, 2), { label: "Solar Products", href: "#products" }, ...nav.slice(2)].map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 hover:bg-cream-dark"
            >
              {n.label}
            </a>
          ))}
          <a href="#enquiry" onClick={() => setMobileOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-sun px-5 py-3 font-semibold">
            Get in Touch <ArrowRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
