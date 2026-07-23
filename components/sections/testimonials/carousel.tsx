"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data";
import { cn } from "@/utils";

const AUTOPLAY_MS = 6000;

/**
 * Premium testimonial slider with large quotes and smooth transitions.
 */
export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;
  const active = testimonials[index];

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex((next + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  return (
    <div
      className="relative"
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
        <motion.figure
          key={active.id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
        >
          <Quote className="mb-4 h-8 w-8 text-accent/30" aria-hidden="true" />

          <blockquote className="text-pretty text-lg leading-relaxed text-foreground md:text-xl">
            &ldquo;{active.review}&rdquo;
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent/20">
              <Image
                src={active.photo}
                alt={active.photoAlt}
                fill
                loading="lazy"
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="heading-font font-bold text-foreground">
                {active.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {active.position}, {active.company}
              </p>
            </div>
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-200 hover:border-accent hover:text-accent"
          onClick={() => goTo(index - 1, -1)}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={itemIndex === index}
              aria-label={`Show testimonial from ${item.name}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                itemIndex === index
                  ? "w-8 bg-accent"
                  : "w-2 bg-border hover:bg-accent/40",
              )}
              onClick={() => goTo(itemIndex, itemIndex > index ? 1 : -1)}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-200 hover:border-accent hover:text-accent"
          onClick={() => goTo(index + 1, 1)}
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
