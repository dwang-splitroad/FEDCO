import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function EducationPage() {
  const schools = [
    {
      name: "Caston School Corporation",
      description: "A public school district serving the towns of Grass Creek and Fulton.",
      website: "https://www.caston.k12.in.us/",
    },
    {
      name: "Rochester Community School Corporation",
      description: "A public school district serving the city of Rochester and surrounding areas.",
      website: "https://www.rochesterschools.com/",
    },
    {
      name: "Tippecanoe Valley School Corporation",
      description: "A public school district serving parts of Fulton, Kosciusko, and Marshall counties.",
      website: "https://tippecanoevalleyschools.com/",
    },
  ]

  const higherEd = [
    { name: "Purdue University", description: "Public research university in West Lafayette" },
    { name: "University of Notre Dame", description: "Private research university in South Bend" },
    { name: "Indiana University", description: "Public research university in Bloomington" },
    { name: "Indiana Tech", description: "Private university in Fort Wayne" },
    { name: "Bethel University", description: "Private Christian university in Mishawaka" },
    { name: "Grace College", description: "Private Christian university in Winona Lake" },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" />

      {/* Hero Section */}
      <section 
        className="relative py-32 lg:py-40 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#273776]/90 via-[#273776]/85 to-[#273776]/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Education in Fulton County
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed text-pretty">
              Excellent schools and access to top-tier higher education institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">K-12 Schools</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-12">
              {schools.map((school) => (
                <Card key={school.name} className="shadow-lg">
                  <CardHeader>
                    <GraduationCap className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{school.name}</CardTitle>
                    <CardDescription>{school.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={school.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Visit Website →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 text-center">Higher Education</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 text-center">Within 50 miles of Fulton County</p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {higherEd.map((school) => (
                <Card key={school.name} className="shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-accent">{school.name}</CardTitle>
                    <CardDescription className="text-sm">{school.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
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
            Discover our healthcare facilities, reliable utilities, and community facts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/life-in-fulton-county/healthcare" className="cursor-pointer">
              <button className="px-6 py-3 text-base font-bold text-white bg-secondary rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:brightness-110 transition-all">
                Healthcare
              </button>
            </Link>
            <Link href="/life-in-fulton-county/utilities" className="cursor-pointer">
              <button className="px-6 py-3 text-base font-bold text-primary bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:brightness-105 transition-all">
                Utilities
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
