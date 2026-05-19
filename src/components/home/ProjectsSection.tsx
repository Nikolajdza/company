"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { projects } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const t = useTranslations("home");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
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
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden bg-dark py-28" aria-labelledby="projects-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,209,197,0.08)_0%,_transparent_65%)]" />

      <Container className="relative">
        <SectionHeading title={t("projects")} theme="dark" />

        <div className="relative mx-auto max-w-6xl">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-2 top-[42%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-teal-bright/30 bg-dark-elevated/90 text-teal-bright backdrop-blur transition hover:border-teal-bright hover:bg-teal-bright/10 md:-left-14"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="carousel-fade-soft overflow-visible px-2 md:px-8">
            <div ref={emblaRef} className="overflow-hidden py-6">
              <div className="flex touch-pan-y">
                {projects.map((project, index) => {
                  const offset = index - selected;
                  const isActive = offset === 0;
                  const isNeighbor = Math.abs(offset) === 1 || Math.abs(offset) === projects.length - 1;

                  return (
                    <div
                      key={project.title}
                      className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_80%] md:flex-[0_0_68%] lg:flex-[0_0_58%]"
                    >
                      <motion.article
                        animate={{
                          scale: isActive ? 1 : isNeighbor ? 0.9 : 0.82,
                          opacity: isActive ? 1 : isNeighbor ? 0.55 : 0.25,
                          y: isActive ? 0 : 12,
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                        className={cn(
                          "mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border bg-dark-elevated/95 backdrop-blur-sm transition-shadow duration-500",
                          isActive
                            ? "border-teal-bright/40 shadow-2xl shadow-teal-bright/10 glow-teal"
                            : "border-white/5 shadow-none",
                        )}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 58vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
                        </div>
                        <div className="px-6 pb-8 pt-5 text-center md:px-10">
                          <h3 className="mb-3 text-2xl font-bold text-teal-bright">{project.title}</h3>
                          <p className="mx-auto mb-5 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-teal-bright/25 bg-teal-bright/5 px-3 py-1 text-xs text-teal-bright/90"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-2 top-[42%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-teal-bright/30 bg-dark-elevated/90 text-teal-bright backdrop-blur transition hover:border-teal-bright hover:bg-teal-bright/10 md:-right-14"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-2.5">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Project ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selected === i ? "w-8 bg-teal-bright" : "w-2 bg-teal-bright/30 hover:bg-teal-bright/50",
              )}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="ghost" size="lg">
            {t("viewPortfolio")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
