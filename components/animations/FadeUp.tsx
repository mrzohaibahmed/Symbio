"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  createTransition,
  defaultViewport,
  fadeUpVariants,
  motionDuration,
  reducedMotionVariants,
} from "./config";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = motionDuration.base,
  y = 20,
  ...props
}: FadeUpProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={reduceMotion ? reducedMotionVariants : fadeUpVariants(y)}
      transition={createTransition(reduceMotion ? motionDuration.fast : duration, delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
