"use client"

import Image from "next/image"
import { AnimatedSection } from "./animated-section"

export function FeaturedProject() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <AnimatedSection>
            <div className="space-y-6">
              <span className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-4">
                Featured Project
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                3D Depth Mapping
                <br />
                <span className="text-muted-foreground">from 2D Images</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Advanced computer vision pipeline that generates accurate depth maps and 3D reconstructions from standard 2D imagery, enabling spatial understanding and visualization.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 text-sm font-mono bg-card border border-border rounded-full text-foreground">
                  Computer Vision
                </span>
                <span className="px-4 py-2 text-sm font-mono bg-card border border-border rounded-full text-foreground">
                  Depth Estimation
                </span>
                <span className="px-4 py-2 text-sm font-mono bg-card border border-border rounded-full text-foreground">
                  3D Reconstruction
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right side - Visual comparison */}
          <AnimatedSection delay={200}>
            <div className="relative space-y-6">
              {/* Comparison container */}
              <div className="grid grid-cols-2 gap-4">
                {/* 2D Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-card">
                  <Image
                    src="/images/featured-project-2d.jpg"
                    alt="2D Image"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4">
                    <p className="text-xs font-mono text-foreground">2D Input</p>
                  </div>
                </div>

                {/* Depth Map GIF */}
                <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-card">
                  <Image
                    src="/images/featured-project-depth.gif"
                    alt="Depth Map"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4">
                    <p className="text-xs font-mono text-foreground">Depth Map</p>
                  </div>
                </div>
              </div>

              {/* 3D Rendering - Full width below */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
                <Image
                  src="/images/featured-project-3d.jpg"
                  alt="3D Rendering"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4">
                  <p className="text-xs font-mono text-foreground">3D Reconstruction</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Decorative line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}

