import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Heart, MapPin } from "lucide-react"
import Link from "next/link"

export default function HealthcarePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" />

      {/* Hero Section */}
      <section 
        className="relative py-32 lg:py-40 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#273776]/90 via-[#273776]/85 to-[#273776]/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Healthcare in Fulton County
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed text-pretty">
              Quality healthcare services and facilities serving our community since 1905.
            </p>
          </div>
        </div>
      </section>

      {/* Healthcare Providers Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <Stethoscope className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Woodlawn Hospital</CardTitle>
                <CardDescription>
                  Woodlawn Hospital has been serving the residents of Fulton County and surrounding areas since 1905. It is a critical access hospital that provides a wide range of services, including emergency care, surgery, and obstetrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://www.woodlawnhealth.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline font-medium"
                >
                  Visit Woodlawn Hospital Website →
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <Heart className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Other Healthcare Providers</CardTitle>
                <CardDescription>
                  In addition to Woodlawn Hospital, Fulton County is home to a number of other healthcare providers, including primary care physicians, dentists, and specialists.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <MapPin className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Fulton County Health Department</CardTitle>
                <CardDescription>
                  The Fulton County Health Department provides a wide range of public health services, including immunizations, food safety inspections, and disease prevention programs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Mental Health Services</CardTitle>
                <CardDescription>
                  Fulton County offers a variety of mental health services, including counseling, therapy, and support groups.
                </CardDescription>
              </CardHeader>
            </Card>
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
            Discover our excellent education system, reliable utilities, and community facts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/life-in-fulton-county/education">
              <button className="px-6 py-3 text-base font-bold text-white bg-[#649b42] hover:bg-[#5a8a3a] rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                Education
              </button>
            </Link>
            <Link href="/life-in-fulton-county/utilities">
              <button className="px-6 py-3 text-base font-bold text-primary bg-white hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                Utilities
              </button>
            </Link>
            <Link href="/life-in-fulton-county/quick-facts">
              <button className="px-6 py-3 text-base font-bold text-primary bg-white hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
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
