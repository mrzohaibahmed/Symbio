"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout";
import { Button } from "@/components/ui";
import { FadeUp } from "@/components/animations";
import { cn } from "@/utils";
import { whyChooseUsHeader, businessChallenges } from "./constants";
import { ChallengeNav } from "./ChallengeNav";
import { ChallengeDetail } from "./ChallengeDetail";
import type { WhyChooseUsSectionProps } from "./types";

/**
 * Premium Enterprise Business Challenge Explorer.
 * Inspired by McKinsey, Accenture, Deloitte, EY, PwC, IBM Consulting, and BCG.
 */
export function WhyChooseUsSection({ className }: WhyChooseUsSectionProps) {
  const [activeId, setActiveId] = useState<string>(businessChallenges[0].id);

  const activeChallenge =
    businessChallenges.find((c) => c.id === activeId) || businessChallenges[0];

  return (
    <Section
      id="problems-we-solve"
      aria-labelledby="problems-we-solve-heading"
      dark
      className={cn("relative overflow-hidden py-16 md:py-24 lg:py-32", className)}
    >
      {/* Background Enhancements: Ambient radial lighting & subtle geometric grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft radial glow centers */}
        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-light/5 blur-3xl" />

        {/* Ultra-low opacity technical overlay grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN (35% on Desktop) - Sticky Intro & Vertical Navigation */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-6">
          <FadeUp>
            <SectionHeading
              id="problems-we-solve-heading"
              eyebrow={whyChooseUsHeader.eyebrow}
              title={whyChooseUsHeader.title}
              description={whyChooseUsHeader.description}
              align="left"
              light
            />

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="group rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-dark hover:shadow-accent/30 active:scale-[0.98]"
              >
                <Link href={whyChooseUsHeader.primaryCtaHref}>
                  <span>{whyChooseUsHeader.primaryCtaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>

              <Link
                href={whyChooseUsHeader.secondaryCtaHref}
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-white/80 hover:text-accent-light transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] py-2.5 px-3 rounded-xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>{whyChooseUsHeader.secondaryCtaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 text-accent-light" aria-hidden="true" />
              </Link>
            </div>
          </FadeUp>

          {/* Desktop & Tablet Vertical Editorial Navigation */}
          <div className="pt-4 border-t border-white/10 hidden sm:block">
            <h3 className="text-xs uppercase font-mono tracking-widest text-white/40 font-semibold mb-3 select-none">
              SELECT A BUSINESS CHALLENGE
            </h3>
            <ChallengeNav
              challenges={businessChallenges}
              activeId={activeId}
              onSelect={setActiveId}
            />
          </div>
        </div>

        {/* RIGHT COLUMN (65% on Desktop) - Dynamic Challenge Detail & Visual Panel */}
        <div className="lg:col-span-7">
          {/* Mobile Selector Accordion Header */}
          <div className="block sm:hidden mb-6">
            <label className="text-xs uppercase font-mono tracking-widest text-white/40 font-semibold mb-2 block">
              SELECT CHALLENGE
            </label>
            <div className="relative">
              <select
                value={activeId}
                onChange={(e) => setActiveId(e.target.value)}
                className="w-full bg-[#0E2749] text-white font-medium text-sm rounded-xl px-4 py-3 border border-white/20 appearance-none focus:outline-none focus:ring-2 focus:ring-accent pr-10"
              >
                {businessChallenges.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.number} {c.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60 pointer-events-none" />
            </div>
          </div>

          {/* Challenge Content & Dynamic Visual Display */}
          <ChallengeDetail challenge={activeChallenge} />
        </div>
      </div>
    </Section>
  );
}
