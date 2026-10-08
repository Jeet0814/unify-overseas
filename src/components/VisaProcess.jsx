import { motion, useScroll, useSpring } from "framer-motion";
import {
  ClipboardList,
  FileStack,
  MessagesSquare,
  PlaneTakeoff,
  Compass,
  Stamp,
} from "lucide-react";
import { useRef } from "react";

import { Reveal } from "./Reveal";

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Profile Evaluation & Free Counselling",
    body: "We assess your academic background, travel history, financial readiness and immigration goals to recommend the highest-success visa pathway.",
  },
  {
    icon: Compass,
    title: "2. Country, Course & Category Selection",
    body: "Shortlisting universities, holiday itineraries, or PR points calculations matched to your exact profile with intake and timeline clarity.",
  },
  {
    icon: ClipboardList,
    title: "3. Application & Invitation / Offer Letters",
    body: "Drafting compelling SOPs, cover letters, employer references, and invitation documentation until official university offers or sponsor letters arrive.",
  },
  {
    icon: FileStack,
    title: "4. Financial & Checklist Verification",
    body: "Assembling bank statements, tax returns (ITRs), valuation reports, GIC, medical exams and police clearances strictly adhering to embassy rules.",
  },
  {
    icon: Stamp,
    title: "5. Visa Filing, Biometrics & Mock Interviews",
    body: "Accurate online embassy portal submission, appointment booking for VFS/TLS/Consulates, and intensive 1-on-1 mock interview preparation.",
  },
  {
    icon: PlaneTakeoff,
    title: "6. Visa Approval, Forex & Pre-Departure",
    body: "Visa stamping celebration, flight booking assistance, foreign exchange cards, accommodation support, and briefing for your smooth departure.",
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
    <section id="process" className="surface-navy relative overflow-hidden py-16 lg:py-24">
      <div
        className="pointer-events-none absolute top-1/3 -left-24 size-96 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-24 size-96 rounded-full bg-navy-soft/50 blur-[120px]"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Step-by-Step Roadmap
          </p>
          <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-[40px]">
            Six clear steps from first consultation to visa stamp
          </h2>
          <p className="mt-4 text-primary-foreground/70">
            No guesswork, no hidden steps — transparent and streamlined guidance for Study, Tourist, Visitor, and PR Visas.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-14">
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
                      <div className="glass-dark rounded-2xl p-6 sm:p-7 transition-colors hover:border-accent/50 shadow-soft">
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
