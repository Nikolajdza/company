"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TypewriterProps = {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
};

export function Typewriter({
  phrases,
  className,
  typingSpeed = 55,
  pauseDuration = 2200,
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex] ?? "";

    if (!isDeleting && displayed === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayed((prev) =>
          isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      isDeleting ? typingSpeed / 2 : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex, phrases, pauseDuration, typingSpeed]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 bg-teal-bright align-middle"
        aria-hidden
      />
    </span>
  );
}
