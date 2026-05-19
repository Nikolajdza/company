import { images } from "@/lib/images";

export const openPositions = [
  {
    title: "Senior React Developer",
    slug: "senior-react-developer",
    stack: ["React", "TypeScript", "Next.js"],
    type: "Full-time",
    location: "Novi Sad / Hybrid",
    description:
      "Lead front-end architecture for client products. You'll mentor juniors, own code reviews, and ship accessible, performant UIs with Next.js and TypeScript.",
    requirements: [
      "5+ years with React",
      "Strong TypeScript and testing",
      "Experience with design systems",
      "Fluent English",
    ],
  },
  {
    title: "Node.js Engineer",
    slug: "nodejs-engineer",
    stack: ["Node.js", "NestJS", "PostgreSQL"],
    type: "Full-time",
    location: "Novi Sad / Remote",
    description:
      "Build scalable APIs and microservices for international clients. Work in agile squads with clear sprint goals and modern DevOps practices.",
    requirements: [
      "3+ years Node.js",
      "NestJS or Express at scale",
      "SQL and caching patterns",
      "REST and GraphQL experience",
    ],
  },
  {
    title: "Java Engineer",
    slug: "java-engineer",
    stack: ["Java", "Spring", "AWS"],
    type: "Full-time",
    location: "Novi Sad",
    description:
      "Develop enterprise backends and integrations. Focus on clean architecture, security, and reliable deployments on AWS.",
    requirements: [
      "4+ years Java",
      "Spring Boot expertise",
      "Cloud deployment experience",
      "Unit and integration testing",
    ],
  },
  {
    title: "QA Automation Engineer",
    slug: "qa-automation",
    stack: ["Playwright", "Cypress", "CI/CD"],
    type: "Full-time",
    location: "Novi Sad / Hybrid",
    description:
      "Own test strategy and automation across web and API layers. Partner with developers to catch issues early in the pipeline.",
    requirements: [
      "Strong automation frameworks",
      "CI integration experience",
      "API testing skills",
      "Attention to detail",
    ],
  },
] as const;

export const internships = [
  {
    title: "Software Engineer Internship",
    slug: "software-intern",
    duration: "3–6 months",
    description:
      "Learn modern web development alongside mentors. You'll contribute to internal tools and client projects after onboarding.",
  },
  {
    title: "Business Development Associate Internship",
    slug: "bd-intern",
    duration: "3 months",
    description:
      "Support outreach, market research, and proposal preparation for international clients. Great for business and tech students.",
  },
] as const;

export type CareerSlug =
  | (typeof openPositions)[number]["slug"]
  | (typeof internships)[number]["slug"];

export const allCareerSlugs: CareerSlug[] = [
  ...openPositions.map((p) => p.slug),
  ...internships.map((i) => i.slug),
];

export function getCareerBySlug(slug: string) {
  const job = openPositions.find((p) => p.slug === slug);
  if (job) return { kind: "position" as const, data: job };
  const intern = internships.find((i) => i.slug === slug);
  if (intern) return { kind: "internship" as const, data: intern };
  return null;
}

export const internshipSteps = [
  { step: 1, label: "Candidate evaluation" },
  { step: 2, label: "Appointing a mentor" },
  { step: 3, label: "Learning" },
  { step: 4, label: "Tracking improvement" },
  { step: 5, label: "Real project with a team" },
  { step: 6, label: "Gaining experience" },
  { step: 7, label: "Joining the company" },
] as const;

export const galleryImages = [
  { src: images.teamCollaboration, alt: "Team collaboration" },
  { src: images.developersAtDesk, alt: "Developers at work" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80", alt: "Team meeting" },
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80", alt: "Office workspace" },
  { src: images.teamOutdoor, alt: "Team event outdoors" },
  { src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80", alt: "Team discussion" },
] as const;
