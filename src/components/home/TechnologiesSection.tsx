"use client";

import { useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import { technologies } from "@/data/technologies";
import { deviconUrl } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function TechnologiesSection() {
  const t = useTranslations("home");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 2800, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const items = [...technologies, ...technologies];

  return (
    <section className="bg-surface py-24" aria-labelledby="tech-heading">
      <Container>
        <SectionHeading title={t("technologies")} />

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 mx-auto max-w-5xl">
            <div className="absolute inset-0 top-1/2 h-4 -translate-y-1/2 rounded-full bg-gradient-to-r from-teal/25 via-coral/15 to-teal/25 blur-md" />
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="absolute -left-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-teal shadow-sm hover:border-teal/40 md:-left-4"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div ref={emblaRef} className="carousel-fade-soft overflow-hidden px-12 md:px-16">
            <div className="flex gap-8 py-4">
              {items.map((tech, i) => (
                <div key={`${tech.name}-${i}`} className="group min-w-0 flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`relative flex h-28 w-28 items-center justify-center rounded-full bg-card shadow-lg ring-1 ring-border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-teal/30 bg-gradient-to-br ${tech.ribbon} to-card`}
                    >
                      <Image
                        src={deviconUrl(tech.slug)}
                        alt={tech.name}
                        width={52}
                        height={52}
                        className="h-12 w-12 object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-xs font-semibold text-muted group-hover:text-teal">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollNext}
            className="absolute -right-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-teal shadow-sm hover:border-teal/40 md:-right-4"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
