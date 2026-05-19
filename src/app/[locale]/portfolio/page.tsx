import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { portfolioProjects } from "@/data/portfolio";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolio" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: `${siteConfig.url}/portfolio` },
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "portfolio" });

  return (
    <>
      <InnerPageHero title={t("title")} subtitle={t("subtitle")} image={images.analytics} />
      <section className="section-py bg-card">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-dark/80 px-3 py-1 text-xs font-medium text-white">
                    {project.industry}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-teal">{project.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-card px-2 py-1 text-xs font-medium text-foreground/80 ring-1 ring-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              {t("cta")}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
