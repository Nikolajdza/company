import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareersBenefits } from "@/components/careers/CareersBenefits";
import { OpenPositions } from "@/components/careers/OpenPositions";
import { InternshipsSection } from "@/components/careers/InternshipsSection";
import { TeamGallery } from "@/components/careers/TeamGallery";
import { AboutCta } from "@/components/about/AboutCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "careers" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersBenefits />
      <OpenPositions />
      <InternshipsSection />
      <TeamGallery />
      <AboutCta />
    </>
  );
}
