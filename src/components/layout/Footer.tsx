"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig, navLinks } from "@/config/site";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

const navKeyMap: Record<string, string> = {
  Home: "home",
  Services: "services",
  About: "about",
  Careers: "careers",
  Blog: "blog",
  Contact: "contact",
};

const footerNav = navLinks.filter((l) => !("children" in l) || !l.children);

export function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-elevated text-white">
      <Container className="py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:border-r lg:border-white/10 lg:pr-8">
            <Logo variant="light" />
            <p className="mt-3 text-sm text-white/60">{siteConfig.tagline}</p>
          </div>

          <div className="lg:border-r lg:border-white/10 lg:px-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-bright">
              {tf("navigation")}
            </h3>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-teal-bright"
                  >
                    {t(navKeyMap[link.label] ?? "home")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-r lg:border-white/10 lg:px-8">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-bright">
              {tf("contact")}
            </h3>
            <address className="not-italic space-y-2 text-sm text-white/70">
              <p>{siteConfig.contact.address}</p>
              <p>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-teal-bright"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-teal-bright"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-bright">
              {tf("followUs")}
            </h3>
            <div className="flex gap-3">
              {(
                [
                  {
                    label: "LinkedIn",
                    href: siteConfig.social.linkedin,
                    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v1.5",
                  },
                  {
                    label: "Instagram",
                    href: siteConfig.social.instagram,
                    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z",
                  },
                  {
                    label: "Facebook",
                    href: siteConfig.social.facebook,
                    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v9h4v-9h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                  },
                ] as const
              ).map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/70 transition-all hover:border-teal-bright hover:text-teal-bright"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center border-t border-white/10 pt-6">
          <LocaleSwitcher />
        </div>
      </Container>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/40">
        {siteConfig.name} © {tf("rights")} {year}
      </div>
    </footer>
  );
}
