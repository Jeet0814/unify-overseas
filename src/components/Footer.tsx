import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Logo } from "./Logo";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Visa Process", id: "process" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact Us", id: "contact" },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="surface-navy border-t-2 border-accent">
      <div className="site-container grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)_minmax(0,300px)] lg:items-start lg:py-20">
        <div className="lg:row-start-1 lg:col-start-1 lg:max-w-sm">
          <div className="flex items-center gap-3">
            <Logo size={48} />
            <span className="font-display text-lg font-bold text-primary-foreground">
              Unify Overseas
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
            An overseas education and visa consultancy based in Pehowa, guiding students through
            admissions, visas and life abroad with honest, practical advice.
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

        <div className="self-start overflow-hidden rounded-[16px] border border-accent/60 lg:row-start-1 lg:col-start-3">
          <iframe
            title="Unify Overseas office location at 105 Super Market, Pehowa, Haryana"
            src="https://www.google.com/maps?q=105%20Super%20Market%2C%20Pehowa%2C%20Haryana&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[200px] w-full border-0"
          />
        </div>

        <div className="space-y-10 lg:row-start-1 lg:col-start-2">
          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.16em] text-accent uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.16em] text-accent uppercase">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>105 Super Market, Pehowa, Haryana 136128</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>+91 98000 00000</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>hello@unifyoverseas.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <p className="site-container pt-6 pb-24 text-center text-xs text-primary-foreground/60 sm:pb-6">
          © 2026 Unify Overseas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
