/**
 * Central site configuration — update name, contact, and URLs when branding is ready.
 */
export const siteConfig = {
  name: "Your Company",
  tagline: "Perfecting Business Digitalization",
  description:
    "Software development and IT services partner. We build scalable web, mobile, and cloud solutions — from dedicated teams to end-to-end project delivery.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_US",
  contact: {
    email: "hello@example.com",
    careersEmail: "careers@example.com",
    phone: "+381 21 000 0000",
    address: "Novi Sad, Serbia",
  },
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Software Development", href: "/services/software-development" },
      { label: "Web Development", href: "/services/web" },
      { label: "Cloud & DevOps", href: "/services/cloud" },
      { label: "Mobile Apps", href: "/services/mobile" },
      { label: "QA & Testing", href: "/services/qa" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
