"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { createTransition, motionDuration } from "./config";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Soft route-enter transition for marketing pages.
 * Uses opacity + translateY only.
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname();
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key={pathname}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={createTransition(motionDuration.fast + 0.06)}
    >
      {children}
    </motion.div>
  );
}
