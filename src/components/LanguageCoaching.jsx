import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowRight,
  Clock,
  Laptop,
  Users,
  Calendar,
  Volume2,
  BadgeCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: "ielts",
    name: "IELTS Coaching",
    badge: "Most Popular",
    type: "Academic & General Training",
    target: "Band 7.5+ Guaranteed Strategy",
    duration: "4 to 8 Weeks",
    batch: "Morning / Evening / Weekend",
    tagline: "Master all 4 modules with certified IDP & British Council trained mentors",
    description:
      "Comprehensive classroom & online coaching focusing on active Listening, Reading strategies, high-scoring Writing structures (Task 1 & Task 2), and daily 1-on-1 Speaking sessions with audio feedback.",
    features: [
      "Daily 1-on-1 Speaking interview practice with live feedback",
      "Specialized Writing Task 1 & 2 evaluation with score metrics",
      "Full-length weekly mock tests matching real exam conditions",
      "Updated Cambridge 1-19 test series & exclusive vocabulary bank",
      "Master classes on Reading time management & True/False/Not Given",
    ],
    modules: [
      { name: "Listening", icon: Headphones, desc: "Accents, audio cues & spelling tricks" },
      { name: "Reading", icon: BookOpen, desc: "Skimming, scanning & keyword techniques" },
      { name: "Writing", icon: PenTool, desc: "Band 8+ templates, coherence & lexical resource" },
      { name: "Speaking", icon: Mic, desc: "Fluency, pronunciation & cue card mastery" },
    ],
    accentColor: "border-accent/40 bg-accent/5",
  },
  {
    id: "pte",
    name: "PTE Academic & Core",
    badge: "Fast Track",
    type: "Pearson Test of English",
    target: "70+ Score Target (CLB 8 / 9)",
    duration: "3 to 6 Weeks",
    batch: "Daily Lab Practice Batches",
    tagline: "AI-software lab simulation with proven templates for instant results",
    description:
      "Practice in our dedicated high-tech computer lab equipped with Pearson-standard AI scoring software. Learn proven templates for Describe Image, Retell Lecture, and Write Essay.",
    features: [
      "Dedicated computer lab with Pearson-calibrated noise-cancelling mics",
      "Real-time AI scoring on Pronunciation, Oral Fluency, and Content",
      "Repeat Sentence & Write From Dictation high-frequency prediction files",
      "Proven templates for Describe Image, Retell Lecture & Summarize Spoken Text",
      "Unlimited scored sectional & full mock tests with instant score reports",
    ],
    modules: [
      { name: "Speaking & Writing", icon: Mic, desc: "Read Aloud, Repeat Sentence, Essay" },
      { name: "Reading", icon: BookOpen, desc: "Fill in Blanks (R&W), Reorder Paragraphs" },
      { name: "Listening", icon: Headphones, desc: "Dictation, Highlight Incorrect Words" },
      { name: "AI Scoring Lab", icon: Laptop, desc: "Pearson algorithm mock simulator" },
    ],
    accentColor: "border-blue-500/40 bg-blue-500/5",
  },
  {
    id: "duolingo",
    name: "Duolingo English Test (DET)",
    badge: "1-Month Intensive",
    type: "Accepted by 4500+ Institutions",
    target: "Score 120+ Roadmap",
    duration: "2 to 4 Weeks",
    batch: "Fast-Track Intensive",
    tagline: "Quick, home-based test prep with high success rate and affordable fee",
    description:
      "Targeted coaching covering all subscores (Literacy, Comprehension, Conversation, Production). Learn interactive reading tricks, photo description formulas, and interview video responses.",
    features: [
      "Adaptive question practice covering all 10+ sub-question formats",
      "Writing & speaking templates tailored for Duolingo algorithm",
      "Timed mock simulations with instant accuracy feedback",
      "Strategy for Read and Select, Listen and Type, and Interactive Reading",
      "Personalized teacher feedback on video speaking & writing sample",
    ],
    modules: [
      { name: "Literacy", icon: BookOpen, desc: "Read & select, complete sentences" },
      { name: "Comprehension", icon: Headphones, desc: "Listen & type, interactive reading" },
      { name: "Conversation", icon: Volume2, desc: "Speak about photo, listen then speak" },
      { name: "Production", icon: PenTool, desc: "Write about photo, 5-min writing" },
    ],
    accentColor: "border-emerald-500/40 bg-emerald-500/5",
  },
  {
    id: "spoken",
    name: "Spoken English & Interview Prep",
    badge: "Personality & Fluency",
    type: "Visa & Academic Readiness",
    target: "100% Fluency & Confidence",
    duration: "4 Weeks",
    batch: "Flexible Timings",
    tagline: "Overcome hesitation, build fluent English and ace your visa interview",
    description:
      "Designed for students and visa applicants preparing for visa consular interviews, university presentations, or looking to overcome hesitation in daily English communication.",
    features: [
      "Embassy & Consulate mock visa interview sessions with real questions",
      "Vocabulary building, grammar correction, and accent neutralization",
      "Group discussions, debate sessions, and impromptu speaking drills",
      "Body language, confidence building, and professional etiquette",
      "Custom interview prep for Canada, USA, UK, and Australia visa officers",
    ],
    modules: [
      { name: "Visa Mock Drills", icon: Users, desc: "Toughest consular questions answered" },
      { name: "Fluency Building", icon: Mic, desc: "Remove hesitation & hesitation pauses" },
      { name: "Grammar & Vocab", icon: BookOpen, desc: "Professional sentences & expressions" },
      { name: "Public Speaking", icon: Award, desc: "Presentation & confidence mastery" },
    ],
    accentColor: "border-purple-500/40 bg-purple-500/5",
  },
];

