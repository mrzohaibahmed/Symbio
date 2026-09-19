"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils";
import { usePrefersReducedMotion } from "@/components/animations/use-prefers-reduced-motion";

export interface CarouselProps {
  itemCount: number;
  renderItem: (index: number) => React.ReactNode;
  /** Autoplay interval in ms. Omit to disable autoplay. */
  autoplayMs?: number;
  className?: string;
  itemClassName?: string;
  ariaLabel: string;
}

/**
 * Generic single-active-item carousel: slide transitions, autoplay with
 * hover/focus pause, drag-to-swipe, dot + arrow navigation. Reused by the
 * testimonials and case studies sections.
 */
export function Carousel({
  itemCount,
  renderItem,
  autoplayMs,
  className,
  itemClassName,
  ariaLabel,
}: CarouselProps) {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [paused, setPaused] = React.useState(false);
  const reduceMotion = usePrefersReducedMotion();

  const goTo = React.useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex((next + itemCount) % itemCount);
    },
    [itemCount],
  );

  React.useEffect(() => {
    if (!autoplayMs || paused || reduceMotion || itemCount <= 1) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % itemCount);
    }, autoplayMs);

    return () => window.clearInterval(timer);
  }, [autoplayMs, paused, reduceMotion, itemCount]);

  if (itemCount === 0) return null;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          drag={itemCount > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) goTo(index + 1, 1);
            else if (info.offset.x > 60) goTo(index - 1, -1);
          }}
          initial={reduceMotion ? false : { opacity: 0, x: direction * 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={cn("cursor-grab active:cursor-grabbing", itemClassName)}
        >
          {renderItem(index)}
        </motion.div>
      </AnimatePresence>

      {itemCount > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label={`Previous ${ariaLabel}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-200 hover:border-accent hover:text-accent"
            onClick={() => goTo(index - 1, -1)}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label={ariaLabel}>
            {Array.from({ length: itemCount }).map((_, itemIndex) => (
              <button
                key={itemIndex}
                type="button"
                role="tab"
                aria-selected={itemIndex === index}
                aria-label={`Go to slide ${itemIndex + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  itemIndex === index ? "w-8 bg-accent" : "w-2 bg-border hover:bg-accent/40",
                )}
                onClick={() => goTo(itemIndex, itemIndex > index ? 1 : -1)}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label={`Next ${ariaLabel}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-200 hover:border-accent hover:text-accent"
            onClick={() => goTo(index + 1, 1)}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
