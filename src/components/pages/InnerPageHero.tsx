"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

type InnerPageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function InnerPageHero({ title, subtitle, image }: InnerPageHeroProps) {
  return (
    <section className="relative flex min-h-[36vh] items-end overflow-hidden bg-dark md:min-h-[40vh]">
      {image && (
        <>
          <Image src={image} alt="" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/50" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-elevated to-teal/20" />
      )}

      <Container className="relative z-10 pb-10 pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-3 max-w-2xl text-lg text-white/75"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 h-1 w-16 origin-left bg-coral"
        />
      </Container>
    </section>
  );
}
