import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import { PROFILE_LINKS, SITE_URL, person, seo, siteJsonLd } from "@/lib/person"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.title,
    template: `%s | ${person.name}`,
  },
  description: seo.description,
  applicationName: person.name,
  authors: [{ name: person.name, url: `${SITE_URL}/` }],
  creator: person.name,
  publisher: person.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: person.givenName,
    lastName: person.familyName,
    username: "kylewandishin",
    title: seo.title,
    description: seo.description,
    url: SITE_URL,
    siteName: person.name,
    locale: "en_US",
    // og:image comes from app/opengraph-image.jpg (Next.js file convention).
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#020509",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* rel="me" ties these profiles to this site as the same person. */}
        <link rel="me" href={PROFILE_LINKS.wikidata} />
        <link rel="me" href={PROFILE_LINKS.linkedin} />
        <link rel="me" href={PROFILE_LINKS.github} />
        <JsonLd data={siteJsonLd} />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
