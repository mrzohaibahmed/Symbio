"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Users,
  Award,
  Timer,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import {
  certifications,
  certificationsSectionContent,
} from "@/data";

/* ──────────────────────────────────────────────────────────
   Trust metrics displayed below the preview panel
   ────────────────────────────────────────────────────────── */
const trustMetrics = [
  { value: "15+", label: "Industries Served", icon: Building2 },
  { value: "6+", label: "Strategic Partners", icon: Users },
  { value: "5", label: "Core Practices", icon: Award },
  { value: "24 Hours", label: "Response Time", icon: Timer },
];

/**
 * Interactive split-layout Certifications section.
 * Mirrors the Services section design language:
 * Left 35% vertical navigation  |  Right 65% dynamic preview pane.
 */
export function AboutCertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = certifications[activeIndex];

  return (
    <Section aria-labelledby="about-certifications-heading">
      {/* ─── Section Header ─── */}
      <FadeUp>
        <SectionHeading
          id="about-certifications-heading"
          eyebrow={certificationsSectionContent.eyebrow}
          title={certificationsSectionContent.title}
          description={certificationsSectionContent.description}
          align="left"
        />
      </FadeUp>

      {/* ─── 35 / 65 Interactive Split ─── */}
      <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">

        {/* LEFT COLUMN: Vertical Interactive Navigation (35% / 4 cols) */}
        <div
          role="tablist"
          aria-label="Certifications Navigation"
          className="lg:col-span-4 divide-y divide-border/40 border-y border-border/40"
        >
          {certifications.map((cert, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={cert.id}
                role="tab"
                id={`cert-tab-${cert.id}`}
                aria-selected={isActive}
                aria-controls={`cert-panel-${cert.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActiveIndex(
                      (index + 1) % certifications.length,
                    );
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActiveIndex(
                      (index - 1 + certifications.length) %
                        certifications.length,
                    );
                  }
                }}
                className={cn(
                  "group relative flex w-full items-start justify-between gap-3 py-4 px-4 text-left transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-accent/5 text-accent font-bold"
                    : "text-foreground/75 hover:text-foreground hover:bg-muted/40",
                )}
              >
                {/* 3px Active / Hover Accent Indicator Bar */}
                <motion.span
                  className={cn(
                    "absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-full transition-all duration-300",
                    isActive
                      ? "bg-accent opacity-100 shadow-[0_0_10px_rgba(227,6,19,0.4)]"
                      : "bg-accent/30 opacity-0 group-hover:opacity-100"
                  )}
                  initial={false}
                  animate={{
                    scaleY: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                />

                <div className="flex items-start gap-3.5 min-w-0 pl-2.5 transition-transform duration-300 group-hover:translate-x-1.5">
                  <span
                    className={cn(
                      "font-mono text-xs font-bold tracking-widest pt-1 shrink-0 transition-colors",
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground group-hover:text-accent",
                    )}
                  >
                    {cert.number}
                  </span>

                  <div className="min-w-0">
                    <h3
                      className={cn(
                        "heading-font text-base font-bold transition-colors md:text-lg leading-snug",
                        isActive
                          ? "text-foreground font-extrabold"
                          : "text-foreground/80 group-hover:text-foreground",
                      )}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-0.5 text-xs transition-colors",
                        isActive
                          ? "text-accent font-semibold"
                          : "text-muted-foreground",
                      )}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <ArrowRight
                  className={cn(
                    "h-4 w-4 shrink-0 mt-1.5 transition-all duration-300",
                    isActive
                      ? "text-accent translate-x-1"
                      : "text-muted-foreground/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-1",
                  )}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Dynamic Preview Pane (65% / 8 cols) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              role="tabpanel"
              id={`cert-panel-${active.id}`}
              aria-labelledby={`cert-tab-${active.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Badge Row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-base font-extrabold text-white shadow-md shadow-accent/20">
                  {active.badgeLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{active.trustBadge}</span>
                </span>
                <span className="font-mono text-xs font-bold text-muted-foreground">
                  CREDENTIAL {active.number} / {String(certifications.length).padStart(2, "0")}
                </span>
              </div>

              {/* Title & Year */}
              <div>
                <h3 className="heading-font text-2xl font-extrabold text-accent md:text-3xl lg:text-4xl">
                  {active.title}
                </h3>
                <p className="mt-2 text-lg font-semibold text-accent leading-snug">
                  {active.issuer} · Est. {active.year}
                </p>
              </div>

              {/* Client Value Description */}
              <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">
                {active.clientValue}
              </p>

              {/* Benefits Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  What This Means for Our Clients
                </h4>
                <ul className="space-y-2.5">
                  {active.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm font-medium text-foreground"
                    >
                      <CheckCircle2
                        className="h-4.5 w-4.5 shrink-0 text-accent mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <Button asChild size="lg" className="rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-dark hover:shadow-accent/30 active:scale-[0.98]">
                  <Link href="/contact">
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ─── Trust Metrics (Typography-Based, No Cards) ─── */}
      <FadeUp>
        <div className="mt-20 border-t border-border/40 pt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="border-l-2 border-accent/30 pl-5">
                <span className="heading-font text-3xl font-extrabold text-accent md:text-4xl">
                  {metric.value}
                </span>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* ─── Bottom Trust Statement ─── */}
      <FadeUp>
        <div className="mt-20 pt-12 border-t border-border/40">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">
                Governance & Assurance
              </span>
              <h3 className="heading-font text-2xl font-extrabold text-accent md:text-3xl lg:text-4xl whitespace-pre-line">
                {certificationsSectionContent.bottomTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg max-w-2xl">
                {certificationsSectionContent.bottomDescription}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
              <Button asChild size="lg" className="rounded-xl px-7 font-bold">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl px-7 font-bold"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
