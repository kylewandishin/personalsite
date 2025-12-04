"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-accent-foreground font-mono text-sm tracking-wider mb-4">
                Principal / AI Engineer / Builder
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.9]">
                Kyle
                <br />
                <span className="text-muted-foreground">Wandishin</span>
              </h1>
            </div>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed transition-all duration-1000 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Building systems that remove friction and let people focus on{" "}
              <span className="text-foreground">skilled work</span>—not tedious, repetitive, or avoidable tasks.
            </p>

            <div
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-accent-foreground transition-colors"
              >
                Explore My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="https://arterial.us/book/kyle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:border-accent-foreground hover:text-accent-foreground transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Headshot with artistic frame */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-accent-foreground/20 rounded-full animate-pulse-glow" />
              <div className="absolute -inset-8 border border-border rounded-full" />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border">
                <Image src="/images/kyle.jpeg" alt="Kyle Wandishin" fill className="object-cover object-top" priority />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border px-4 py-2 rounded-full">
                <span className="text-xs font-mono text-accent-foreground">Denver, CO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  )
}
