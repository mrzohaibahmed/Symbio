"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import { servicesSectionContent } from "./constants";
import type { ServicesSectionProps } from "./types";

export interface InteractiveServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  badge: string;
  benefits: string[];
  image: string;
  imageAlt: string;
}

const interactiveServices: InteractiveServiceItem[] = [
  {
    id: "accounting-bookkeeping",
    number: "01",
    title: "Accounting & Bookkeeping",
    slug: "accounting-bookkeeping",
    shortDescription:
      "Helping businesses maintain accurate financial records while improving operational transparency and compliance.",
    description:
      "We provide complete bookkeeping, accounts management, monthly ledgers, bank reconciliations, and financial statement preparation so business owners gain 100% clarity over profitability, expenses, and cash flow.",
    badge: "100% Audit Readiness",
    benefits: [
      "Accurate Bookkeeping & Monthly Ledgers",
      "Financial Statements & Profit/Loss Tracking",
      "Payroll & Expense Reconciliation",
      "Regulatory Compliance & Clean Records",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial ledgers and bookkeeping reports on desk",
  },
  {
    id: "tax-advisory-compliance",
    number: "02",
    title: "Tax Advisory & Compliance",
    slug: "tax-advisory-compliance",
    shortDescription:
      "Strategic tax planning, corporate return filings, withholding tax management, and FBR/tax authority representation.",
    description:
      "Our tax experts safeguard your enterprise from non-compliance risks, penalties, and tax disputes while structuring your transactions efficiently under applicable corporate and sales tax laws.",
    badge: "Zero Non-Compliance Risk",
    benefits: [
      "Corporate & Individual Income Tax Returns",
      "Sales Tax & Provincial Revenue Filings",
      "Tax Opinions & Transaction Structuring",
      "Audit Representation & Notice Resolution",
    ],
    image:
      "https://images.unsplash.com/photo-1554224311-beee4ece0eb3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Corporate meeting discussing tax compliance documents",
  },
  {
    id: "audit-assurance",
    number: "03",
    title: "Audit & Assurance Services",
    slug: "audit-assurance",
    shortDescription:
      "Independent financial audits, internal control reviews, and risk assurance for boards, investors, and stakeholders.",
    description:
      "We deliver objective audit and assurance engagements that enhance financial integrity, strengthen internal controls, verify asset valuations, and build stakeholder confidence.",
    badge: "Rigorous Stakeholder Trust",
    benefits: [
      "Statutory Annual Financial Audits",
      "Internal Controls Assessment & Review",
      "Fraud Risk & Governance Reviews",
      "Special Purpose & Due Diligence Audits",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business analytics and audit review dashboard",
  },
  {
    id: "business-financial-advisory",
    number: "04",
    title: "Business & Financial Advisory",
    slug: "business-financial-advisory",
    shortDescription:
      "Capital advisory, CFO services, cash flow forecasting, and financial modeling for sustainable corporate growth.",
    description:
      "Strategic advisory for expanding mid-market companies and enterprises. We help leadership model multi-year financials, optimize working capital, evaluate investments, and structure growth strategies.",
    badge: "Strategic Capital Alignment",
    benefits: [
      "Virtual CFO & Strategic Planning",
      "Cash Flow & Working Capital Optimization",
      "Financial Modeling & Budgeting",
      "Valuation & Capital Structuring",
    ],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Executive discussion and strategic corporate planning",
  },
  {
    id: "corporate-advisory-compliance",
    number: "05",
    title: "Corporate Advisory & Compliance",
    slug: "corporate-advisory-compliance",
    shortDescription:
      "Corporate formation, SECP filings, governance frameworks, and legal risk management for enterprise mandates.",
    description:
      "We navigate complex corporate regulatory landscapes, handling SECP incorporations, annual statutory filings, board governance, joint venture agreements, and regulatory compliance.",
    badge: "Seamless SECP Compliance",
    benefits: [
      "SECP Company Incorporation & Filings",
      "Corporate Secretarial Services",
      "Joint Ventures & Commercial Contracts",
      "Governance & Board Compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Corporate strategy meeting and legal agreements",
  },
  {
    id: "erp-implementation-automation",
    number: "06",
    title: "ERP Implementation & Automation",
    slug: "erp-implementation-automation",
    shortDescription:
      "Modern ERP setup, digital invoicing integration, POS systems, and process automation for streamlined operations.",
    description:
      "Transform manual spreadsheet-heavy processes into unified cloud ERP workflows. We implement customized ERP, digital invoicing, POS systems, and automated approval pipelines.",
    badge: "70% Operational Gain",
    benefits: [
      "Customized ERP Setup & Integration",
      "FBR Digital Invoicing & POS Sync",
      "Automated Approval Workflows",
      "Inventory & Supply Chain Tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Digital transformation and ERP technology dashboard",
  },
  {
    id: "additional-solutions",
    number: "07",
    title: "Additional Solutions",
    slug: "additional-solutions",
    shortDescription:
      "Customized advisory, specialized compliance, IT security consulting, and bespoke enterprise solutions.",
    description:
      "Tailored consulting services designed to address unique industry hurdles, specialized regulatory mandates, cybersecurity assessments, and bespoke business transformations.",
    badge: "Tailored Enterprise Focus",
    benefits: [
      "Tailored Cross-Industry Solutions",
      "Special Project Consulting",
      "IT Security & Risk Assessment",
      "Custom Advisory Mandates",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cross-functional consulting team collaborating",
  },
];

/**
 * Interactive split-layout ServicesSection inspired by top consulting firms.
 */
export function ServicesSection({ className }: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = interactiveServices[activeIndex];

  return (
    <Section aria-labelledby="services-heading" className={className} muted>
      <FadeUp>
        <SectionHeading
          id="services-heading"
          eyebrow={servicesSectionContent.eyebrow}
          title={servicesSectionContent.title}
          description={servicesSectionContent.description}
          align="left"
        />
      </FadeUp>

      <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
        {/* LEFT COLUMN: Vertical Interactive Navigation (35% / 4 Cols on lg) */}
        <div
          role="tablist"
          aria-label="Services Navigation"
          className="lg:col-span-4 divide-y divide-border/40 border-y border-border/40"
        >
          {interactiveServices.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={service.id}
                role="tab"
                id={`service-tab-${service.id}`}
                aria-selected={isActive}
                aria-controls={`service-panel-${service.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActiveIndex((index + 1) % interactiveServices.length);
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActiveIndex(
                      (index - 1 + interactiveServices.length) %
                        interactiveServices.length
                    );
                  }
                }}
                className={cn(
                  "group relative flex w-full items-center justify-between py-4 px-4 text-left transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-accent/5 text-accent font-bold"
                    : "text-foreground/75 hover:text-foreground hover:bg-muted/40"
                )}
              >
                {/* 3px Active / Hover Accent Indicator Bar */}
                <motion.span
                  className={cn(
                    "absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-full transition-all duration-300",
                    isActive
                      ? "bg-accent opacity-100 shadow-[0_0_10px_rgba(15,157,122,0.4)]"
                      : "bg-accent/30 opacity-0 group-hover:opacity-100"
                  )}
                  initial={false}
                  animate={{
                    scaleY: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                />

                <div className="flex items-baseline gap-3.5 pl-2.5 transition-transform duration-300 group-hover:translate-x-1.5">
                  <span
                    className={cn(
                      "font-mono text-xs font-bold tracking-widest transition-colors",
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground group-hover:text-accent"
                    )}
                  >
                    {service.number}
                  </span>
                  <h3
                    className={cn(
                      "heading-font text-base font-bold transition-colors md:text-lg",
                      isActive
                        ? "text-foreground font-extrabold"
                        : "text-foreground/80 group-hover:text-foreground"
                    )}
                  >
                    {service.title}
                  </h3>
                </div>

                <ArrowRight
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-300",
                    isActive
                      ? "text-accent translate-x-1"
                      : "text-muted-foreground/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  )}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Dynamic Preview Pane (65% / 8 Cols on lg) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              role="tabpanel"
              id={`service-panel-${activeService.id}`}
              aria-labelledby={`service-tab-${activeService.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 lg:grid-cols-12 lg:items-center"
            >
              {/* Content Detail */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{activeService.badge}</span>
                  </span>
                  <span className="font-mono text-xs font-bold text-muted-foreground">
                    SERVICE {activeService.number} / 07
                  </span>
                </div>

                <h3 className="heading-font text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl">
                  {activeService.title}
                </h3>

                <p className="text-lg font-semibold text-accent leading-snug">
                  {activeService.shortDescription}
                </p>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {activeService.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Value & Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.benefits.map((benefit, idx) => (
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

                <div className="pt-4">
                  <Button asChild size="lg" className="rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-dark hover:shadow-accent/30 active:scale-[0.98]">
                    <Link href={`/services/${activeService.slug}`}>
                      <span>Explore {activeService.title}</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Dynamic Image Container */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] border border-border/40 shadow-xl group">
                  <Image
                    src={activeService.image}
                    alt={activeService.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
