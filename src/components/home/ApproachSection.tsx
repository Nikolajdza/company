"use client";

import { useState } from "react";
import {
  Search,
  Layout,
  Code2,
  Settings,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { approachSteps } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const stepIcons = [Search, Layout, Code2, Settings, Rocket, HeadphonesIcon];

export function ApproachSection() {
  const [active, setActive] = useState(0);
  const step = approachSteps[active];

  return (
    <section className="section-py bg-surface" aria-labelledby="approach-heading">
      <Container>
        <SectionHeading
          title="Our approach"
          subtitle={
            <>
              We use <strong className="font-semibold text-foreground">an agile approach</strong>{" "}
              to ensure the best possible results — simple yet efficient solutions to complex IT
              challenges.
            </>
          }
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-0 right-0 top-8 hidden h-px border-t border-dashed border-foreground/20 md:block" />

          <ol className="grid grid-cols-3 gap-6 md:grid-cols-6 md:gap-2">
            {approachSteps.map((s, i) => {
              const Icon = stepIcons[i] ?? Search;
              const isActive = i === active;
              return (
                <li key={s.id} className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center gap-2"
                    aria-pressed={isActive}
                    aria-label={s.label}
                  >
                    <span
                      className={cn(
                        "hidden text-[10px] font-medium uppercase tracking-wide md:block",
                        isActive ? "text-coral" : "text-muted",
                      )}
                    >
                      {s.label.split(" ")[0]}
                    </span>
                    <span
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-full border-2 bg-card transition-all duration-300 md:h-16 md:w-16",
                        isActive
                          ? "border-coral shadow-lg shadow-coral/20 scale-110"
                          : "border-foreground/10 group-hover:border-teal/40",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6",
                          isActive ? "text-coral" : "text-foreground/50",
                        )}
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="text-center text-[10px] text-muted md:hidden">
                      {s.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="relative mx-auto mt-12 max-w-2xl rounded-2xl bg-card p-8 text-center shadow-lg ring-1 ring-border"
            >
              <div className="absolute -top-6 left-1/2 hidden h-6 w-px border-l border-dashed border-coral md:block" />
              <h3 className="mb-3 text-lg font-bold text-teal">{step.label}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
