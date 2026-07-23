import { Section, SectionHeading } from "@/components/layout";
import { FadeUp } from "@/components/animations";
import { Timeline } from "@/components/sections/shared";
import { aboutPageContent, companyJourney } from "@/data";

export function AboutJourneySection() {
  return (
    <Section aria-labelledby="about-journey-heading" muted>
      <FadeUp>
        <SectionHeading
          id="about-journey-heading"
          eyebrow={aboutPageContent.journeyEyebrow}
          title={aboutPageContent.journeyTitle}
          description={aboutPageContent.journeyDescription}
          align="center"
        />
      </FadeUp>
      <Timeline items={companyJourney} />
    </Section>
  );
}
