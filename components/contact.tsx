"use client"

import { Mail, Phone, Linkedin, Calendar, ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "kyle@arterial.us",
    href: "mailto:kyle@arterial.us",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(720) 800-2900",
    href: "tel:7208002900",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "kylewandishin",
    href: "https://www.linkedin.com/in/kylewandishin",
  },
  {
    icon: Calendar,
    label: "Book a Call",
    value: "Calendly",
    href: "https://arterial.us/book/kyle",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto lg:ml-[200px] 2xl:mx-auto">
        <AnimatedSection>
          <span className="inline-block text-accent-foreground font-mono text-xs uppercase tracking-widest mb-4">
            Contact
          </span>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 mt-8">
          <AnimatedSection delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              If you would like to discuss a project or just say hi,{" "}
              <span className="text-muted-foreground">I'm always down to chat.</span>
            </h2>

            <a
              href="https://arterial.us/book/kyle"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 mt-8 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-accent-foreground transition-colors"
            >
              Schedule a Conversation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between p-6 rounded-xl border border-border hover:border-accent-foreground/30 hover:bg-card transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-foreground font-medium group-hover:text-accent-foreground transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent-foreground transition-all" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <AnimatedSection delay={300}>
          <footer className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Kyle Wandishin. Built with thoughtful engineering.</p>
            <p className="font-mono text-xs">Boulder, CO</p>
          </footer>
        </AnimatedSection>
      </div>
    </section>
  )
}
