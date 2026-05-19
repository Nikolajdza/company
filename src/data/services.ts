import { images } from "@/lib/images";

export type ServiceSlug =
  | "staff-augmentation"
  | "dedicated-teams"
  | "project-based"
  | "software-development"
  | "web"
  | "cloud"
  | "mobile"
  | "qa";

export const serviceSlugs: ServiceSlug[] = [
  "staff-augmentation",
  "dedicated-teams",
  "project-based",
  "software-development",
  "web",
  "cloud",
  "mobile",
  "qa",
];

export const services: Record<
  ServiceSlug,
  {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    paragraphs: string[];
    benefits: string[];
  }
> = {
  "staff-augmentation": {
    title: "Staff Augmentation",
    subtitle: "Extend your team with senior engineers on demand",
    image: images.staffAug,
    imageAlt: "Developers collaborating in an office",
    paragraphs: [
      "Add project managers, tech leads, scrum masters, and developers at every seniority level — integrated into your tools, rituals, and codebase from day one.",
      "Ideal when you need to scale quickly without long hiring cycles, while keeping full control of priorities and architecture.",
    ],
    benefits: [
      "Flexible ramp-up and ramp-down",
      "You manage priorities; we provide talent",
      "Same quality bar across all engineers",
      "English-first communication (CET)",
    ],
  },
  "dedicated-teams": {
    title: "Dedicated Teams",
    subtitle: "A full squad focused on your product",
    image: images.dedicatedTeam,
    imageAlt: "Developers working together at a desk",
    paragraphs: [
      "A cross-functional team — PM, engineers, QA — works exclusively on your roadmap with transparent sprint cadence and demos.",
      "Best for building new products, scaling platforms, or modernizing legacy systems with predictable velocity.",
    ],
    benefits: [
      "Long-term product ownership mindset",
      "Stable team composition",
      "Agile delivery with metrics",
      "Security and code review standards",
    ],
  },
  "project-based": {
    title: "Project-Based Delivery",
    subtitle: "End-to-end delivery from idea to launch",
    image: images.projectBased,
    imageAlt: "Project planning and analytics",
    paragraphs: [
      "We take responsibility for scope, timeline, and quality — from discovery and design through development, QA, and deployment.",
      "Suited for startups, SMEs, and enterprises that need a turnkey outcome with clear milestones.",
    ],
    benefits: [
      "Fixed scope or phased releases",
      "Discovery and UX included",
      "DevOps and cloud setup",
      "Post-launch support options",
    ],
  },
  "software-development": {
    title: "Software Development",
    subtitle: "Custom applications built for your business",
    image: images.laptopCode,
    imageAlt: "Software development on laptops",
    paragraphs: [
      "Web, mobile, and enterprise systems tailored to your processes — modern stacks, clean architecture, and maintainable code.",
      "We align engineering with business goals so every release delivers measurable value.",
    ],
    benefits: ["Full-stack capability", "Legacy modernization", "API-first design", "Documentation & handover"],
  },
  web: {
    title: "Web Development",
    subtitle: "Fast, accessible, SEO-ready web apps",
    image: images.analytics,
    imageAlt: "Web application dashboard",
    paragraphs: [
      "Marketing sites, customer portals, and complex SPAs with React, Next.js, and performant backends.",
      "We optimize for Core Web Vitals, accessibility, and conversion — not just shipping features.",
    ],
    benefits: ["Next.js & React expertise", "Headless CMS integrations", "Performance tuning", "Internationalization"],
  },
  cloud: {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure that scales with you",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    imageAlt: "Cloud infrastructure visualization",
    paragraphs: [
      "AWS, Azure, and GCP setups with CI/CD, observability, and security baselines — so releases are safe and repeatable.",
      "We help teams adopt containers, Kubernetes, and infrastructure-as-code without unnecessary complexity.",
    ],
    benefits: ["CI/CD pipelines", "Cost optimization", "Monitoring & alerts", "Security hardening"],
  },
  mobile: {
    title: "Mobile Apps",
    subtitle: "iOS, Android, and cross-platform",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7bc9?w=800&q=80",
    imageAlt: "Mobile applications on phones",
    paragraphs: [
      "Native and Flutter apps with polished UX, offline support, and secure APIs.",
      "From MVP to app-store releases and ongoing updates — we cover the full mobile lifecycle.",
    ],
    benefits: ["Flutter & native", "App Store delivery", "Push & analytics", "Backend integration"],
  },
  qa: {
    title: "QA & Testing",
    subtitle: "Quality built into every release",
    image: images.teamCollaboration,
    imageAlt: "QA team reviewing software",
    paragraphs: [
      "Manual and automated testing — Playwright, Cypress, API tests — integrated into your pipeline.",
      "We reduce regressions and give stakeholders confidence before every production deploy.",
    ],
    benefits: ["Test automation", "Performance testing", "Security checks", "Release sign-off"],
  },
};
