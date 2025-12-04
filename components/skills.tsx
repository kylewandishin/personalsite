"use client"

import Image from "next/image"
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
    isCertifications: true,
  },
]

const certifications = [
  {
    name: "Professional Integration Developer",
    issuer: "Dell Boomi",
    logo: "/images/dell-boomi-logo.svg",
  },
  {
    name: "Distributed Account Management",
    issuer: "Dell Boomi",
    logo: "/images/dell-boomi-logo.svg",
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
                  {category.isCertifications
                    ? certifications.map((cert, certIndex) => (
                        <span
                          key={cert.name}
                          className="group relative px-4 py-2 text-sm bg-card border border-border rounded-full hover:border-accent-foreground hover:text-accent-foreground transition-all duration-300 cursor-default"
                          style={{ animationDelay: `${certIndex * 50}ms` }}
                        >
                          {cert.name}
                          <span className="absolute inset-0 rounded-full bg-accent-foreground/5 scale-0 group-hover:scale-100 transition-transform" />
                          
                          {/* Hover tooltip with logo and issuer */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                            <div className="bg-card border border-border rounded-lg p-3 shadow-lg flex items-center gap-3 min-w-[200px]">
                              <div className="relative w-10 h-10 shrink-0">
                                <Image
                                  src={cert.logo}
                                  alt={cert.issuer}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-foreground">{cert.name}</p>
                                <p className="text-[10px] text-muted-foreground mt-0.5">{cert.issuer}</p>
                              </div>
                            </div>
                            {/* Tooltip arrow */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                              <div className="w-2 h-2 bg-card border-r border-b border-border rotate-45" />
                            </div>
                          </div>
                        </span>
                      ))
                    : category.skills.map((skill, skillIndex) => (
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
