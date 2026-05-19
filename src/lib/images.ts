/** Reliable Unsplash URLs */
export const images = {
  teamCollaboration:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  developersAtDesk:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  teamOutdoor: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",
  officeMeeting: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80",
  laptopCode: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
  analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  elearning:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  noviSad: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  careersHero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  contactCta: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80",
  whyUsBg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
  dedicatedTeam:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  staffAug:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  projectBased:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
} as const;

export function deviconUrl(slug: string) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}.svg`;
}
