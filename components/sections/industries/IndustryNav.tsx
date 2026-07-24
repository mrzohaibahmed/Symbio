"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import type { IndustryItem } from "./types";

interface IndustryNavProps {
  industries: IndustryItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export function IndustryNav({
  industries,
  activeId,
  onSelect,
  className,
}: IndustryNavProps) {
  return (
    <nav
      aria-label="Industry Sector Navigation"
      role="tablist"
      aria-orientation="vertical"
      className={cn("w-full", className)}
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {industries.map((item) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-controls={`panel-${item.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(item.id)}
              onMouseEnter={() => onSelect(item.id)}
              className={cn(
                "group relative flex items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isActive
                  ? "bg-accent/8 font-bold text-accent shadow-sm"
                  : "font-medium text-foreground/80 hover:bg-muted/60 hover:text-foreground",
              )}
            >
              <div className="flex items-center gap-3">
                {/* Accent bar / marker */}
                <span
                  className={cn(
                    "h-4 w-1 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "h-5 bg-accent"
                      : "bg-transparent group-hover:h-3.5 group-hover:bg-accent/40",
                  )}
                  aria-hidden="true"
                />

                {/* Industry name with subtle 6px hover slide */}
                <span
                  className={cn(
                    "heading-font text-base tracking-tight transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "translate-x-0.5 text-accent"
                      : "group-hover:translate-x-1.5",
                  )}
                >
                  {item.title}
                </span>
              </div>

              {/* Active Indicator Underline / Background Pill indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndustryNavIndicator"
                  className="absolute inset-0 rounded-xl border border-accent/30 pointer-events-none"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
