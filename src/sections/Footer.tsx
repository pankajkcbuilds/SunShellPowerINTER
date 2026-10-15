import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const quickLinks = ["Home", "About Us", "Projects", "Blog", "Services", "Case Studies", "Careers", "Contact Us"];
const services = ["Solar Consultant", "Energy Audit", "Energy Management", "Owner's Engineer", "Tech Subscription", "Bid Management"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Big wordmark */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-16">
          <p className="max-w-2xl text-[15px] leading-relaxed text-cream/55">
            SunShell Power is one of the upcoming leaders in the solar scene of India — providing supreme solar
            energy solutions for residential, corporate and commercial segments, with expert engineers and
            technologies like remote monitoring, at your most affordable.
          </p>
        </div>
        <p className="text-outline-cream select-none whitespace-nowrap text-center font-display text-[13.5vw] font-semibold leading-none tracking-tight">
          SunShell Power
        </p>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.25em] text-sun">Quick Links</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="group flex items-center text-[13.5px] text-cream/55 transition-colors hover:text-cream">
                    {l}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.25em] text-sun">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-[13.5px] text-cream/55 transition-colors hover:text-cream">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.25em] text-sun">Contact Us</p>
            <div className="space-y-4 text-[13.5px] leading-relaxed text-cream/55">
              <p className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sun" />
                DLF Galleria, Office No: 714, 7th Floor, Premises No 02-0124, Action Area 1B, Newtown, Kolkata, West Bengal 700156
              </p>
              <p className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sun" />
                Inhwa Business Centre, Irish Tech Park, Sohna Road, Gurgaon-122018
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
                <a href="tel:+917605007177" className="flex items-center gap-2.5 font-medium text-cream transition-colors hover:text-sun">
                  <Phone size={15} className="text-sun" /> +91 76050 07177
                </a>
                <a href="mailto:info@sunshellpower.com" className="flex items-center gap-2.5 font-medium text-cream transition-colors hover:text-sun">
                  <Mail size={15} className="text-sun" /> info@sunshellpower.com
                </a>
                <a href="https://wa.me/917605007177" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 font-medium text-cream transition-colors hover:text-sun">
                  <MessageCircle size={15} className="text-sun" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-[12px] text-cream/40 sm:flex-row">
          <p>© 2026 SunShell Technology Solutions Private Limited. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sun" />
            Energy is future, make it bright
          </p>
        </div>
      </div>
    </footer>
  );
}
