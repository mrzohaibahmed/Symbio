"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/components/animations/use-prefers-reduced-motion";

/**
 * Gentle ambient glow for the closing CTA — a quiet "living" accent for the
 * final conversion moment, matching the hero's restrained orb treatment.
 */
export function CtaGlow() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-[80px]"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-gold/10 blur-[80px]"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </>
  );
}
