"use client"

import { Box, Cpu, Eye, Layers } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { arterial } from "@/lib/person"

const pillars = [
  {
    icon: Eye,
    title: "Computer Vision",
    href: arterial.pages.services,
    subtitle: "& Infrastructure Intelligence",
    description:
      "Detection models that find potholes, field assets, and 1,000+ MUTCD sign types in ordinary dashcam footage, then rank what matters so crews know what to fix first.",
  },
  {
    icon: Box,
    title: "3D Reconstruction",
    href: arterial.pages.elidar,
    subtitle: "& Depth Modeling",
    description:
      "Monocular depth and 3D reconstruction (Arterial's E-LiDAR) that turn 2D video into survey-grade measurements, so every detection carries real dimensions, not just a pin on a map.",
  },
  {
    icon: Cpu,
    title: "Edge Hardware",
    href: arterial.pages.coverage,
    subtitle: "& Data Pipelines",
    description:
      "ARTIE™, a self-installing fleet camera, feeding cost-efficient pipelines built for high-volume inference across entire municipal fleets.",
  },
  {
    icon: Layers,
    title: "Integrations",
    href: arterial.pages.integrations,
    subtitle: "& Automation",
    description:
      "Connecting detections to the work-order, GIS, and asset systems agencies already run, backed by years of ERP/CRM integration work across Salesforce, HubSpot, Oracle, and Epicor.",
  },
]

export function Pillars() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto lg:ml-[200px] 2xl:mx-auto">
        <AnimatedSection>
          <h2 className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-16">
            What I Do
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 100}>
              <div className="group relative p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-accent-foreground/30 transition-all duration-500">
                {/* Number indicator */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-border group-hover:text-accent-foreground/10 transition-colors">
                  0{index + 1}
                </span>

                <div className="relative space-y-4">
                  <pillar.icon className="w-8 h-8 text-accent-foreground" strokeWidth={1.5} />

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-accent-foreground text-sm">{pillar.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>

                  <a
                    href={pillar.href}
                    className="inline-flex items-center gap-1 text-xs font-mono text-accent-foreground hover:underline underline-offset-4"
                  >
                    How Arterial does it →
                  </a>
                </div>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-accent-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
