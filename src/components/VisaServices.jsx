import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Palmtree,
  Users2,
  Award,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  FileCheck,
  Globe2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const visaCategories = [
  {
    id: "all",
    label: "All Visas",
  },
  {
    id: "study",
    label: "Study Visa",
    icon: GraduationCap,
  },
  {
    id: "tourist",
    label: "Tourist Visa",
    icon: Palmtree,
  },
  {
    id: "visitor",
    label: "Visitor & Super Visa",
    icon: Users2,
  },
  {
    id: "pr",
    label: "PR & Immigration",
    icon: Award,
  },
];

const visaData = [
  {
    id: "study",
    category: "study",
    badge: "Study Abroad",
    title: "Student Visa (Study Permit)",
    tagline: "Secure admissions & study visas for top global universities",
    description:
      "Complete end-to-end guidance from university course selection, SOP drafting, financial document preparation (GIC / funds), scholarship assistance to visa interview clearance.",
    highlights: [
      "Direct tie-ups with 500+ top universities & colleges worldwide",
      "Offer letter turnaround in as fast as 48 hours to 2 weeks",
      "Comprehensive SOP, LOR, and financial file preparation",
      "Assistance with GIC, Blocked Accounts & Education Loans",
      "Mock visa interviews with certified country specialists",
    ],
    destinations: ["Canada", "UK", "USA", "Australia", "Germany", "New Zealand", "Ireland", "Europe"],
    processingTime: "2 to 8 Weeks",
    successRate: "98.4%",
    icon: GraduationCap,
    gradient: "from-blue-600/20 to-indigo-600/10",
    borderAccent: "border-blue-500/30",
  },
  {
    id: "tourist",
    category: "tourist",
    badge: "Leisure & Holidays",
    title: "Tourist & Holiday Visa",
    tagline: "Explore the world with hassle-free fast-track tourist visa filing",
    description:
      "Whether you are planning a dream vacation to Europe, a holiday in the UK, or exploring the USA, Canada, and Australia, we handle your complete tourist visa filing with custom day-wise itineraries.",
    highlights: [
      "Custom day-wise travel itineraries & flight/hotel reservations",
      "Strong cover letters and purpose-of-travel explanations",
      "Financial documentation and strong ties proofing to avoid rejection",
      "Fast appointment booking for VFS, TLScontact, and US Consulates",
      "High approval rate for first-time international travellers",
    ],
    destinations: ["Schengen (29 Countries)", "UK", "USA (B1/B2)", "Canada", "Australia", "Dubai / UAE", "Singapore", "New Zealand"],
    processingTime: "5 to 20 Days",
    successRate: "97.8%",
    icon: Palmtree,
    gradient: "from-amber-500/20 to-orange-500/10",
    borderAccent: "border-amber-500/30",
  },
  {
    id: "visitor",
    category: "visitor",
    badge: "Family & Reunions",
    title: "Visitor & Super Visa",
    tagline: "Reunite with your children, parents, and loved ones abroad",
    description:
      "Specialized visa filing for family visits, convocation ceremonies, child-birth assistance, and Canada Super Visas allowing parents and grandparents multi-entry stay up to 5 consecutive years.",
    highlights: [
      "Canada Super Visa (up to 10 years validity with 5 years stay per entry)",
      "Invitation letter verification and host sponsorship review",
      "Mandatory medical insurance calculation and coverage guidance",
      "UK Family Visitor & Australia Sponsored Family Stream (Subclass 600)",
      "Fast-track processing for urgent family events and convocations",
    ],
    destinations: ["Canada (Super Visa)", "UK (Standard Visitor)", "USA (B2 Visa)", "Australia (Subclass 600)", "New Zealand", "Europe"],
    processingTime: "2 to 4 Weeks",
    successRate: "98.9%",
    icon: Users2,
    gradient: "from-emerald-500/20 to-teal-500/10",
    borderAccent: "border-emerald-500/30",
  },
  {
    id: "pr",
    category: "pr",
    badge: "Permanent Residency",
    title: "PR & Skilled Immigration",
    tagline: "Live, work, and settle permanently in Canada and Australia",
    description:
      "Direct pathway guidance for skilled professionals, tradespeople, and graduates aiming for Permanent Residency through points-based immigration and provincial nomination programs.",
    highlights: [
      "Free CRS & Points score evaluation and improvement strategy",
      "Canada Express Entry (FSWP, CEC, Trades) & PNP Programs (OINP, BCPNP, SINP, AAIP)",
      "Australia General Skilled Migration (Subclass 189, 190, 491)",
      "Credential evaluation assistance (WES, ICAS, IQAS, CES)",
      "Skill assessment guidance with ACS, Engineers Australia, VETASSESS",
    ],
    destinations: ["Canada (Express Entry & PNPs)", "Australia (GSM 189 / 190 / 491)", "New Zealand SMC"],
    processingTime: "6 to 12 Months",
    successRate: "96.5%",
    icon: Award,
    gradient: "from-purple-500/20 to-pink-500/10",
    borderAccent: "border-purple-500/30",
  },
];

