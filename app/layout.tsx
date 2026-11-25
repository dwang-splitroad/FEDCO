import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Follows whichever production domain Vercel is serving, so the logo URL always resolves.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://fultondevelopment.org"

// Structured data so search engines can pick up the logo without it being shown on the page.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fulton Economic Development Corporation",
  alternateName: "FEDCO",
  url: siteUrl,
  logo: `${siteUrl}/images/fedco-logo.png`,
  image: `${siteUrl}/images/fedco-logo.png`,
  email: "director@fultondevelopment.org",
  telephone: "+1-574-223-3326",
  address: {
    "@type": "PostalAddress",
    streetAddress: "822 Main Street",
    addressLocality: "Rochester",
    addressRegion: "IN",
    postalCode: "46975",
    addressCountry: "US",
  },
  sameAs: ["https://www.facebook.com/fedco46975"],
}

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
    url: "https://fultondevelopment.org",
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
        <Analytics />
      </body>
    </html>
  )
}
