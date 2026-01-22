import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, Home, Car, GraduationCap, DollarSign } from "lucide-react"
import Link from "next/link"

export default function QuickFactsPage() {
  const quickFacts = {
    demographics: [
      { label: "Total Population", value: "20,478" },
      { label: "Rochester", value: "6,200" },
      { label: "Wayne Township", value: "3,100" },
      { label: "Henry Township", value: "2,800" },
    ],
    ages: [
      { label: "Under 18", value: "4,891 (23.9%)" },
      { label: "19-63", value: "11,573 (56.5%)" },
      { label: "65 & over", value: "3,717 (18.2%)" },
    ],
    income: [
      { label: "Households", value: "7,963" },
      { label: "Median Household Income", value: "$51,660" },
      { label: "Per Capita Income", value: "$37,464" },
      { label: "Families", value: "5,375" },
    ],
    housing: [
      { label: "Housing Units", value: "9,214" },
      { label: "Owner-occupied", value: "6,127 (66.5%)" },
      { label: "Renter-occupied", value: "1,836 (19.9%)" },
      { label: "Vacant", value: "1,251 (13.6%)" },
    ],
    education: [
      { label: "High School Graduate or Higher", value: "85.7%" },
      { label: "Bachelor's Degree or Higher", value: "13.2%" },
    ],
    transportation: [
      { label: "Mean Travel Time to Work", value: "22.1 minutes" },
      { label: "To Fort Wayne", value: "52 minutes" },
      { label: "To South Bend", value: "52 minutes" },
      { label: "To Indianapolis", value: "108 minutes" },
      { label: "To Chicago Midway", value: "120 minutes" },
    ],
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" />

      {/* Hero Section */}
      <section 
        className="relative py-32 lg:py-40 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#273776]/90 via-[#273776]/85 to-[#273776]/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Quick Facts about Fulton County
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed text-pretty">
              Key demographic and economic data about our vibrant community.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-lg">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {quickFacts.demographics.map((fact, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{fact.label}:</span>
                      <span className="font-medium text-foreground">{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Age Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {quickFacts.ages.map((fact, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{fact.label}:</span>
                      <span className="font-medium text-foreground">{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Income</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {quickFacts.income.map((fact, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{fact.label}:</span>
                      <span className="font-medium text-foreground">{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <Home className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Housing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {quickFacts.housing.map((fact, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{fact.label}:</span>
                      <span className="font-medium text-foreground">{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {quickFacts.education.map((fact, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{fact.label}:</span>
                      <span className="font-medium text-foreground">{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <Car className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {quickFacts.transportation.map((fact, i) => (
                    <li key={i} className="flex justify-between text-sm">
                      <span>{fact.label}:</span>
                      <span className="font-medium text-foreground">{fact.value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Learn More About Life in Fulton County
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Explore our healthcare, education, and utilities to see why Fulton County is a great place to call home.
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
            <Link href="/life-in-fulton-county/utilities" className="cursor-pointer">
              <button className="px-6 py-3 text-base font-bold text-primary bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:brightness-105 transition-all">
                Utilities
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
