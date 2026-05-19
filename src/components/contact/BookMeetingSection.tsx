"use client";

import { Calendar, Clock, Video } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function BookMeetingSection() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");
  const th = useTranslations("home");

  return (
    <section className="section-py bg-surface">
      <Container>
        <FadeIn>
          <h2 className="text-center text-2xl font-bold text-teal md:text-3xl">
            {tc("bookMeeting")}
            <span className="mx-auto mt-2 block h-0.5 w-16 bg-coral" />
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted">
            {t("bookMeetingHint")}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-8 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal/15">
                  <span className="text-lg font-black text-teal">{siteConfig.name.charAt(0)}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-teal">Sales</p>
                <h3 className="mt-2 text-lg font-bold text-foreground">Meeting duration</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0 text-teal" />
                    30 mins
                  </li>
                  <li className="flex items-center gap-2">
                    <Video className="h-4 w-4 shrink-0 text-teal" />
                    Web conference — link sent by email
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center bg-surface p-8 text-center">
                <Calendar className="mb-4 h-12 w-12 text-teal/60" />
                <p className="text-sm text-muted">
                  Add your Calendly embed URL in{" "}
                  <code className="rounded bg-card px-1 text-xs">BookMeetingSection</code>
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Meeting request`}
                  className="mt-4 inline-flex rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal/90"
                >
                  {th("scheduleConsultation")}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
