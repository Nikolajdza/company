import { images } from "@/lib/images";

export const portfolioProjects = [
  {
    slug: "fintech-dashboard",
    title: "FinTech Dashboard",
    description:
      "Real-time analytics platform for financial teams with role-based access and automated reporting.",
    tech: ["React", "TypeScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    industry: "Finance",
  },
  {
    slug: "healthtrack-mobile",
    title: "HealthTrack Mobile",
    description:
      "Cross-platform health app connecting patients and providers with secure messaging and scheduling.",
    tech: ["Flutter", "Firebase"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    industry: "Healthcare",
  },
  {
    slug: "logichain-erp",
    title: "LogiChain ERP",
    description:
      "Supply chain visibility, inventory, and vendor management for mid-size logistics companies.",
    tech: ["Java", "Spring", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    industry: "Logistics",
  },
  {
    slug: "edulearn-platform",
    title: "EduLearn Platform",
    description:
      "Corporate e-learning with video courses, quizzes, progress tracking, and admin analytics.",
    tech: ["Next.js", "AWS", "MongoDB"],
    image: images.elearning,
    industry: "Education",
  },
  {
    slug: "retail-pos",
    title: "Retail POS Cloud",
    description: "Multi-store point of sale with offline mode and centralized inventory sync.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    industry: "Retail",
  },
  {
    slug: "energy-monitoring",
    title: "Energy Monitoring IoT",
    description: "Dashboard for sensor data, alerts, and predictive maintenance in energy sector.",
    tech: ["Go", "React", "TimescaleDB"],
    image: "https://images.unsplash.com/photo-1473341303090-613dca152df2?w=1200&q=80",
    industry: "Energy",
  },
] as const;
