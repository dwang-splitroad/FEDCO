import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Hero />
        <ValueProps />
        <ServicesSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
