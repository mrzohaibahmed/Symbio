/**
 * Shared site metadata defaults for SEO-ready pages.
 */
import type { Metadata } from "next";
import { companyInfo } from "@/constants";

export const siteConfig = {
  name: companyInfo.name,
  description: companyInfo.description,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://symbioadvisory.com",
  locale: "en_US",
} as const;

export const defaultMetadata: Metadata = {
  title: {
    default: companyInfo.name,
    template: `%s | ${companyInfo.name}`,
  },
  description: companyInfo.description,
  applicationName: companyInfo.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: companyInfo.name,
    title: companyInfo.name,
    description: companyInfo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: companyInfo.name,
    description: companyInfo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
