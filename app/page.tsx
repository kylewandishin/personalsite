import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Pillars } from "@/components/pillars"
import { VerticalTimeline } from "@/components/vertical-timeline"
import { FeaturedProject } from "@/components/featured-project"
import { SelectedWork } from "@/components/selected-work"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { ScrollProgress } from "@/components/scroll-progress"
import { StickyNav } from "@/components/sticky-nav"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <StickyNav />
      <MobileNav />
      <Hero />
      <Philosophy />
      <Pillars />
      <VerticalTimeline />
      {/* <FeaturedProject /> */}
      <SelectedWork />
      <Skills />
      <Contact />
    </main>
  )
}
