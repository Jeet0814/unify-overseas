import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", id: "home" },
  { label: "Visa Services", id: "visas" },
  { label: "IELTS & PTE", id: "coaching" },
  { label: "About Us", id: "about" },
  { label: "Visa Process", id: "process" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact Us", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [loginOpen, setLoginOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isClickingRef = useRef(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  // Scroll listener for detecting active section and navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 24);

      if (isClickingRef.current) return;

      // Bottom of page -> activate Contact Us
      const isBottom =
        window.innerHeight + scrollPos >= document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setActive("contact");
        return;
      }

      // Top of page -> activate Home
      if (scrollPos < 100) {
        setActive("home");
        return;
      }

      // Find the currently visible section
      const triggerPoint = scrollPos + 180;
      let currentActive = "home";

      for (let i = 0; i < links.length; i++) {
        const section = document.getElementById(links[i].id);
        if (section) {
          const top = section.offsetTop;
          if (triggerPoint >= top) {
            currentActive = links[i].id;
          }
        }
      }

      setActive(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const go = (id) => {
    setActive(id);
    setDrawerOpen(false);
    isClickingRef.current = true;

    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 70;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }

    // Reset lock after scroll animation finishes
    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "glass-panel shadow-soft" : "bg-transparent",
      )}
    >
      <nav
        className="site-container max-w-7xl flex min-h-18 items-center justify-between gap-2 lg:gap-3 xl:gap-4 py-3"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => go("home")}
          className="flex min-h-11 min-w-11 shrink-0 items-center gap-2.5 xl:gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <Logo size={40} />
          <span className="hidden min-w-0 flex-col text-left sm:flex">
            <span
              className={cn(
                "font-display truncate text-base leading-tight font-bold whitespace-nowrap",
                scrolled ? "text-foreground" : "text-primary-foreground",
              )}
            >
              Unify Overseas
            </span>
            <span className="truncate text-[0.65rem] tracking-[0.18em] text-accent uppercase whitespace-nowrap">
              Immigration &amp; Coaching
            </span>
          </span>
        </button>

        <ul className="ml-auto hidden items-center gap-0.5 xl:gap-1.5 lg:flex">
          {links.map((link) => (
            <li key={link.id} className="shrink-0">
              <button
                type="button"
                onClick={() => go(link.id)}
                className={cn(
                  "relative min-h-11 rounded-full px-2.5 py-2 text-[13px] xl:px-3.5 xl:text-sm font-medium transition-colors whitespace-nowrap",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/75 hover:text-primary-foreground",
                  active === link.id && (scrolled ? "text-foreground font-semibold" : "text-primary-foreground font-semibold"),
                )}
              >
                <span className="whitespace-nowrap">{link.label}</span>
                {active === link.id ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2.5 xl:inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                ) : null}
              </button>
            </li>
          ))}
        </ul>

        <div
          className="relative ml-1 xl:ml-2 hidden shrink-0 lg:block"
          onMouseLeave={() => setLoginOpen(false)}
        >
          <Button
            variant={scrolled ? "default" : "outline"}
            onClick={() => setLoginOpen((v) => !v)}
            onMouseEnter={() => setLoginOpen(true)}
            aria-expanded={loginOpen}
            aria-haspopup="menu"
            className={cn(
              "min-h-11 rounded-full",
              !scrolled &&
                "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
            )}
          >
            Login
            <ChevronDown
              className={cn("size-4 transition-transform", loginOpen && "rotate-180")}
              aria-hidden="true"
            />
          </Button>

          <AnimatePresence>
            {loginOpen ? (
              <motion.div
                role="menu"
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="glass-panel absolute right-0 mt-2 w-60 max-w-[calc(100vw-48px)] overflow-hidden rounded-2xl p-2 shadow-lg"
              >
                <Link
                  to="/student-login"
                  role="menuitem"
                  className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <GraduationCap className="size-4" aria-hidden="true" />
                  </span>
                  Student Login
                </Link>
                <Link
                  to="/agent-login"
                  role="menuitem"
                  className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                    <Briefcase className="size-4" aria-hidden="true" />
                  </span>
                  Agent Login
                </Link>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          className={cn(
            "ml-auto grid size-11 shrink-0 place-items-center rounded-xl transition-colors lg:hidden",
            scrolled
              ? "bg-secondary text-foreground"
              : "bg-primary-foreground/10 text-primary-foreground",
          )}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </nav>

      <motion.div
        className="h-0.5 origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <AnimatePresence>
        {drawerOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-navy-deep/60 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col gap-2 bg-card p-6 shadow-lift lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div className="flex items-center justify-between gap-4">
                <Logo size={40} />
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                  className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-6 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.08 }}
                  >
                    <button
                      type="button"
                      onClick={() => go(link.id)}
                      className={cn(
                        "w-full rounded-xl px-3.5 py-3 text-left font-display text-base font-semibold transition-colors flex items-center justify-between",
                        active === link.id
                          ? "bg-accent/15 text-accent font-bold"
                          : "text-foreground hover:bg-secondary"
                      )}
                    >
                      <span>{link.label}</span>
                      {active === link.id && (
                        <span className="size-2 rounded-full bg-accent" />
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-2 pt-6">
                <Button asChild className="rounded-full">
                  <Link to="/student-login" onClick={() => setDrawerOpen(false)}>
                    <GraduationCap className="size-4" aria-hidden="true" />
                    Student Login
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/agent-login" onClick={() => setDrawerOpen(false)}>
                    <Briefcase className="size-4" aria-hidden="true" />
                    Agent Login
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
