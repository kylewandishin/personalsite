import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { ArterialFeature } from "@/components/arterial-feature"
import { Pillars } from "@/components/pillars"
import { VerticalTimeline } from "@/components/vertical-timeline"
import { SelectedWork } from "@/components/selected-work"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { StickyNav } from "@/components/sticky-nav"
import { MobileNav } from "@/components/mobile-nav"
import { JsonLd } from "@/components/json-ld"
import { HEADSHOT_ID, PERSON_ID, SITE_URL, WEBSITE_ID, seo } from "@/lib/person"

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: `${SITE_URL}/`,
  name: seo.title,
  description: seo.description,
  inLanguage: "en-US",
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": PERSON_ID },
  primaryImageOfPage: { "@id": HEADSHOT_ID },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <JsonLd data={profilePageJsonLd} />
      <ScrollProgress />
      <StickyNav />
      <MobileNav />
      <Hero />
      <Philosophy />
      <ArterialFeature />
      <Pillars />
      <VerticalTimeline />
      <SelectedWork />
      <Skills />
      <Contact />
      <SiteFooter />
    </main>
  )
}
