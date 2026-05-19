"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function WhyCta() {
  const t = useTranslations("whyUs");

  return (
    <section className="bg-teal py-20">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t("ctaTitle")}</h2>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-white/40" />
          <p className="mx-auto mt-6 max-w-xl text-white/90">{t("ctaText")}</p>
          <Button href="/contact" variant="coral" size="lg" className="mt-10 bg-white text-teal hover:bg-white/90">
            {t("ctaTitle")}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
