import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Pillars } from "@/components/pillars"
import { VerticalTimeline } from "@/components/vertical-timeline"
import { SelectedWork } from "@/components/selected-work"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { ScrollProgress } from "@/components/scroll-progress"
import { StickyNav } from "@/components/sticky-nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <StickyNav />
      <Hero />
      <Philosophy />
      <Pillars />
      <VerticalTimeline />
      <SelectedWork />
      <Skills />
      <Contact />
    </main>
  )
}
