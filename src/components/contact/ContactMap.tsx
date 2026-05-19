"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function ContactMap() {
  const t = useTranslations("contact");

  const mapQuery = encodeURIComponent(siteConfig.contact.address);

  return (
    <section className="pb-0 pt-8 md:pt-10" aria-labelledby="map-heading">
      <Container className="mb-4">
        <FadeIn>
          <h2 id="map-heading" className="text-xl font-bold text-teal">
            {t("mapTitle")}
          </h2>
        </FadeIn>
      </Container>
      <div className="relative h-[320px] w-full overflow-hidden md:h-[400px]">
        <iframe
          title={t("mapTitle")}
          src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
