"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  developerCountOptions,
  positionOptions,
  projectLengthOptions,
  seniorityOptions,
} from "@/data/contact";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

const inputClass =
  "w-full rounded-lg border-0 bg-card px-4 py-2.5 text-sm text-foreground shadow-sm ring-1 ring-border transition-shadow focus:outline-none focus:ring-2 focus:ring-teal";

export function ContactForm() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-py bg-card" aria-labelledby="contact-form-title">
      <Container>
        <SectionHeading title={t("formTitle")} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <FadeIn>
            <div className="rounded-2xl bg-coral p-6 shadow-xl shadow-coral/20 md:p-8">
              {submitted ? (
                <div className="py-12 text-center text-white">
                  <p className="text-2xl font-bold">{t("thankYou")}</p>
                  <p className="mt-2 text-white/90">{t("thankYouMessage")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <label className="block sm:col-span-1">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/90">
                      {t("position")}
                    </span>
                    <select name="position" className={inputClass} defaultValue="frontend">
                      {positionOptions.map((key) => (
                        <option key={key} value={key}>
                          {t(`positions.${key}`)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/90">
                      {t("seniority")}
                    </span>
                    <select name="seniority" className={inputClass} defaultValue="junior">
                      {seniorityOptions.map((key) => (
                        <option key={key} value={key}>
                          {t(`seniorityOptions.${key}`)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/90">
                      {t("technology")}
                    </span>
                    <input
                      type="text"
                      name="technology"
                      placeholder={t("selectTechnology")}
                      className={inputClass}
                    />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/90">
                      {t("projectLength")}
                    </span>
                    <select name="projectLength" className={inputClass} defaultValue="1-6">
                      {projectLengthOptions.map((key) => (
                        <option key={key} value={key}>
                          {t(`projectLengths.${key}`)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/90">
                      {t("developers")}
                    </span>
                    <select name="developers" className={inputClass} defaultValue="1">
                      {developerCountOptions.map((key) => (
                        <option key={key} value={key}>
                          {t(`developerCounts.${key}`)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/90">
                      {t("nameCompany")}
                    </span>
                    <input type="text" name="name" required className={inputClass} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-white/90">
                      {t("emailRequired")}
                    </span>
                    <input type="email" name="email" required className={inputClass} />
                  </label>
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                      {tc("sendRequest")}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="relative hidden items-center justify-center lg:flex">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src={images.developersAtDesk}
                alt=""
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}