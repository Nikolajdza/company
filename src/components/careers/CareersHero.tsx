"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Typewriter } from "@/components/animations/Typewriter";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function CareersHero() {
  const t = useTranslations("careers");

  return (
    <section className="relative overflow-hidden bg-dark py-32 md:py-40">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-tech-grid opacity-80"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(79,209,197,0.12)_0%,_transparent_50%)]" />

      <Container className="relative">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            <Typewriter phrases={[t("heroTitle"), "Join us", "Build the future"]} />
          </h1>
          <div className="mt-2 h-1 w-24 bg-teal-bright" />
          <p className="mt-8 text-lg text-white/70">{t("heroSubtitle")}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/careers#positions"
              className={cn(
                "rounded-full bg-coral px-8 py-3 text-sm font-semibold text-white",
                "transition hover:bg-coral-dark hover:scale-[1.02]",
              )}
            >
              {t("openPositions")}
            </Link>
            <Link
              href="/careers#internships"
              className="rounded-full border border-teal-bright/50 px-8 py-3 text-sm font-semibold text-teal-bright transition hover:bg-teal-bright/10"
            >
              {t("viewInternships")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
