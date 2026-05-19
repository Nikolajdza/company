"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { industries } from "@/data/why-us";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function IndustriesSection() {
  const t = useTranslations("about");

  return (
    <section className="section-py bg-surface">
      <Container>
        <SectionHeading title={t("industries")} />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 md:gap-8">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeIn key={ind.key} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card shadow-sm md:h-20 md:w-20">
                    <Icon className="h-8 w-8 text-foreground/70 md:h-9 md:w-9" strokeWidth={1.25} />
                  </motion.div>
                  <span className="text-xs font-medium text-muted md:text-sm">
                    {t(`industryLabels.${ind.key}`)}
                  </span>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
