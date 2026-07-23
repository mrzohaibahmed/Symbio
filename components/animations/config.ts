import type { Transition, Variants } from "framer-motion";

/** Enterprise easing — calm, decisive, never bouncy */
export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const motionDuration = {
  fast: 0.22,
  base: 0.45,
  slow: 0.65,
  counter: 1.5,
} as const;

export const defaultViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -40px 0px",
} as const;

export const staggerViewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -32px 0px",
} as const;

export function createTransition(
  duration: number = motionDuration.base,
  delay = 0,
): Transition {
  return {
    duration,
    delay,
    ease: easeOutExpo,
  };
}

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeUpVariants = (y = 20): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

export const slideVariants = (axis: "x" | "y", distance: number): Variants => ({
  hidden: { opacity: 0, [axis]: distance },
  visible: { opacity: 1, [axis]: 0 },
});

export const scaleVariants = (scale = 0.96): Variants => ({
  hidden: { opacity: 0, scale },
  visible: { opacity: 1, scale: 1 },
});

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: createTransition(motionDuration.base),
  },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
