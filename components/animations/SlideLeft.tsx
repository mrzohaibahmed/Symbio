"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  createTransition,
  defaultViewport,
  motionDuration,
  reducedMotionVariants,
  slideVariants,
} from "./config";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export interface SlideLeftProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  x?: number;
}

export function SlideLeft({
  children,
  className,
  delay = 0,
  duration = motionDuration.base,
  x = 28,
  ...props
}: SlideLeftProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={reduceMotion ? reducedMotionVariants : slideVariants("x", x)}
      transition={createTransition(
        reduceMotion ? motionDuration.fast : duration,
        delay,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
