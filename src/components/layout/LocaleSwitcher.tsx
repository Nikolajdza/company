"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const labels: Record<Locale, string> = {
  en: "EN",
  sr: "SR",
  de: "DE",
};

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (next: Locale) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border p-0.5">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors",
            locale === loc
              ? "bg-teal text-white"
              : "text-muted hover:text-foreground",
          )}
          aria-current={locale === loc ? "true" : undefined}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
