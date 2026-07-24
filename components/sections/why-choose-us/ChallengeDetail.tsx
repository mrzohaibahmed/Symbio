"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import type { ChallengeItem } from "./types";
import { ChallengeVisual } from "./ChallengeVisual";

interface ChallengeDetailProps {
  challenge: ChallengeItem;
}

export function ChallengeDetail({ challenge }: ChallengeDetailProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={challenge.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8 lg:space-y-10"
      >
        {/* Dynamic Abstract Enterprise Visual */}
        <ChallengeVisual type={challenge.visualType} />

        {/* Content Section */}
        <div className="space-y-8">
          {/* Header Block: Large Number & Large Title */}
          <div>
            <span className="editorial-number text-4xl sm:text-5xl lg:text-6xl text-accent-light/80 font-extrabold tracking-tighter block select-none mb-1">
              {challenge.number}
            </span>
            <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              {challenge.title}
            </h3>
          </div>

          {/* Executive Summary */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed body-font text-pretty max-w-2xl">
            {challenge.summary}
          </p>

          {/* Business Impact: Display as Three Elegant Columns */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white/40 font-semibold select-none">
              BUSINESS IMPACT
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {challenge.impacts.map((impact) => (
                <div
                  key={impact}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-3.5 flex items-center gap-3 transition-colors hover:border-accent/40"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" />
                  <span className="text-sm font-medium text-white/90">
                    {impact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* How Symbio Helps: Display Services as Premium Outline Pills */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white/40 font-semibold select-none">
              HOW SYMBIO HELPS
            </h4>
            <motion.div
              className="flex flex-wrap gap-2.5"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {challenge.services.map((service) => (
                <motion.span
                  key={service}
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-white/20 text-white/80 hover:border-accent-light hover:bg-accent/10 hover:text-white transition-all duration-200 cursor-default"
                >
                  {service}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Industries Commonly Affected */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white/40 font-semibold select-none flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-accent-light" />
              <span>INDUSTRIES COMMONLY AFFECTED</span>
            </h4>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-white/70">
              {challenge.industries.map((ind, i) => (
                <span key={ind} className="flex items-center gap-4">
                  <span className="font-medium text-white/85">{ind}</span>
                  {i < challenge.industries.length - 1 && (
                    <span className="text-white/20" aria-hidden="true">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <Link
              href={challenge.href}
              className="inline-flex items-center gap-2.5 text-sm font-bold text-accent-light hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="tracking-wide">Explore Related Service</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
