import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { processSteps } from "@/data";
import { cn } from "@/utils";
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
          align="center"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <StaggerItem key={step.id}>
            <article
              className={cn(
                "relative h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300",
                "hover:-translate-y-1 hover:border-accent/25 hover:shadow-lg",
              )}
            >
              <div className="mb-4 flex items-center gap-3.5">
                <span className="heading-font shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark text-base font-bold text-white shadow-md shadow-accent/20">
                  {step.step}
                </span>
                <h3 className="heading-font text-xl font-bold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
