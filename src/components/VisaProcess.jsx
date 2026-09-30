import { motion, useScroll, useSpring } from "framer-motion";
import {
  ClipboardList,
  FileStack,
  MessagesSquare,
  PlaneTakeoff,
  School,
  Stamp,
} from "lucide-react";
import { useRef } from "react";

import { Reveal } from "./Reveal";

const steps = [
  {
    icon: MessagesSquare,
    title: "Free Counselling",
    body: "We understand your academics, budget and career goals before recommending anything.",
  },
  {
    icon: School,
    title: "Course & University Selection",
    body: "A shortlist matched to your profile, with intake dates, fees and scholarship potential.",
  },
  {
    icon: ClipboardList,
    title: "Application & Admission",
    body: "SOPs, LORs and applications prepared and tracked until your offer letter arrives.",
  },
  {
    icon: FileStack,
    title: "Documentation",
    body: "Financials, medicals and academic records assembled to each country's exact checklist.",
  },
  {
    icon: Stamp,
    title: "Visa Filing & Interview Prep",
    body: "Accurate filing plus mock interviews so you walk in confident and well rehearsed.",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure & Travel",
    body: "Forex, accommodation, packing and arrival guidance for a smooth first week abroad.",
  },
];

export function VisaProcess() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <section id="process" className="surface-navy relative overflow-hidden py-14 lg:py-20">
      <div
        className="pointer-events-none absolute top-1/3 -left-24 size-96 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Visa Process
          </p>
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-[40px]">
            Six clear steps from first call to boarding pass
          </h2>
          <p className="mt-4 text-primary-foreground/70">
            No jargon, no surprises — you always know exactly what happens next.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-12">
          <div
            className="absolute top-0 left-6 h-full w-px -translate-x-1/2 bg-primary-foreground/15 lg:left-1/2"
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-0 left-6 h-full w-px origin-top -translate-x-1/2 bg-accent lg:left-1/2"
            style={{ scaleY: lineScale }}
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {steps.map((step, i) => {
              const right = i % 2 === 1;
              return (
                <li key={step.title} className="relative pl-16 lg:pl-0">
                  <Reveal x={right ? 48 : -48} y={0}>
                    <div
                      className={
                        right
                          ? "lg:ml-auto lg:w-[calc(50%-3rem)]"
                          : "lg:mr-auto lg:w-[calc(50%-3rem)] lg:text-right"
                      }
                    >
                      <div className="glass-dark rounded-2xl p-6 transition-colors hover:border-accent/50">
                        <div
                          className={`flex items-center gap-3 ${right ? "" : "lg:flex-row-reverse"}`}
                        >
                          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                            <step.icon className="size-5" aria-hidden="true" />
                          </span>
                          <h3 className="font-display min-w-0 text-lg font-bold text-primary-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <span
                    className="font-display absolute top-6 left-0 grid size-12 place-items-center rounded-full bg-accent text-base font-extrabold text-accent-foreground shadow-gold-glow lg:top-7 lg:left-1/2 lg:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

