import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils";
import type { BreadcrumbProps } from "./types";

/**
 * Accessible breadcrumb navigation with light variant for dark backgrounds.
 */
export function Breadcrumb({ items, className, variant = "default" }: BreadcrumbProps) {
  const isLight = variant === "light";

  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1.5 text-sm",
          isLight ? "text-white/50" : "text-muted-foreground",
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              ) : null}
              {isLast || !item.href ? (
                <span
                  className={cn(
                    isLast && (isLight ? "font-medium text-white/80" : "font-medium text-foreground"),
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isLight ? "hover:text-accent-light" : "hover:text-accent",
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
