import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plane } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";

export function LoadingScreen() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reduced ? 250 : 1900);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="surface-navy fixed inset-0 z-100 flex flex-col items-center justify-center gap-8"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-card p-4 shadow-gold-glow"
          >
            <Logo size={76} />
          </motion.div>

          <div className="relative h-8 w-64 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-accent/30"
              aria-hidden="true"
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 text-accent"
              initial={{ x: -40 }}
              animate={{ x: 260 }}
              transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
            >
              <Plane className="size-6 rotate-45" />
            </motion.div>
          </div>

          <p className="font-display text-sm tracking-[0.35em] text-primary-foreground/70 uppercase">
            Unify Overseas
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
