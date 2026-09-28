import { motion } from "framer-motion";
import { Check, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const countries = [
  "UK",
  "Canada",
  "USA",
  "Australia",
  "Germany",
  "Ireland",
  "New Zealand",
  "Dubai/UAE",
  "Other",
];

const info = [
  {
    icon: MapPin,
    label: "Office Address",
    lines: ["105 Super Market, Pehowa", "Haryana 136128, India"],
  },
  { icon: Phone, label: "Phone", lines: ["+91 98000 00000"] },
  { icon: Mail, label: "Email", lines: ["hello@unifyoverseas.com"] },
  { icon: MessageCircle, label: "WhatsApp", lines: ["+91 98000 00000"] },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Sunday: By appointment"],
  },
];

function Field({
  id,
  label,
  type = "text",
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder=" "
        className="peer h-[52px] w-full rounded-xl border border-input bg-card px-4 pt-4 text-sm transition-all outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-3.5 left-4 text-sm text-muted-foreground transition-all peer-focus:top-1 peer-focus:text-[0.7rem] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[0.7rem]"
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-secondary/40 pt-3 pb-14 lg:pt-4 lg:pb-20">
      <div className="site-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Contact Us
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[40px]">Book your free consultation</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us where you want to study and we will call you back with a realistic plan.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal x={-24} y={0} className="h-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                window.setTimeout(() => setSent(false), 4000);
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="card-soft flex h-full flex-col gap-5 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full Name" />
                <Field id="email" label="Email Address" type="email" />
                <Field id="phone" label="Phone Number" type="tel" />
                <div className="relative">
                  <select
                    id="country"
                    name="country"
                    required
                    defaultValue=""
                    className="h-[52px] w-full appearance-none rounded-xl border border-input bg-card px-4 pt-4 text-sm transition-all outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                  >
                    <option value="" disabled>Select country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <label
                    htmlFor="country"
                    className="pointer-events-none absolute top-1 left-4 text-[0.7rem] text-muted-foreground"
                  >
                    Country of Interest
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder=" "
                  className="peer w-full resize-none rounded-xl border border-input bg-card px-4 pt-6 pb-3 text-sm transition-all outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                />
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute top-4 left-4 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-[0.7rem] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[0.7rem]"
                >
                  How can we help?
                </label>
              </div>

              <Button type="submit" variant="gold" size="lg" className="rounded-full sm:self-start">
                {sent ? (
                  <motion.span
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Check className="size-4" aria-hidden="true" />
                    Message Sent
                  </motion.span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    Send Message
                    <Send className="size-4" aria-hidden="true" />
                  </span>
                )}
              </Button>

              <p aria-live="polite" className="text-xs text-muted-foreground">
                {sent ? "Thanks! Our counsellor will reach out within one working day." : null}
              </p>
            </form>
          </Reveal>

          <div className="flex flex-col gap-4 lg:h-full">
            {info.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.07} x={24} y={0} className="lg:flex-1">
                <div className="card-soft flex h-full items-start gap-4 p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm font-bold">{item.label}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
