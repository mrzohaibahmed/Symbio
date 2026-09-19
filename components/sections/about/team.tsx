"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Mail, Search } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import {
  teamMembers,
  teamSectionContent,
  departmentLabels,
  departmentOrder,
  teamEnrichments,
} from "@/data";
import type { TeamMember } from "@/types";

/**
 * Premium 3-column executive directory with category tabs.
 * Layout: 25% member list  |  30% portrait  |  45% profile.
 */
export function AboutTeamSection() {
  const [activeCategory, setActiveCategory] =
    useState<TeamMember["department"]>("leadership");
  const [activeId, setActiveId] = useState(teamMembers[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  /* Members filtered by active category + search */
  const filteredMembers = useMemo(() => {
    let members = teamMembers.filter((m) => m.department === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      members = members.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.role.toLowerCase().includes(q),
      );
    }
    return members;
  }, [activeCategory, searchQuery]);

  /* Ensure activeId is valid for current filter */
  const activeMember = useMemo(() => {
    const found = filteredMembers.find((m) => m.id === activeId);
    return found ?? filteredMembers[0] ?? teamMembers[0];
  }, [activeId, filteredMembers]);

  const enrichment = teamEnrichments[activeMember.id];

  /* When switching tabs, auto-select first member */
  const handleCategoryChange = (dept: TeamMember["department"]) => {
    setActiveCategory(dept);
    setSearchQuery("");
    const first = teamMembers.find((m) => m.department === dept);
    if (first) setActiveId(first.id);
  };

  return (
    <Section aria-labelledby="about-team-heading" muted>
      {/* ─── Section Header ─── */}
      <FadeUp>
        <SectionHeading
          id="about-team-heading"
          eyebrow={teamSectionContent.eyebrow}
          title={teamSectionContent.title}
          description={teamSectionContent.description}
          align="left"
        />
      </FadeUp>

      {/* ─── Category Tabs ─── */}
      <FadeUp>
        <div className="mt-10 border-b border-border/40">
          <nav
            role="tablist"
            aria-label="Team categories"
            className="flex gap-1 overflow-x-auto scrollbar-hide -mb-px"
          >
            {departmentOrder.map((dept) => {
              const isActive = dept === activeCategory;
              const count = teamMembers.filter(
                (m) => m.department === dept,
              ).length;

              return (
                <button
                  key={dept}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(dept)}
                  onMouseEnter={() => handleCategoryChange(dept)}
                  className={cn(
                    "relative whitespace-nowrap px-5 py-3.5 text-sm font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {departmentLabels[dept]}
                  <span
                    className={cn(
                      "ml-1.5 text-[10px] font-bold",
                      isActive ? "text-accent" : "text-muted-foreground/50",
                    )}
                  >
                    ({count})
                  </span>

                  {/* Animated underline */}
                  {isActive && (
                    <motion.div
                      layoutId="team-tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </FadeUp>

      {/* ─── 3-Column Executive Directory ─── */}
      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">

        {/* LEFT COLUMN: Member Navigation (25% / 3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search team..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border/60 bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              aria-label="Search team members"
            />
          </div>

          {/* Member List */}
          <div
            role="tablist"
            aria-label="Team members"
            className="divide-y divide-border/40 border-y border-border/40 max-h-[480px] overflow-y-auto scrollbar-hide"
          >
            {filteredMembers.length === 0 && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                No members found.
              </p>
            )}

            {filteredMembers.map((member, index) => {
              const isActive = member.id === activeMember.id;

              return (
                <button
                  key={member.id}
                  role="tab"
                  id={`team-tab-${member.id}`}
                  aria-selected={isActive}
                  aria-controls={`team-panel-${member.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(member.id)}
                  onMouseEnter={() => setActiveId(member.id)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      const next = filteredMembers[(index + 1) % filteredMembers.length];
                      if (next) setActiveId(next.id);
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      const prev =
                        filteredMembers[
                          (index - 1 + filteredMembers.length) %
                            filteredMembers.length
                        ];
                      if (prev) setActiveId(prev.id);
                    }
                  }}
                  className={cn(
                    "group relative flex w-full items-center gap-3 py-3.5 px-3 text-left transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive
                      ? "bg-accent/5 text-accent font-bold"
                      : "text-foreground/75 hover:text-foreground hover:bg-muted/40",
                  )}
                >
                  {/* 3px Active / Hover Accent Indicator Bar */}
                  <motion.span
                    className={cn(
                      "absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-300",
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

                  {/* Thumbnail */}
                  <div
                    className={cn(
                      "relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 transition-all duration-300 ml-1.5 group-hover:translate-x-1.5",
                      isActive
                        ? "border-accent shadow-sm shadow-accent/20"
                        : "border-border/40 group-hover:border-accent/50",
                    )}
                  >
                    <Image
                      src={member.photo}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1 transition-transform duration-300 group-hover:translate-x-1.5">
                    <p
                      className={cn(
                        "text-sm font-bold leading-snug truncate transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-foreground/80 group-hover:text-foreground",
                      )}
                    >
                      {member.name}
                    </p>
                    <p
                      className={cn(
                        "text-[11px] truncate transition-colors",
                        isActive
                          ? "text-accent font-semibold"
                          : "text-muted-foreground",
                      )}
                    >
                      {member.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CENTER COLUMN: Portrait (30% / 3 cols) */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMember.id + "-photo"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px] border border-border/40 shadow-xl group">
                <Image
                  src={activeMember.photo}
                  alt={activeMember.photoAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Below-image metadata */}
              <div className="mt-4 space-y-1.5">
                {enrichment?.location && (
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    <span>{enrichment.location}</span>
                  </div>
                )}
                <p className="text-sm font-semibold text-accent">
                  {activeMember.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Profile Details (45% / 6 cols) */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMember.id + "-profile"}
              role="tabpanel"
              id={`team-panel-${activeMember.id}`}
              aria-labelledby={`team-tab-${activeMember.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* Name & Title */}
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-accent">
                  {departmentLabels[activeMember.department].toUpperCase()}
                </span>
                <h3 className="heading-font mt-1 text-2xl font-extrabold text-accent md:text-3xl">
                  {activeMember.name}
                </h3>
                <p className="mt-1 text-base font-semibold text-accent leading-snug">
                  {activeMember.role}
                </p>
              </div>

              {/* Location */}
              {enrichment?.location && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>{enrichment.location}</span>
                </div>
              )}

              {/* Biography */}
              <div className="border-t border-border/40 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Professional Biography
                </h4>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {activeMember.bio}
                </p>
              </div>

              {/* Expertise Tags */}
              {enrichment?.expertise && enrichment.expertise.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {enrichment.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-accent/20 bg-transparent px-3.5 py-1 text-xs font-semibold text-accent transition-colors hover:bg-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Actions */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-border/40">
                {activeMember.linkedin && (
                  <Button
                    asChild
                    variant="outline"
                    size="md"
                    className="rounded-xl font-bold"
                  >
                    <a
                      href={activeMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      LinkedIn Profile
                    </a>
                  </Button>
                )}

                {enrichment?.email && (
                  <Button
                    asChild
                    variant="outline"
                    size="md"
                    className="rounded-xl font-bold"
                  >
                    <a href={`mailto:${enrichment.email}`}>
                      <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                      Send Email
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ─── Bottom CTA ─── */}
      <FadeUp>
        <div className="mt-20 pt-12 border-t border-border/40">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">
                Work With Us
              </span>
              <h3 className="heading-font text-2xl font-extrabold text-accent md:text-3xl whitespace-pre-line">
                {teamSectionContent.ctaTitle}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg max-w-2xl">
                {teamSectionContent.ctaDescription}
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
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
