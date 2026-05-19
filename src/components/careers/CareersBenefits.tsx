"use client";

import { Clock, Coins, GraduationCap, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CountUp } from "@/components/animations/CountUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function CareersBenefits() {
  const t = useTranslations("careers");

  const benefits = [
    { icon: Clock, text: t("benefitFlexible") },
    { icon: Coins, text: t("benefitSalary"), highlight: true },
    { icon: GraduationCap, text: t("benefitTraining") },
    { icon: Heart, text: t("benefitMedical") },
  ];

  return (
    <section className="bg-card py-24">
      <Container>
        <SectionHeading title={t("benefits")} />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="grid gap-10 sm:grid-cols-2">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="text-center">
                    <Icon className="mx-auto mb-4 h-14 w-14 text-teal/80" strokeWidth={1} />
                    <p className="text-sm leading-relaxed text-muted">
                      {b.highlight ? (
                        <>
                          <strong className="text-coral">Competitive</strong>{" "}
                          {t("benefitSalary").replace(/^Competitive\s*/i, "")}
                        </>
                      ) : (
                        b.text
                      )}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <motion.div className="text-center" whileInView={{ scale: [0.95, 1] }} viewport={{ once: true }}>
                <p className="text-5xl font-bold text-teal md:text-6xl">
                  <CountUp end={100} suffix="+" />
                </p>
                <p className="mt-2 text-sm text-muted">{t("statEmployees")}</p>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <p className="text-5xl font-bold text-teal md:text-6xl">
                  <CountUp end={500} suffix="+" />
                </p>
                <p className="mt-2 text-sm text-muted">{t("statIntroduced")}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
