const items = [
  "Solar Submersible Pumps",
  "Rooftop Power Plants",
  "All-in-One Street Lights",
  "EV Charging Stations",
  "Solar Mini Mast",
  "String Inverters",
  "Openwell Pumps",
  "Commercial Plants",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-sun py-4">
      <div className="flex w-max animate-marquee items-center gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.22em] text-ink">
            {item}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-ink/60">
              <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
