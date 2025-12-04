"use client"

import { useRef, useEffect, useState } from "react"
import { MapPin, GraduationCap } from "lucide-react"

const experiences = [
  {
    year: "2021",
    endYear: "2021",
    company: "Comet",
    role: "Test Automation Engineer",
    location: "Remote",
    description: "Automated test systems using web scraping and simulated user interactions.",
    color: "bg-accent-foreground",
    skills: ["Automation", "Testing", "Web Scraping"],
  },
  {
    year: "2021",
    endYear: "2021",
    company: "Accenture Australia",
    role: "Developer",
    location: "Melbourne, Australia",
    description: "Computer vision AI model for City of Boorondara to detect illegal deforestation in real-time.",
    color: "bg-accent-foreground/80",
    skills: ["AI/ML", "Geospatial", "Consulting"],
  },
  {
    year: "2022",
    endYear: "Present",
    company: "14FourTech",
    role: "Founder",
    location: "Denver, Colorado",
    description:
      "Automated processes and reduced operating costs for small to mid-market businesses through full-stack development.",
    color: "bg-accent-foreground/90",
    skills: ["Full-Stack", "Automation", "Consulting"],
  },
  {
    year: "2022",
    endYear: "2025",
    company: "Metron Farnier",
    role: "Automation Engineer",
    location: "Smart Water Meters",
    description:
      "Automated testing tools using computer vision, microcontrollers, and embedded programming for QA systems.",
    color: "bg-accent-foreground/85",
    skills: ["Embedded", "Computer Vision", "QA"],
  },
  {
    year: "2023",
    endYear: "2023",
    company: "UCHealth",
    role: "Software Engineer",
    location: "Denver, Colorado",
    description: "Clinical encyclopedia app reducing supervisor calls by 80% for hospital staff.",
    color: "bg-accent-foreground/75",
    skills: ["Healthcare", "Mobile", "Full-Stack"],
  },
  {
    year: "2023",
    endYear: "2023",
    company: "University of Colorado Boulder",
    role: "Bachelor of Science, Computer Science",
    location: "Boulder, Colorado",
    description: "",
    color: "bg-accent-foreground/70",
    skills: [],
    isEducation: true,
  },
  {
    year: "2023",
    endYear: "Present",
    company: "Arterial",
    role: "Principal",
    location: "Boulder, Colorado",
    description:
      "AI-backed GIS/Asset Manager for DOTs, automating road hazard detection with computer vision and depth modeling.",
    color: "bg-accent-foreground",
    skills: ["AI/ML", "GIS", "Computer Vision", "Leadership"],
  },
]

export function VerticalTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const [revealedItems, setRevealedItems] = useState<Set<number>>(new Set())
  const [lineProgress, setLineProgress] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      // Calculate line progress based on section scroll
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionHeight = rect.height
        const windowHeight = window.innerHeight

        // Start progress when section enters viewport, complete when section leaves
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight * 0.5)))
        setLineProgress(progress)
      }

      // Check each item for reveal (only add to set, never remove - "sticky" reveal)
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const windowHeight = window.innerHeight
          // Reveal when item is 80% into the viewport
          if (rect.top < windowHeight * 0.8) {
            setRevealedItems((prev) => {
              const newSet = new Set(prev)
              newSet.add(index)
              return newSet
            })
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="px-6 max-w-4xl mx-auto lg:ml-[200px]">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Journey Through Time</h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border">
            <div
              className="w-full bg-gradient-to-b from-accent-foreground via-accent-foreground to-transparent transition-all duration-300 ease-out"
              style={{ height: `${lineProgress * 100}%` }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => {
              const isRevealed = revealedItems.has(index)
              const isEven = index % 2 === 0

              return (
                <div
                  key={`${exp.company}-${exp.year}`}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-8 md:gap-16`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 transition-all duration-700 ${
                      isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <div className={`w-4 h-4 rounded-full ${exp.color} ring-4 ring-background`} />
                    <div className={`absolute inset-0 rounded-full ${exp.color} animate-ping opacity-30`} />
                  </div>

                  {/* Year label - alternates sides on desktop */}
                  <div
                    className={`pl-10 md:pl-0 md:w-1/2 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} transition-all duration-700 ${
                      isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "100ms" }}
                  >
                    <span className="font-mono text-2xl md:text-3xl text-foreground font-bold">{exp.year}</span>
                    {exp.endYear !== exp.year && (
                      <span className="font-mono text-lg md:text-xl text-muted-foreground ml-2">— {exp.endYear}</span>
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className={`pl-10 md:pl-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16"} transition-all duration-700 ${
                      isRevealed
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : `opacity-0 ${isEven ? "md:translate-x-8" : "md:-translate-x-8"} translate-y-8`
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <div className="group p-6 rounded-2xl border border-border bg-card hover:border-accent-foreground/30 hover:shadow-lg hover:shadow-accent-foreground/5 transition-all duration-500">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-accent-foreground font-medium">{exp.company}</p>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          {exp.isEducation ? (
                            <GraduationCap className="w-3 h-3" />
                          ) : (
                            <MapPin className="w-3 h-3" />
                          )}
                          {exp.location}
                        </div>

                        {exp.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                        )}

                        {exp.skills && exp.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span
                                key={skill}
                                className={`px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded transition-all duration-500 ${
                                  isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                                style={{ transitionDelay: `${400 + skillIndex * 50}ms` }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
