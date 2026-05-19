"use client";

import { Bot, TrendingUp, Layers } from "lucide-react";
import { promises } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

const icons = [Bot, TrendingUp, Layers];

export function PromiseSection() {
  return (
    <section
      className="relative overflow-hidden bg-dark py-24 bg-tech-grid"
      aria-labelledby="promise-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-bright/5 to-transparent" />

      <Container className="relative">
        <SectionHeading title="Our Digitalization Promise" theme="dark" />

        <div className="grid gap-12 md:grid-cols-3">
          {promises.map((item, i) => {
            const Icon = icons[i] ?? Bot;
            return (
              <FadeIn key={item.title} delay={i * 0.12}>
                <article className="text-center">
                  <div className="relative mx-auto mb-8 flex h-36 w-36 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-teal-bright/10 blur-2xl" />
                    <Icon
                      className="relative h-20 w-20 text-teal-bright/80"
                      strokeWidth={1}
                    />
                    {i < 2 && (
                      <div className="absolute -right-8 top-1/2 hidden h-px w-16 bg-gradient-to-r from-teal-bright/40 to-transparent md:block" />
                    )}
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-teal-bright">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">{item.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
