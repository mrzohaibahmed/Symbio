import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { processSteps } from "@/data";
import { processSectionContent } from "./constants";
import type { ProcessSectionProps } from "./types";

/**
 * Horizontal stepper with navy-to-emerald gradient connectors.
 */
export function ProcessSection({ className }: ProcessSectionProps) {
  return (
    <Section
      aria-labelledby="process-heading"
      muted
      className={className}
    >
      <FadeUp>
        <SectionHeading
          id="process-heading"
          eyebrow={processSectionContent.eyebrow}
          title={processSectionContent.title}
          description={processSectionContent.description}
          align="left"
        />
      </FadeUp>

      <StaggerContainer className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => {
          const formattedNumber = String(step.step).padStart(2, "0");

          return (
            <StaggerItem key={step.id}>
              <article className="border-t-2 border-accent/40 pt-6">
                <span className="editorial-number block text-5xl font-extrabold text-accent/80 md:text-6xl">
                  {formattedNumber}
                </span>
                <h3 className="heading-font mt-4 text-xl font-bold text-foreground md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
