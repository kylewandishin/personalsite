"use client"

import Link from "next/link"
import { AnimatedSection } from "./animated-section"

export function Philosophy() {
  return (
    <section id="about" className="relative px-6 py-32 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto lg:ml-[200px] 2xl:mx-auto space-y-12">
        <AnimatedSection>
          <h2 className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-8">
            Philosophy
          </h2>
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
              Today I put that into practice as co-founder and CTO of{" "}
              <a href="https://arterial.us/" className="text-foreground font-medium hover:text-accent-foreground transition-colors">
                Arterial
              </a>
              . We work where <span className="text-foreground font-medium">computer vision</span>,{" "}
              <span className="text-foreground font-medium">edge hardware</span>, and{" "}
              <span className="text-foreground font-medium">large-scale data systems</span> meet, so public works crews
              can spend their time fixing roads instead of hunting for what&apos;s broken.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-mono text-accent-foreground hover:underline underline-offset-4">
              Full bio and background →
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
