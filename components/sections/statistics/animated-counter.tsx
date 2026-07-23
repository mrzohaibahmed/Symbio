"use client";

import { CounterAnimation } from "@/components/animations/CounterAnimation";
import type { StatItem } from "@/types";

interface AnimatedCounterProps {
  stat: StatItem;
}

/**
 * Statistics adapter — delegates to shared CounterAnimation.
 */
export function AnimatedCounter({ stat }: AnimatedCounterProps) {
  return (
    <CounterAnimation
      value={stat.value}
      prefix={stat.prefix}
      suffix={stat.suffix}
    />
  );
}
