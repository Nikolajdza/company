"use client";

import { Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function FinalCtaSection() {
  const t = useTranslations("home");

  return (
    <section className="section-py relative overflow-hidden bg-dark" aria-labelledby="final-cta">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal-bright/5 via-transparent to-teal-bright/5" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2
              id="final-cta"
              className="text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              {t("finalCtaTitle")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/65">{t("finalCtaText")}</p>
            <Button href="/contact" variant="primary" size="lg" className="mt-8">
              {t("scheduleConsultation")}
            </Button>
            <p className="mt-6 text-sm italic text-white/40">
              Reach us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-teal-bright not-italic">
                {siteConfig.contact.email}
              </a>{" "}
              or visit us in {siteConfig.contact.address}.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="flex justify-center">
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 8px rgba(79,209,197,0.4))",
                  "drop-shadow(0 0 20px rgba(0,229,212,0.6))",
                  "drop-shadow(0 0 8px rgba(79,209,197,0.4))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Coffee className="h-48 w-48 text-teal-bright" strokeWidth={0.75} />
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
