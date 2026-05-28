import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/menu", "/menu/bar", "/specials", "/visit"];
  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: now,
    changeFrequency: r === "/specials" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
