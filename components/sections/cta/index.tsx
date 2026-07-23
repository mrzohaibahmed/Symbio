import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout";
import { FadeUp, ScaleIn } from "@/components/animations";
import { cn } from "@/utils";
import { ctaSectionContent } from "./constants";
import type { CtaSectionProps } from "./types";

/**
 * Premium closing CTA with navy gradient and geometric pattern.
 */
export function CtaSection({ className }: CtaSectionProps) {
  return (
    <Section
      aria-labelledby="home-cta-heading"
      contained={false}
      className={cn("pb-20 pt-4 md:pb-24", className)}
    >
      <div className="container-shell">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl gradient-navy px-6 py-14 text-center shadow-2xl shadow-primary/10 md:px-14 md:py-20">
            {/* Pattern */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-grid" />

            {/* Glow accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-[80px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-blue-500/10 blur-[80px]"
            />

            <FadeUp>
              <h2
                id="home-cta-heading"
                className="heading-font relative text-balance text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl"
              >
                {ctaSectionContent.title}
              </h2>
              <p className="relative mx-auto mt-5 max-w-2xl text-pretty text-lg text-white/60">
                {ctaSectionContent.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={ctaSectionContent.primaryCta.href}
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-accent px-7 text-sm font-semibold text-white transition-all duration-250 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
                >
                  {ctaSectionContent.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link
                  href={ctaSectionContent.secondaryCta.href}
                  className="inline-flex h-13 items-center justify-center rounded-xl border-2 border-white/20 px-7 text-sm font-semibold text-white/90 transition-all duration-200 hover:border-white/40 hover:bg-white/5"
                >
                  {ctaSectionContent.secondaryCta.label}
                </Link>
              </div>
            </FadeUp>
          </div>
        </ScaleIn>
      </div>
    </Section>
  );
}
