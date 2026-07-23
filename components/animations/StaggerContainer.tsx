"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  createTransition,
  fadeUpVariants,
  motionDuration,
  reducedMotionVariants,
  staggerItemVariants,
  staggerViewport,
} from "./config";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export { staggerItemVariants };

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.04,
  ...props
}: StaggerContainerProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={staggerViewport}
      variants={{
        hidden: {},
        visible: {
          transition: reduceMotion
            ? { staggerChildren: 0.02, delayChildren: 0 }
            : { staggerChildren: stagger, delayChildren },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduceMotion
          ? {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: createTransition(motionDuration.fast),
              },
            }
          : staggerItemVariants
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItemFadeUp({
  children,
  className,
  y = 16,
  ...props
}: HTMLMotionProps<"div"> & { y?: number }) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduceMotion
          ? reducedMotionVariants
          : {
              ...fadeUpVariants(y),
              visible: {
                opacity: 1,
                y: 0,
                transition: createTransition(motionDuration.base),
              },
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
