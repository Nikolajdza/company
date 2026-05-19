import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("errors");

  return (
    <section className="flex min-h-[70vh] items-center bg-background">
      <Container className="text-center">
        <p className="text-8xl font-black text-teal/20 md:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">{t("notFoundTitle")}</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">{t("notFoundText")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            {t("backHome")}
          </Button>
          <Button href="/contact" variant="outline">
            {t("contactUs")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
