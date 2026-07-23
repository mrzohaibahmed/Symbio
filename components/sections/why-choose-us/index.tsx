import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { whyChooseUsFeatures } from "@/data";
import { featureIconMap } from "@/lib/icons";
import { cn } from "@/utils";
import { whyChooseUsContent } from "./constants";
import type { WhyChooseUsSectionProps } from "./types";

/**
 * Premium feature cards explaining why clients partner with Symbio.
 */
export function WhyChooseUsSection({ className }: WhyChooseUsSectionProps) {
  return (
    <Section
      aria-labelledby="why-choose-us-heading"
      dark
      className={className}
    >
      <FadeUp>
        <SectionHeading
          id="why-choose-us-heading"
          eyebrow={whyChooseUsContent.eyebrow}
          title={whyChooseUsContent.title}
          description={whyChooseUsContent.description}
          align="center"
          light
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {whyChooseUsFeatures.map((feature) => {
          const Icon = featureIconMap[feature.icon];

          return (
            <StaggerItem key={feature.id}>
              <article
                className={cn(
                  "h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300",
                  "hover:-translate-y-1 hover:border-accent/30 hover:bg-white/8",
                )}
              >
                <div className="mb-4 flex items-center gap-3.5">
                  <span className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="heading-font text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
