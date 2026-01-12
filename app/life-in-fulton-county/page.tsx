import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Stethoscope, Zap, Droplets, Flame, BarChart3, Users, Home, Car, MapPin } from "lucide-react"
import Link from "next/link"

export default function LifeInFultonCountyPage() {
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
      <div className="h-20" /> {/* Spacer for fixed header */}

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Life in Fulton County
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90">
              Discover what makes Fulton County a great place to live, work, and raise a family.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section id="quick-facts" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Quick Facts about Fulton County
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Demographics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickFacts.demographics.map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Age Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickFacts.ages.map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Home className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Income & Household</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickFacts.income.map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Home className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Housing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickFacts.housing.map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Education Attainment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickFacts.education.map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Car className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Transportation</CardTitle>
                <CardDescription>Drive time from Rochester</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickFacts.transportation.map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section id="healthcare" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Healthcare in Fulton County
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <Stethoscope className="h-10 w-10 text-accent mb-2" />
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

            <Card>
              <CardHeader>
                <CardTitle className="text-accent">Other Healthcare Providers</CardTitle>
                <CardDescription>
                  In addition to Woodlawn Hospital, Fulton County is home to a number of other healthcare providers, including primary care physicians, dentists, and specialists.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-accent">Fulton County Health Department</CardTitle>
                <CardDescription>
                  The Fulton County Health Department provides a wide range of public health services, including immunizations, food safety inspections, and disease prevention programs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-accent">Mental Health Services</CardTitle>
                <CardDescription>
                  Fulton County offers a variety of mental health services, including counseling, therapy, and support groups.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Education
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-6">K-12 Schools</h3>
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              {schools.map((school) => (
                <Card key={school.name}>
                  <CardHeader>
                    <GraduationCap className="h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-lg">{school.name}</CardTitle>
                    <CardDescription>{school.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={school.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline text-sm"
                    >
                      Visit Website →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold text-primary mb-6">Higher Education</h3>
            <p className="text-muted-foreground mb-6 text-center">Within 50 miles of Fulton County</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {higherEd.map((school) => (
                <Card key={school.name}>
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

      {/* Utilities Section */}
      <section id="utilities" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Utilities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fulton County offers reliable utility services to support your business operations with competitive rates and excellent service.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-secondary" />
                  <CardTitle>Electric</CardTitle>
                </div>
                <CardDescription>
                  Fulton County is served by reliable electric cooperatives and municipal utilities that provide competitive rates for businesses of all sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-muted-foreground mb-2">Service Providers:</p>
                <div className="space-y-1">
                  <a href="http://www.fultoncountymc.com/" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:underline">
                    Fulton County REMC →
                  </a>
                  <a href="https://www.duke-energy.com/home" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:underline">
                    Duke Energy →
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
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

            <Card>
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
            <Link href="/contact" className="text-secondary hover:underline font-medium">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Things to Do CTA */}
      <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Explore Things to Do
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Discover outdoor recreation, local attractions, dining, and entertainment in Fulton County.
          </p>
          <a 
            href="https://fultoncountyindiana.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Visit Fulton County Indiana →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

