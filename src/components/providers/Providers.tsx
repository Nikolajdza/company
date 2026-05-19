"use client";

import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";

type ProvidersProps = {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
};

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Belgrade">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="company-theme">
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
