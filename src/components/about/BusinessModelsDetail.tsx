"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { businessModelsDetail } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

export function BusinessModelsDetail() {
  return (
    <section className="section-py bg-surface" aria-labelledby="business-models">
      <Container>
        <SectionHeading title="Business models" />

        <div className="space-y-20 md:space-y-28">
          {businessModelsDetail.map((model, index) => {
            const reverse = "reverse" in model && model.reverse;

            return (
              <div
                key={model.title}
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  reverse && "lg:[direction:rtl]",
                )}
              >
                <FadeIn className="lg:[direction:ltr]">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card shadow-md"
                  >
                    <Image
                      src={model.image}
                      alt={model.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </FadeIn>

                <FadeIn delay={0.1} className="lg:[direction:ltr]">
                  <div className="border-l-2 border-foreground/10 pl-8 lg:border-l-0 lg:pl-0 lg:pr-0">
                    <h3 className="mb-6 text-2xl font-bold text-coral md:text-3xl">
                      {model.title}
                    </h3>
                    <div className="space-y-4 text-muted">
                      {model.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)} className="leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
