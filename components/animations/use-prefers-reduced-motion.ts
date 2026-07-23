"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Returns true when the user prefers reduced motion.
 * Defaults to false during SSR to avoid hydration mismatches, then syncs.
 */
export function usePrefersReducedMotion(): boolean {
  const reduced = useFramerReducedMotion();
  return Boolean(reduced);
}
