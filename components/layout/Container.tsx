import * as React from "react";
import { cn } from "@/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "main" | "article" | "header" | "footer" | "nav";
  narrow?: boolean;
  wide?: boolean;
}

export function Container({
  as: Comp = "div",
  className,
  narrow = false,
  wide = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "container-shell",
        narrow && "max-w-4xl",
        wide && "max-w-[90rem]",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
