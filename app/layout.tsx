import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "FEDCO - Fulton Economic Development Corporation",
    template: "%s | FEDCO",
  },
  description:
    "Building tomorrow's economy in the heart of America. FEDCO partners with businesses to create opportunities and foster sustainable growth throughout Fulton County, Indiana.",
  keywords: ["economic development", "Fulton County", "Indiana", "business assistance", "small business", "Rochester"],
  authors: [{ name: "Fulton Economic Development Corporation" }],
  openGraph: {
    title: "FEDCO - Fulton Economic Development Corporation",
    description: "Building tomorrow's economy in the heart of America.",
    url: "https://fultondevelopment.org",
    siteName: "FEDCO",
    locale: "en_US",
    type: "website",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
