export const heroSlides = [
  {
    id: 1,
    headline: "Leading Your Digital Transformation",
    subtext:
      "We are your partners in navigating the digital landscape — transforming traditional business processes into smart, tech-driven solutions.",
    cta: "Get started",
    ctaHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    imageAlt: "Software development team collaborating in a modern office",
  },
  {
    id: 2,
    headline: "Engage a Whole Team of Developers and QA",
    subtext:
      "Scale your in-house team with senior engineers, tech leads, and QA specialists — or let us deliver end-to-end.",
    cta: "Book a meeting",
    ctaHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
    imageAlt: "Developers working on laptops in a bright workspace",
  },
  {
    id: 3,
    headline: "Remote Team You Can Trust",
    subtext:
      "Reliable, scalable, and cost-effective software delivery from experienced engineers based in Serbia.",
    cta: "Contact sales",
    ctaHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80",
    imageAlt: "Business team in a strategy meeting",
  },
  {
    id: 4,
    headline: "We Go the Extra Mile for Complex Solutions",
    subtext:
      "From legacy modernization to greenfield products — we handle architecture, delivery, and long-term support.",
    cta: "Get a free quote",
    ctaHref: "/contact",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    imageAlt: "Analytics dashboard on a computer screen",
  },
] as const;

export const typewriterPhrases = [
  "digital transformation",
  "scalable software",
  "dedicated teams",
  "cloud-native apps",
] as const;

export const services = [
  {
    id: "digitalization",
    title: "Business Process Digitalization",
    description:
      "Streamline operations with custom software that converts traditional methods into efficient, automated processes.",
    icon: "monitor",
  },
  {
    id: "custom-dev",
    title: "Custom Software Development",
    description:
      "Tailor-made applications built from the ground up — web, mobile, and enterprise — aligned with your business goals.",
    icon: "code",
  },
  {
    id: "web",
    title: "Custom Web Development",
    description:
      "High-performance websites and web apps optimized for user experience, SEO, and operational efficiency.",
    icon: "globe",
  },
  {
    id: "mobile",
    title: "Innovative App Development",
    description:
      "Mobile and desktop apps designed to integrate seamlessly with your processes and boost engagement.",
    icon: "smartphone",
  },
  {
    id: "enterprise",
    title: "Enterprise Software Solutions",
    description:
      "Bespoke enterprise systems built for scale, security, and the complex needs of large organizations.",
    icon: "building",
  },
] as const;

export const aboutServices = [
  { label: "Web Programming", icon: "globe" },
  { label: "Cloud-Native", icon: "cloud" },
  { label: "Mobile Development", icon: "smartphone" },
  { label: "Desktop Applications", icon: "monitor" },
  { label: "QA & Testing", icon: "check" },
] as const;

export const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "Java",
  "AWS",
  "Azure",
  "GCP",
  "Flutter",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Spring",
  ".NET",
] as const;

export const engagementModels = [
  {
    title: "Staff Augmentation",
    description:
      "Extend your in-house team with our competent software experts — project managers, tech leads, and developers at every seniority level.",
    href: "/services/staff-augmentation",
  },
  {
    title: "Dedicated Teams",
    description:
      "Whether building a new product, scaling existing software, or migrating to modern tech — we provide teams optimized for your needs.",
    href: "/services/dedicated-teams",
  },
  {
    title: "Project Based",
    description:
      "We turn your ideas into reality, handling all aspects of the project — from startups to enterprises, worldwide.",
    href: "/services/project-based",
  },
] as const;

export const approachSteps = [
  {
    id: "discovery",
    label: "Discovery phase",
    description:
      "We work closely with you to define and document all requirements. This stage includes visualizing your idea and creating a well-defined scope of work.",
  },
  {
    id: "design",
    label: "UI/UX design",
    description:
      "Our designers craft intuitive interfaces and prototypes that align with your brand and user needs before a single line of code is written.",
  },
  {
    id: "development",
    label: "Development",
    description:
      "Agile sprints deliver incremental value. Our engineers follow best practices in code quality, testing, and continuous integration.",
  },
  {
    id: "qa",
    label: "QA",
    description:
      "Rigorous manual and automated testing ensures reliability, performance, and security across every release.",
  },
  {
    id: "deployment",
    label: "Deployment",
    description:
      "We manage CI/CD pipelines and cloud infrastructure so your product reaches users safely and efficiently.",
  },
  {
    id: "support",
    label: "Maintenance & Support",
    description:
      "Long-term partnership with monitoring, updates, and enhancements to keep your software running at its best.",
  },
] as const;

export const stats = [
  { value: 15, suffix: "+", label: "Years in business" },
  { value: 100, suffix: "+", label: "Satisfied clients" },
  { value: 50, suffix: "M+", label: "Lines of code", display: "50" },
  { value: 0, suffix: "", label: "Wasted hours" },
] as const;

export const promises = [
  {
    title: "State-of-the-Art Technology",
    description:
      "We utilize the latest technologies so your business stays ahead in a rapidly evolving digital world — current trends and future-ready architecture.",
  },
  {
    title: "Focus on ROI",
    description:
      "Our solutions improve operational efficiency and your bottom line. Every engagement is aligned with measurable business outcomes.",
  },
  {
    title: "Sustainable & Scalable Solutions",
    description:
      "We build with the future in mind. As your business evolves, our solutions evolve with it — long-term value and adaptability guaranteed.",
  },
] as const;

export const projects = [
  {
    title: "FinTech Dashboard",
    description:
      "Real-time analytics platform for financial teams with role-based access and automated reporting.",
    tech: ["React", "TypeScript", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "HealthTrack Mobile",
    description:
      "Cross-platform health app connecting patients and providers with secure messaging and appointment scheduling.",
    tech: ["Flutter", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    title: "LogiChain ERP",
    description:
      "Enterprise resource planning module for supply chain visibility, inventory, and vendor management.",
    tech: ["Java", "Spring", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "EduLearn Platform",
    description:
      "Interactive e-learning platform with video courses, quizzes, and progress tracking for corporate training.",
    tech: ["Next.js", "AWS", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
] as const;

export const quoteServices = [
  "Business Process Digitalization",
  "Custom Software Development",
  "Custom eLearning Platforms",
  "Custom Websites",
  "Hire a Team",
] as const;
