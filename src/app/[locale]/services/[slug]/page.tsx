import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import { services, serviceSlugs, type ServiceSlug } from "@/data/services";
import { ServiceDetail } from "@/components/pages/ServiceDetail";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.subtitle,
    alternates: { canonical: `${siteConfig.url}/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = services[slug as ServiceSlug];
  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
