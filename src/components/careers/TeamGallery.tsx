"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { galleryImages } from "@/data/careers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function TeamGallery() {
  const t = useTranslations("careers");

  return (
    <section className="bg-surface py-24">
      <Container>
        <SectionHeading title={t("lifeAtCompany")} />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[320px]" : "aspect-[4/3]"}`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
