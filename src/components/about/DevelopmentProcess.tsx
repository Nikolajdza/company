"use client";

import { CheckCircle2, Code2, PenTool, Rocket, Search } from "lucide-react";
import { motion } from "framer-motion";
import { developmentSteps } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const iconMap = {
  search: Search,
  design: PenTool,
  code: Code2,
  qa: CheckCircle2,
  launch: Rocket,
} as const;

type StepIconKey = keyof typeof iconMap;

function StepIllustration({
  icon: iconKey,
  reverse,
}: {
  icon: StepIconKey;
  reverse?: boolean;
}) {
  const Icon = iconMap[iconKey];
  return (
    <div
      className={cn(
        "relative flex aspect-square max-w-md items-center justify-center",
        reverse ? "ml-auto" : "mr-auto",
      )}
    >
      <div className="absolute inset-0 rounded-full bg-teal-bright/10 blur-3xl" />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full rounded-2xl border border-teal-bright/20 bg-dark-elevated/90 p-10 glow-teal"
      >
        <div className="mb-6 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-teal-bright"
            />
          ))}
        </div>
        <Icon className="mx-auto h-24 w-24 text-teal-bright/80" strokeWidth={1} />
        <motion.div
          className="absolute -right-2 top-1/4 rounded-lg border border-teal-bright/30 bg-dark px-3 py-2 text-xs text-teal-bright"
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {iconKey === "code" ? "</>" : iconKey === "qa" ? "QA ✓" : "●●●"}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function DevelopmentProcess() {
  return (
    <section
      className="relative overflow-hidden bg-dark py-24 bg-tech-grid"
      aria-labelledby="dev-process"
    >
      <motion.div
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-teal-bright/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow theme="dark">How we work</Eyebrow>
          <h2
            id="dev-process"
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Our Development Process
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/65 md:text-lg">
            From first conversation to long-term support — a proven, agile process that
            delivers results at every stage.
          </p>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {developmentSteps.map((step, index) => {
            const reverse = index % 2 === 1;
            const Icon = iconMap[step.icon as StepIconKey];

            return (
              <div
                key={step.step}
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  reverse && "lg:[direction:rtl]",
                )}
              >
                <FadeIn
                  delay={0.1}
                  className={cn("lg:[direction:ltr]", reverse && "lg:order-2")}
                >
                  <StepIllustration icon={step.icon as StepIconKey} reverse={reverse} />
                </FadeIn>

                <FadeIn
                  delay={0.2}
                  className={cn("lg:[direction:ltr]", reverse && "lg:order-1")}
                >
                  <motion.article
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-2xl border border-teal-bright/15 bg-dark-elevated/80 p-8 backdrop-blur-sm md:p-10"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className="h-6 w-6 text-teal-bright" strokeWidth={1.5} />
                      <span className="text-sm font-bold text-teal-bright">{step.step}</span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-teal-bright md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70 md:text-base">
                      {step.description}
                    </p>
                  </motion.article>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
