"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: React.ReactNode;
  theme?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  theme = "light",
  align = "center",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        align === "center" ? "text-center" : "text-left",
        "mb-8 md:mb-10",
        className,
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl",
          isDark ? "text-white" : "text-teal",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mx-auto mt-3 h-0.5 w-16",
          align === "left" && "mx-0",
          isDark ? "bg-teal-bright" : "bg-coral",
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
            isDark ? "text-white/70" : "text-muted",
            align === "left" && "mx-0",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
