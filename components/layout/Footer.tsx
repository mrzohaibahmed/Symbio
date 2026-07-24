"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  companyInfo,
  footerQuickLinks,
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
      <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-white">
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
    <footer className="relative bg-[#0B1F3A] text-white/70">
      <Container className="pt-16 pb-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <Logo variant="white" />
            <p className="text-sm leading-relaxed text-white/60">
              {companyInfo.description || companyInfo.tagline}
            </p>
            <SocialIcons links={socialLinks} className="pt-2" variant="light" />
          </div>

          {/* Column 2: Company Links */}
          <FooterColumn title="Company">
            <ul className="space-y-3 text-sm">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-accent-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 3: Services Links */}
          <FooterColumn title="Services">
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="transition-colors duration-200 hover:text-accent-light"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 4: Contact Info */}
          <FooterColumn title="Contact Us">
            <address className="not-italic space-y-3.5 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="leading-relaxed">{address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="transition-colors duration-200 hover:text-accent-light"
                >
                  {companyInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="transition-colors duration-200 hover:text-accent-light"
                >
                  {companyInfo.email}
                </a>
              </div>
            </address>
          </FooterColumn>
        </div>

        {/* Newsletter Section */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div className="max-w-md">
            <h3 className="heading-font text-lg font-bold text-white">
              Stay Informed
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Subscribe to our newsletter for advisory insights, tax updates, and industry perspectives.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex w-full max-w-md gap-2.5 md:mt-0"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email address"
              className="h-11 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-xl bg-accent px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-dark"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {companyInfo.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>

      <BackToTop />
    </footer>
  );
}
