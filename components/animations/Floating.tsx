"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export interface FloatingProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children?: ReactNode;
  /** Vertical travel in pixels — keep small for enterprise UI */
  amplitude?: number;
  /** Full cycle duration in seconds */
  duration?: number;
  delay?: number;
}

/**
 * Subtle continuous float using transform only.
 * Disabled when prefers-reduced-motion is set.
 */
export function Floating({
  children,
  className,
  amplitude = 6,
  duration = 5.5,
  delay = 0,
  ...props
}: FloatingProps) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} {...(props as HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
