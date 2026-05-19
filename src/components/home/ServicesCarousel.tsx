"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
  Monitor,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { services } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const iconMap = {
  monitor: Monitor,
  code: Code2,
  globe: Globe,
  smartphone: Smartphone,
  building: Building2,
} as const;

export function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
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
    <section
      className="relative overflow-hidden bg-dark py-24 bg-tech-grid"
      aria-labelledby="services-heading"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-teal-bright/5 blur-3xl" />

      <Container>
        <SectionHeading
          title="Our Services: Digitalizing Your Business"
          theme="dark"
        />

        <div className="relative">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-teal-bright/30 p-2 text-teal-bright transition-colors hover:bg-teal-bright/10 md:-left-6"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div ref={emblaRef} className="overflow-hidden px-8 md:px-12">
            <div className="flex">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Monitor;
                const isActive = index === selected;

                return (
                  <div
                    key={service.id}
                    className="min-w-0 flex-[0_0_85%] px-3 sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_40%]"
                  >
                    <motion.article
                      animate={{
                        scale: isActive ? 1 : 0.88,
                        opacity: isActive ? 1 : 0.45,
                      }}
                      transition={{ duration: 0.4 }}
                      className={cn(
                        "flex h-full flex-col items-center rounded-2xl border bg-dark-elevated/80 p-8 text-center backdrop-blur-sm transition-shadow duration-500",
                        isActive
                          ? "border-teal-bright/60 glow-teal"
                          : "border-white/5",
                      )}
                    >
                      <Icon
                        className={cn(
                          "mb-6 h-12 w-12 transition-colors",
                          isActive ? "text-teal-bright" : "text-white/30",
                        )}
                        strokeWidth={1.5}
                      />
                      <h3
                        className={cn(
                          "mb-4 text-lg font-bold",
                          isActive ? "text-teal-bright" : "text-white/60",
                        )}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/60">
                        {service.description}
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
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-teal-bright/30 p-2 text-teal-bright transition-colors hover:bg-teal-bright/10 md:-right-6"
            aria-label="Next service"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Service ${i + 1}`}
              className={cn(
                "h-2 w-2 rotate-45 border transition-all",
                selected === i
                  ? "border-teal-bright bg-teal-bright"
                  : "border-teal-bright/40 bg-transparent",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
