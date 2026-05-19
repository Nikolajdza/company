import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { BookMeetingSection } from "@/components/contact/BookMeetingSection";
import { ContactMap } from "@/components/contact/ContactMap";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/contact` },
  };
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <BookMeetingSection />
      <ContactMap />
    </>
  );
}
