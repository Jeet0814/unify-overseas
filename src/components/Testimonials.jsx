import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Simran Kaur",
    country: "Canada",
    course: "Canada Study Permit (MSc Data Analytics)",
    rating: 5,
    quote:
      "My file had two previous refusals before I approached Unify Overseas. They restructured my SOP, prepared my financial profile thoroughly, and my Canada study visa got approved in just 22 days!",
  },
  {
    name: "Gurpreet & Harjit Singh",
    country: "Canada",
    course: "Canada Super Visa (Parents)",
    rating: 5,
    quote:
      "We applied for a Canada Super Visa to visit our son in Toronto. The team handled our medical insurance and invitation documents effortlessly. We received our 5-year multi-entry visa without hassle.",
  },
  {
    name: "Rajinder Sharma",
    country: "Australia",
    course: "Australia PR (Subclass 190)",
    rating: 5,
    quote:
      "The PR points assessment and skill assessment via ACS was crystal clear from day one. Got our Australia permanent residency invitation and grant right on the expected timeline!",
  },
  {
    name: "Vikas Dhillon",
    country: "United Kingdom",
    course: "UK Tourist & Holiday Visa",
    rating: 5,
    quote:
      "Planned a family holiday to London and Scotland. Unify Overseas created our day-wise itinerary, booked our VFS biometric slot, and our UK visitor visas arrived within 10 working days.",
  },
  {
    name: "Amanpreet Kaur",
    country: "IELTS Academic",
    course: "Overall Band 8.0 (L:8.5, R:8.5, W:7.5, S:7.5)",
    rating: 5,
    quote:
      "The daily 1-on-1 speaking interview sessions and writing task evaluations gave me enormous confidence. Scored an overall 8.0 band on my first attempt!",
  },
  {
    name: "Mohit Verma",
    country: "PTE Academic",
    course: "Score 78 / 90 (CLB 9)",
    rating: 5,
    quote:
      "Their computer lab with Pearson AI mock software and repeat-sentence predictions made the difference. Boosted my score from 58 to 78 in just 4 weeks of targeted training.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(next, 5200);
    return () => window.clearInterval(timer);
  }, [paused, next]);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="pt-14 pb-6 lg:pt-20 lg:pb-8">
      <div className="site-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[40px]">Students who are already there</h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mx-auto mt-10 max-w-3xl"
        >
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            className="card-soft relative flex min-h-80 flex-col justify-center overflow-hidden p-8 sm:p-12"
          >
            <Quote
              className="absolute -top-2 right-6 size-24 text-accent/12"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex gap-1" aria-label={`${active.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      aria-hidden="true"
                      className={cn(
                        "size-4",
                        s < active.rating ? "fill-accent text-accent" : "text-border",
                      )}
                    />
                  ))}
                </div>

                <p className="font-display mt-6 text-lg leading-relaxed font-medium sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </p>

                <footer className="mt-8 flex items-center gap-4">
                  <span
                    className="font-display grid size-12 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
                    aria-hidden="true"
                  >
                    {active.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span className="min-w-0">
                    <cite className="font-display block truncate text-base font-bold not-italic">
                      {active.name}
                    </cite>
                    <span className="block truncate text-sm text-muted-foreground">
                      {active.course} &middot; {active.country}
                    </span>
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="relative left-1/2 mt-8 flex w-[calc(100vw-8px)] max-w-md -translate-x-1/2 items-center justify-center gap-0 sm:gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-card transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>

            <div className="flex min-w-0 flex-1 items-center justify-between gap-0 sm:gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  aria-current={i === index}
                  className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-full transition-colors",
                    i === index ? "text-accent" : "text-border hover:text-muted-foreground",
                  )}
                >
                  <span className={cn("block h-2 rounded-full bg-current", i === index ? "w-7" : "w-2")} />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-card transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

