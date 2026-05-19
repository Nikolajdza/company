"use client";

import { Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";

export function AiEdgeSection() {
  return (
    <section
      className="relative overflow-hidden bg-dark py-24 bg-tech-grid"
      aria-labelledby="ai-edge"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(79,209,197,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0,229,212,0.08) 0%, transparent 40%)`,
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <Eyebrow theme="dark">Our edge</Eyebrow>
            <h2 id="ai-edge" className="text-3xl font-bold text-white md:text-4xl">
              AI-Accelerated Development
            </h2>
            <p className="mt-2 text-lg italic text-teal-bright/90">
              We use it every day to build better software, faster
            </p>
            <div className="mt-6 space-y-4 text-white/70">
              <p>
                AI tools empower our engineers — they don&apos;t replace them. We leverage
                AI-assisted code generation, rapid prototyping, and intelligent testing to
                accelerate delivery while maintaining human oversight on architecture and quality.
              </p>
              <p>
                The result: shorter cycles, less boilerplate, and more time focused on solving your
                unique business problems.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <motion.article
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl border border-teal-bright/25 bg-dark-elevated/90 p-8 backdrop-blur-sm glow-teal md:p-10"
            >
              <div className="mb-6 flex justify-center">
                <div className="clip-hexagon flex h-20 w-20 items-center justify-center bg-teal-bright/10 glow-teal">
                  <Cpu className="h-10 w-10 text-teal-bright" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-teal-bright">
                Accelerated Development
              </h3>
              <p className="text-center text-sm leading-relaxed text-white/65">
                AI-powered practices including rapid prototyping, automated test generation, and
                smart refactoring — reducing time-to-market without sacrificing quality.
              </p>
            </motion.article>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
