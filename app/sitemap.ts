import type { MetadataRoute } from "next"
import { SITE_URL, person } from "@/lib/person"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE_URL}${person.headshot}`],
    },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/press`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ]
}