const perks = [
  {
    icon: Users,
    title: "Certified Master Trainers",
    desc: "IDP, British Council & Pearson certified mentors with 8+ years coaching track record.",
  },
  {
    icon: Laptop,
    title: "Smart AI Computer Lab",
    desc: "Equipped with official software, noise-canceling headsets, and instant score diagnostics.",
  },
  {
    icon: Mic,
    title: "Daily 1-on-1 Speaking",
    desc: "Private speaking interview practice every single day with detailed score card feedback.",
  },
  {
    icon: Calendar,
    title: "Flexible Batch Schedules",
    desc: "Early morning (8 AM), regular day, evening (5 PM & 7 PM), and weekend master batches.",
  },
];

export function LanguageCoaching() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);

  const activeCourse = courses.find((c) => c.id === selectedCourse) || courses[0];

  const handleBookDemo = (courseName) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const selectElem = document.getElementById("service-select");
      if (selectElem) {
        selectElem.value = courseName;
        selectElem.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  };

  return (
    <section id="coaching" className="surface-navy relative py-16 lg:py-24 overflow-hidden">
      {/* Background glow effects */}
      <div
        className="pointer-events-none absolute top-1/4 -left-20 size-[32rem] rounded-full bg-accent/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-20 size-[32rem] rounded-full bg-navy-soft/60 blur-[130px]"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-accent uppercase shadow-soft">
            <Sparkles className="size-3.5" />
            Language Academy &amp; Test Prep
          </div>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-[44px] text-primary-foreground tracking-tight">
            IELTS, PTE &amp; Language Coaching Hub
          </h2>
          <p className="mt-4 text-base sm:text-lg text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Achieve your target band score in the very first attempt with our proven test strategies, AI-scored mock labs, and personalized 1-on-1 mentorship.
          </p>
        </Reveal>

        {/* Course Navigation Tabs */}
        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 rounded-2xl glass-dark p-2 border border-primary-foreground/15 max-w-full">
            {courses.map((course) => {
              const isSelected = selectedCourse === course.id;
              return (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course.id)}
                  className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? "bg-accent text-accent-foreground shadow-gold-glow"
                      : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
                >
                  <BookOpen className="size-4 shrink-0" />
                  <span>{course.name}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Selected Course Detailed Card */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCourse.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-dark rounded-3xl p-6 sm:p-10 border border-primary-foreground/20 shadow-lift"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left Col (Course Overview & Features) */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-accent/20 border border-accent/40 px-3.5 py-1 text-xs font-extrabold text-accent">
                      {activeCourse.badge}
                    </span>
                    <span className="text-xs font-semibold text-primary-foreground/60 tracking-wider uppercase">
                      {activeCourse.type}
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground">
                    {activeCourse.name}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-accent">
                    {activeCourse.tagline}
                  </p>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-primary-foreground/75">
                    {activeCourse.description}
                  </p>

                  {/* Modules 4-box pill grid */}
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {activeCourse.modules.map((m) => {
                      const MIcon = m.icon;
                      return (
                        <div
                          key={m.name}
                          className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-3.5 text-center transition-colors hover:border-accent/50"
                        >
                          <span className="mx-auto grid size-9 place-items-center rounded-xl bg-accent/20 text-accent">
                            <MIcon className="size-4" />
                          </span>
                          <h4 className="mt-2 text-xs font-bold text-primary-foreground">
                            {m.name}
                          </h4>
                          <p className="mt-1 text-[0.68rem] text-primary-foreground/60 leading-tight">
                            {m.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 border-t border-primary-foreground/15 pt-5">
                    <h4 className="text-xs font-bold tracking-wider text-accent uppercase">
                      What is Included in This Course:
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {activeCourse.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary-foreground/90">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Col (Key Info Card & CTA) */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-accent/40 bg-navy-deep/80 p-6 sm:p-8 shadow-lift">
                    <div className="flex items-center justify-between gap-3 border-b border-primary-foreground/15 pb-4">
                      <div>
                        <span className="text-xs font-medium text-primary-foreground/60">
                          Target Outcome
                        </span>
                        <div className="font-display text-xl font-extrabold text-accent">
                          {activeCourse.target}
                        </div>
                      </div>
                      <BadgeCheck className="size-8 text-accent shrink-0" />
                    </div>

                    <div className="mt-5 space-y-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-primary-foreground/70">
                          <Clock className="size-4 text-accent" /> Course Duration
                        </span>
                        <span className="font-bold text-primary-foreground">
                          {activeCourse.duration}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-primary-foreground/70">
                          <Calendar className="size-4 text-accent" /> Batch Options
                        </span>
                        <span className="font-bold text-primary-foreground">
                          {activeCourse.batch}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-primary-foreground/70">
                          <Laptop className="size-4 text-accent" /> Learning Mode
                        </span>
                        <span className="font-bold text-primary-foreground">
                          Classroom &amp; Live Online
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-primary-foreground/70">
                          <BookOpen className="size-4 text-accent" /> Study Material
                        </span>
                        <span className="font-bold text-primary-foreground">
                          Free Books &amp; Software
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <Button
                        size="lg"
                        variant="gold"
                        onClick={() => handleBookDemo(`${activeCourse.name} - Free Demo Class`)}
                        className="w-full rounded-full py-6 font-bold shadow-gold-glow animate-gold-pulse"
                      >
                        Book Free Demo Class
                        <ArrowRight className="size-4 ml-2" />
                      </Button>

                      <Button
                        size="lg"
                        variant="onNavy"
                        onClick={() => handleBookDemo(`${activeCourse.name} - Diagnostic Test`)}
                        className="w-full rounded-full"
                      >
                        Take Free Level Diagnostic
                      </Button>
                    </div>

                    <p className="mt-4 text-center text-xs text-primary-foreground/50">
                      * Zero registration fee for demo classes &amp; diagnostic evaluation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Perks Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => {
            const PerkIcon = perk.icon;
            return (
              <Reveal key={perk.title} delay={i * 0.08}>
                <div className="glass-dark h-full rounded-2xl p-6 transition-all hover:border-accent/40">
                  <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground shadow-gold-glow">
                    <PerkIcon className="size-6" />
                  </span>
                  <h4 className="font-display mt-4 text-lg font-bold text-primary-foreground">
                    {perk.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-primary-foreground/70">
                    {perk.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
