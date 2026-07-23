import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { homeServices } from "@/data";
import { serviceIconMap } from "@/lib/icons";
import { cn } from "@/utils";
import { servicesSectionContent } from "./constants";
import type { ServicesSectionProps } from "./types";

/**
 * Premium service cards with emerald accent hover effects.
 */
export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <Section aria-labelledby="services-heading" className={className} muted>
      <FadeUp>
        <SectionHeading
          id="services-heading"
          eyebrow={servicesSectionContent.eyebrow}
          title={servicesSectionContent.title}
          description={servicesSectionContent.description}
          align="center"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {homeServices.map((service) => {
          const Icon = serviceIconMap[service.icon];

          return (
            <StaggerItem key={service.id}>
              <article
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300",
                  "hover:-translate-y-1 hover:border-accent/25 hover:shadow-xl hover:shadow-accent/5",
                )}
              >
                <div className="mb-4 flex items-center gap-3.5">
                  <span className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="heading-font text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-200 hover:gap-3"
                >
                  Learn More
                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