export function VisaServices() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredVisas =
    activeTab === "all" ? visaData : visaData.filter((v) => v.category === activeTab);

  const handleInquire = (serviceName) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const selectElem = document.getElementById("service-select");
      if (selectElem) {
        selectElem.value = serviceName;
        // dispatch change event
        selectElem.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  };

  return (
    <section id="visas" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-10 right-0 size-96 rounded-full bg-accent/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-0 size-96 rounded-full bg-primary/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-accent uppercase shadow-sm">
            <Globe2 className="size-3.5" />
            Visa &amp; Immigration Solutions
          </div>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-[44px] text-foreground tracking-tight">
            Comprehensive Visa Services for Every Dream
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you are aiming to study, explore the world, visit family, or settle permanently, our certified visa counsellors provide 100% transparent and reliable guidance.
          </p>
        </Reveal>

        {/* Category filter tabs */}
        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-card p-1.5 shadow-sm max-w-full">
            {visaCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {Icon ? <Icon className="size-4" /> : null}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Visa Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredVisas.map((visa, idx) => {
              const VisaIcon = visa.icon;
              return (
                <motion.div
                  key={visa.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:shadow-lift hover:border-accent/40"
                >
                  <div>
                    {/* Header badge & icon */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-3.5 py-1 text-xs font-bold text-accent">
                        <Sparkles className="size-3" />
                        {visa.badge}
                      </div>
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                        <VisaIcon className="size-6" />
                      </span>
                    </div>

                    <h3 className="font-display mt-5 text-2xl font-bold text-foreground">
                      {visa.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {visa.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {visa.description}
                    </p>

                    {/* Highlights List */}
                    <div className="mt-6 border-t border-border/70 pt-5">
                      <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                        Key Features &amp; Support:
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {visa.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular Destinations */}
                    <div className="mt-6 border-t border-border/70 pt-4">
                      <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                        Popular Destinations:
                      </h4>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {visa.destinations.map((dest) => (
                          <span
                            key={dest}
                            className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer metadata & CTA */}
                  <div className="mt-8 border-t border-border pt-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-accent" />
                        <span>Timeline: <strong className="text-foreground">{visa.processingTime}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="size-3.5 text-emerald-600" />
                        <span>Success Rate: <strong className="text-emerald-600 font-bold">{visa.successRate}</strong></span>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleInquire(visa.title)}
                      variant="gold"
                      className="w-full rounded-2xl min-h-11 font-semibold group/btn"
                    >
                      <span>Apply &amp; Check Eligibility</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Fast Action Banner */}
        <Reveal delay={0.2} className="mt-14">
          <div className="surface-navy relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-lift flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-accent uppercase">
                <FileCheck className="size-4" /> Free Profile Evaluation
              </span>
              <h3 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-primary-foreground">
                Confused which visa pathway fits your profile?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-primary-foreground/75">
                Speak directly with our senior visa advisor for a personalized eligibility assessment with zero consultation fees.
              </p>
            </div>
            <Button
              size="lg"
              variant="gold"
              onClick={() => handleInquire("General Visa Evaluation")}
              className="rounded-full px-8 py-6 text-sm font-bold shadow-gold-glow shrink-0 animate-gold-pulse"
            >
              Get Free Assessment
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
