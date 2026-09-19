"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ChevronRight } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { consultationCta, mainNavigation } from "@/constants";
import { megaMenuContent } from "@/constants/megaMenu";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn, isActivePath } from "@/utils";

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 + i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function MobileNav({
  scrolled = false,
  isHome = false,
}: {
  scrolled?: boolean;
  isHome?: boolean;
}) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors lg:hidden",
            scrolled
              ? "border border-border bg-card text-foreground"
              : isHome
                ? "border border-white/20 text-white hover:bg-white/10"
                : "border border-white/20 text-white hover:bg-white/10",
          )}
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-brand-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col gradient-navy shadow-2xl outline-none"
          aria-describedby={undefined}
        >
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
          </VisuallyHidden>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Logo showText={false} variant="white" />
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white/80 hover:text-white"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          {/* Navigation */}
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
            <AnimatePresence>
              {open && (
                <ul className="flex flex-col gap-1">
                  {mainNavigation.map((item, i) => {
                    const active = isActivePath(pathname, item.href);
                    const content = item.megaMenu ? megaMenuContent[item.megaMenu] : undefined;
                    const isSectionOpen = openSection === item.href;

                    return (
                      <motion.li
                        key={item.href}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {content ? (
                          <div>
                            <button
                              type="button"
                              onClick={() => setOpenSection(isSectionOpen ? null : item.href)}
                              className={cn(
                                "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all",
                                active
                                  ? "bg-white/10 text-accent-light"
                                  : "text-white/80 hover:bg-white/5 hover:text-white",
                              )}
                              aria-expanded={isSectionOpen}
                            >
                              {item.label}
                              <ChevronRight
                                className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  isSectionOpen && "rotate-90",
                                )}
                                aria-hidden="true"
                              />
                            </button>
                            {isSectionOpen && (
                              <div className="ml-4 mt-1 space-y-4 border-l border-white/10 pl-4">
                                {content.columns.map((column) => (
                                  <div key={column.heading}>
                                    <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/40">
                                      {column.heading}
                                    </p>
                                    <ul className="space-y-0.5">
                                      {column.links.map((link) => (
                                        <li key={link.label}>
                                          <Link
                                            href={link.href}
                                            className="block rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:text-accent-light"
                                          >
                                            {link.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                                <Link
                                  href={content.viewAll.href}
                                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-accent-light transition-colors hover:text-white"
                                >
                                  {content.viewAll.label} →
                                </Link>
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "block rounded-xl px-4 py-3.5 text-base font-medium transition-all",
                              active
                                ? "bg-white/10 text-accent-light"
                                : "text-white/80 hover:bg-white/5 hover:text-white",
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              )}
            </AnimatePresence>
          </nav>

          {/* Footer */}
          <div className="space-y-3 border-t border-white/10 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/50">Theme</span>
              <ThemeToggle className="text-white/70 border-white/20" />
            </div>
            <Link
              href={consultationCta.href}
              className="flex w-full items-center justify-center rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark"
            >
              {consultationCta.label}
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
