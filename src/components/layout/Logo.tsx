import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
          isLight ? "bg-white/10 ring-1 ring-white/20" : "bg-teal/10 ring-1 ring-teal/30",
        )}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none">
          <path
            d="M8 16c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"
            className={isLight ? "stroke-teal-bright" : "stroke-teal"}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M16 8v16M8 16h16"
            className={isLight ? "stroke-white/80" : "stroke-teal"}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            isLight ? "text-white" : "text-foreground",
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "hidden text-[10px] font-medium uppercase tracking-widest sm:block",
            isLight ? "text-white/50" : "text-muted",
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
