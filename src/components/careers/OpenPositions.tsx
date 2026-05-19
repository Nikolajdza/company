"use client";

import { useCallback, useEffect, useState } from "react";
import { Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { openPositions } from "@/data/careers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function OpenPositions() {
  const t = useTranslations("careers");
  const tc = useTranslations("common");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
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
    <section id="positions" className="bg-surface py-24">
      <Container>
        <SectionHeading title={t("openPositions")} />

        <div className="relative">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-teal md:-left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div ref={emblaRef} className="overflow-hidden px-8">
            <div className="flex gap-6">
              {openPositions.map((job, i) => (
                <motion.article
                  key={job.slug}
                  whileHover={{ y: -6 }}
                  className="min-w-0 flex-[0_0_85%] rounded-2xl border border-border bg-card p-8 shadow-sm sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <div className="mb-6 flex h-32 items-center justify-center rounded-xl bg-surface">
                    <Code2 className="h-16 w-16 text-teal/50" strokeWidth={1} />
                  </div>
                  <h3 className="mb-4 text-center text-lg font-bold text-foreground">{job.title}</h3>
                  <div className="mb-6 flex flex-wrap justify-center gap-1">
                    {job.stack.map((s) => (
                      <span key={s} className="rounded-full bg-surface px-2 py-0.5 text-xs text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Button href={`/careers/${job.slug}`} variant="primary" className="w-full">
                    {tc("details")}
                  </Button>
                </motion.article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-teal md:-right-6"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {openPositions.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                selected === i ? "w-6 bg-teal" : "bg-teal/25",
              )}
              aria-label={`Position ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
