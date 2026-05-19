"use client";

import { Users, Layers, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";
import { engagementModels } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

const icons = [Users, Layers, Briefcase];

export function EngagementSection() {
  const t = useTranslations("home");
  const tc = useTranslations("common");

  return (
    <section className="section-py bg-card" aria-labelledby="engagement-heading">
      <Container>
        <SectionHeading title={t("businessModels")} />

        <div className="grid gap-8 md:grid-cols-3">
          {engagementModels.map((model, i) => {
            const Icon = icons[i] ?? Users;
            return (
              <FadeIn key={model.title} delay={i * 0.1}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-teal/20 hover:shadow-xl hover:shadow-teal/5">
                  <div className="mb-6 flex h-32 items-center justify-center rounded-xl bg-surface transition-colors group-hover:bg-teal/5">
                    <Icon
                      className="h-16 w-16 text-teal/60 transition-transform duration-500 group-hover:scale-110 group-hover:text-teal"
                      strokeWidth={1}
                    />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-teal">{model.title}</h3>
                  <p className="mb-8 flex-1 text-sm leading-relaxed text-muted">
                    {model.description}
                  </p>
                  <Button href={model.href} variant="primary" size="sm" className="w-fit">
                    {tc("readMore")}
                  </Button>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
