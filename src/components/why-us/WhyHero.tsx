"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { acrosticLetters } from "@/data/why-us";
import { Container } from "@/components/ui/Container";

export function WhyHero() {
  const t = useTranslations("whyUs");

  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg className="h-full w-full" aria-hidden>
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="fill-foreground/10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-6xl font-bold tracking-tight text-foreground md:text-8xl">
              {t("heroTitle")}
              <span className="text-coral">{t("heroQuestion")}</span>
            </h1>
          </motion.div>

          <ul className="space-y-4 md:space-y-5">
            {acrosticLetters.map((key, i) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className="flex items-baseline gap-4 border-b border-border pb-4 last:border-0"
              >
                <span className="w-8 shrink-0 text-3xl font-black text-coral md:text-4xl">
                  {key === "o1" ? "O" : key === "o2" ? "O" : key.toUpperCase()}
                </span>
                <span className="text-lg text-foreground/90 md:text-xl">
                  {t(`acrostic.${key}`)}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
