"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { PROFILE_LINKS, person } from "@/lib/person"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Arterial", href: "#arterial" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function StickyNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)

      // Determine active section
      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
    >
      <div className="flex flex-col gap-3">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`group flex items-center gap-3 text-xs uppercase tracking-widest transition-all duration-300 ${
              activeSection === item.href.slice(1)
                ? "text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span
              className={`h-px transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? "w-12 bg-accent-foreground"
                  : "w-6 bg-muted-foreground group-hover:w-10 group-hover:bg-foreground"
              }`}
            />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <a
          href={`mailto:${person.email}`}
          className="text-muted-foreground hover:text-accent-foreground transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href={PROFILE_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={PROFILE_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </nav>
  )
}
