import * as React from "react";
import { cn } from "@/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  /** Use light colors for dark background sections */
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  light = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-3 block text-xs font-bold uppercase tracking-widest text-accent",
            align === "left" && "eyebrow-line",
            light && "text-accent-light",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "heading-font text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.6rem] lg:leading-[1.12]",
          light && "!text-white",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-relaxed md:text-lg max-w-2xl",
            light ? "text-white/70" : "text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
