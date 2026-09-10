import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { arterial, person } from "@/lib/person"

/** Slim header for the secondary pages (/about, /press). The home page uses the scroll nav instead. */
export function PageHeader() {
  return (
    <header className="px-6 pt-8">
      <div className="max-w-6xl mx-auto lg:ml-[200px] 2xl:mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="font-mono text-sm text-foreground hover:text-accent-foreground transition-colors">
          {person.name}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 text-xs font-mono uppercase tracking-widest">
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/press" className="text-muted-foreground hover:text-foreground transition-colors">
            Press
          </Link>
          <a
            href={arterial.url}
            className="inline-flex items-center gap-1 text-accent-foreground hover:underline underline-offset-4"
          >
            Arterial
            <ArrowUpRight className="w-3 h-3" aria-hidden />
          </a>
        </nav>
      </div>
    </header>
  )
}
