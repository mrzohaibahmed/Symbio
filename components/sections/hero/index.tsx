"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, SectionTransition } from "@/components/layout";
import {
  FadeUp,
  FadeIn,
  MagneticButton,
} from "@/components/animations";
import { usePrefersReducedMotion } from "@/components/animations/use-prefers-reduced-motion";
import { cn } from "@/utils";
import { heroContent } from "./constants";
import type { HeroSectionProps } from "./types";

/**
 * Full-viewport premium hero — deep navy gradient with animated geometric mesh,
 * editorial typography, and dual CTAs.
 */
export function HeroSection({ className }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Restrained parallax: background drifts slower than the page scrolls.
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -40]);
  const patternY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 24]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-hero-heading"
      className={cn(
        "relative flex min-h-[100vh] items-center overflow-hidden gradient-navy-deep",
        className,
      )}
    >
      {/* Geometric grid pattern */}
      <motion.div
        aria-hidden="true"
        style={{ y: patternY }}
        className="pointer-events-none absolute inset-0 pattern-grid"
      />

      {/* Animated gradient orbs */}
      <motion.div
        aria-hidden="true"
        style={{ y: orbY1 }}
        className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[120px]"
        animate={
          reduceMotion
            ? undefined
            : {
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.6, 0.4],
            }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        aria-hidden="true"
        style={{ y: orbY2 }}
        className="pointer-events-none absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : {
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle diagonal lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 80px,
            rgba(255,255,255,0.5) 80px,
            rgba(255,255,255,0.5) 81px
          )`,
        }}
      />

      <Container className="relative py-32 md:py-40 lg:py-44">
        <div className="max-w-4xl">
          <FadeUp delay={0}>
            <p className="eyebrow mb-6 text-accent-light">
              {heroContent.brand}
            </p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1
              id="home-hero-heading"
              className="heading-font text-balance text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]"
            >
              {heroContent.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-[1.7] tracking-[0.01em] text-white/70 md:text-xl">
              {heroContent.paragraph}
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton strength={4}>
                <Link
                  href={heroContent.primaryCta.href}
                  className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl bg-accent px-8 text-base font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  {heroContent.primaryCta.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </MagneticButton>
              <Link
                href={heroContent.secondaryCta.href}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/20 px-8 text-base font-semibold text-white/90 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/40 hover:bg-white/5 hover:text-white active:scale-[0.98]"
              >
                {heroContent.secondaryCta.label}
              </Link>
            </div>
          </FadeUp>

          <FadeIn delay={0.36}>
            <div className="mt-12 flex items-center gap-8 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
                <span>{heroContent.trustLabel}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <SectionTransition />
    </section>
  );
}
