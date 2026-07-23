import type { Service } from "@/types";
import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { RelatedServiceCard, CaseStudyCard } from "@/components/cards";
import { getRelatedServices } from "@/data";

export function ServiceIndustriesSection({ service }: { service: Service }) {
  return (
    <Section aria-labelledby="service-industries-heading" muted>
      <FadeUp>
        <SectionHeading
          id="service-industries-heading"
          eyebrow="Industries Served"
          title="Where this service creates impact"
          align="center"
        />
      </FadeUp>
      <ul className="flex flex-wrap justify-center gap-3">
        {service.industries.map((industry) => (
          <li
            key={industry}
            className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
          >
            {industry}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ServiceRelatedSection({ service }: { service: Service }) {
  const related = getRelatedServices(service, 3);

  if (related.length === 0) return null;

  return (
    <Section aria-labelledby="service-related-heading">
      <FadeUp>
        <SectionHeading
          id="service-related-heading"
          eyebrow="Related Services"
          title="Complementary capabilities"
          description="Explore related services that often pair well with this engagement."
          align="center"
        />
      </FadeUp>
      <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {related.map((item) => (
          <StaggerItem key={item.id}>
            <RelatedServiceCard service={item} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

export function ServiceCaseStudySection({ service }: { service: Service }) {
  return (
    <Section aria-labelledby="service-case-study-heading" muted>
      <FadeUp>
        <SectionHeading
          id="service-case-study-heading"
          eyebrow="Proof"
          title="Case study preview"
          className="sr-only"
        />
      </FadeUp>
      <CaseStudyCard caseStudy={service.caseStudy} />
    </Section>
  );
}
