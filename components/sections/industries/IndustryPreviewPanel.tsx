"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/utils";
import type { IndustryItem } from "./types";

interface IndustryPreviewPanelProps {
  industry: IndustryItem;
  className?: string;
}

const trustBadges = [
  "Sector Specialists",
  "Regulatory Expertise",
  "Multi-Industry Experience",
  "Tailored Advisory Solutions",
] as const;

export function IndustryPreviewPanel({
  industry,
  className,
}: IndustryPreviewPanelProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={industry.id}
          id={`panel-${industry.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${industry.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group/panel overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-xl transition-all duration-300 md:p-8"
        >
          {/* Dynamic Cinematic Imagery */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-inner">
            <Image
              src={industry.image}
              alt={industry.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/panel:scale-[1.02]"
            />
            {/* Cinematic dark overlay & lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

            {/* Faint technical badge inside image */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span className="rounded-full bg-black/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-light backdrop-blur-md border border-white/10">
                {industry.title} Practice
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-widest text-white/50">
                SYMBIO ADVISORY // {industry.slug.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Large Industry Name & Summary */}
          <div className="mt-7">
            <h3 className="heading-font text-2xl font-extrabold text-accent md:text-3xl lg:text-4xl">
              {industry.title}
            </h3>
            <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {industry.executiveSummary}
            </p>
          </div>

          <hr className="my-6 border-border/40" />

          {/* Business Challenges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Sector Business Challenges
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex items-center gap-2 text-sm text-foreground/90 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="my-6 border-border/40" />

          {/* How Symbio Helps - Outline Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              How Symbio Helps
            </h4>
            <div className="flex flex-wrap gap-2">
              {industry.howSymbioHelps.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-border/80 bg-surface px-3.5 py-1.5 text-xs font-semibold text-foreground/80 transition-colors hover:border-accent hover:bg-accent/5 hover:text-accent"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <hr className="my-6 border-border/40" />

          {/* Industry Snapshot KPI Row */}
          <div className="rounded-xl border border-border/50 bg-muted/40 p-4 md:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Industries Snapshot
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xs font-medium text-muted-foreground">Businesses Served</span>
                <span className="heading-font text-base font-extrabold text-foreground">{industry.snapshot.businessesServed}</span>
              </div>
              <div>
                <span className="block text-xs font-medium text-muted-foreground">Typical Company Size</span>
                <span className="heading-font text-base font-extrabold text-foreground">{industry.snapshot.typicalCompanySize}</span>
              </div>
              <div>
                <span className="block text-xs font-medium text-muted-foreground">Core Services</span>
                <span className="heading-font text-base font-extrabold text-accent">{industry.snapshot.coreServices}</span>
              </div>
            </div>
          </div>

          {/* Industry CTA */}
          <div className="mt-7 flex items-center justify-between">
            <Link
              href={industry.ctaLink}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]"
            >
              <span>Explore {industry.title} Solutions</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Trust Elements beneath preview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-2 pt-1">
        {trustBadges.map((badge) => (
          <div key={badge} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden="true" />
            <span>{badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
