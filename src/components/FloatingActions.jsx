import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3 max-sm:bottom-4">
      <AnimatePresence>
        {show ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll back to top"
            className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="size-5" aria-hidden="true" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <a
        href="https://wa.me/919800000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Unify Overseas on WhatsApp"
        className="animate-gold-pulse grid size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
      </a>
    </div>
  );
}
