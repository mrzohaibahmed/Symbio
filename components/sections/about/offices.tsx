"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ArrowRight,
  Globe,
  Building2,
  X,
  Map as MapIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { offices, aboutPageContent } from "@/data";
import { cn } from "@/utils";
import type { Office } from "@/types";

const officeStats = [
  { value: "5", label: "Offices" },
  { value: "2", label: "Countries" },
  { value: "24/7", label: "Client Support" },
  { value: "Meetings", label: "By Appointment" },
];

export interface AboutOfficesSectionProps {
  className?: string;
}

/**
 * Enterprise Office Locator inspired by McKinsey, Accenture, Deloitte, EY, PwC, IBM Consulting.
 * 35% Left Sticky Navigation | 65% Right Dynamic Panel.
 */
export function AboutOfficesSection({ className }: AboutOfficesSectionProps = {}) {
  const defaultOffice = offices && offices.length > 0 ? offices[0] : null;
  const [activeId, setActiveId] = useState<string>(defaultOffice ? defaultOffice.id : "");
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  const activeOffice: Office | null =
    (offices && offices.find((o) => o.id === activeId)) || defaultOffice;

  if (!activeOffice) {
    return null;
  }

  return (
    <Section
      id="our-offices"
      aria-labelledby="about-offices-heading"
      className={cn("relative overflow-hidden py-16 md:py-24 lg:py-32 bg-background", className)}
    >
      {/* Subtle Background Radial Glow & Blueprint Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Redesigned Executive Header & Statistics Panel */}
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14 mb-14 lg:mb-16">
            {/* Left Header Block (~38% Width on Desktop) */}
            <div className="w-full lg:w-[38%] shrink-0">
              <SectionHeading
                id="about-offices-heading"
                eyebrow={aboutPageContent.officesEyebrow || "GLOBAL OFFICES"}
                title="Connect with Symbio Advisory"
                description={
                  aboutPageContent.officesDescription ||
                  "We maintain established advisory offices across key business hubs in Pakistan and the United Kingdom, delivering dedicated client support by appointment."
                }
                align="left"
                className="mb-0 max-w-full [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:leading-snug [&_p]:text-sm [&_p]:sm:text-base [&_p]:leading-relaxed [&_p]:mt-3"
              />
            </div>

            {/* Right Statistics Panel (~58% Width on Desktop) */}
            <div className="w-full lg:w-[58%] shrink-0">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-surface/90 border border-border/60 shadow-sm backdrop-blur-sm">
                {officeStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col justify-center px-1 sm:px-2">
                    <div
                      className={cn(
                        "heading-font font-extrabold text-foreground tracking-tight",
                        stat.value.length > 5 ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                      )}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground mt-1 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Two-Column Explorer Layout (35% Left / 65% Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-8">
          {/* LEFT COLUMN: Vertical Office Navigation (35% on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-4">
            <div className="text-xs uppercase font-mono tracking-widest text-muted-foreground font-semibold mb-3 select-none">
              SELECT AN OFFICE LOCATION
            </div>

            <nav className="divide-y divide-border/40 border-y border-border/40" aria-label="Office locations">
              {offices.map((office) => {
                const isActive = office.id === activeId;

                return (
                  <button
                    key={office.id}
                    onClick={() => setActiveId(office.id)}
                    onMouseEnter={() => setActiveId(office.id)}
                    onFocus={() => setActiveId(office.id)}
                    type="button"
                    className={cn(
                      "group relative w-full text-left py-4 px-4 transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer",
                      isActive
                        ? "bg-accent/5 text-accent font-bold"
                        : "text-foreground/75 hover:text-foreground hover:bg-muted/40"
                    )}
                    aria-current={isActive ? "true" : undefined}
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

                    <div className="pl-2.5 transition-transform duration-300 group-hover:translate-x-1.5 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            "heading-font text-base sm:text-lg font-bold tracking-tight transition-colors",
                            isActive ? "text-accent" : "text-foreground"
                          )}
                        >
                          {office.name}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.6875rem] font-semibold bg-accent/10 text-accent border border-accent/20">
                          {office.status || "Open by Appointment"}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-accent shrink-0" aria-hidden="true" />
                        <span>{office.city}, {office.country}</span>
                      </p>

                      {office.shortDescription && (
                        <p className="text-xs text-muted-foreground/80 line-clamp-1 pt-0.5">
                          {office.shortDescription}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* RIGHT COLUMN: Dynamic Office Preview Panel (65% on Desktop) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Large Hero Image Container */}
                <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-2xl lg:rounded-[24px] overflow-hidden group shadow-xl border border-border/40">
                  <Image
                    src={activeOffice.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"}
                    alt={activeOffice.imageAlt || `${activeOffice.name} office exterior`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority
                  />

                  {/* Soft Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                  {/* Glassmorphism Location Badge */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                      <Globe className="h-3.5 w-3.5 text-accent-light" aria-hidden="true" />
                      <span>{activeOffice.city.toUpperCase()}, {activeOffice.country.toUpperCase()}</span>
                    </span>
                  </div>

                  {/* Office Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                      {activeOffice.name} Office
                    </h3>
                    {activeOffice.shortDescription && (
                      <p className="text-sm sm:text-base text-white/80 mt-1 body-font">
                        {activeOffice.shortDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* Office Contact Information & Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-card border border-border/60 shadow-sm">
                  {/* Address */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent font-mono">
                      <Building2 className="h-4 w-4" aria-hidden="true" />
                      <span>Office Address</span>
                    </div>
                    <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                      {activeOffice.addressLine1}
                      {activeOffice.addressLine2 && <><br />{activeOffice.addressLine2}</>}
                      <br />
                      {activeOffice.city}{activeOffice.state ? `, ${activeOffice.state}` : ''} {activeOffice.postalCode}
                      <br />
                      {activeOffice.country}
                    </p>
                  </div>

                  {/* Contact Info & Hours */}
                  <div className="space-y-4">
                    {/* Working Hours */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent font-mono mb-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span>Business Hours</span>
                      </div>
                      <p className="text-sm text-foreground font-medium">
                        {activeOffice.workingHours}
                      </p>
                    </div>

                    {/* Phone & Email */}
                    <div className="space-y-1.5 text-sm font-medium">
                      <div className="flex items-center gap-2 text-foreground/90">
                        <Phone className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                        <a href={`tel:${activeOffice.phone}`} className="hover:text-accent transition-colors">
                          {activeOffice.phoneDisplay}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/90">
                        <Mail className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                        <a href={`mailto:${activeOffice.email}`} className="hover:text-accent transition-colors">
                          {activeOffice.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Available Services Pills */}
                {activeOffice.services && activeOffice.services.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-mono tracking-widest text-muted-foreground font-semibold select-none">
                      SERVICES AVAILABLE AT THIS OFFICE
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeOffice.services.map((service: string) => (
                        <span
                          key={service}
                          className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-border bg-background text-foreground/85 hover:border-accent hover:bg-accent/5 hover:text-accent transition-all duration-200"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions & CTAs */}
                <div className="pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Primary CTA */}
                    <Button asChild variant="primary" size="lg" className="shadow-md shadow-accent/15">
                      <Link href="/contact">
                        <span>Schedule a Consultation</span>
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>

                    {/* Secondary CTA: Get Directions */}
                    {activeOffice.directionsUrl && (
                      <Button asChild variant="outline" size="lg" className="gap-2">
                        <a href={activeOffice.directionsUrl} target="_blank" rel="noopener noreferrer">
                          <span>Get Directions</span>
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Interactive Map Modal Trigger */}
                  <button
                    onClick={() => setIsMapModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-dark transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
                  >
                    <MapIcon className="h-4 w-4" aria-hidden="true" />
                    <span>View Interactive Map</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightweight Interactive Map Modal (Triggered on Demand) */}
      <AnimatePresence>
        {isMapModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-surface">
                <div>
                  <h3 className="heading-font text-lg font-bold text-foreground">
                    {activeOffice.name} Office Map Preview
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {activeOffice.addressLine1}, {activeOffice.city}
                  </p>
                </div>
                <button
                  onClick={() => setIsMapModalOpen(false)}
                  className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close map modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Map Iframe */}
              <div className="relative aspect-[16/9] min-h-[350px] w-full bg-muted">
                <iframe
                  title={activeOffice.mapLabel}
                  src={activeOffice.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-3.5 border-t border-border/60 bg-surface text-xs">
                <span className="text-muted-foreground">
                  Need navigation? Open in Google Maps app for step-by-step directions.
                </span>
                {activeOffice.directionsUrl && (
                  <a
                    href={activeOffice.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-accent hover:underline"
                  >
                    <span>Open Full Map</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
