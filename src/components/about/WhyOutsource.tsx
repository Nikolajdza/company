"use client";

import { motion } from "framer-motion";
import { whyOutsource } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

export function WhyOutsource() {
  const left = whyOutsource.filter((w) => w.side === "left");
  const right = whyOutsource.filter((w) => w.side === "right");

  return (
    <section className="bg-white py-24" aria-labelledby="why-outsource">
      <Container>
        <SectionHeading title="Why outsource" />

        <div className="relative mx-auto max-w-5xl py-8">
          {/* Central hub */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="relative z-10 mx-auto flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 border-teal bg-white shadow-xl shadow-teal/10 md:h-44 md:w-44"
          >
            <span className="text-center text-lg font-bold text-coral md:text-xl">
              Why
              <br />
              Outsource
            </span>
          </motion.div>

          {/* Decorative arcs */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 800 400"
            aria-hidden
          >
            <motion.path
              d="M 120 200 Q 200 80 400 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-foreground/10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <motion.path
              d="M 680 200 Q 600 80 400 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-foreground/10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
          </svg>

          <div className="mt-12 grid gap-10 md:mt-0 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
            <ul className="space-y-8 md:text-right">
              {left.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <li>
                    <h3 className="font-bold text-coral">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>

            <motion.div className="hidden md:block md:h-44 md:w-44" aria-hidden />

            <ul className="space-y-8">
              {right.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <li>
                    <h3 className="font-bold text-coral">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          {/* Mobile: show hub between lists */}
          <div className="mt-8 flex justify-center md:hidden">
            <div className="flex gap-2">
              {whyOutsource.map((_, i) => (
                <motion.span
                  key={i}
                  className="h-2 w-2 rounded-full bg-teal"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ delay: i * 0.2, repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
