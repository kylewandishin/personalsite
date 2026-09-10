import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { PROFILE_LINKS, arterial, recognition } from "@/lib/person"

// Figures as published on arterial.us. Each one links to the page that backs it.
const stats = [
  { value: "~80%", label: "of a jurisdiction covered every two weeks, passively", href: arterial.pages.coverage },
  { value: "99.7%", label: "detection accuracy on pavement and signs", href: arterial.pages.quality },
  { value: "1,000+", label: "MUTCD sign codes recognized", href: arterial.pages.signage },
  { value: "3–4×", label: "more issues fixed on the same budget", href: arterial.url },
]

export function ArterialFeature() {
  return (
    <section id="arterial" className="relative px-6 py-32 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto lg:ml-[200px] 2xl:mx-auto">
        <AnimatedSection>
          <span className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-4">
            Arterial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl">
            Turning fleet dashcams into{" "}
            <span className="text-muted-foreground">a living inventory of the road.</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 mt-12">
          <AnimatedSection delay={100}>
            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                <a href={arterial.url} className="text-foreground font-medium hover:text-accent-foreground transition-colors">
                  Arterial
                </a>{" "}
                puts a self-installing camera on vehicles a city already drives. Every pass adds to a continuously
                updated, near-LiDAR-accurate inventory of the right-of-way:{" "}
                <a href={arterial.pages.hazards} className="text-foreground hover:text-accent-foreground transition-colors">
                  hazards
                </a>
                ,{" "}
                <a href={arterial.pages.fieldAssets} className="text-foreground hover:text-accent-foreground transition-colors">
                  field assets
                </a>
                ,{" "}
                <a href={arterial.pages.signage} className="text-foreground hover:text-accent-foreground transition-colors">
                  signage
                </a>
                , and markings, each measured in 3D and{" "}
                <a href={arterial.pages.prioritization} className="text-foreground hover:text-accent-foreground transition-colors">
                  ranked by importance, urgency, and risk
                </a>{" "}
                so it becomes a prioritized work order.
              </p>
              <p>
                As co-founder and CTO, I lead Arterial&apos;s technology: the{" "}
                <span className="text-foreground">ARTIE™</span> camera, the detection models,{" "}
                <a href={arterial.pages.elidar} className="text-foreground hover:text-accent-foreground transition-colors">
                  E-LiDAR
                </a>{" "}
                3D reconstruction, and the platform that turns
                detections into work. We serve public works departments, state DOTs, and right-of-way agencies from
                Boulder, Colorado.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={arterial.url}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent-foreground transition-colors"
                >
                  arterial.us
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={PROFILE_LINKS.arterialTeam}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm text-foreground rounded-full hover:border-accent-foreground hover:text-accent-foreground transition-colors"
                >
                  Meet the team
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <a
                  key={stat.value}
                  href={stat.href}
                  className="flex flex-col-reverse p-6 rounded-2xl border border-border bg-card/50 hover:border-accent-foreground/30 hover:bg-card transition-colors"
                >
                  <span className="mt-2 text-xs text-muted-foreground leading-relaxed">{stat.label}</span>
                  <span className="text-3xl md:text-4xl font-bold text-accent-foreground font-mono">{stat.value}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-20">
            <div className="flex items-baseline justify-between gap-4 mb-6">
              <h3 className="text-lg font-semibold text-foreground">Recognition</h3>
              <Link href="/press" className="text-sm font-mono text-accent-foreground hover:underline underline-offset-4">
                All press →
              </Link>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {recognition.map((item) => (
                <li key={item.title} className="grid grid-cols-[4rem_1fr] md:grid-cols-[5rem_1fr_auto] gap-x-4 gap-y-1 py-4">
                  <span className="font-mono text-sm text-muted-foreground">{item.year}</span>
                  <div>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-accent-foreground transition-colors"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{item.title}</span>
                    )}
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                  {item.url && (
                    <ArrowUpRight className="hidden md:block w-4 h-4 text-muted-foreground self-center" aria-hidden />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
