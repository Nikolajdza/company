"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { heroSlides, typewriterPhrases } from "@/data/home";
import { Typewriter } from "@/components/animations/Typewriter";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const slide = heroSlides[selectedIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark" aria-label="Hero">
      <div ref={emblaRef} className="absolute inset-0">
        <div className="flex h-full">
          {heroSlides.map((s) => (
            <div key={s.id} className="relative min-w-0 flex-[0_0_100%]">
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                priority={s.id === 1}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-60" />

      <Container className="relative z-10 flex min-h-screen flex-col justify-center pb-24 pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-bright"
            >
              IT Services & Software Development
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.h1
                key={slide.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              >
                {slide.headline}
              </motion.h1>
            </AnimatePresence>

            <p className="mt-4 text-lg text-teal-bright/90">
              We specialize in{" "}
              <Typewriter
                phrases={[...typewriterPhrases]}
                className="font-semibold text-teal-bright"
              />
            </p>

            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${slide.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
              >
                {slide.subtext}
              </motion.p>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href={slide.ctaHref} variant="coral" size="lg">
                {slide.cta}
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our services
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-full bg-teal-bright/10 blur-3xl" />
              <div className="animate-float relative rounded-2xl border border-teal-bright/20 bg-dark-elevated/80 p-8 backdrop-blur-sm glow-teal">
                <div className="space-y-4 font-mono text-sm text-teal-bright/80">
                  <p className="text-teal-bright">// ship.confidence</p>
                  <p>
                    <span className="text-white/40">const</span> team ={" "}
                    <span className="text-coral">&quot;dedicated&quot;</span>;
                  </p>
                  <p>
                    <span className="text-white/40">const</span> stack = [
                  </p>
                  <p className="pl-4">&quot;React&quot;, &quot;Node&quot;, &quot;Cloud&quot;</p>
                  <p>];</p>
                  <p>
                    <span className="text-white/40">export default</span> deliver(team);
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-1 w-12 overflow-hidden rounded-full bg-white/20"
            >
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-teal-bright"
                initial={false}
                animate={{ width: selectedIndex === i ? "100%" : "0%" }}
                transition={{ duration: selectedIndex === i ? 6 : 0.3 }}
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
