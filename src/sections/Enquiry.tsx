import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { ArrowRight, CheckCircle2, Phone, Mail, MessageCircle } from "lucide-react";

const interests = ["Solar Pump", "Rooftop System", "Street Light", "Inverter / EV", "Other"];

export default function Enquiry() {
  const ref = useReveal<HTMLElement>();
  const [interest, setInterest] = useState("Solar Pump");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3.5 text-[14px] text-cream placeholder:text-cream/35 outline-none transition-colors focus:border-sun";

  return (
    <section id="enquiry" ref={ref} className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-sun/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left copy */}
          <div>
            <p className="reveal mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-sun">
              <span className="h-px w-10 bg-sun" /> Get in Touch
            </p>
            <h2 className="reveal font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl" style={{ transitionDelay: "80ms" }}>
              Let's build your
              <br />
              <em className="font-accent italic text-sun">solar story.</em>
            </h2>
            <p className="reveal mt-6 max-w-md text-[15px] leading-relaxed text-cream/60" style={{ transitionDelay: "160ms" }}>
              Fill out the form and our team will get back to you shortly — with a free consultation,
              site assessment and a quote tailored to your needs.
            </p>
            <div className="reveal mt-10 space-y-4" style={{ transitionDelay: "240ms" }}>
              <a href="tel:+917605007177" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-sun transition-colors group-hover:bg-sun group-hover:text-ink">
                  <Phone size={17} />
                </span>
                <span className="text-[15px] font-medium">+91 76050 07177</span>
              </a>
              <a href="mailto:info@sunshellpower.com" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-sun transition-colors group-hover:bg-sun group-hover:text-ink">
                  <Mail size={17} />
                </span>
                <span className="text-[15px] font-medium">info@sunshellpower.com</span>
              </a>
              <a href="https://wa.me/917605007177" target="_blank" rel="noreferrer" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-sun transition-colors group-hover:bg-sun group-hover:text-ink">
                  <MessageCircle size={17} />
                </span>
                <span className="text-[15px] font-medium">WhatsApp us anytime</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal rounded-3xl border border-cream/10 bg-ink-soft p-7 sm:p-9" style={{ transitionDelay: "200ms" }}>
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sun text-ink">
                  <CheckCircle2 size={30} />
                </span>
                <h3 className="font-display text-3xl font-medium">Thank you, {form.name.split(" ")[0] || "friend"}!</h3>
                <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-cream/60">
                  Your enquiry has been received. Our solar experts will reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full border border-cream/20 px-6 py-3 text-[13px] font-semibold transition-colors hover:border-sun hover:text-sun"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <p className="mb-2 font-display text-2xl font-medium">Enquiry Form</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setInterest(i)}
                      className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-all ${
                        interest === i ? "bg-sun text-ink" : "border border-cream/15 text-cream/60 hover:border-cream/40"
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Name*" value={form.name} onChange={set("name")} className={inputCls} />
                  <input required type="email" placeholder="Email*" value={form.email} onChange={set("email")} className={inputCls} />
                  <input required type="tel" placeholder="Phone*" value={form.phone} onChange={set("phone")} className={inputCls} />
                  <input required placeholder="City*" value={form.city} onChange={set("city")} className={inputCls} />
                </div>
                <textarea
                  required
                  placeholder={`Tell us about your ${interest.toLowerCase()} requirement*`}
                  value={form.message}
                  onChange={set("message")}
                  rows={4}
                  className={`${inputCls} resize-none`}
                />
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-sun py-4 text-[14px] font-semibold text-ink transition-transform hover:scale-[1.02]"
                >
                  Submit Enquiry
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-[12px] text-cream/40">We respond within 24 hours on business days.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
