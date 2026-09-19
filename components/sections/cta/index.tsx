import { CTASection } from "@/components/sections/shared";
import { ctaSectionContent } from "./constants";
import type { CtaSectionProps } from "./types";

/**
 * Homepage closing CTA — thin wrapper around the shared CTASection with
 * home-specific copy.
 */
export function CtaSection({ className }: CtaSectionProps) {
  return (
    <CTASection
      title={ctaSectionContent.title}
      description={ctaSectionContent.description}
      primaryLabel={ctaSectionContent.primaryCta.label}
      primaryHref={ctaSectionContent.primaryCta.href}
      secondaryLabel={ctaSectionContent.secondaryCta.label}
      secondaryHref={ctaSectionContent.secondaryCta.href}
      className={className}
    />
  );
}
