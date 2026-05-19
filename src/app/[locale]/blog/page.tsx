import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/blog` },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <>
      <InnerPageHero title={t("title")} subtitle={t("subtitle")} />
      <section className="section-py bg-card">
        <Container className="max-w-xl text-center">
          <p className="text-lg text-muted">{t("comingSoon")}</p>
          <Button href="/contact" variant="primary" className="mt-8">
            {t("notifyCta")}
          </Button>
        </Container>
      </section>
    </>
  );
}
