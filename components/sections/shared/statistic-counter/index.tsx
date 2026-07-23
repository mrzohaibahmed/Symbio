"use client";

import { CounterAnimation } from "@/components/animations/CounterAnimation";
import type { Statistic } from "@/types";
import { cn } from "@/utils";

export interface StatisticCounterProps {
  statistic: Statistic;
  className?: string;
}

/**
 * Shared counter wrapper — uses enterprise CounterAnimation.
 */
export function StatisticCounter({
  statistic,
  className,
}: StatisticCounterProps) {
  return (
    <CounterAnimation
      className={cn(className)}
      value={statistic.value}
      prefix={statistic.prefix}
      suffix={statistic.suffix}
    />
  );
}
