import Image from "next/image";
import { Container, SectionTransition } from "@/components/layout";
import { FadeUp, SlideLeft } from "@/components/animations";
import { Breadcrumb } from "@/components/sections/shared/breadcrumb";
import { cn } from "@/utils";
import type { PageHeroProps } from "./types";

/**
 * Premium page hero with deep navy gradient, breadcrumbs, and editorial typography.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
  className,
  priorityImage = true,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden gradient-navy-deep pt-[calc(var(--header-height)+2rem)] pb-14 md:pb-20",
        className,
      )}
    >
      {/* Grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 pattern-grid"
      />

      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
      />

      <Container className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <FadeUp>
            <Breadcrumb items={breadcrumb} variant="light" />
            {eyebrow ? (
              <p className="eyebrow mb-4 mt-4 text-accent-light">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="heading-font text-balance text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/60">
              {description}
            </p>
          </FadeUp>
        </div>

        <SlideLeft>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:aspect-[16/11]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority={priorityImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent"
            />
          </div>
        </SlideLeft>
      </Container>

      <SectionTransition />
    </section>
  );
}
