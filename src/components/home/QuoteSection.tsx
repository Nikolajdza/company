"use client";

import { ChevronRight, Monitor, Code2, GraduationCap, Globe, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { quoteServices } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { FadeIn } from "@/components/animations/FadeIn";

const serviceIcons = [Monitor, Code2, GraduationCap, Globe, Users];

export function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-dark py-24" aria-labelledby="quote-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,212,0.06)_0%,_transparent_70%)]" />

      <Container className="relative">
        <SectionHeading
          title="Request a Free Quote for One of Our Services"
          theme="dark"
        />

        <div className="mx-auto mb-8 flex justify-center">
          <div className="flex items-center gap-2 text-teal-bright/60">
            <span className="h-px w-24 bg-gradient-to-r from-transparent to-teal-bright/40" />
            <span className="text-teal-bright">▼</span>
            <span className="h-px w-24 bg-gradient-to-l from-transparent to-teal-bright/40" />
          </div>
        </div>

        <ul className="mx-auto max-w-3xl space-y-4">
          {quoteServices.map((service, i) => {
            const Icon = serviceIcons[i] ?? Monitor;
            return (
              <FadeIn key={service} delay={i * 0.06}>
                <li>
                  <Link href="/contact" className="group block">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="clip-chevron flex items-center gap-4 border border-teal-bright/25 bg-dark-elevated/80 px-6 py-4 transition-all duration-300 hover:border-teal-bright/60 hover:bg-teal-bright/5 hover:shadow-[0_0_24px_rgba(0,229,212,0.12)]"
                    >
                      <Icon className="h-6 w-6 shrink-0 text-teal-bright" strokeWidth={1.5} />
                      <span className="flex-1 font-medium text-white">{service}</span>
                      <ChevronRight className="h-5 w-5 text-teal-bright transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </Link>
                </li>
              </FadeIn>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-sm text-white/50">
          If you can&apos;t find what you need, reach out at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-teal-bright hover:underline"
          >
            {siteConfig.contact.email}
          </a>
        </p>
      </Container>
    </section>
  );
}
