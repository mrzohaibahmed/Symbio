import * as React from "react";
import { cn } from "@/utils";

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Premium page header with deep navy gradient background and editorial typography.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden gradient-navy-deep pt-[calc(var(--header-height)+3rem)] pb-16 md:pb-20 lg:pb-24",
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
        className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
      />

      <div className="container-shell relative">
        {eyebrow ? (
          <p className="eyebrow mb-4 text-accent-light">{eyebrow}</p>
        ) : null}
        <h1 className="heading-font max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
