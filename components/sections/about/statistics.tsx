import { Section, SectionHeading } from "@/components/layout";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { StatisticCounter } from "@/components/sections/shared";
import { aboutPageContent, aboutStatistics } from "@/data";
import { cn } from "@/utils";

export function AboutStatisticsSection() {
  return (
    <Section
      aria-labelledby="about-stats-heading"
      className={cn(
        "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-primary)_92%,#111827)_0%,color-mix(in_srgb,var(--color-secondary)_75%,#111827)_100%)] text-white",
      )}
    >
      <FadeUp>
        <SectionHeading
          id="about-stats-heading"
          eyebrow="Impact"
          title={aboutPageContent.statsTitle}
          align="center"
          className="[&_h2]:text-white [&_p]:text-white/80 [&_p:first-child]:text-white/90"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {aboutStatistics.map((stat) => (
          <StaggerItem key={stat.id}>
            <div className="rounded-xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm">
              <p className="heading-font text-4xl font-semibold tracking-tight md:text-5xl">
                <StatisticCounter statistic={stat} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
