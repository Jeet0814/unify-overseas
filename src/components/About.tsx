import { Award, BriefcaseBusiness, FileCheck2, GraduationCap, HeartHandshake, Plane, Users } from "lucide-react";

import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about.jpg";

const features = [
  {
    icon: Users,
    title: "Expert Counselling",
    body: "One-to-one sessions that map your goals, budget and academic profile to the right destination.",
  },
  {
    icon: GraduationCap,
    title: "University Admissions",
    body: "Shortlisting, applications and offer-letter follow-ups with partner universities worldwide.",
  },
  {
    icon: FileCheck2,
    title: "Visa Assistance",
    body: "File-building, SOP review and interview preparation handled by experienced visa counsellors.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    body: "We identify merit and need-based funding so you study abroad without overspending.",
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    body: "Forex, accommodation, travel and airport briefings so your first week abroad feels easy.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career & Job Support",
    body: "Resume building, part-time work guidance and post-study work visa advice to launch your career abroad.",
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
                <span className="font-display block text-lg font-bold">98% Visa Success</span>
                <span className="block text-xs text-muted-foreground">
                  Across 10+ study destinations
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
                Unify Overseas began in Pehowa with a simple belief: a student&apos;s future should
                never depend on guesswork. What started as a small counselling desk has grown into a
                full-service overseas education consultancy, walking families through every step from
                the first conversation to the airport gate.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-secondary/60 p-5">
                <h3 className="font-display text-base font-bold">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Make quality international education accessible with honest advice, transparent
                  costs and zero false promises.
                </p>
              </div>
              <div className="rounded-2xl border border-accent/35 bg-accent/8 p-5">
                <h3 className="font-display text-base font-bold">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To be the most trusted study-abroad partner in the region, known for the success of
                  the students we send out.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08} className="h-full">
              <article className="card-soft h-full min-h-56 p-6">
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
