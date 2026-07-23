import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { CertificationCard } from "@/components/cards";
import { aboutPageContent, certifications } from "@/data";

export function AboutCertificationsSection() {
  return (
    <Section aria-labelledby="about-certifications-heading">
      <FadeUp>
        <SectionHeading
          id="about-certifications-heading"
          eyebrow={aboutPageContent.certificationsEyebrow}
          title={aboutPageContent.certificationsTitle}
          description={aboutPageContent.certificationsDescription}
          align="center"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {certifications.map((certification) => (
          <StaggerItem key={certification.id}>
            <CertificationCard certification={certification} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
