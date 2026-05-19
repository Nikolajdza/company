"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function AboutIntro() {
  const t = useTranslations("about");

  return (
    <section className="section-py bg-card">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-14">
          <FadeIn className="mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px]">
              <div className="absolute inset-0 rounded-full bg-teal/15 blur-2xl" />
              <motion.div className="absolute -inset-3 rounded-full border-2 border-dashed border-teal/35 animate-spin-slow" />
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-card shadow-xl ring-4 ring-teal/25">
                <Image
                  src={images.teamCollaboration}
                  alt="Our team"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
              <p>
                <strong className="font-semibold text-teal">{siteConfig.name}</strong>{" "}
                {t("introP1")}
              </p>
              <p>{t("introP2")}</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
