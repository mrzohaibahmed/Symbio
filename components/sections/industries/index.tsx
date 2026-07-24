import {
  ShoppingBag,
  Scale,
  HardHat,
  Factory,
  UtensilsCrossed,
  Shirt,
  Building2,
  Sparkles,
  Leaf,
  Droplets,
  HeartHandshake,
  Scissors,
  GraduationCap,
  Wifi,
  Hospital,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  portfolioContent,
  portfolioEngagements,
  sectorIndustriesData,
} from "@/data";
import type { IndustriesSectionProps } from "./types";

const sectorIconMap: Record<string, LucideIcon> = {
  ShoppingBag,
  Scale,
  HardHat,
  Factory,
  UtensilsCrossed,
  Shirt,
  Building2,
  Sparkles,
  Leaf,
  Droplets,
  HeartHandshake,
  Scissors,
  GraduationCap,
  Wifi,
  Hospital,
};

export function IndustriesSection({
  className,
  showEngagements = false,
}: IndustriesSectionProps) {
  return (
    <Section aria-labelledby="sectors-heading" className={className}>
      {/* Selected Engagements (Only when explicitly enabled) */}
      {showEngagements ? (
        <>
          <FadeUp>
            <SectionHeading
              id="portfolio-heading"
              eyebrow={portfolioContent.eyebrow}
              title={portfolioContent.title}
              description={portfolioContent.description}
              align="left"
            />
          </FadeUp>

          <StaggerContainer className="mt-12 divide-y divide-border/40 border-y border-border/40 mb-24">
            {portfolioEngagements.map((item) => (
              <StaggerItem key={item.id}>
                <article className="group py-8 transition-colors duration-200">
                  <div className="grid gap-6 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-5">
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                        {item.category}
                      </span>
                      <h3 className="heading-font text-xl font-bold text-foreground md:text-2xl">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-muted-foreground">
                        {item.title}
                      </p>
                    </div>

                    <div className="md:col-span-4">
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <div className="md:col-span-3 md:text-right">
                      <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold text-accent">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Outcome: {item.outcome}</span>
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </>
      ) : null}

      {/* Enterprise "Sectors & Industry Experience" Grid */}
      <div>
        <FadeUp>
          <SectionHeading
            id="sectors-heading"
            eyebrow={portfolioContent.industriesEyebrow}
            title={portfolioContent.industriesTitle}
            description={portfolioContent.industriesDescription}
            align="left"
          />
        </FadeUp>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {sectorIndustriesData.map((item) => {
            const Icon = sectorIconMap[item.iconName] || Building2;

            return (
              <StaggerItem key={item.id}>
                <div className="group relative border-b border-border/40 pb-4 pt-2 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 text-accent transition-transform duration-200 group-hover:scale-110">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="heading-font text-base font-bold text-foreground transition-colors duration-200 group-hover:text-accent">
                      {item.title}
                    </span>
                  </div>
                  {/* Subtle underline hover animation */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}
