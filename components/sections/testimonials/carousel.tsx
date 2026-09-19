"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Carousel } from "@/components/ui";
import { testimonials } from "@/data";

const AUTOPLAY_MS = 6000;

/**
 * Premium testimonial slider with large quotes and smooth transitions.
 */
export function TestimonialsCarousel() {
  return (
    <Carousel
      itemCount={testimonials.length}
      autoplayMs={AUTOPLAY_MS}
      ariaLabel="Testimonials"
      itemClassName="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
      renderItem={(index) => {
        const active = testimonials[index];

        return (
          <figure>
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
                <p className="heading-font font-bold text-foreground">{active.name}</p>
                <p className="text-sm text-muted-foreground">
                  {active.position}, {active.company}
                </p>
              </div>
            </figcaption>
          </figure>
        );
      }}
    />
  );
}
