import { images } from "@/lib/images";

export const developmentSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We work closely with you to define requirements, understand your business goals, and create a well-defined scope. This phase includes workshops, user research, and technical feasibility analysis.",
    icon: "search",
  },
  {
    step: "02",
    title: "Prototyping & Design",
    description:
      "Our designers craft intuitive UI/UX prototypes and wireframes aligned with your brand. We validate concepts early so development starts with clarity and confidence.",
    icon: "design",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "We build in sprints, delivering incremental value with continuous feedback. Our engineers follow best practices — clean code, CI/CD, and modern tooling including AI-assisted development.",
    icon: "code",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Rigorous manual and automated testing at every stage. We run performance, security, and regression checks so every release meets the highest standards.",
    icon: "qa",
  },
  {
    step: "05",
    title: "Launch & Beyond",
    description:
      "We handle deployment, monitoring, and post-launch support. Continuous improvement based on real user data keeps your product evolving with your business.",
    icon: "launch",
  },
] as const;

export const workflowSteps = [
  {
    number: "1",
    title: "Initial meeting",
    description:
      "We get to know your business, project goals, and team structure to understand how we can best support you.",
  },
  {
    number: "2",
    title: "Selection",
    description:
      "Based on your requirements, we identify the right engineers and specialists from our talent pool.",
  },
  {
    number: "3",
    title: "Interview",
    description:
      "You interview shortlisted candidates to ensure cultural fit and technical alignment with your team.",
  },
  {
    number: "4",
    title: "Start",
    description:
      "Onboarding begins — your extended team is ready to contribute from day one.",
  },
] as const;

export const coreValues = [
  {
    title: "People",
    description: "Our team is our greatest asset — skilled, motivated, and committed to excellence.",
    icon: "users",
  },
  {
    title: "Communication",
    description: "Transparent, open dialogue with clients in English — no language barriers.",
    icon: "message",
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and creative problem-solving in every project.",
    icon: "lightbulb",
  },
] as const;

export const whyOutsource = [
  {
    title: "Reliability",
    description:
      "Long-term cooperation based on trust — high-quality delivery on time and within budget.",
    side: "left" as const,
  },
  {
    title: "Cost-effectiveness",
    description:
      "Well-structured outsourcing helps you grow while reducing project costs.",
    side: "left" as const,
  },
  {
    title: "Scalability",
    description:
      "Access the expertise and resources you need, when you need them.",
    side: "left" as const,
  },
  {
    title: "Efficiency",
    description:
      "Save time and resources by relying on our experienced engineering teams.",
    side: "left" as const,
  },
  {
    title: "Security",
    description:
      "We guarantee the safety and confidentiality of all shared project details.",
    side: "right" as const,
  },
  {
    title: "Flexibility",
    description:
      "Agile methodology and an open approach to communication and collaboration.",
    side: "right" as const,
  },
  {
    title: "Language",
    description:
      "Everyday communication in English — seamless collaboration with global clients.",
    side: "right" as const,
  },
  {
    title: "Time zone",
    description:
      "Central European Time (GMT+1) — aligned with most European business hours.",
    side: "right" as const,
  },
] as const;

export const businessModelsDetail = [
  {
    title: "Staff augmentation",
    paragraphs: [
      "Extend your in-house team with our competent software experts. We provide project managers, technical leads, scrum masters, and developers at every seniority level.",
      "Whether you need additional developers, software QA engineers, or specialists for legacy applications — we integrate seamlessly with your workflow.",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imageAlt: "Team members collaborating in an office",
  },
  {
    title: "Dedicated teams",
    paragraphs: [
      "Whether building a new product, scaling existing software, or migrating to modern technology — we form mixed teams tailored to your needs.",
      "Project managers, scrum masters, QA engineers, and developers work as an extension of your organization with full transparency and accountability.",
    ],
    image: images.developersAtDesk,
    imageAlt: "Developers working together at a desk",
    reverse: true,
  },
  {
    title: "Project-based",
    paragraphs: [
      "We take your ideas and turn them into reality, handling all aspects of the project from planning to delivery.",
      "Whether you are a startup, SME, or enterprise — our teams deliver worldwide on short notice with proven methodologies.",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    imageAlt: "Business analytics and project planning",
  },
] as const;

export const timeline = [
  { year: "2010", label: "Company founded", position: "top" as const },
  { year: "2014", label: "First international clients", position: "bottom" as const },
  { year: "2017", label: "Expanded engineering team to 50+", position: "top" as const },
  { year: "2019", label: "Cloud & mobile practice launched", position: "bottom" as const },
  { year: "2021", label: "100+ engineers milestone", position: "top" as const },
  { year: "2024", label: "AI-accelerated development adopted", position: "bottom" as const },
] as const;

export const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Ruby",
  "Go",
  "Java",
  "Python",
  "AWS",
  "Docker",
  "PostgreSQL",
] as const;
