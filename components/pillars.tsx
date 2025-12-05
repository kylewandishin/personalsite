"use client"

import { Eye, Cloud, Layers, Rocket } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const pillars = [
  {
    icon: Eye,
    title: "AI Computer Vision",
    subtitle: "& Depth Modeling",
    description:
      "Building computer vision and monocular depth systems for governments and enterprises, transforming raw imagery into reliable, actionable infrastructure intelligence.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    subtitle: "& Systems Engineering",
    description:
      "Designing edge data capture systems and cost-efficient cloud deployments for high-volume inference, enabling scalable solutions across millions of square feet.",
  },
  {
    icon: Layers,
    title: "ERP/CRM Integrations",
    subtitle: "& Automation",
    description:
      "Unifying platforms like Salesforce, HubSpot, Azure, Oracle into cohesive ecosystems that improve clarity and accelerate decision-making.",
  },
  {
    icon: Rocket,
    title: "Startup Leadership",
    subtitle: "& Product",
    description:
      "Leading Arterial to develop AI-backed infrastructure intelligence tools for local and state governments, driving significant operational improvements.",
  },
]

export function Pillars() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto lg:ml-[200px] 2xl:mx-auto">
        <AnimatedSection>
          <span className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-16">
            What I Do
          </span>
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
