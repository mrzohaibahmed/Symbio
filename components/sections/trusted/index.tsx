import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout";
import { FadeUp, FadeIn, CounterAnimation } from "@/components/animations";
import { trustedCompanies, homeStats } from "@/data";
import { cn } from "@/utils";
import { trustedSectionContent } from "./constants";
import type { TrustedSectionProps } from "./types";

function LogoMark({
  name,
  logo,
  logoAlt,
}: {
  name: string;
  logo: string;
  logoAlt?: string;
}) {
  return (
    <div className="flex min-w-[11rem] items-center justify-center rounded-xl border border-border/60 bg-white px-6 py-4 transition-all duration-300 hover:border-accent/20 hover:shadow-md">
      <Image
        src={logo}
        alt={logoAlt || `${name} logo`}
        width={160}
        height={40}
        unoptimized={logo.endsWith(".svg")}
        className="h-8 w-auto max-w-[9rem] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

/**
 * Trust section — logo marquee + statistics row.
 */
export function TrustedSection({ className }: TrustedSectionProps) {
  const logos = [...trustedCompanies, ...trustedCompanies];

  return (
    <Section
      aria-labelledby="trusted-heading"
      className={cn("!py-14 md:!py-20", className)}
    >
      <FadeUp>
        <SectionHeading
          id="trusted-heading"
          eyebrow={trustedSectionContent.eyebrow}
          title={trustedSectionContent.title}
          description={trustedSectionContent.description}
          align="center"
          className="mb-10"
        />
      </FadeUp>

      {/* Logo marquee */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent md:w-32"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent md:w-32"
        />

        <div className="flex w-max animate-marquee gap-5 pr-5">
          {logos.map((company, index) => (
            <LogoMark
              key={`${company.id}-${index}`}
              name={company.name}
              logo={company.logo}
              logoAlt={company.logoAlt}
            />
          ))}
        </div>
      </div>

      {/* Stats row */}
      <FadeIn delay={0.2}>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {homeStats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="heading-font text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
                <CounterAnimation
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      <ul className="sr-only">
        {trustedCompanies.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </Section>
  );
}
