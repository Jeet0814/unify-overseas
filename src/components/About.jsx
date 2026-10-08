import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  Palmtree,
  Plane,
  Users,
  Users2,
} from "lucide-react";

import { Counter, Reveal } from "./Reveal";
import aboutImage from "@/assets/about.jpg";

const features = [
  {
    icon: GraduationCap,
    title: "Study Visa & Admissions",
    body: "University shortlisting, SOP & LOR preparation, and complete student visa filing across 15+ countries.",
  },
  {
    icon: BookOpen,
    title: "IELTS & PTE Coaching",
    body: "Target 7.5+ Band & 70+ PTE coaching with certified trainers, AI computer lab and daily 1-on-1 speaking.",
  },
  {
    icon: Palmtree,
    title: "Tourist & Holiday Visas",
    body: "Fast-track holiday visas for UK, USA, Schengen, Canada & Australia with customized day-wise itineraries.",
  },
  {
    icon: Users2,
    title: "Visitor & Super Visas",
    body: "Parent & grandparent Super Visas, family visitor visas, sponsorship verification and invitation letter support.",
  },
  {
    icon: Award,
    title: "PR & Immigration",
    body: "Canada Express Entry & PNPs, Australia GSM, Points evaluation and credential assessment guidance.",
  },
  {
    icon: Plane,
    title: "Pre-Departure & Forex",
    body: "Accommodation assistance, forex cards, airport briefings and packing guides for a stress-free departure.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-14 lg:py-20">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal x={-30} y={0} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={aboutImage}
                alt="A student on campus after placement through Unify Overseas"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/45 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="glass-panel absolute right-2 bottom-6 flex items-center gap-3 rounded-2xl p-4 shadow-lift sm:right-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <HeartHandshake className="size-6" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="font-display block text-lg font-bold">
                  <Counter to={98} suffix="%" /> Visa Success
                </span>
                <span className="block text-xs text-muted-foreground">
                  Across <Counter to={10} suffix="+" /> study destinations
                </span>
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                About Unify Overseas
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[40px]">
                Guidance that treats your ambition like our own
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Unify Overseas began in Pehowa with a simple belief: your international dreams should
                never depend on guesswork. What started as a dedicated counselling desk has grown into a
                full-service immigration, study abroad and language coaching institute, walking families
                and aspirants through every step from test preparation and file building to visa approval.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-secondary/60 p-5">
                <h3 className="font-display text-base font-bold">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Make global education, travel and settlement accessible with honest advice, high-band language coaching, and transparent visa processing.
                </p>
              </div>
              <div className="rounded-2xl border border-accent/35 bg-accent/8 p-5">
                <h3 className="font-display text-base font-bold">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To be the most trusted visa consultancy and language training institute, recognized for high visa success rates and top test band scores.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div id="services" className="mt-16 text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-[40px]">
              Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Comprehensive guidance and support tailored for every stage of your study abroad dream.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08} className="h-full">
              <article className="card-soft h-full min-h-56 p-6 lg:min-h-64">
                <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <feature.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

