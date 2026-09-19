"use client";

import { motion } from "framer-motion";
import { staggerViewport } from "@/components/animations/config";
import { usePrefersReducedMotion } from "@/components/animations/use-prefers-reduced-motion";

/**
 * Decorative connecting line drawn across the process steps on desktop,
 * animating in sync with the steps' own scroll-triggered reveal.
 */
export function ProcessConnector() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 hidden h-[2px] w-full overflow-visible lg:block"
      viewBox="0 0 100 1"
      preserveAspectRatio="none"
    >
      <motion.line
        x1="0"
        y1="0.5"
        x2="100"
        y2="0.5"
        stroke="var(--color-accent-brand)"
        strokeOpacity="0.3"
        strokeWidth="0.6"
        initial={reduceMotion ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={staggerViewport}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
