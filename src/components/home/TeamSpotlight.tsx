"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { leadershipTeam } from "@/data/team";
import { FadeIn } from "@/components/animations/FadeIn";

export function TeamSpotlight() {
  const t = useTranslations("home");

  return (
    <div>
      <FadeIn>
        <h3 className="text-lg font-bold text-foreground md:text-xl">{t("meetTeam")}</h3>
        <p className="mt-1 text-sm text-muted">{t("meetTeamSubtitle")}</p>
      </FadeIn>

      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {leadershipTeam.map((member, i) => (
          <li key={member.id}>
            <FadeIn delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:border-teal/25 hover:shadow-lg hover:shadow-teal/10"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-bright">
                      {t(`teamRoles.${member.roleKey}`)}
                    </p>
                    <p className="mt-0.5 text-lg font-bold text-white">{member.name}</p>
                  </div>
                </div>
                <p className="p-4 text-sm leading-relaxed text-muted">
                  {t(`team.${member.bioKey}`)}
                </p>
              </motion.article>
            </FadeIn>
          </li>
        ))}
      </ul>
    </div>
  );
}
