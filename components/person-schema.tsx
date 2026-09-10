import { personJsonLd } from "@/lib/person"

/** Server-rendered so crawlers see it without running JS. */
export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      id="person-schema"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  )
}
