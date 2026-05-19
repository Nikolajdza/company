"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/config/site";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { cn } from "@/lib/utils";

const navKeyMap: Record<string, string> = {
  Home: "home",
  Services: "services",
  About: "about",
  Careers: "careers",
  Blog: "blog",
  Contact: "contact",
};

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isDarkTheme = !mounted || resolvedTheme === "dark";
  const onDarkHero = !scrolled;
  const logoVariant = onDarkHero ? "light" : isDarkTheme ? "light" : "dark";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const navLinkClass = onDarkHero
    ? "text-white/70 hover:text-teal-bright"
    : "text-foreground/70 hover:text-teal";

  const navActiveClass = onDarkHero ? "text-teal-bright" : "text-teal";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? cn(
              "border-b border-border py-3 backdrop-blur-xl",
              isDarkTheme ? "bg-dark/90" : "bg-card/95 shadow-sm",
            )
          : cn(
              "py-5 backdrop-blur-sm",
              isDarkTheme ? "bg-dark/40" : "bg-card/50",
            ),
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo variant={logoVariant} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const label = t(navKeyMap[link.label] ?? "home");
            return "children" in link && link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wide transition-colors xl:px-3 xl:text-xs",
                    navLinkClass,
                  )}
                >
                  {label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "absolute left-0 top-full z-50 min-w-[220px] rounded-xl border p-2 shadow-2xl",
                        isDarkTheme
                          ? "border-white/10 bg-dark-elevated"
                          : "border-border bg-card",
                      )}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-4 py-2.5 text-sm transition-colors",
                            isDarkTheme
                              ? "text-white/80 hover:bg-white/5 hover:text-teal-bright"
                              : "text-foreground/80 hover:bg-surface hover:text-teal",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "whitespace-nowrap px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wide transition-colors xl:px-3 xl:text-xs",
                  isActive(link.href) ? navActiveClass : navLinkClass,
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher />
          <ThemeToggle onDark={onDarkHero} />
          <Button href="/contact" variant="primary" size="sm">
            {tc("letsTalk")}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle onDark={onDarkHero} />
          <button
            type="button"
            className={cn("rounded-lg p-2", onDarkHero ? "text-white" : "text-foreground")}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              "overflow-hidden border-t lg:hidden",
              isDarkTheme ? "border-white/10 bg-dark" : "border-border bg-card",
            )}
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
              <div className="mb-3 flex justify-center">
                <LocaleSwitcher />
              </div>
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium",
                      isDarkTheme
                        ? "text-white/80 hover:bg-white/5"
                        : "text-foreground/80 hover:bg-surface",
                    )}
                  >
                    {t(navKeyMap[link.label] ?? "home")}
                  </Link>
                  {"children" in link &&
                    link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-lg py-2 pl-8 pr-4 text-sm",
                          isDarkTheme ? "text-white/50 hover:text-teal-bright" : "text-muted hover:text-teal",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                </div>
              ))}
              <Button href="/contact" variant="primary" className="mt-4 w-full">
                {tc("letsTalk")}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
