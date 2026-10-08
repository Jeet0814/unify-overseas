import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube, GraduationCap, Award, Palmtree, Users2, BookOpen } from "lucide-react";

import { Logo } from "./Logo";

const visaLinks = [
  { label: "Study Visa (Canada, UK, USA)", id: "visas" },
  { label: "Tourist & Holiday Visa", id: "visas" },
  { label: "Visitor & Super Visa", id: "visas" },
  { label: "PR & Permanent Residency", id: "visas" },
  { label: "Visa Filing Process", id: "process" },
];

const coachingLinks = [
  { label: "IELTS Academic & General", id: "coaching" },
  { label: "PTE Academic & Core", id: "coaching" },
  { label: "Duolingo English Test (DET)", id: "coaching" },
  { label: "Spoken English & Fluency", id: "coaching" },
  { label: "Visa Interview Mock Drills", id: "coaching" },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="surface-navy border-t-2 border-accent">
      <div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:items-start lg:py-20">
        {/* Col 1: Brand */}
        <div className="lg:max-w-xs">
          <div className="flex items-center gap-3">
            <Logo size={46} />
            <div>
              <span className="font-display block text-lg font-bold text-primary-foreground leading-none">
                Unify Overseas
              </span>
              <span className="text-[0.65rem] tracking-[0.18em] text-accent uppercase">
                Immigration &amp; Coaching
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
            Premier immigration consultancy and language training hub based in Pehowa, guiding aspirants through study permits, tourist visas, PR pathways, and IELTS/PTE preparation with 100% transparency.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href="#"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-xl border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <s.icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2: Visa Services */}
        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.16em] text-accent uppercase">
            Visa Services
          </h3>
          <ul className="mt-5 space-y-2.5">
            {visaLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Language Coaching */}
        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.16em] text-accent uppercase">
            Language Coaching
          </h3>
          <ul className="mt-5 space-y-2.5">
            {coachingLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Location & Contact */}
        <div className="space-y-5">
          <h3 className="font-display text-sm font-bold tracking-[0.16em] text-accent uppercase">
            Get in Touch
          </h3>
          <div className="overflow-hidden rounded-2xl border border-accent/60 shadow-soft">
            <iframe
              title="Unify Overseas office location at 105 Super Market, Pehowa, Haryana"
              src="https://www.google.com/maps?q=105%20Super%20Market%2C%20Pehowa%2C%20Haryana&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[140px] w-full border-0"
            />
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm text-primary-foreground/70">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>105 Super Market, Pehowa, Haryana 136128</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>+91 98000 00000</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>hello@unifyoverseas.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 pb-24 sm:pb-6 text-xs text-primary-foreground/60">
          <p>© 2026 Unify Overseas. All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => scrollTo("home")} className="hover:text-accent transition-colors">Home</button>
            <button onClick={() => scrollTo("visas")} className="hover:text-accent transition-colors">Visas</button>
            <button onClick={() => scrollTo("coaching")} className="hover:text-accent transition-colors">IELTS/PTE</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-accent transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
