import type { Service } from "@/types";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp } from "@/components/animations";
import { ServiceFeature } from "@/components/cards";

export function ServiceOverviewSection({ service }: { service: Service }) {
  return (
    <Section aria-labelledby="service-overview-heading">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeUp>
          <SectionHeading
            id="service-overview-heading"
            eyebrow="Overview"
            title={`How ${service.title} helps your organization`}
            description={service.overview}
            className="mb-0"
          />
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="heading-font text-lg font-semibold text-foreground">
              At a glance
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {service.industries.map((industry) => (
                <li key={industry} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}

export function ServiceBenefitsSection({ service }: { service: Service }) {
  return (
    <Section aria-labelledby="service-benefits-heading" muted>
      <FadeUp>
        <SectionHeading
          id="service-benefits-heading"
          eyebrow="Business Benefits"
          title="Outcomes you can expect"
          description="Practical advantages our clients realize when this service is delivered with discipline."
          align="center"
        />
      </FadeUp>
      <ul className="grid gap-4 sm:grid-cols-2">
        {service.benefits.map((benefit) => (
          <ServiceFeature key={benefit} title={benefit} />
        ))}
      </ul>
    </Section>
  );
}

export function ServiceFeaturesSection({ service }: { service: Service }) {
  return (
    <Section aria-labelledby="service-features-heading">
      <FadeUp>
        <SectionHeading
          id="service-features-heading"
          eyebrow="Features"
          title="What’s included"
          description={`Core capabilities delivered as part of our ${service.title} engagement.`}
          align="center"
        />
      </FadeUp>
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {service.features.map((feature) => (
          <ServiceFeature key={feature} title={feature} />
        ))}
      </ul>
    </Section>
  );
}

export function ServiceProcessSection({ service }: { service: Service }) {
  return (
    <Section aria-labelledby="service-process-heading" muted>
      <FadeUp>
        <SectionHeading
          id="service-process-heading"
          eyebrow="Service Process"
          title="How we deliver"
          description="A clear, repeatable process designed to reduce risk and accelerate value."
          align="center"
        />
      </FadeUp>
      <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {service.process.map((step) => (
          <li
            key={step.id}
            className="rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <span className="heading-font inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {step.step}
            </span>
            <h3 className="heading-font mt-4 text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
