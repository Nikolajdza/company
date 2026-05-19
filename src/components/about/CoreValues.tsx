"use client";

import { Lightbulb, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";
import { coreValues } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

const icons = { users: Users, message: MessageCircle, lightbulb: Lightbulb };

export function CoreValues() {
  return (
    <section className="bg-surface py-24" aria-labelledby="core-values">
      <Container>
        <SectionHeading title="Core values" />

        <div className="grid gap-12 md:grid-cols-3">
          {coreValues.map((value, i) => {
            const Icon = icons[value.icon as keyof typeof icons] ?? Users;
            return (
              <FadeIn key={value.title} delay={i * 0.12}>
                <article className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full border-2 border-coral/30 bg-white shadow-lg shadow-coral/5"
                  >
                    <Icon className="h-16 w-16 text-teal/70" strokeWidth={1.25} />
                  </motion.div>
                  <h3 className="mb-3 text-lg font-bold text-coral">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{value.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
