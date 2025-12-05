"use client"

import { useState } from "react"
import { ArrowUpRight, X } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const projects = [
  {
    title: "Road Hazard Detection Pipeline",
    client: "Government DOTs",
    category: "AI/ML",
    problem:
      "Departments of transportation lacked efficient methods to detect and prioritize road hazards across large networks.",
    approach:
      "Developed an AI-backed GIS/Asset Manager using computer vision and depth modeling to automate road hazard detection.",
    stack: ["Python", "TensorFlow", "GIS APIs", "Cloud Infrastructure"],
    impact:
      "Automated detection of potholes, cracks, and barrier damage displayed on actionable asset-management dashboards.",
  },
  {
    title: "Clinical Encyclopedia App",
    client: "UCHealth",
    category: "Healthcare",
    problem: "Hospital staff needed quick access to procedures and patient information during urgent situations.",
    approach:
      "Built a searchable encyclopedia app enabling rapid lookup of procedures and related clinical information.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    impact: "Reduced unneeded calls to supervisors by up to 80%.",
  },
  {
    title: "Deforestation Detection",
    client: "City of Boorondara",
    category: "AI/ML",
    problem: "Local officials struggled to identify illegal deforestation in real-time across large geographic areas.",
    approach: "Computer vision AI model for real-time deforestation detection and monitoring.",
    stack: ["Computer Vision", "Machine Learning", "Geospatial"],
    impact: "Enabled officials to swiftly identify and respond to deforestation hotspots.",
  },
  {
    title: "Enterprise System Integrations",
    client: "Fortune 500",
    category: "Enterprise",
    problem: "Complex supply chains and fragmented systems created inefficiencies across operations.",
    approach: "Led ERP integrations and modeled supply chains, delivering end-to-end software implementations.",
    stack: ["Salesforce", "HubSpot", "Azure", "Oracle"],
    impact: "Unified platforms across millions of square feet of operations.",
  },
]

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative px-6 py-32 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto lg:ml-[200px] 2xl:mx-auto">
        <AnimatedSection>
          <span className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-4">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">Building What Matters</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 100}>
              <button
                onClick={() => setSelectedProject(index)}
                className="group w-full text-left p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-accent-foreground/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-full">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.client}</p>

                <p className="text-sm text-muted-foreground line-clamp-2">{project.problem}</p>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-card border border-border rounded-2xl p-8 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-full mb-4">
              {projects[selectedProject].category}
            </span>

            <h3 className="text-2xl font-bold text-foreground mb-2">{projects[selectedProject].title}</h3>
            <p className="text-accent-foreground mb-8">{projects[selectedProject].client}</p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-foreground mb-2">Problem</h4>
                <p className="text-muted-foreground">{projects[selectedProject].problem}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-foreground mb-2">Approach</h4>
                <p className="text-muted-foreground">{projects[selectedProject].approach}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-foreground mb-2">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm font-mono bg-muted text-foreground rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-foreground mb-2">Impact</h4>
                <p className="text-foreground font-medium">{projects[selectedProject].impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
