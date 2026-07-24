import { Section, SectionHeading } from "@/components/layout";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { hiringProcess } from "@/data";
import { cn } from "@/utils";

export interface HiringProcessSectionProps {
  className?: string;
}

export function HiringProcessSection({ className }: HiringProcessSectionProps) {
  return (
    <Section aria-labelledby="hiring-process-heading" className={cn("relative overflow-hidden", className)}>
      <FadeUp>
        <SectionHeading
          id="hiring-process-heading"
          eyebrow="Hiring Process"
          title="What to expect"
          description="A clear, respectful process designed to find mutual fit."
          align="center"
        />
      </FadeUp>

      <StaggerContainer className="mt-12 lg:mt-16">
        <ol className="grid gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {hiringProcess.map((step, index) => {
            const isLast = index === hiringProcess.length - 1;
            const hasTabletConnector = index === 0 || index === 2;

            return (
              <StaggerItem key={step.id} className="h-full">
                <div className="group relative flex flex-col h-full">
                  {/* Step Indicator Header with Responsive Connectors */}
                  <div className="relative flex items-center">
                    {/* Mobile Vertical Timeline Line (under 768px, steps 1-3) */}
                    {!isLast && (
                      <div
                        aria-hidden="true"
                        className="md:hidden absolute top-[22px] left-[21px] bottom-[-32px] w-[2px] bg-border/60 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-accent/50 z-0"
                      />
                    )}

                    {/* Tablet Horizontal Timeline Line (768px-1023px, steps 1 & 3) */}
                    {hasTabletConnector && (
                      <div
                        aria-hidden="true"
                        className="hidden md:block lg:hidden absolute top-[21px] left-[22px] w-[calc(100%+1.5rem)] h-[2px] bg-border/60 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-accent/50 z-0"
                      />
                    )}

                    {/* Desktop Horizontal Timeline Line (1024px+, steps 1-3) */}
                    {!isLast && (
                      <div
                        aria-hidden="true"
                        className="hidden lg:block absolute top-[21px] left-[22px] w-[calc(100%+1.5rem)] h-[2px] bg-border/60 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-accent/50 z-0"
                      />
                    )}

                    {/* Numbered Indicator Circle */}
                    <div className="relative z-10 flex shrink-0 items-center justify-center">
                      <span className="heading-font inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-card text-sm font-bold text-foreground shadow-xs transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-accent/60 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-4 group-hover:ring-accent/15 group-hover:scale-[1.04]">
                        {step.step}
                      </span>
                    </div>

                    {/* Step Title for Mobile (displayed beside indicator) */}
                    <h3 className="heading-font ml-4 text-base font-bold tracking-tight text-foreground md:hidden">
                      {step.title}
                    </h3>
                  </div>

                  {/* Card Content Container */}
                  <div className="mt-3 md:mt-5 flex-1 flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-xs transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:border-accent/35 group-hover:shadow-md group-hover:shadow-accent/5 ml-15 md:ml-0">
                    <div>
                      {/* Step Title for Tablet & Desktop (displayed inside card top) */}
                      <h3 className="heading-font hidden md:block text-lg font-bold tracking-tight text-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-accent-light">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-muted-foreground max-w-prose md:mt-2.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </ol>
      </StaggerContainer>
    </Section>
  );
}
