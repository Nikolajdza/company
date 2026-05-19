"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

function EuropeMap() {
  return (
    <svg viewBox="0 0 400 320" className="w-full max-w-md text-foreground/15" aria-hidden>
      <path
        d="M80 120 Q120 80 180 90 L220 70 Q280 60 320 100 L340 150 Q350 200 300 230 L240 250 Q180 270 140 240 L100 200 Q60 170 80 120Z"
        fill="currentColor"
      />
      <motion.path
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: "200px 160px" }}
        d="M175 130 Q200 110 225 130 L230 160 Q225 185 200 190 Q175 185 170 160 Z"
        fill="#f07e6e"
      />
      <text x="188" y="165" fill="#f07e6e" className="text-[10px] font-bold">
        RS
      </text>
    </svg>
  );
}

export function OutsourcingSection() {
  return (
    <section className="bg-surface py-24" aria-labelledby="outsourcing">
      <Container>
        <SectionHeading title="Outsourcing" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="Novi Sad, Serbia — Petrovaradin fortress view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-teal" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                Serbia is{" "}
                <strong className="font-semibold text-foreground">
                  one of the biggest IT hubs in Eastern Europe
                </strong>
                . Our region offers a highly skilled workforce, strong technical education, and
                excellent English proficiency.
              </p>
              <p>
                We follow <strong className="font-semibold text-foreground">Agile principles</strong>{" "}
                and the <strong className="font-semibold text-foreground">Scrum framework</strong>{" "}
                to ensure transparent delivery, regular feedback, and predictable outcomes.
              </p>
              <p>
                Clients choose us for the{" "}
                <strong className="font-semibold text-foreground">
                  best price-to-quality ratio in Europe
                </strong>{" "}
                — without compromising on code quality, security, or communication.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-20">
          <div className="grid items-center gap-8 rounded-2xl border border-black/5 bg-white p-8 md:grid-cols-2 md:p-12">
            <div className="space-y-4 text-muted">
              <p>
                Located in <strong className="text-foreground">Novi Sad</strong>, we operate in
                Central European Time — perfectly aligned with clients across Europe and flexible
                for US East Coast collaboration.
              </p>
            </div>
            <EuropeMap />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
