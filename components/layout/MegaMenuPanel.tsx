"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { MegaMenuContent } from "@/constants/megaMenu";

export function MegaMenuPanel({
  content,
  reduceMotion,
}: {
  content: MegaMenuContent;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full mt-3 w-[min(92vw,58rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-2xl shadow-primary/10 backdrop-blur-xl"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-x-8 gap-y-6 p-6">
        {content.columns.map((column) => (
          <div key={column.heading}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {column.heading}
            </p>
            <ul className="space-y-0.5">
              {column.links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-accent/8 hover:text-accent"
                    >
                      {Icon ? (
                        <Icon
                          className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                          aria-hidden="true"
                        />
                      ) : null}
                      <span>
                        {link.label}
                        {link.description ? (
                          <span className="block text-xs font-normal text-muted-foreground">
                            {link.description}
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {content.featured ? (
          <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/10 to-gold/10 p-5">
            {content.featured.eyebrow ? (
              <p className="eyebrow mb-2 text-accent">{content.featured.eyebrow}</p>
            ) : null}
            <p className="heading-font text-base font-bold text-foreground">
              {content.featured.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {content.featured.description}
            </p>
            <Link
              href={content.featured.href}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark"
            >
              {content.featured.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>

      <div className="border-t border-border/60 bg-surface/60 px-6 py-3">
        <Link
          href={content.viewAll.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark"
        >
          {content.viewAll.label}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}
