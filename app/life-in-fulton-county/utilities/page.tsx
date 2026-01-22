import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Droplets, Flame } from "lucide-react"
import Link from "next/link"

export default function UtilitiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" />

      {/* Hero Section */}
      <section 
        className="relative py-32 lg:py-40 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#273776]/90 via-[#273776]/85 to-[#273776]/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Utilities in Fulton County
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed text-pretty">
              Reliable utility services to support your business operations with competitive rates and excellent service.
            </p>
          </div>
        </div>
      </section>

      {/* Utilities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-primary" />
                  <CardTitle>Electric</CardTitle>
                </div>
                <CardDescription>
                  Fulton County is served by reliable electric cooperatives and municipal utilities that provide competitive rates for businesses of all sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-muted-foreground mb-2">Service Providers:</p>
                <div className="space-y-1">
                  <a href="http://www.fultoncountymc.com/" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline font-medium cursor-pointer">
                    Fulton County REMC →
                  </a>
                  <a href="https://www.duke-energy.com/home" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline font-medium cursor-pointer">
                    Duke Energy →
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Flame className="h-8 w-8 text-accent" />
                  <CardTitle>Natural Gas</CardTitle>
                </div>
                <CardDescription>
                  Natural gas service is available throughout Fulton County for heating, manufacturing, and other business needs at competitive rates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">
                  Available for heating, manufacturing, and industrial applications
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Droplets className="h-8 w-8 text-primary" />
                  <CardTitle>Water/Sewer</CardTitle>
                </div>
                <CardDescription>
                  Municipal water and sewer services are available in Rochester and surrounding communities with capacity for business growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-muted-foreground mb-2">Available Services:</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Municipal water systems</li>
                  <li>Wastewater treatment</li>
                  <li>Industrial capacity available</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-primary mb-4">
              Ready to build or expand in Fulton County?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact our team to learn more about utility services and how we can help you establish your business in Fulton County.
            </p>
            <Link href="/contact" className="inline-block text-primary hover:underline font-medium text-lg cursor-pointer">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Explore More About Life in Fulton County
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Discover our healthcare facilities, excellent education system, and community facts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/life-in-fulton-county/healthcare" className="cursor-pointer">
              <button className="px-6 py-3 text-base font-bold text-white bg-secondary rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:brightness-110 transition-all">
                Healthcare
              </button>
            </Link>
            <Link href="/life-in-fulton-county/education" className="cursor-pointer">
              <button className="px-6 py-3 text-base font-bold text-primary bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:brightness-105 transition-all">
                Education
              </button>
            </Link>
            <Link href="/life-in-fulton-county/quick-facts" className="cursor-pointer">
              <button className="px-6 py-3 text-base font-bold text-primary bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:brightness-105 transition-all">
                Quick Facts
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
