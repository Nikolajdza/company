"use client";

import { motion, type Variants } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
};

const getVariants = (direction: FadeInProps["direction"]): Variants => {
  const offset = direction === "up" ? 32 : direction === "down" ? -32 : 0;
  return {
    hidden: { opacity: 0, y: offset },
    visible: { opacity: 1, y: 0 },
  };
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={getVariants(direction)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
