"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { images } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function CareersSection() {
  const t = useTranslations("home");

  return (
    <section className="bg-card py-24" aria-labelledby="careers-heading">
      <Container>
        <SectionHeading title={t("joinTeam")} />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {t("joinTeamText")}{" "}
              <a
                href={`mailto:${siteConfig.contact.careersEmail}`}
                className="font-semibold text-foreground underline decoration-coral underline-offset-4 hover:text-teal"
              >
                {siteConfig.contact.careersEmail}
              </a>
            </p>
            <Button href="/careers" variant="coral" className="mt-8">
              {t("viewPositions")}
            </Button>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
              <Image
                src={images.developersAtDesk}
                alt="Developers working together at a desk"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
