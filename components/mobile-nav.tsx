"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function MobileNav() {
  const [activeSection, setActiveSection] = useState("")
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleInteraction = () => {
      setHasInteracted(true)
    }

    const handleScroll = () => {
      setHasInteracted(true)
      
      // Show nav when user scrolls down, hide when at top
      const scrollY = window.scrollY
      const shouldShow = scrollY > 100
      setIsVisible(shouldShow)
      
      // Determine active section
      const sections = ["about", "experience", "projects", "contact"]
      for (const section of sections.reverse()) {
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

    // Listen for any user interaction
    window.addEventListener("touchstart", handleInteraction, { once: true })
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("click", handleInteraction, { once: true })
    
    return () => {
      window.removeEventListener("touchstart", handleInteraction)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("click", handleInteraction)
    }
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted || !hasInteracted) {
    return null
  }

  return (
    <nav 
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-500 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Subtle top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Navigation container */}
      <div className="bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="px-6 py-3">
          {/* Main navigation items */}
          <div className="flex items-center justify-center gap-6 mb-3">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="group flex flex-col items-center gap-1.5 min-w-0 flex-1"
                >
                  {/* Active indicator line */}
                  <span
                    className={`h-0.5 transition-all duration-300 ${
                      isActive
                        ? "w-full bg-accent-foreground"
                        : "w-0 bg-muted-foreground group-hover:w-3"
                    }`}
                  />
                  {/* Label */}
                  <span
                    className={`text-[10px] uppercase tracking-widest font-mono transition-all duration-300 ${
                      isActive
                        ? "text-accent-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 pt-2 border-t border-border/50">
            <a
              href="mailto:kyle@arterial.us"
              className="text-muted-foreground hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kylewandishin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/kylewandishin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
