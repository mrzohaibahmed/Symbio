import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { homeIndustries } from "@/data";
import { industryIconMap } from "@/lib/icons";
import { cn } from "@/utils";
import { industriesSectionContent } from "./constants";
import type { IndustriesSectionProps } from "./types";

/**
 * Interactive industry cards with image overlay hover effects.
 */
export function IndustriesSection({ className }: IndustriesSectionProps) {
  return (
    <Section aria-labelledby="industries-heading" className={className}>
      <FadeUp>
        <SectionHeading
          id="industries-heading"
          eyebrow={industriesSectionContent.eyebrow}
          title={industriesSectionContent.title}
          description={industriesSectionContent.description}
          align="center"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {homeIndustries.map((industry) => {
          const Icon = industryIconMap[industry.icon];

          return (
            <StaggerItem key={industry.id}>
              <Link
                href={industry.href}
                className={cn(
                  "group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300",
                  "hover:-translate-y-1 hover:border-accent/25 hover:shadow-xl hover:shadow-primary/8",
                )}
              >
                <article>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-transparent transition-opacity duration-300 group-hover:from-brand-navy/80"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </span>
                      <h3 className="heading-font text-lg font-bold text-foreground">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
