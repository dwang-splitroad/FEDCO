import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Building2, Users, MapPin, TrendingUp, Briefcase, Factory, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function EconomicDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" />

      {/* Hero Section */}
      <section
        className="relative py-32 lg:py-40 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Sites & Buildings
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed text-pretty">
              Fulton County has a number of sites and buildings available for development. We are committed to helping you find the perfect location for your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://properties.zoomprospector.com/indiana/broker/2911/seo-key?page=1&s%5BSortDirection%5D=true&s%5BSortBy%5D=featured" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto">
                  Search IEDC Database
                </Button>
              </a>
              <Link href="/contact" className="cursor-pointer">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Available Properties Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Properties Viewer */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                Browse Available Properties
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                View current listings of available sites and buildings in our region
              </p>
              
              {/* Zoom Prospector iFrame */}
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://properties.zoomprospector.com/indiana/broker/2911/seo-key?page=1&s%5BSortDirection%5D=true&s%5BSortBy%5D=featured"
                  width="100%"
                  height="800"
                  style={{ border: 0 }}
                  title="Available Properties in Fulton County"
                  className="w-full"
                />
              </div>

              <div className="mt-6 text-center">
                <a 
                  href="https://properties.zoomprospector.com/indiana/broker/2911/seo-key?page=1&s%5BSortDirection%5D=true&s%5BSortBy%5D=featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                  View All Properties in Full Screen →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              How We Support Your Business
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              From site selection to workforce development, we provide end-to-end support for your business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Site Selection</CardTitle>
                <CardDescription>
                  Expert assistance in finding the perfect location for your business with access to available
                  properties and development sites.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Business Incentives</CardTitle>
                <CardDescription>
                  Access to tax abatements, grants, and financing programs designed to reduce startup and expansion
                  costs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Workforce Development</CardTitle>
                <CardDescription>
                  Connect with skilled workers through our partnerships with local training programs and educational
                  institutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Infrastructure Support</CardTitle>
                <CardDescription>
                  Information on utilities, transportation networks, and infrastructure to support your operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Business Planning</CardTitle>
                <CardDescription>
                  Guidance on business plans, market research, and strategic planning to ensure long-term success.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Factory className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Permitting Assistance</CardTitle>
                <CardDescription>
                  Navigate local regulations and permitting processes with our streamlined support services.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Industries */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Key Industries in Fulton County
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Our diverse economy supports a wide range of industries with strong infrastructure and workforce
              capabilities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">
                Advanced manufacturing with skilled workforce and modern facilities
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Agriculture</h3>
              <p className="text-sm text-muted-foreground">Rich agricultural heritage with modern farming operations</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Logistics</h3>
              <p className="text-sm text-muted-foreground">Strategic location with excellent transportation access</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground">Growing healthcare sector with quality medical facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fulton County */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-6">
                Why Choose Fulton County?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Strategic Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Centrally located between Chicago and Indianapolis, providing easy access to major markets and
                    transportation corridors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Skilled Workforce</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Access to a dedicated workforce with strong work ethic and technical skills, supported by local
                    training programs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Quality of Life</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Affordable cost of living, excellent schools, and abundant recreational opportunities make Fulton
                    County an ideal place to live and work.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Business-Friendly Environment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Competitive tax rates, streamlined permitting, and strong local support for business growth and
                    development.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Business development in Fulton County"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Major Employers CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
              Major Employers
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fulton County is home to a number of major employers in a variety of industries, including manufacturing, healthcare, and education.
            </p>
            <Link href="/top-employers" className="cursor-pointer">
              <Button size="lg" variant="outline">
                View Top Employers in Fulton County →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Ready to Grow Your Business in Fulton County?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Our economic development team is ready to help you explore opportunities and navigate the process of
            starting or expanding your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="cursor-pointer">
              <Button size="lg" variant="secondary">
                Contact Our Team
              </Button>
            </Link>
            <a href="https://properties.zoomprospector.com/indiana/broker/2911/seo-key?page=1&s%5BSortDirection%5D=true&s%5BSortBy%5D=featured" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Search Properties
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
