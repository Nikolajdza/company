"use client";

import { motion } from "framer-motion";
import { workflowSteps } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

export function WorkflowSection() {
  return (
    <section className="bg-white py-24" aria-labelledby="workflow">
      <Container>
        <SectionHeading title="Our outsourcing workflow" />

        <ol className="grid gap-0 md:grid-cols-4">
          {workflowSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <li
                className="relative border-foreground/10 px-6 py-8 md:border-r md:last:border-r-0"
              >
                <span
                  className="pointer-events-none absolute -top-4 left-4 select-none text-[120px] font-bold leading-none text-foreground/[0.04]"
                  aria-hidden
                >
                  {step.number}
                </span>
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <h3 className="relative mb-4 text-lg font-bold text-coral">{step.title}</h3>
                  <p className="relative text-sm leading-relaxed text-muted">{step.description}</p>
                </motion.div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
