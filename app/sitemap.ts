import type { MetadataRoute } from "next"

const BASE = "https://www.goebel-partner.de"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/prozess-check`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]
}
