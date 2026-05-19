import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/portfolio",
    "/blog",
    "/services/staff-augmentation",
    "/services/dedicated-teams",
    "/services/project-based",
    "/services/software-development",
    "/services/web",
    "/services/cloud",
    "/services/mobile",
    "/services/qa",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
