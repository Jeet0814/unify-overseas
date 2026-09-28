import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Simran Kaur",
    country: "Canada",
    course: "MSc Data Analytics",
    rating: 5,
    quote:
      "My file had two rejections before I walked into Unify Overseas. They rebuilt it from scratch, prepped me for the interview and my Canada study permit came through in three weeks.",
  },
  {
    name: "Rohit Sharma",
    country: "Australia",
    course: "MBA, Melbourne",
    rating: 5,
    quote:
      "They never pushed me towards a college that paid them more. The shortlist was honest, the fee breakdown was clear, and I got a partial scholarship I did not know existed.",
  },
  {
    name: "Aman Preet",
    country: "United Kingdom",
    course: "MSc Cyber Security",
    rating: 5,
    quote:
      "From SOP drafting to my financial documents, every step was explained in plain language. My parents finally stopped worrying because someone was actually answering their questions.",
  },
  {
    name: "Neha Verma",
    country: "Germany",
    course: "BSc Mechanical Engineering",
    rating: 4,
    quote:
      "The blocked account and APS process looked impossible online. The team handled the paperwork and I started my semester in Munich without a single delay.",
  },
  {
    name: "Karan Dhillon",
    country: "New Zealand",
    course: "PG Diploma in Hospitality",
    rating: 5,
    quote:
      "Pre-departure support was the best part — accommodation sorted, forex done, and a call the night before my flight to check I had everything.",
  },
  {
    name: "Priya Malhotra",
    country: "United States",
    course: "MS Computer Science",
    rating: 5,
    quote:
      "Three mock visa interviews meant the real one felt routine. I cannot recommend their counselling team highly enough.",
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

  const active = testimonials[index]!;

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

           <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-1 sm:gap-4">
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
                     "grid h-11 min-w-0 flex-1 place-items-center rounded-full transition-colors sm:size-11 sm:flex-none",
                    i === index ? "text-accent" : "text-border hover:text-muted-foreground",
                  )}
                 >
                   <span className={cn("block h-2 max-w-full rounded-full bg-current", i === index ? "w-7" : "w-2")} />
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
