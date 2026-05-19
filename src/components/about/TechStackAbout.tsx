"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/animations/FadeIn";

export function TechStackAbout() {
  return (
    <section className="bg-dark-elevated py-24" aria-labelledby="tech-stack">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow theme="dark">Technology</Eyebrow>
          <h2 id="tech-stack" className="text-3xl font-bold text-white md:text-4xl">
            Our stack
          </h2>
          <p className="mt-4 text-white/60">
            We choose the right technology for each project — proven tools that scale with your
            business.
          </p>
        </div>

        <FadeIn className="mt-14">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-white/50">
            Languages & core tech
          </p>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            {techStack.map((tech, i) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <span className="clip-hexagon flex h-20 w-20 items-center justify-center bg-dark border border-teal-bright/40 text-center text-[10px] font-bold leading-tight text-teal-bright shadow-[0_0_20px_rgba(0,229,212,0.15)] transition-shadow hover:shadow-[0_0_28px_rgba(0,229,212,0.35)] md:h-24 md:w-24 md:text-xs">
                  {tech}
                </span>
              </motion.li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
