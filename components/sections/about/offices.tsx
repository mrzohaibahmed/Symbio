import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { OfficeCard } from "@/components/cards";
import { aboutPageContent, offices } from "@/data";

export function AboutOfficesSection() {
  return (
    <Section aria-labelledby="about-offices-heading" muted>
      <FadeUp>
        <SectionHeading
          id="about-offices-heading"
          eyebrow={aboutPageContent.officesEyebrow}
          title={aboutPageContent.officesTitle}
          description={aboutPageContent.officesDescription}
          align="center"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 lg:grid-cols-2">
        {offices.map((office) => (
          <StaggerItem key={office.id}>
            <OfficeCard office={office} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
