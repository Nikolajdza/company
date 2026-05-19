"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { acrosticLetters } from "@/data/why-us";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const displayLetters: Record<string, string> = {
  c: "C",
  o1: "O",
  d: "D",
  o2: "O",
  l: "L",
  i: "I",
  s: "S",
};

const TYPE_MS = 14;
const LETTER_POP_MS = 180;
const PAUSE_AFTER_LINE_MS = 450;

function AcrosticLine({
  letterKey,
  letter,
  text,
  index,
  isCurrent,
  isDone,
}: {
  letterKey: string;
  letter: string;
  text: string;
  index: number;
  isCurrent: boolean;
  isDone: boolean;
}) {
  const [typed, setTyped] = useState(isDone ? text : "");
  const [phase, setPhase] = useState<"idle" | "pop" | "typing" | "done">(
    isDone ? "done" : "idle",
  );

  useEffect(() => {
    if (isDone) {
      setTyped(text);
      setPhase("done");
      return;
    }
    if (!isCurrent) {
      setTyped("");
      setPhase("idle");
      return;
    }

    setPhase("pop");
    const popTimer = setTimeout(() => setPhase("typing"), LETTER_POP_MS);
    return () => clearTimeout(popTimer);
  }, [isCurrent, isDone, text]);

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setPhase("done");
      }
    }, TYPE_MS);
    return () => clearInterval(interval);
  }, [phase, text]);

  const lit = isCurrent || isDone;

  return (
    <motion.li
      layout
      animate={{
        opacity: lit ? 1 : 0.35,
        x: lit ? 0 : 12,
      }}
      transition={{ duration: 0.25 }}
      className={cn(
        "relative flex items-center gap-5 rounded-2xl px-4 py-4 md:gap-6 md:px-6 md:py-5",
        isCurrent && "bg-white/[0.06] ring-1 ring-teal-bright/30 glow-teal",
        isDone && !isCurrent && "bg-white/[0.03]",
      )}
    >
      {isCurrent && (
        <motion.span
          layoutId="acrostic-active-bar"
          className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-gradient-to-b from-coral via-teal-bright to-teal"
        />
      )}

      <motion.span
        key={lit ? `on-${letterKey}` : `off-${letterKey}`}
        initial={{ scale: 0.4, opacity: 0 }}
        animate={
          lit
            ? { scale: 1, opacity: 1 }
            : { scale: 0.75, opacity: 0.35 }
        }
        transition={{ type: "spring", stiffness: 520, damping: 18 }}
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl font-black text-white shadow-xl md:h-[4.5rem] md:w-[4.5rem] md:text-4xl",
          isCurrent
            ? "bg-gradient-to-br from-coral to-coral-dark shadow-coral/50"
            : isDone
              ? "bg-gradient-to-br from-teal to-teal/80 shadow-teal/40"
              : "bg-white/10",
        )}
      >
        {letter}
      </motion.span>

      <div className="min-h-[2.75rem] flex-1 md:min-h-[3rem]">
        <AnimatePresence mode="wait">
          {phase === "typing" || phase === "done" ? (
            <motion.p
              key={`t-${letterKey}-${phase}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "font-semibold leading-snug tracking-tight text-white",
                isCurrent ? "text-xl md:text-2xl lg:text-[1.65rem]" : "text-lg md:text-xl",
              )}
            >
              {typed}
              {phase === "typing" && (
                <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-teal-glow align-middle" />
              )}
            </motion.p>
          ) : (
            <motion.span
              key={`d-${letterKey}`}
              animate={{ opacity: isCurrent ? 0.5 : 0.25 }}
              className="text-sm font-bold uppercase tracking-[0.35em] text-white/40"
            >
              ···
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}

export function AcrosticReveal() {
  const t = useTranslations("about");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = document.getElementById("acrostic-section");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          setActiveIndex(0);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || activeIndex < 0) return;
    if (activeIndex >= acrosticLetters.length) return;

    const key = acrosticLetters[activeIndex];
    const text = t(`acrostic.${key}`);
    const lineDuration = LETTER_POP_MS + text.length * TYPE_MS + PAUSE_AFTER_LINE_MS;

    const timer = setTimeout(() => {
      setActiveIndex((i) => i + 1);
    }, lineDuration);

    return () => clearTimeout(timer);
  }, [started, activeIndex, t]);

  const allComplete = activeIndex >= acrosticLetters.length;

  return (
    <section
      id="acrostic-section"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <Image src={images.whyUsBg} alt="" fill className="object-cover scale-105" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/92 to-teal/35" />
      <motion.div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-coral/20 blur-[100px]"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-teal-bright/15 blur-[90px]"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-tech-grid opacity-40" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.4em] text-teal-bright">
            {t("differenceSubtitle")}
          </p>
          <h2 className="text-center text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
            {t("whyTitle")}{" "}
            <span className="bg-gradient-to-r from-coral to-teal-bright bg-clip-text text-transparent">
              {t("whyQuestion")}
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mx-auto mt-5 h-1 w-24 origin-center bg-gradient-to-r from-transparent via-coral to-transparent"
          />
        </motion.div>

        <ul className="mx-auto max-w-4xl space-y-2">
          {acrosticLetters.map((key, i) => (
            <AcrosticLine
              key={key}
              letterKey={key}
              letter={displayLetters[key]}
              text={t(`acrostic.${key}`)}
              index={i}
              isCurrent={started && i === activeIndex && !allComplete}
              isDone={started && (i < activeIndex || allComplete)}
            />
          ))}
        </ul>

        {/* Decorative CODOLIS watermark */}
        <p
          className="pointer-events-none mt-10 text-center text-[clamp(3rem,12vw,7rem)] font-black leading-none tracking-widest text-white/[0.04]"
          aria-hidden
        >
          CODOLIS
        </p>
      </Container>
    </section>
  );
}
