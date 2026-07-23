import type { ReactNode } from "react";
import Link from "next/link";
import {
  companyInfo,
  footerQuickLinks,
  industries,
  services,
  socialLinks,
} from "@/constants";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/shared/Logo";
import { SocialIcons } from "@/components/shared/SocialIcons";
import { BackToTop } from "@/components/shared/BackToTop";
import { formatAddress } from "@/utils";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const address = formatAddress(companyInfo.address);

  return (
    <footer className="relative gradient-navy">
      <Container className="section-padding !pb-8">
        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Logo variant="white" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {companyInfo.tagline}
            </p>
            <SocialIcons links={socialLinks} className="mt-6" variant="light" />
          </div>

          {/* Quick Links */}
          <FooterColumn title="Company">
            <ul className="space-y-3">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-accent-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Services">
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-accent-light"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Industries + Contact */}
          <div className="space-y-10 lg:col-span-3">
            <FooterColumn title="Industries">
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry.id}>
                    <Link
                      href={industry.href}
                      className="text-sm text-white/60 transition-colors duration-200 hover:text-accent-light"
                    >
                      {industry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Contact">
              <address className="not-italic space-y-2.5 text-sm text-white/60">
                <p>{address}</p>
                <p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="transition-colors duration-200 hover:text-accent-light"
                  >
                    {companyInfo.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="transition-colors duration-200 hover:text-accent-light"
                  >
                    {companyInfo.email}
                  </a>
                </p>
              </address>
            </FooterColumn>
          </div>
        </div>

        {/* Newsletter block */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div className="max-w-md">
            <h2 className="heading-font text-lg font-semibold text-white">
              Stay informed
            </h2>
            <p className="mt-2 text-sm text-white/50">
              Subscribe to our newsletter for advisory insights, tax updates, and industry perspectives.
            </p>
          </div>
          <div className="mt-4 flex w-full max-w-md gap-2.5 md:mt-0">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              disabled
              placeholder="you@company.com"
              className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white/70 placeholder:text-white/30"
            />
            <button
              type="button"
              disabled
              className="h-11 shrink-0 rounded-xl bg-accent px-5 text-sm font-semibold text-white opacity-70"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {companyInfo.legalName}. All rights reserved.
          </p>
          <p className="text-white/30">Clarity · Compliance · Growth</p>
        </div>
      </Container>

      <BackToTop />
    </footer>
  );
}
