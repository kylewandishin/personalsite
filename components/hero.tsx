"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { PROFILE_LINKS, arterial, person } from "@/lib/person"

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

      <div className="relative z-10 max-w-6xl mx-auto lg:ml-[200px] 2xl:mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Headshot with artistic frame - Mobile: first, Desktop: second */}
          <div
            className={`relative order-first lg:order-last mb-12 lg:mb-0 transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-accent-foreground/20 rounded-full animate-pulse-glow" />
              <div className="absolute -inset-8 border border-border rounded-full" />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border">
                <Image
                  src={person.headshot}
                  alt="Kyle Wandishin, co-founder and CTO of Arterial"
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 256px, 192px"
                  className="object-cover object-top"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border px-4 py-2 rounded-full whitespace-nowrap">
                <span className="text-xs font-mono text-accent-foreground">Boulder, CO</span>
              </div>
            </div>
          </div>

          {/* Text content - Mobile: second, Desktop: first */}
          <div className="space-y-8 order-last lg:order-first">
            <div
              className={`transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-accent-foreground font-mono text-sm tracking-wider mb-4">
                {person.shortTitle} ·{" "}
                <a href={arterial.url} className="underline-offset-4 hover:underline">
                  Arterial
                </a>
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.9]">
                Kyle{" "}
                <br />
                <span className="text-muted-foreground">Wandishin</span>
              </h1>
            </div>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed transition-all duration-1000 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              I build{" "}
              <a href={arterial.url} className="text-foreground underline decoration-accent-foreground/50 underline-offset-4 hover:decoration-accent-foreground">
                Arterial
              </a>
              , which turns the vehicles cities already drive into passive road inspectors and gives public works teams a{" "}
              <span className="text-foreground">living, survey-grade inventory</span> of their infrastructure.
            </p>

            <div
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href={arterial.url}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-accent-foreground transition-colors"
              >
                Visit Arterial
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={PROFILE_LINKS.arterialBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:border-accent-foreground hover:text-accent-foreground transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
