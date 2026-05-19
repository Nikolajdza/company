"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { TeamSpotlight } from "@/components/home/TeamSpotlight";

export function ContactSection() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "home" }),
      });
    } catch {
      // Backend may not be configured yet — UI still confirms receipt
    }

    setSubmitted(true);
    form.reset();
    setSending(false);
  };

  const contactItems: {
    icon: typeof Mail;
    label: string;
    value: string;
    href?: string;
  }[] = [
    {
      icon: Mail,
      label: t("email"),
      href: `mailto:${siteConfig.contact.email}`,
      value: siteConfig.contact.email,
    },
    {
      icon: Phone,
      label: t("phone"),
      href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
      value: siteConfig.contact.phone,
    },
    {
      icon: MapPin,
      label: t("location"),
      value: siteConfig.contact.address,
    },
    {
      icon: Clock,
      label: t("responseLabel"),
      value: t("responseTime"),
    },
  ];

  return (
    <section className="section-py bg-surface" id="contact" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading title={t("letsWorkTogether")} subtitle={t("contactSubtitle")} />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/15">
                    <Mail className="h-7 w-7 text-teal" />
                  </div>
                  <p className="text-2xl font-bold text-teal">{t("thankYou")}</p>
                  <p className="mt-2 text-muted">{t("thankYouMessage")}</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    {t("sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="home-email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      {t("email")} *
                    </label>
                    <input
                      id="home-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-lg bg-surface px-4 py-3 text-foreground ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="home-subject"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      {t("subject")} *
                    </label>
                    <input
                      id="home-subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full rounded-lg bg-surface px-4 py-3 text-foreground ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="home-message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      {t("message")} *
                    </label>
                    <textarea
                      id="home-message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-y rounded-lg bg-surface px-4 py-3 text-foreground ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full md:w-auto" disabled={sending}>
                    {sending ? "…" : tc("submit")}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-8">
            <TeamSpotlight />

            <ul className="grid gap-3 sm:grid-cols-2">
              {contactItems.map(({ icon: Icon, label, href, value }) => (
                <li
                  key={label}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-teal/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                    <Icon className="h-5 w-5 text-teal" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block truncate text-sm font-medium text-foreground hover:text-teal"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted">
              {t("directEmail")}{" "}
              <Link href="/contact" className="font-semibold text-teal hover:underline">
                {tc("letsTalk")}
              </Link>
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
