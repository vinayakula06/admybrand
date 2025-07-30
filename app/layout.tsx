import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description:
    "Revolutionary AI-powered marketing platform that creates, optimizes, and scales campaigns for maximum ROI. Join thousands of successful businesses worldwide.",
  keywords: "AI marketing, marketing automation, campaign optimization, digital marketing, AI tools",
  authors: [{ name: "ADmyBRAND" }],
  creator: "ADmyBRAND",
  publisher: "ADmyBRAND",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://admybrand.ai",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Revolutionary AI-powered marketing platform that creates, optimizes, and scales campaigns for maximum ROI.",
    siteName: "ADmyBRAND",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Revolutionary AI-powered marketing platform that creates, optimizes, and scales campaigns for maximum ROI.",
    creator: "@admybrand",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#00B4D8",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
