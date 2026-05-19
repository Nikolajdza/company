"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  onDark?: boolean;
};

export function ThemeToggle({ onDark = false }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="inline-block h-9 w-9" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
        onDark
          ? "border-white/20 text-white/80 hover:border-teal-bright/40 hover:text-teal-bright"
          : "border-border text-foreground/70 hover:border-teal-bright/40 hover:text-teal-bright",
      )}
      aria-label={isDark ? t("themeLight") : t("themeDark")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
