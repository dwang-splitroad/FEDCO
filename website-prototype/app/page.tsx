import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProps />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
