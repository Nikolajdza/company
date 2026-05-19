import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import { allCareerSlugs, getCareerBySlug } from "@/data/careers";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    allCareerSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) return { title: "Careers" };
  return {
    title: career.data.title,
    alternates: { canonical: `${siteConfig.url}/careers/${slug}` },
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const career = getCareerBySlug(slug);
  if (!career) notFound();

  const { data } = career;
  const isPosition = career.kind === "position";

  return (
    <>
      <InnerPageHero title={data.title} image={images.careersHero} />
      <section className="section-py bg-card">
        <Container className="max-w-3xl">
          {isPosition && "type" in data && (
            <div className="mb-6 flex flex-wrap gap-3 text-sm text-muted">
              <span className="rounded-full bg-surface px-3 py-1 ring-1 ring-border">{data.type}</span>
              <span className="rounded-full bg-surface px-3 py-1 ring-1 ring-border">
                {data.location}
              </span>
            </div>
          )}
          {!isPosition && "duration" in data && (
            <p className="mb-4 text-sm font-medium text-teal">Duration: {data.duration}</p>
          )}

          <p className="text-lg leading-relaxed text-muted">{data.description}</p>

          {isPosition && "stack" in data && (
            <>
              <h2 className="mt-10 text-xl font-bold text-foreground">Tech stack</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-surface px-3 py-1.5 text-sm font-medium text-teal ring-1 ring-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h2 className="mt-10 text-xl font-bold text-foreground">Requirements</h2>
              <ul className="mt-4 space-y-2 text-muted">
                {data.requirements.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="text-coral">•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </>
          )}

          <Button
            href={`mailto:${siteConfig.contact.careersEmail}?subject=Application: ${data.title}`}
            variant="primary"
            size="lg"
            className="mt-10"
          >
            Apply now
          </Button>
        </Container>
      </section>
    </>
  );
}
