import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { PageHeader } from "@/components/page-header"
import { SiteFooter } from "@/components/site-footer"
import {
  CC_BY_4,
  OG_IMAGE,
  HEADSHOT_ID,
  PERSON_ID,
  PROFILE_LINKS,
  SITE_URL,
  WEBSITE_ID,
  arterial,
  person,
  recognition,
} from "@/lib/person"

const title = "About Kyle Wandishin | Co-founder & CTO, Arterial"
const description =
  "Kyle Wandishin is co-founder and CTO of Arterial Data Solutions Inc., a roadway infrastructure intelligence company in Boulder, Colorado. Background, recognition, and a CC BY 4.0 headshot."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", title, description, url: `${SITE_URL}/about`, images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: title,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
      primaryImageOfPage: { "@id": HEADSHOT_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      ],
    },
  ],
}

const linkClass = "text-foreground underline decoration-border underline-offset-4 hover:decoration-accent-foreground"

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader />
      <main className="px-6 py-20">
        <article className="max-w-3xl mx-auto lg:ml-[200px] 2xl:mx-auto space-y-16">
          <header className="space-y-6">
            <p className="text-accent-foreground font-mono text-xs uppercase tracking-widest">About</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">{person.name}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Kyle Wandishin is the co-founder and Chief Technology Officer of{" "}
              <a href={arterial.url} className={linkClass}>
                Arterial
              </a>{" "}
              (legal name Arterial Data Solutions Inc., formerly Arterial LLC), a roadway infrastructure intelligence
              company based in Boulder, Colorado.
            </p>
          </header>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Arterial</h2>
            <p>
              Arterial was incorporated on September 19, 2024. Kyle co-founded the company with Wade Turner and leads its
              technology: the ARTIE™ fleet camera, the computer vision models that detect road hazards, field assets, and
              signage, and E-LiDAR, Arterial&apos;s 3D reconstruction system. Arterial serves public works departments,
              state departments of transportation, and right-of-way agencies.
            </p>
            <p>
              In 2025 Arterial signed a paid pilot with the City of Boulder. In 2026 it was selected in the Connected
              Colorado (C²) Challenge to deploy with the cities of Lakewood and Loveland.
            </p>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Background</h2>
            <p>
              Kyle is originally from Australia and lives in Boulder, Colorado. He studied Computer Science at the
              University of Colorado Boulder.
            </p>
            <p>
              Before Arterial, he founded 14FourTech (2022–2025), a software and workflow-automation consultancy for
              small and mid-market businesses and non-profits, and worked as an automation engineer at Metron Farnier
              (2022–2025), a smart water meter manufacturer in Louisville, Colorado. Earlier, he built a clinical
              reference app as a software engineer at UCHealth (2023), interned at Accenture Australia (2021) on a
              computer vision model for the City of Boroondara, and built test automation at Comet (2021).
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-semibold text-foreground">Recognition</h2>
              <Link href="/press" className="text-sm font-mono text-accent-foreground hover:underline underline-offset-4">
                All press →
              </Link>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {recognition.map((item) => (
                <li key={item.title} className="grid grid-cols-[4rem_1fr] gap-4 py-4">
                  <span className="font-mono text-sm text-muted-foreground">{item.year}</span>
                  <div>
                    {item.url ? (
                      <a href={item.url} className="text-foreground font-medium hover:text-accent-foreground transition-colors">
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{item.title}</span>
                    )}
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="headshot" className="space-y-4 scroll-mt-8">
            <h2 className="text-2xl font-semibold text-foreground">Headshot</h2>
            <figure className="space-y-3">
              <Image
                src={person.headshot}
                alt="Kyle Wandishin, co-founder and CTO of Arterial"
                width={person.headshotSize.width}
                height={person.headshotSize.height}
                sizes="(min-width: 768px) 768px, 100vw"
                className="w-full h-auto rounded-2xl border border-border"
              />
              <figcaption className="text-sm text-muted-foreground">
                Photo: Kyle Wandishin (self-portrait). Licensed under{" "}
                <a href={CC_BY_4} rel="license" className={linkClass}>
                  CC BY 4.0
                </a>
                .{" "}
                <a href={person.headshot} className={linkClass}>
                  Full-resolution original
                </a>{" "}
                ({person.headshotSize.width} × {person.headshotSize.height}, JPEG).
              </figcaption>
            </figure>
          </section>

          <section className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p>
              Email{" "}
              <a href={`mailto:${person.email}`} className={linkClass}>
                {person.email}
              </a>{" "}
              or{" "}
              <a href={PROFILE_LINKS.arterialBooking} className={linkClass}>
                book a call
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
