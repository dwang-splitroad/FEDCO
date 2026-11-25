import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { organizationJsonLd } from "@/lib/organization-schema"
import "./globals.css"

// Follows whichever production domain Vercel is serving, so preview image URLs always resolve.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://www.fultonedc.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: "https://www.fultonedc.com",
    siteName: "FEDCO",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/fedco-logo-share.png",
        width: 1200,
        height: 630,
        alt: "FEDCO - Fulton Economic Development Corp logo",
      },
      {
        url: "/images/fedco-logo.png",
        width: 1639,
        height: 575,
        alt: "FEDCO - Fulton Economic Development Corp primary logo",
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        {/* Not displayed: lets crawlers that only read page content find the primary logo. */}
        <img
          src="/images/fedco-logo.png"
          alt="FEDCO - Fulton Economic Development Corp primary logo"
          width={1639}
          height={575}
          loading="lazy"
          className="hidden"
        />
        <Analytics />
      </body>
    </html>
  )
}
