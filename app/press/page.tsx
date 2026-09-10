import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { PageHeader } from "@/components/page-header"
import { SiteFooter } from "@/components/site-footer"
import { ARTERIAL_ORG_ID, OG_IMAGE, PERSON_ID, SITE_URL, WEBSITE_ID, arterial, person, press } from "@/lib/person"

const title = "Press & Mentions | Kyle Wandishin and Arterial"
const description =
  "Independent coverage of Kyle Wandishin and Arterial, from CU Boulder, CU Denver, the Colorado Smart Cities Alliance, BEN Colorado, and more."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/press" },
  openGraph: { type: "website", title, description, url: `${SITE_URL}/press`, images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/press#webpage`,
      url: `${SITE_URL}/press`,
      name: title,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": WEBSITE_ID },
      about: [{ "@id": PERSON_ID }, { "@id": ARTERIAL_ORG_ID }],
      mainEntity: {
        "@type": "ItemList",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: press.length,
        itemListElement: press.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Article",
            headline: item.title,
            url: item.url,
            datePublished: item.date,
            publisher: { "@type": "Organization", name: item.outlet },
            ...(item.author ? { author: { "@type": "Person", name: item.author } } : {}),
            mentions: item.namesKyle ? [{ "@id": PERSON_ID }, { "@id": ARTERIAL_ORG_ID }] : [{ "@id": ARTERIAL_ORG_ID }],
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Press", item: `${SITE_URL}/press` },
      ],
    },
  ],
}

export default function PressPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader />
      <main className="px-6 py-20">
        <div className="max-w-4xl mx-auto lg:ml-[200px] 2xl:mx-auto space-y-12">
          <header className="space-y-6 max-w-3xl">
            <p className="text-accent-foreground font-mono text-xs uppercase tracking-widest">Press</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Press &amp; mentions</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Independent coverage of {person.name} and{" "}
              <a href={arterial.url} className="text-foreground underline decoration-border underline-offset-4 hover:decoration-accent-foreground">
                Arterial
              </a>
              , newest first. For Arterial&apos;s own announcements, see{" "}
              <a href={arterial.links.news} className="text-foreground underline decoration-border underline-offset-4 hover:decoration-accent-foreground">
                arterial.us/news
              </a>
              .
            </p>
          </header>

          <ol className="divide-y divide-border border-y border-border">
            {press.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  className="group grid md:grid-cols-[9rem_1fr_auto] gap-x-6 gap-y-1 py-6 hover:bg-card/50 transition-colors"
                >
                  <time dateTime={item.date} className="font-mono text-sm text-muted-foreground">
                    {item.label}
                  </time>
                  <div className="space-y-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-accent-foreground">{item.outlet}</p>
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
                      {item.title}
                    </h2>
                    {item.author && <p className="text-sm text-muted-foreground">By {item.author}</p>}
                  </div>
                  <ArrowUpRight
                    className="hidden md:block w-5 h-5 text-muted-foreground group-hover:text-accent-foreground self-center transition-colors"
                    aria-hidden
                  />
                </a>
                {item.arterialUrl && (
                  <a
                    href={item.arterialUrl}
                    className="inline-block md:ml-[10.5rem] -mt-6 pb-6 text-xs font-mono text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    Also on arterial.us →
                  </a>
                )}
              </li>
            ))}
          </ol>

          <p className="text-sm text-muted-foreground">
            Media inquiries:{" "}
            <a href={`mailto:${person.email}`} className="text-foreground underline decoration-border underline-offset-4 hover:decoration-accent-foreground">
              {person.email}
            </a>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
