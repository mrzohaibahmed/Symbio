"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { createTransition, motionDuration } from "./config";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";
import { cn } from "@/utils";

export interface HoverCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  /** Lift distance in px on hover */
  lift?: number;
  /** Subtle scale on hover — keep near 1.0 */
  scale?: number;
}

/**
 * Transform-only hover elevation for cards and media tiles.
 */
export function HoverCard({
  children,
  className,
  lift = 4,
  scale = 1.01,
  ...props
}: HoverCardProps) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return (
      <div
        className={cn("h-full", className)}
        {...(props as HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("h-full will-change-transform", className)}
      whileHover={{
        y: -lift,
        scale,
        transition: createTransition(motionDuration.fast),
      }}
      whileTap={{
        scale: 0.995,
        transition: createTransition(0.12),
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
