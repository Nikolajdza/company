"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function AboutPageHero() {
  return (
    <section className="relative h-[55vh] min-h-[420px] overflow-hidden md:h-[65vh]" aria-label="About hero">
      <Image
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
        alt={`${siteConfig.name} team`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />

      <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            About
          </h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-coral" />
        </motion.div>
      </div>
    </section>
  );
}
