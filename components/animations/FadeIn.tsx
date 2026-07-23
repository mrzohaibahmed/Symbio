"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  createTransition,
  defaultViewport,
  fadeVariants,
  motionDuration,
} from "./config";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = motionDuration.base,
  ...props
}: FadeInProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeVariants}
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
