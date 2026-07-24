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
          align="left"
          light
        />
      </FadeUp>

      <StaggerContainer className="mt-12 grid gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUsFeatures.map((feature) => {
          const Icon = featureIconMap[feature.icon];

          return (
            <StaggerItem key={feature.id}>
              <article className="border-b border-white/10 pb-8">
                <div className="mb-4 flex items-center gap-3.5">
                  <span className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent-light">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="heading-font text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-white/70">
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
