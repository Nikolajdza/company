import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { ValuesAcrostic } from "@/components/about/ValuesAcrostic";
import { DifferenceCarousel } from "@/components/why-us/DifferenceCarousel";
import { IndustriesSection } from "@/components/why-us/IndustriesSection";
import { DevelopmentProcess } from "@/components/about/DevelopmentProcess";
import { BusinessModelsDetail } from "@/components/about/BusinessModelsDetail";
import { AiEdgeSection } from "@/components/about/AiEdgeSection";
import { AboutCta } from "@/components/about/AboutCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/about` },
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <ValuesAcrostic />
      <DifferenceCarousel />
      <IndustriesSection />
      <DevelopmentProcess />
      <BusinessModelsDetail />
      <AiEdgeSection />
      <AboutCta />
    </>
  );
}
