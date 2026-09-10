import Link from "next/link"
import { PROFILE_LINKS, arterial, person } from "@/lib/person"

type FooterLink = { label: string; href: string; me?: boolean; internal?: boolean }

const groups: { title: string; links: FooterLink[] }[] = [
  {
    title: "Elsewhere",
    links: [
      { label: "LinkedIn", href: PROFILE_LINKS.linkedin, me: true },
      { label: "GitHub", href: PROFILE_LINKS.github, me: true },
      { label: "Wikidata", href: PROFILE_LINKS.wikidata, me: true },
      { label: "Arterial team page", href: PROFILE_LINKS.arterialTeam },
      { label: "Book a call", href: PROFILE_LINKS.arterialBooking },
    ],
  },
  {
    title: "Arterial",
    links: [
      { label: "arterial.us", href: arterial.links.website },
      { label: "LinkedIn", href: arterial.links.linkedin },
      { label: "GitHub", href: arterial.links.github },
      { label: "YouTube", href: arterial.links.youtube },
    ],
  },
  {
    title: "This site",
    links: [
      { label: "Home", href: "/", internal: true },
      { label: "About", href: "/about", internal: true },
      { label: "Press", href: "/press", internal: true },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative px-6 pb-28 lg:pb-12">
      <div className="max-w-6xl mx-auto lg:ml-[200px] 2xl:mx-auto border-t border-border pt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="text-xs font-mono uppercase tracking-widest text-accent-foreground mb-4">{group.title}</p>
              <ul className="space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {link.internal ? (
                      <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        rel={link.me ? "me noopener" : "noopener"}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between gap-2 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {person.name} · {person.shortTitle},{" "}
            <a href={arterial.url} className="hover:text-foreground transition-colors">
              Arterial
            </a>
          </p>
          <p className="font-mono text-xs">{person.location}</p>
        </div>
      </div>
    </footer>
  )
}
