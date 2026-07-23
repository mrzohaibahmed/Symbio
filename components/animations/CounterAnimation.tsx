"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { easeOutExpo, motionDuration } from "./config";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";
import { cn } from "@/utils";

export interface CounterAnimationProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Animates a number once when it enters the viewport.
 * Instantly shows the final value when reduced motion is preferred.
 */
export function CounterAnimation({
  value,
  prefix,
  suffix,
  duration = motionDuration.counter,
  className,
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.55 });
  const reduceMotion = usePrefersReducedMotion();
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (next) => {
      setDisplay(next);
    });
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (reduceMotion) {
      motionValue.set(value);
      setDisplay(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: easeOutExpo,
    });

    return controls.stop;
  }, [duration, isInView, motionValue, reduceMotion, value]);

  return (
    <motion.span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
