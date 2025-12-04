"use client"

import { AnimatedSection } from "./animated-section"

const skillCategories = [
  {
    title: "Core Expertise",
    skills: ["Computer Vision", "Depth Modeling", "AI/ML Systems", "Enterprise Software", "Systems Architecture"],
  },
  {
    title: "Platforms & Tools",
    skills: ["Salesforce", "HubSpot", "Azure", "Oracle", "Prophet21", "Boomi", "Celigo"],
  },
  {
    title: "Technical",
    skills: ["Python", "Cloud Infrastructure", "GIS/Geospatial", "Embedded Systems", "Full-Stack Development"],
  },
  {
    title: "Certifications",
    skills: ["Professional Integration Developer", "Distributed Account Management"],
  },
]

export function Skills() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto lg:ml-[200px]">
        <AnimatedSection>
          <span className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-4">
            Skills & Capabilities
          </span>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 100}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="group relative px-4 py-2 text-sm bg-card border border-border rounded-full hover:border-accent-foreground hover:text-accent-foreground transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                      <span className="absolute inset-0 rounded-full bg-accent-foreground/5 scale-0 group-hover:scale-100 transition-transform" />
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
