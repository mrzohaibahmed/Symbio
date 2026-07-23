/**
 * Scrolls the window smoothly to the top of the page.
 */
export function scrollToTop(): void {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Formats a company address into a single readable string.
 */
export function formatAddress(parts: {
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
}): string {
  const cityLine = [parts.city, parts.state, parts.postalCode]
    .filter(Boolean)
    .join(", ")
    .replace(/,\s*,/g, ",");

  return [parts.line1, parts.line2, cityLine, parts.country].filter(Boolean).join(", ");
}

/**
 * Returns true when the given pathname matches a navigation href.
 */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
