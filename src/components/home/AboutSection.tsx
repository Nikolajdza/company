"use client";

import {
  CheckCircle2,
  Cloud,
  Globe,
  Monitor,
  Smartphone,
} from "lucide-react";
import { aboutServices } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

const icons = {
  globe: Globe,
  cloud: Cloud,
  smartphone: Smartphone,
  monitor: Monitor,
  check: CheckCircle2,
} as const;

export function AboutSection() {
  return (
    <section className="section-py bg-card" aria-labelledby="about-heading">
      <Container>
        <SectionHeading
          title="About us"
          subtitle={
            <>
              We are a software development company{" "}
              <strong className="font-semibold text-foreground">
                with a long tradition in providing outsourcing services
              </strong>
              , based in{" "}
              <strong className="font-semibold text-foreground">Novi Sad, Serbia</strong>
              . Our experienced team turns ideas into finest software solutions through
              advanced processes and modern technologies.
            </>
          }
        />

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {aboutServices.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons] ?? Globe;
            return (
              <FadeIn key={service.label} delay={i * 0.08}>
                <div className="group flex flex-col items-center text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-surface bg-surface transition-all duration-300 group-hover:border-teal/30 group-hover:shadow-lg group-hover:shadow-teal/10">
                    <Icon
                      className="h-9 w-9 text-foreground/70 transition-colors group-hover:text-teal"
                      strokeWidth={1.25}
                    />
                  </div>
                  <span className="text-sm font-medium text-muted group-hover:text-teal">
                    {service.label}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
