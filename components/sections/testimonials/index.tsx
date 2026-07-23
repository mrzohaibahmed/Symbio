import { Section, SectionHeading } from "@/components/layout";
import { FadeUp } from "@/components/animations";
import { testimonialsSectionContent } from "./constants";
import { TestimonialsCarousel } from "./carousel";
import type { TestimonialsSectionProps } from "./types";

/**
 * Client testimonials carousel section.
 */
export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <Section
      aria-labelledby="testimonials-heading"
      muted
      className={className}
    >
      <FadeUp>
        <SectionHeading
          id="testimonials-heading"
          eyebrow={testimonialsSectionContent.eyebrow}
          title={testimonialsSectionContent.title}
          description={testimonialsSectionContent.description}
          align="center"
        />
      </FadeUp>

      <TestimonialsCarousel />
    </Section>
  );
}
