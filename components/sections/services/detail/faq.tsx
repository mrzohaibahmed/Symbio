import type { Service } from "@/types";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp } from "@/components/animations";
import { FAQAccordion } from "@/components/sections/shared";
import { getFaqsByIds } from "@/data";

export function ServiceFaqSection({ service }: { service: Service }) {
  const items = getFaqsByIds(service.faqIds);

  return (
    <Section aria-labelledby="service-faq-heading">
      <FadeUp>
        <SectionHeading
          id="service-faq-heading"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description={`Common questions about ${service.title}.`}
          align="center"
        />
      </FadeUp>
      <div className="mx-auto max-w-3xl">
        <FAQAccordion items={items} />
      </div>
    </Section>
  );
}
