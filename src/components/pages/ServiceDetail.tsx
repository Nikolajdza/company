import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InnerPageHero } from "@/components/pages/InnerPageHero";
import type { services } from "@/data/services";

type Service = (typeof services)[keyof typeof services];

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      <InnerPageHero title={service.title} subtitle={service.subtitle} image={service.image} />
      <section className="section-py bg-card">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 text-muted">
              {service.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-base leading-relaxed md:text-lg">
                  {p}
                </p>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-surface p-8 md:p-10">
            <h2 className="mb-6 text-xl font-bold text-teal">Key benefits</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-foreground/90">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coral" />
                  {b}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="primary" size="lg" className="mt-8">
              Get started
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
