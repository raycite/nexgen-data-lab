import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl().origin;
  const updated = new Date();
  const pages = ["", "/about", "/programs", "/datasets", "/projects", "/join", "/contact"];

  return [
    ...pages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: updated,
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : path === "/projects" || path === "/programs" ? 0.8 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
