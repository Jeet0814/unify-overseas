import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Cloud, GraduationCap, Globe2, Plane, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Counter } from "./Reveal";
import { Button } from "@/components/ui/button";

const headlines = [
  { prefix: "Your Journey to Study", highlight: "Abroad", suffix: "Starts Here" },
  { prefix: "Your Gateway to Top", highlight: "Universities", suffix: "Starts Here" },
  { prefix: "Your Global Career &", highlight: "Visa Success", suffix: "Starts Here" },
];

const stats = [
  { value: 500, suffix: "+", label: "Students Placed" },
  { value: 10, suffix: "+", label: "Countries" },
  { value: 98, suffix: "%", label: "Visa Success" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const slow = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 240]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [reduced]);

  const currentHeadline = headlines[headlineIndex];

  return (
    <section
      id="home"
      ref={ref}
      className="surface-navy relative isolate flex min-h-[min(760px,calc(100svh-48px))] items-center overflow-hidden pt-28 pb-14 lg:pb-20"
    >
      {/* ambient glows with continuous zoom in/out and fade in/out */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={
          reduced
            ? { opacity: 0.2, scale: 1 }
            : {
                opacity: [0.15, 0.35, 0.2, 0.15],
                scale: [0.9, 1.15, 1.05, 0.9],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-40 -left-32 size-[36rem] rounded-full bg-accent/20 blur-[130px]"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={
          reduced
            ? { opacity: 0.4, scale: 1 }
            : {
                opacity: [0.35, 0.65, 0.45, 0.35],
                scale: [1, 1.2, 0.95, 1],
              }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute -right-32 bottom-0 size-[32rem] rounded-full bg-navy-soft/60 blur-[120px]"
        aria-hidden="true"
      />

      {/* rotating globe */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        style={{ y: slow }}
        className="pointer-events-none absolute top-1/2 right-[-6rem] hidden -translate-y-1/2 lg:block"
        aria-hidden="true"
      >
        <Globe2 className="animate-spin-slow size-[30rem] text-accent/12" strokeWidth={0.6} />
      </motion.div>

      {/* airplane on a dotted curve */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ y: fast }}
        className="pointer-events-none absolute inset-x-0 top-24 hidden md:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1200 300" className="h-64 w-full" fill="none">
          <path
            id="flight"
            d="M-40 250 C 260 60, 620 300, 1240 40"
            stroke="currentColor"
            className="text-accent/35"
            strokeWidth="2"
            strokeDasharray="7 12"
            strokeLinecap="round"
          />
        </svg>
        <motion.div
          className="absolute top-0 left-0 text-accent"
          initial={{ offsetDistance: "0%" }}
          animate={reduced ? {} : { offsetDistance: "100%" }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            offsetPath: 'path("M-40 250 C 260 60, 620 300, 1240 40")',
            offsetRotate: "auto",
          }}
        >
          <Plane className="size-8 rotate-45" />
        </motion.div>
      </motion.div>

      {/* floating caps + clouds */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{ y: slow }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <GraduationCap className="animate-float-slow absolute top-[28%] left-[8%] size-12 text-accent/40" />
        <GraduationCap className="animate-float-slow absolute bottom-[18%] left-[42%] size-8 text-accent/25 [animation-delay:1.2s]" />
        <Cloud className="animate-float-slow absolute top-[18%] right-[28%] size-16 text-primary-foreground/10 [animation-delay:0.6s]" />
        <Cloud className="animate-float-slow absolute bottom-[26%] right-[12%] size-24 text-primary-foreground/8 [animation-delay:2s]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ opacity: fade }}
        className="site-container relative text-center"
      >
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: -16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-accent uppercase shadow-soft"
          >
            <Sparkles className="size-3.5" aria-hidden="true" />
            Overseas Education &amp; Visa Experts
          </motion.p>

          <div className="mt-6 min-h-[105px] sm:min-h-[130px] lg:min-h-[145px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIndex}
                initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -22, filter: "blur(6px)" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl leading-[1.08] font-extrabold text-primary-foreground sm:text-5xl lg:text-[56px]"
              >
                {currentHeadline.prefix}{" "}
                <span className="text-gradient-gold inline-block">
                  {currentHeadline.highlight}
                </span>{" "}
                {currentHeadline.suffix}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg"
          >
            Expert guidance for admissions, visas and overseas careers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.95, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row"
          >
            <Button
              size="lg"
              variant="gold"
              className="animate-gold-pulse min-h-11 w-full rounded-full sm:w-56"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Free Consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="onNavy"
              className="min-h-11 w-full rounded-full sm:w-56"
              onClick={() =>
                document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Visa Process
            </Button>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.15 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-dark flex min-h-28 items-center justify-center rounded-2xl px-3 py-4 transition-colors hover:border-accent/40 sm:px-5"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display block text-3xl font-extrabold text-accent sm:text-4xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-1 block text-xs font-medium tracking-wide text-primary-foreground/70 sm:text-sm">
                  {stat.label}
                </span>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
