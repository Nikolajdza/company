"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { internshipSteps, internships } from "@/data/careers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function InternshipsSection() {
  const t = useTranslations("careers");
  const tc = useTranslations("common");

  return (
    <section id="internships" className="bg-card py-24">
      <Container>
        <SectionHeading title={t("internships")} />

        <div className="relative mx-auto max-w-lg">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dashed border-teal/40" />
          <ol className="space-y-10">
            {internshipSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.06}>
                <li
                  className={`relative flex items-center gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse text-right"}`}
                >
                  <span className="flex-1 text-sm font-medium text-muted">{step.label}</span>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shadow-lg shadow-teal/30"
                  >
                    {step.step}
                  </motion.span>
                  <span className="flex-1" />
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>

        <SectionHeading title={t("internshipPositions")} className="mt-24" />

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {internships.map((item, i) => (
            <FadeIn key={item.slug} delay={i * 0.1}>
              <article className="rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-card text-4xl">
                  💻
                </div>
                <h3 className="mb-6 font-bold text-foreground">{item.title}</h3>
                <Button href={`/careers/${item.slug}`} variant="primary" size="sm">
                  {tc("details")}
                </Button>
              </article>
            </FadeIn>
          ))}
        </div>

        <p className="mt-12 text-center text-muted">
          {t("internshipCta")}{" "}
          <a
            href={`mailto:${siteConfig.contact.careersEmail}`}
            className="font-semibold text-teal underline"
          >
            {siteConfig.contact.careersEmail}
          </a>
        </p>
      </Container>
    </section>
  );
}
