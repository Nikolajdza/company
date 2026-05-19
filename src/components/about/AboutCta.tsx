"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutCta() {
  const t = useTranslations("about");
  const tc = useTranslations("common");

  return (
    <section className="relative overflow-hidden py-14 md:py-16" aria-labelledby="about-cta">
      <Image src={images.contactCta} alt="" fill className="object-cover" aria-hidden />
      <div className="absolute inset-0 bg-teal/90" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="about-cta" className="text-2xl font-bold text-white md:text-3xl">
            {t("ctaTitle")}
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-coral" />
          <p className="mx-auto mt-4 max-w-lg text-white/90">{t("ctaText")}</p>
          <Button href="/contact" variant="coral" size="lg" className="mt-6">
            {tc("contactSales")}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
