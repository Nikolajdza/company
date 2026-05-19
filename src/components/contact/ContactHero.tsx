"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { images } from "@/lib/images";
import { Typewriter } from "@/components/animations/Typewriter";

export function ContactHero() {
  const t = useTranslations("contact");

  return (
    <section className="relative flex min-h-[40vh] items-end overflow-hidden bg-dark md:min-h-[44vh]">
      <Image
        src={images.officeMeeting}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/40" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(79,209,197,0.12),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white md:text-5xl"
        >
          <Typewriter phrases={[t("heroTitle")]} className="text-white" />
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-3 h-1 w-16 origin-left bg-coral"
        />
      </div>
    </section>
  );
}
