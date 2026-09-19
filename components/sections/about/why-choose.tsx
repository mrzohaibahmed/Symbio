import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { aboutPageContent, aboutWhyChoose } from "@/data";
import { featureIconMap } from "@/lib/icons";

export function AboutWhyChooseSection() {
  return (
    <Section aria-labelledby="about-why-heading">
      <FadeUp>
        <SectionHeading
          id="about-why-heading"
          eyebrow={aboutPageContent.whyEyebrow}
          title={aboutPageContent.whyTitle}
          description={aboutPageContent.whyDescription}
          align="center"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {aboutWhyChoose.map((feature) => {
          const Icon = featureIconMap[feature.icon];

          return (
            <StaggerItem key={feature.id}>
              <article className="h-full rounded-xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex items-center gap-3.5">
                  <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="heading-font text-lg font-semibold text-accent">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
