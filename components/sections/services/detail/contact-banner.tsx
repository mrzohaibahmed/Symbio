import Link from "next/link";
import { Section } from "@/components/layout";
import { PrimaryButton, OutlineButton } from "@/components/ui";
import { FadeUp } from "@/components/animations";
import { companyInfo } from "@/constants";

export function ServiceContactBanner() {
  return (
    <Section aria-label="Contact banner" className="!py-10" muted>
      <FadeUp>
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-card p-6 shadow-sm md:flex-row md:items-center md:p-8">
          <div>
            <h2 className="heading-font text-2xl font-semibold text-foreground">
              Prefer to talk it through?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Reach our team at{" "}
              <a
                href={`mailto:${companyInfo.email}`}
                className="font-medium text-primary hover:underline"
              >
                {companyInfo.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${companyInfo.phone}`}
                className="font-medium text-primary hover:underline"
              >
                {companyInfo.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton asChild>
              <Link href="/contact">Contact Symbio Advisory</Link>
            </PrimaryButton>
            <OutlineButton asChild>
              <Link href="/services">Explore Services</Link>
            </OutlineButton>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
