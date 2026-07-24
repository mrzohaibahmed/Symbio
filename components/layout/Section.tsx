import * as React from "react";
import { cn } from "@/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "aside";
  contained?: boolean;
  muted?: boolean;
  dark?: boolean;
  padSize?: "sm" | "md" | "lg";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Comp = "section",
      className,
      contained = true,
      muted = false,
      dark = false,
      padSize = "md",
      children,
      ...props
    },
    ref
  ) => {
    const padClass = {
      sm: "section-padding-sm",
      md: "section-padding",
      lg: "section-padding-lg",
    }[padSize];

    return (
      <Comp
        ref={ref as React.Ref<any>}
        className={cn(
          padClass,
          muted && "bg-surface",
          dark && "section-navy",
          className,
        )}
        {...props}
      >
        {contained ? <div className="container-shell">{children}</div> : children}
      </Comp>
    );
  }
);

Section.displayName = "Section";
