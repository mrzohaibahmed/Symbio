"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { scrollToTop } from "@/utils";
import { cn } from "@/utils";

export interface BackToTopProps {
  className?: string;
  threshold?: number;
}

export function BackToTop({ className, threshold = 400 }: BackToTopProps) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  if (!visible) return null;

  return (
    <button
      type="button"
      className={cn(
        "fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-xl",
        className,
      )}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
