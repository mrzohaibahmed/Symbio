import type { TimelineItem } from "@/types";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { cn } from "@/utils";

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

/**
 * Vertical corporate timeline for journey / story narratives.
 */
export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 md:left-1/2 md:-translate-x-px"
      />

      <StaggerContainer className="space-y-8">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <StaggerItem key={item.id}>
              <article
                className={cn(
                  "relative grid gap-4 md:grid-cols-2 md:gap-10",
                  !isEven && "md:[&>*:first-child]:order-2",
                )}
              >
                <div
                  className={cn(
                    "hidden md:block",
                    isEven ? "text-right" : "text-left",
                  )}
                >
                  <FadeUp>
                    <p className="heading-font text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                      {item.year}
                    </p>
                    <h3 className="heading-font mt-2 text-xl font-semibold text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </FadeUp>
                </div>

                <div className="relative pl-12 md:pl-0">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-card text-xs font-bold text-primary shadow-sm md:left-1/2 md:-translate-x-1/2"
                  >
                    {index + 1}
                  </span>

                  <div className="rounded-xl border border-border bg-card p-5 shadow-sm md:hidden">
                    <p className="heading-font text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                      {item.year}
                    </p>
                    <h3 className="heading-font mt-2 text-lg font-semibold text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden md:block" aria-hidden="true" />
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
