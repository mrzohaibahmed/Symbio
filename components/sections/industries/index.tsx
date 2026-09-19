"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { portfolioContent, portfolioEngagements } from "@/data";
import { industriesHeaderContent, industriesData } from "./constants";
import { IndustryNav } from "./IndustryNav";
import { IndustryPreviewPanel } from "./IndustryPreviewPanel";
import type { IndustriesSectionProps } from "./types";

export function IndustriesSection({
  className,
  showEngagements = false,
}: IndustriesSectionProps) {
  const [activeId, setActiveId] = React.useState<string>(industriesData[0].id);

  const activeIndustry =
    industriesData.find((item) => item.id === activeId) || industriesData[0];

  return (
    <Section aria-labelledby="sectors-heading" className={className}>
      {/* Selected Engagements Portfolio (When explicitly enabled for /industries page) */}
      {showEngagements ? (
        <div className="mb-20 border-b border-border/40 pb-16">
          <FadeUp>
            <SectionHeading
              id="portfolio-heading"
              eyebrow={portfolioContent.eyebrow}
              title={portfolioContent.title}
              description={portfolioContent.description}
              align="left"
            />
          </FadeUp>

          <StaggerContainer className="mt-10 divide-y divide-border/40 border-y border-border/40">
            {portfolioEngagements.map((item) => (
              <StaggerItem key={item.id}>
                <article className="group py-7 transition-colors duration-200">
                  <div className="grid gap-6 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-5">
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent mb-1">
                        {item.category}
                      </span>
                      <h3 className="heading-font text-xl font-bold text-accent md:text-2xl">
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
        </div>
      ) : null}

      {/* Main Enterprise "Sectors & Industry Experience" Explorer */}
      <div className="relative">
        {/* Subtle Ambient Background Depth & Architectural Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-6 -top-12 -bottom-12 rounded-3xl pattern-grid opacity-30"
        />

        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          {/* LEFT SIDE (40% Desktop - Sticky Header & Stats) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeUp>
              <span className="eyebrow block mb-3 text-accent">
                {industriesHeaderContent.label}
              </span>
              <h2
                id="sectors-heading"
                className="heading-font text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.6rem] lg:leading-[1.12]"
              >
                {industriesHeaderContent.title}
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {industriesHeaderContent.description}
              </p>
            </FadeUp>

            {/* Small Trust Statistics */}
            <FadeUp delay={0.15}>
              <div className="mt-8 grid grid-cols-3 gap-3 border-y border-border/50 py-6">
                {industriesHeaderContent.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="heading-font block text-2xl font-extrabold text-accent md:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-muted-foreground leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* CTA Button */}
            <FadeUp delay={0.25}>
              <div className="mt-8">
                <Link
                  href={industriesHeaderContent.ctaHref}
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]"
                >
                  <span>{industriesHeaderContent.ctaLabel}</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT SIDE (60% Desktop - Interactive Nav & Dynamic Preview) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Interactive 2-Column Vertical Navigation */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Select Industry Sector ({industriesData.length})
                </span>
                <span className="hidden sm:inline-block text-xs font-medium text-accent">
                  Interactive Preview Below
                </span>
              </div>
              <IndustryNav
                industries={industriesData}
                activeId={activeId}
                onSelect={setActiveId}
              />
            </div>

            {/* Dynamic Preview Panel */}
            <IndustryPreviewPanel industry={activeIndustry} />
          </div>
        </div>
      </div>
    </Section>
  );
}
