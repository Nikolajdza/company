"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: string;
  theme?: "light" | "dark";
  className?: string;
};

export function Eyebrow({ children, theme = "dark", className }: EyebrowProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-3 text-xs font-bold uppercase tracking-[0.25em]",
        theme === "dark" ? "text-teal-bright" : "text-teal",
        className,
      )}
    >
      {children}
    </motion.p>
  );
}
