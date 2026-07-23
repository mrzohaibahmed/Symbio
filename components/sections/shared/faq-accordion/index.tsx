"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/types";
import { cn } from "@/utils";

export interface FAQAccordionProps {
  items: FAQ[];
  className?: string;
  headingLevel?: "h2" | "h3";
}

/**
 * Accessible FAQ accordion built on Radix with smooth open/close and enterprise styling.
 */
export function FAQAccordion({
  items,
  className,
  headingLevel = "h3",
}: FAQAccordionProps) {
  const Heading = headingLevel;

  if (items.length === 0) return null;

  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn("space-y-3.5", className)}
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:border-accent/30"
        >
          <Accordion.Header asChild>
            <Heading className="m-0 text-base font-semibold">
              <Accordion.Trigger
                className={cn(
                  "group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-foreground transition-colors",
                  "hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                )}
              >
                <span className="heading-font font-bold text-foreground text-base md:text-lg">{item.question}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </Accordion.Trigger>
            </Heading>
          </Accordion.Header>
          <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
            <p className="border-t border-border/60 px-6 py-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
