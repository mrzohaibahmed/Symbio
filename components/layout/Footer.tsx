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
    <footer className="relative gradient-navy text-white/70">
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
