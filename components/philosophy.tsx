"use client"

import { AnimatedSection } from "./animated-section"

export function Philosophy() {
  return (
    <section id="about" className="relative px-6 py-32 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto lg:ml-[200px] space-y-12">
        <AnimatedSection>
          <span className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-8">
            Philosophy
          </span>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight tracking-tight">
            <span className="text-accent-foreground">"</span>
            Skilled people should work on skilled work—
            <span className="text-muted-foreground">not tedious or avoidable tasks.</span>
            <span className="text-accent-foreground">"</span>
          </blockquote>
        </AnimatedSection>

        <div className="space-y-6 text-muted-foreground leading-relaxed max-w-2xl">
          <AnimatedSection delay={200}>
            <p>
              At 16, I left home and moved across the world in search of challenge and growth. That experience pushed me
              to adapt quickly, think independently, and pursue problems bigger than myself.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p>
              Today, I operate at the intersection of <span className="text-foreground font-medium">AI</span>,{" "}
              <span className="text-foreground font-medium">automation</span>, and{" "}
              <span className="text-foreground font-medium">large-scale systems engineering</span>—all with the same
              goal: to eliminate the manual drudgery that slows down organizations and municipalities worldwide.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
