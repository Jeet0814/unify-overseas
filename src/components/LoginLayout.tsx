import { Link } from "@tanstack/react-router";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Globe2, GraduationCap, Plane } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LoginLayoutProps = {
  heading: string;
  subheading: string;
  identifierLabel: string;
  identifierType?: string;
  accentTone?: "gold" | "navy";
  badge: string;
  highlights: string[];
  footer: ReactNode;
};

export function LoginLayout({
  heading,
  subheading,
  identifierLabel,
  identifierType = "email",
  accentTone = "gold",
  badge,
  highlights,
  footer,
}: LoginLayoutProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* illustration side */}
      <div className="surface-navy relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div
          className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-accent/15 blur-[110px]"
          aria-hidden="true"
        />
        <Globe2
          className="animate-spin-slow pointer-events-none absolute -right-24 bottom-[-6rem] size-[28rem] text-accent/10"
          strokeWidth={0.6}
          aria-hidden="true"
        />

        <Link to="/" className="relative flex items-center gap-3">
          <Logo size={44} />
          <span className="font-display text-lg font-bold text-primary-foreground">
            Unify Overseas
          </span>
        </Link>

        <div className="relative max-w-md">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-accent uppercase"
          >
            <GraduationCap className="size-3.5" aria-hidden="true" />
            {badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold text-primary-foreground"
          >
            Every application, <span className="text-gradient-gold">one dashboard</span>.
          </motion.h2>

          <ul className="mt-8 space-y-3">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className="flex items-center gap-3 text-sm text-primary-foreground/75"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="relative h-8 w-full max-w-sm overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-accent/25" />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 text-accent"
            animate={{ x: ["-10%", "105%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          >
            <Plane className="size-6 rotate-45" />
          </motion.div>
        </div>
      </div>

      {/* form side */}
      <div className="flex items-center justify-center px-6 py-14 lg:px-12 lg:py-20">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <Logo size={40} />
            <Link
              to="/"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Home
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="card-soft mt-8 p-6 sm:p-8 lg:mt-0"
          >
            <span
              className={cn(
                "inline-block h-1 w-12 rounded-full",
                accentTone === "gold" ? "bg-accent" : "bg-navy-soft",
              )}
              aria-hidden="true"
            />
            <h1 className="mt-5 text-3xl font-bold">{heading}</h1>
            <p className="mt-3 text-sm text-muted-foreground">{subheading}</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                window.setTimeout(() => setSubmitted(false), 3000);
              }}
              className="mt-8 flex flex-col gap-5"
            >
              <div className="relative">
                <input
                  id="identifier"
                  name="identifier"
                  type={identifierType}
                  required
                  placeholder=" "
                  autoComplete="username"
                  className="peer h-14 w-full rounded-xl border border-input bg-card px-4 pt-5 text-sm outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent/15"
                />
                <label
                  htmlFor="identifier"
                  className="pointer-events-none absolute top-4 left-4 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-[0.7rem] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[0.7rem]"
                >
                  {identifierLabel}
                </label>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder=" "
                  autoComplete="current-password"
                  className="peer h-14 w-full rounded-xl border border-input bg-card px-4 pt-5 pr-12 text-sm outline-none transition-all focus:border-accent focus:ring-4 focus:ring-accent/15"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-4 left-4 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-[0.7rem] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[0.7rem]"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute top-1/2 right-1 grid size-11 -translate-y-1/2 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" aria-hidden="true" />
                  ) : (
                    <Eye className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    name="remember"
                    className="size-4 rounded border-input accent-accent"
                  />
                  Remember me
                </label>
                <a href="#" className="text-sm font-medium text-accent hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                variant={accentTone === "gold" ? "gold" : "default"}
                size="lg"
                className="rounded-full"
              >
                {submitted ? "Checking details…" : "Login"}
              </Button>

              <p aria-live="polite" className="text-center text-xs text-muted-foreground">
                {submitted ? "Demo form — accounts are not connected yet." : null}
              </p>
            </form>

            <div className="mt-8 text-center text-sm text-muted-foreground">{footer}</div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
