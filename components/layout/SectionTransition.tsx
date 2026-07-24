import { cn } from "@/utils";

export interface SectionTransitionProps {
  className?: string;
}

/**
 * Reusable bottom gradient fade transition (from-background to-transparent)
 * matching the Home page hero transition across all pages.
 */
export function SectionTransition({ className }: SectionTransitionProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent",
        className,
      )}
    />
  );
}
