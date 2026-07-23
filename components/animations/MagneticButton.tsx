"use client";

import { useRef, type HTMLAttributes, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";
import { cn } from "@/utils";

export interface MagneticButtonProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  /** Max pull distance in px — keep subtle */
  strength?: number;
}

/**
 * Subtle magnetic pull toward the cursor for primary CTAs.
 * Disabled for reduced motion.
 */
export function MagneticButton({
  children,
  className,
  strength = 8,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  if (reduceMotion) {
    return (
      <div
        className={cn("inline-flex", className)}
        {...(props as HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    );
  }

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(offsetX, offsetY);
    const maxDistance = Math.max(rect.width, rect.height);

    if (distance > maxDistance) {
      x.set(0);
      y.set(0);
      return;
    }

    x.set((offsetX / maxDistance) * strength);
    y.set((offsetY / maxDistance) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex will-change-transform", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...props}
    >
      {children}
    </motion.div>
  );
}
