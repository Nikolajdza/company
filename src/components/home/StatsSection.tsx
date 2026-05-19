"use client";

import Image from "next/image";
import { stats } from "@/data/home";
import { CountUp } from "@/components/animations/CountUp";
import { Container } from "@/components/ui/Container";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-20" aria-label="Company statistics">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        alt=""
        fill
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-orange/90" />

      <Container className="relative z-10">
        <ul className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label} className="text-center text-white">
              <p className="text-4xl font-bold md:text-5xl">
                {stat.label === "Lines of code" ? (
                  <>
                    <CountUp end={50} />
                    <span className="text-2xl md:text-3xl">×10⁶</span>
                  </>
                ) : (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <div className="mx-auto mt-3 h-px w-12 bg-white/50" />
              <p className="mt-3 text-sm font-medium text-white/90">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
