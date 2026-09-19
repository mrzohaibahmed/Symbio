"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { consultationCta, mainNavigation } from "@/constants";
import { megaMenuContent } from "@/constants/megaMenu";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { MegaMenuPanel } from "@/components/layout/MegaMenuPanel";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { MagneticButton } from "@/components/animations";
import { cn, isActivePath } from "@/utils";
import { usePrefersReducedMotion } from "@/components/animations/use-prefers-reduced-motion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const reduceMotion = usePrefersReducedMotion();
  const navRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close open mega menu on route change
  React.useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  // Close open mega menu on outside click / Escape
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    if (openMenu) {
      document.addEventListener("click", handleClick);
      document.addEventListener("keydown", handleKey);
      return () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("keydown", handleKey);
      };
    }
  }, [openMenu]);

  const isHome = pathname === "/";

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-2xl backdrop-saturate-150"
          : isHome
            ? "bg-transparent"
            : "bg-primary/95 backdrop-blur-md",
      )}
      animate={
        reduceMotion
          ? undefined
          : {
            boxShadow: scrolled
              ? "0 4px 30px -8px rgba(10, 10, 12, 0.12)"
              : "0 0 0 0 rgba(10, 10, 12, 0)",
          }
      }
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo variant={scrolled ? "default" : isHome ? "white" : "white"} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul ref={navRef} className="flex items-center gap-2">
            {mainNavigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              const menuKey = item.megaMenu;
              const isOpen = menuKey ? openMenu === menuKey : false;
              const content = menuKey ? megaMenuContent[menuKey] : undefined;

              return (
                <li key={item.href} className="relative">
                  {content ? (
                    <>
                      <button
                        type="button"
                        className={cn(
                          "relative flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          active ? "font-semibold" : "font-medium",
                          scrolled
                            ? active
                              ? "text-accent"
                              : "text-foreground/75 hover:text-foreground hover:bg-accent/5"
                            : active
                              ? "text-white"
                              : "text-white/80 hover:text-white hover:bg-white/10",
                        )}
                        aria-expanded={isOpen}
                        onClick={() => setOpenMenu(isOpen ? null : menuKey!)}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            isOpen && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                        {active && (
                          <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-accent transition-all duration-300" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isOpen ? (
                          <MegaMenuPanel content={content} reduceMotion={reduceMotion} />
                        ) : null}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "relative rounded-lg px-4 py-2.5 text-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        active ? "font-semibold" : "font-medium",
                        scrolled
                          ? active
                            ? "text-accent"
                            : "text-foreground/75 hover:text-foreground hover:bg-accent/5"
                          : active
                            ? "text-white"
                            : "text-white/80 hover:text-white hover:bg-white/10",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                      {active && (
                        <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-accent transition-all duration-300" />
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle
            className={cn(
              "hidden sm:inline-flex",
              !scrolled && "text-white/80 hover:text-white border-white/20",
            )}
          />
          <MagneticButton className="hidden md:inline-flex" strength={4}>
            <Link
              href={consultationCta.href}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]"
            >
              {consultationCta.label}
            </Link>
          </MagneticButton>
          <MobileNav scrolled={scrolled} isHome={isHome} />
        </div>
      </Container>
    </motion.header>
  );
}
