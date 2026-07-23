"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { consultationCta, mainNavigation, services } from "@/constants";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { MagneticButton } from "@/components/animations";
import { cn, isActivePath } from "@/utils";
import { usePrefersReducedMotion } from "@/components/animations/use-prefers-reduced-motion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const megaRef = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu on route change
  React.useEffect(() => {
    setMegaOpen(false);
  }, [pathname]);

  // Close mega menu on outside click
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    if (megaOpen) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [megaOpen]);

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
                ? "0 4px 30px -8px rgba(11, 31, 58, 0.12)"
                : "0 0 0 0 rgba(11, 31, 58, 0)",
            }
      }
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo variant={scrolled ? "default" : isHome ? "white" : "white"} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {mainNavigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              const isServices = item.label === "Services";

              return (
                <li
                  key={item.href}
                  className="relative"
                  ref={isServices ? megaRef : undefined}
                >
                  {isServices ? (
                    <>
                      <button
                        type="button"
                        className={cn(
                          "relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200",
                          scrolled
                            ? active
                              ? "text-accent"
                              : "text-foreground/70 hover:text-foreground"
                            : active
                              ? "text-white"
                              : "text-white/75 hover:text-white",
                        )}
                        aria-expanded={megaOpen}
                        onClick={() => setMegaOpen(!megaOpen)}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-200",
                            megaOpen && "rotate-180",
                          )}
                          aria-hidden="true"
                        />
                        {active && (
                          <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-accent" />
                        )}
                      </button>

                      {/* Mega dropdown */}
                      {megaOpen && (
                        <motion.div
                          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full mt-2 w-[28rem] -translate-x-1/2 rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-primary/10"
                        >
                          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Our Services
                          </p>
                          <div className="grid grid-cols-1 gap-1">
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                href={service.href}
                                className="group rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-accent/5 hover:text-accent"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 border-t border-border pt-3">
                            <Link
                              href="/services"
                              className="block rounded-xl px-3 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent/5"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200",
                        scrolled
                          ? active
                            ? "text-accent"
                            : "text-foreground/70 hover:text-foreground"
                          : active
                            ? "text-white"
                            : "text-white/75 hover:text-white",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                      {active && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-accent" />
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle
            className={cn(
              "hidden sm:inline-flex",
              !scrolled && "text-white/80 hover:text-white border-white/20",
            )}
          />
          <MagneticButton className="hidden md:inline-flex" strength={5}>
            <Link
              href={consultationCta.href}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
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
