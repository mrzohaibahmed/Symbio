import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { homeStats } from "@/data";
import { cn } from "@/utils";
import { AnimatedCounter } from "./animated-counter";
import { statisticsSectionContent } from "./constants";
import type { StatisticsSectionProps } from "./types";

/**
 * Full-width navy statistics section with animated counters.
 */
export function StatisticsSection({ className }: StatisticsSectionProps) {
  return (
    <Section
      aria-labelledby="statistics-heading"
      dark
      className={cn("pattern-dots", className)}
    >
      <FadeUp>
        <SectionHeading
          id="statistics-heading"
          eyebrow={statisticsSectionContent.eyebrow}
          title={statisticsSectionContent.title}
          description={statisticsSectionContent.description}
          align="center"
          light
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((stat) => (
          <StaggerItem key={stat.id}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent/25 hover:bg-white/8">
              <p className="heading-font text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                <AnimatedCounter stat={stat} />
              </p>
              <p className="mt-3 text-sm font-medium text-white/60">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
