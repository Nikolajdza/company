"use client";

import { useCallback, useEffect, useState } from "react";
import { Brain, Cpu, Users, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { differences } from "@/data/why-us";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const icons = { team: Users, agile: Zap, ai: Cpu, partner: Brain };

export function DifferenceCarousel() {
  const t = useTranslations("about");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-py bg-dark bg-tech-grid">
      <Container>
        <motion.div className="text-center">
          <Eyebrow theme="dark">{t("differenceSubtitle")}</Eyebrow>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t("differenceTitle")}</h2>
        </motion.div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 text-teal-bright/70 hover:text-teal-bright md:-left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div ref={emblaRef} className="overflow-hidden px-6">
            <div className="flex">
              {differences.map((item, index) => {
                const Icon = icons[item.icon as keyof typeof icons] ?? Users;
                const isActive = index === selected;
                return (
                  <div
                    key={item.key}
                    className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_70%] lg:flex-[0_0_55%]"
                  >
                    <motion.article
                      animate={{
                        scale: isActive ? 1 : 0.88,
                        opacity: isActive ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.4 }}
                      className={cn(
                        "mx-auto max-w-lg rounded-2xl border bg-dark-elevated/90 p-8 text-center md:p-10",
                        isActive ? "border-teal-bright/50 glow-teal" : "border-white/5",
                      )}
                    >
                      <Icon className="mx-auto mb-5 h-11 w-11 text-teal-bright" strokeWidth={1.25} />
                      <h3 className="mb-3 text-xl font-bold text-teal-bright">
                        {t(`differences.${item.key}.title`)}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/65">
                        {t(`differences.${item.key}.description`)}
                      </p>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 text-teal-bright/70 hover:text-teal-bright md:-right-8"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </Container>
    </section>
  );
}
