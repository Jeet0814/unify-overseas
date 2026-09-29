import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Globe2 } from "lucide-react";
import { useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export function LoginLayout({
  heading,
  subheading,
  identifierLabel = "Email Address",
  identifierType = "email",
  badge,
  accentTone = "gold",
  highlights = [],
  footer,
}) {
  const [showPass, setShowPass] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left branding panel */}
      <aside className="surface-navy relative isolate hidden flex-col justify-between overflow-hidden p-12 lg:flex xl:p-16">
        <div
          className="pointer-events-none absolute -top-40 -left-32 size-[32rem] rounded-full bg-accent/15 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-0 size-[28rem] rounded-full bg-navy-soft/60 blur-[110px]"
          aria-hidden="true"
        />
        <Globe2
          className="animate-spin-slow pointer-events-none absolute top-1/2 right-[-6rem] size-[26rem] -translate-y-1/2 text-accent/10"
          strokeWidth={0.6}
          aria-hidden="true"
        />

        <div className="relative flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Logo size={44} />
            <span className="font-display text-lg font-bold text-primary-foreground">
              Unify Overseas
            </span>
          </Link>
          <span className="glass-dark rounded-full px-3 py-1 text-xs font-medium tracking-[0.16em] text-accent uppercase">
            {badge}
          </span>
        </div>

        <div className="relative my-auto max-w-md py-12">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Global Education Portal
          </p>
          <h2 className="font-display mt-4 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Everything for your overseas journey in one place
          </h2>
          <ul className="mt-8 space-y-4 text-sm text-primary-foreground/80">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
                  ✓
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-primary-foreground/60">
          © 2026 Unify Overseas. Pehowa, Haryana.
        </p>
      </aside>

      {/* Right form panel */}
      <main className="flex flex-col justify-between bg-background p-6 sm:p-10 lg:p-16">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
          <div className="lg:hidden">
            <Logo size={36} />
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm py-10">
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {heading}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{subheading}</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-8 space-y-4"
          >
            <div>
              <label htmlFor="identifier" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {identifierLabel}
              </label>
              <input
                id="identifier"
                name="identifier"
                type={identifierType}
                required
                className="mt-2 h-11 w-full rounded-xl border border-input bg-card px-4 text-sm transition-all outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                placeholder={identifierType === "email" ? "you@example.com" : "AGT-1024"}
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Password
                </label>
                <a href="#" className="text-xs text-accent hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  required
                  className="h-11 w-full rounded-xl border border-input bg-card px-4 pr-11 text-sm transition-all outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant={accentTone === "gold" ? "gold" : "default"}
              size="lg"
              className="w-full rounded-xl mt-2"
            >
              {sent ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {footer ? (
            <p className="mt-8 text-center text-xs text-muted-foreground">
              {footer}
            </p>
          ) : null}
        </div>

        <p className="text-center text-xs text-muted-foreground lg:text-left">
          Need help? Contact support at <a href="mailto:hello@unifyoverseas.com" className="text-accent hover:underline">hello@unifyoverseas.com</a>
        </p>
      </main>
    </div>
  );
}
