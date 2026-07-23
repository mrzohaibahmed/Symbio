"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  createTransition,
  defaultViewport,
  motionDuration,
  reducedMotionVariants,
  scaleVariants,
} from "./config";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export interface ScaleInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  scale?: number;
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = motionDuration.base,
  scale = 0.96,
  ...props
}: ScaleInProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={reduceMotion ? reducedMotionVariants : scaleVariants(scale)}
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
