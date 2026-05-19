"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { images } from "@/lib/images";
import { Typewriter } from "@/components/animations/Typewriter";

export function AboutHero() {
  const t = useTranslations("about");

  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden bg-dark md:min-h-[48vh]">
      <Image
        src={images.teamOutdoor}
        alt=""
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <motion.div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white md:text-5xl"
        >
          <Typewriter phrases={[t("heroTitle")]} className="text-white" />
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-4 h-1 w-20 origin-left bg-coral"
        />
      </div>
    </section>
  );
}
