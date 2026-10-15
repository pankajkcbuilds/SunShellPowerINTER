export type Category = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  items: string[];
};

export const categories: Category[] = [
  {
    id: "pump",
    index: "01",
    title: "Solar Pumping System",
    tagline: "Water, powered by the sun",
    description:
      "Submersible, surface and openwell solar pumps that run entirely on sunlight — easy to install, effortless to maintain, and kind to the planet.",
    image: "/images/cat-pump.jpg",
    items: ["Solar Submersible Pump", "Surface Solar Pump", "Openwell Solar Pump", "Customized Solutions"],
  },
  {
    id: "rooftop",
    index: "02",
    title: "Solar Rooftop System",
    tagline: "Your roof, your power plant",
    description:
      "High-quality rooftop plants for homes, commercial and industrial rooftops — engineered to last 20–25 years while slashing electricity bills.",
    image: "/images/cat-rooftop.jpg",
    items: ["Rooftop for Homes", "Commercial Power Plant", "Industrial Power Plant"],
  },
  {
    id: "street",
    index: "03",
    title: "Solar Street Light",
    tagline: "Off-grid light, every night",
    description:
      "Grid-independent street lights that maximize energy usage and minimize loss — with MPPT charge controllers and multi-day backup.",
    image: "/images/cat-street.jpg",
    items: ["All-in-One Street Light", "Two-in-One Street Light", "Solar Mini Mast"],
  },
  {
    id: "other",
    index: "04",
    title: "Other Products",
    tagline: "Beyond panels",
    description:
      "Solar inverters and EV charging stations that complete your green energy ecosystem — built for commercial and public applications.",
    image: "/images/cat-ev.jpg",
    items: ["Solar Inverters", "EV Charging Stations", "Retail Products — Coming Soon"],
  },
];

export type Product = {
  name: string;
  desc: string;
  tag: string;
  group: "Street Lights" | "Solar Pumps" | "Inverters & EV";
  image?: string;
  specs: string[];
};

export const products: Product[] = [
  {
    name: "30W All-in-One Solar Street Light",
    desc: "5-year warranty, 1-day backup, MPPT charge controller & more.",
    tag: "Best Seller",
    group: "Street Lights",
    image: "/images/prod-streetlight.jpg",
    specs: ["5 Yr Warranty", "MPPT", "1-Day Backup"],
  },
  {
    name: "12W All-in-One Solar Street Light",
    desc: "5-year warranty, 3-day backup, MPPT charge controller & more.",
    tag: "3-Day Backup",
    group: "Street Lights",
    image: "/images/prod-streetlight.jpg",
    specs: ["5 Yr Warranty", "MPPT", "3-Day Backup"],
  },
  {
    name: "20W All-in-One Solar Street Light",
    desc: "5-year warranty, 2-day backup, MPPT charge controller & more.",
    tag: "New",
    group: "Street Lights",
    image: "/images/prod-streetlight.jpg",
    specs: ["5 Yr Warranty", "MPPT", "2-Day Backup"],
  },
  {
    name: "12W Two-in-One Solar Street Light",
    desc: "5-year warranty, 3-day backup, MPPT charge controller & more.",
    tag: "3-Day Backup",
    group: "Street Lights",
    image: "/images/prod-streetlight.jpg",
    specs: ["5 Yr Warranty", "MPPT", "3-Day Backup"],
  },
  {
    name: "1HP AC Submersible Solar Pump",
    desc: "Cost-effective, suitable for 4.5\" bore, IP54 pump controller.",
    tag: "1 HP",
    group: "Solar Pumps",
    image: "/images/prod-pump.jpg",
    specs: ["IP54 Controller", "4.5\" Bore", "AC Motor"],
  },
  {
    name: "2HP AC Submersible Solar Pump",
    desc: "Cost-effective, suitable for 4.5\" bore, IP54 pump controller.",
    tag: "2 HP",
    group: "Solar Pumps",
    image: "/images/prod-pump.jpg",
    specs: ["IP54 Controller", "4.5\" Bore", "AC Motor"],
  },
  {
    name: "3HP AC Openwell Solar Pump",
    desc: "Water-filled AC solar motor, CED coated, IP54 pump controller.",
    tag: "3 HP",
    group: "Solar Pumps",
    image: "/images/prod-pump.jpg",
    specs: ["CED Coated", "IP54 Controller", "Water-Filled Motor"],
  },
  {
    name: "5HP AC Submersible Solar Pump",
    desc: "Cost-effective, suitable for 4.5\" bore, IP54 pump controller.",
    tag: "5 HP",
    group: "Solar Pumps",
    image: "/images/prod-pump.jpg",
    specs: ["IP54 Controller", "4.5\" Bore", "AC Motor"],
  },
  {
    name: "FIMER FLEXA AC Station",
    desc: "The EV charging solution for commercial and public applications.",
    tag: "EV Charging",
    group: "Inverters & EV",
    image: "/images/prod-inverter.jpg",
    specs: ["Commercial", "Public Use", "AC Charging"],
  },
  {
    name: "PVS-100-TL String Inverter",
    desc: "Systems for both ground-mounted and large commercial applications.",
    tag: "100 kW",
    group: "Inverters & EV",
    image: "/images/prod-inverter.jpg",
    specs: ["Ground Mount", "Commercial", "High Yield"],
  },
];

export const usps = [
  {
    title: "Go green, save the planet",
    desc: "Every product runs on renewable energy — helping you build a sustainable environment with zero compromise on performance.",
  },
  {
    title: "Affordable products",
    desc: "Top-quality solar products for every purpose, priced so the switch to solar pays for itself.",
  },
  {
    title: "Reduce your carbon footprint",
    desc: "Green energy shrinks your carbon footprint and gives the Earth time to heal — one rooftop, one pump, one street at a time.",
  },
  {
    title: "100% customer satisfaction",
    desc: "Our products are reliable, and so are we — from first consultation to remote monitoring after installation.",
  },
];

export const faqs = [
  {
    q: "How much can I save with a solar rooftop system?",
    a: "Most homes cut their electricity bills by 70–90%. Our high-quality panels last 20–25 years, so the system typically pays for itself within 3–5 years and then generates essentially free power.",
  },
  {
    q: "Do solar pumps work without grid electricity?",
    a: "Yes. Our submersible, surface and openwell pumps run entirely on sunlight. They're easy to install, need minimal maintenance, and are ideal for farms and remote locations.",
  },
  {
    q: "What warranty do your products carry?",
    a: "Our all-in-one and two-in-one solar street lights come with a 5-year warranty, and our pumps ship with IP54-rated controllers. Rooftop panels are built to perform for 20–25 years.",
  },
  {
    q: "Do you handle installation and after-sales service?",
    a: "Absolutely. From energy audit and consultation to installation, remote monitoring and maintenance — our expert engineers stay with you through the entire lifecycle.",
  },
];
