"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center bg-background">
      <Container className="text-center">
        <p className="text-6xl font-black text-coral/30">!</p>
        <h1 className="mt-4 text-3xl font-bold text-foreground">{t("errorTitle")}</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">{t("errorText")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button type="button" variant="primary" onClick={reset}>
            {t("tryAgain")}
          </Button>
          <Button href="/" variant="outline">
            {t("backHome")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
