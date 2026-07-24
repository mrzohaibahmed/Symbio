"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils";
import type { ChallengeItem } from "./types";

interface ChallengeNavProps {
  challenges: ChallengeItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function ChallengeNav({ challenges, activeId, onSelect }: ChallengeNavProps) {
  return (
    <nav className="space-y-1 py-2" aria-label="Business Challenges Navigation">
      {challenges.map((item) => {
        const isActive = item.id === activeId;

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            onMouseEnter={() => onSelect(item.id)}
            type="button"
            className={cn(
              "group relative w-full text-left py-3.5 px-3 transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer",
              isActive ? "translate-x-2 text-accent-light" : "hover:translate-x-1 text-white/60 hover:text-white"
            )}
            aria-current={isActive ? "true" : undefined}
          >
            {/* 3px Accent Line on the Left (Active / Hover state) */}
            <motion.span
              className={cn(
                "absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300",
                isActive
                  ? "bg-accent-light opacity-100 shadow-[0_0_12px_rgba(18,196,149,0.6)]"
                  : "bg-white/20 opacity-0 group-hover:opacity-100"
              )}
              initial={false}
              animate={{
                scaleY: isActive ? 1 : 0.4,
              }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
            />

            {/* Label Layout: Number + Title */}
            <div className="flex items-baseline gap-3.5 pl-3">
              <span
                className={cn(
                  "font-mono text-xs font-bold tracking-tight shrink-0 transition-colors duration-300",
                  isActive ? "text-accent-light" : "text-white/40 group-hover:text-white/80"
                )}
              >
                {item.number}
              </span>
              <span
                className={cn(
                  "heading-font text-base sm:text-lg font-semibold tracking-tight transition-colors duration-300",
                  isActive ? "text-white font-bold" : "text-white/70 group-hover:text-white"
                )}
              >
                {item.title}
              </span>
            </div>
          </button>
        );
      })}
    </nav>
  );
}
