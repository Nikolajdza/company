"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section className="overflow-hidden bg-white py-24" aria-labelledby="timeline">
      <Container>
        <SectionHeading title="Timeline" />

        <div className="relative mt-4 hidden md:block">
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-foreground/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />

          <ol className="relative flex justify-between">
            {timeline.map((item, i) => (
              <li key={item.year} className="relative flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: item.position === "top" ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className={cn(
                    "absolute w-28 text-center text-xs text-muted",
                    item.position === "top" ? "bottom-full mb-16" : "top-full mt-16",
                  )}
                >
                  {item.label}
                  <span className="mx-auto mt-2 block h-8 w-px border-l border-dashed border-foreground/20" />
                </motion.div>

                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.1 + i * 0.08 }}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shadow-lg shadow-teal/30"
                >
                  {item.year}
                </motion.span>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile vertical timeline */}
        <ol className="relative space-y-8 md:hidden">
          <div className="absolute bottom-0 left-7 top-0 w-px border-l border-dashed border-foreground/20" />
          {timeline.map((item, i) => (
            <motion.li
              key={item.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex gap-6 pl-2"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                {item.year}
              </span>
              <div className="pt-3">
                <p className="font-medium text-foreground">{item.label}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
