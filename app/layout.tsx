import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

const siteUrl = "https://kylewandishin.com"
const title =
  "Kyle Wandishin | Founder • AI/Computer Vision Engineering • Arterial"
const description =
  "Kyle Wandishin—Founder of Arterial and CU Boulder Computer Science alum—is a principal AI and computer vision engineer delivering applied ML, perception systems, and product-led software in Colorado and beyond."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Kyle Wandishin",
  },
  description,
  applicationName: "Kyle Wandishin",
  keywords: [
    "Kyle Wandishin",
    "Arterial",
    "CU Boulder",
    "University of Colorado Boulder",
    "Colorado AI engineer",
    "Colorado computer vision",
    "AI founder",
    "AI strategy",
    "computer vision engineering",
    "applied machine learning",
    "product engineering",
    "software engineer",
  ],
  authors: [{ name: "Kyle Wandishin" }],
  creator: "Kyle Wandishin",
  publisher: "Kyle Wandishin",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Kyle Wandishin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/kyle.jpeg`,
        width: 1200,
        height: 630,
        alt: "Portrait of Kyle Wandishin, Founder and AI/Computer Vision Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/images/kyle.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
