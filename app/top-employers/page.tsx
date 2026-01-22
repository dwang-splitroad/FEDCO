import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Building2, Briefcase, GraduationCap, Heart, ShoppingCart, Truck } from "lucide-react"
import Link from "next/link"

export default function TopEmployersPage() {
  const employers = [
    { name: "Rochester Metal Products", description: "Foundry - Gray & Ductile Iron Castings", icon: Factory },
    { name: "LAU", description: "Centrifugal Blower Wheels", icon: Factory },
    { name: "Acument Global Technologies", description: "Cold Formed Fasteners", icon: Factory },
    { name: "Winamac Coil Spring Inc", description: "Mechanical Coil Springs", icon: Factory },
    { name: "Pike Lumber Co Inc", description: "Hardwood Dimension - Flooring Mills", icon: Factory },
    { name: "Walmart Supercenter", description: "Retail", icon: ShoppingCart },
    { name: "Topp Industries", description: "Fiberglass & Polyethylene Sump & Sewage Basins & Lift Stations", icon: Factory },
    { name: "Life Care Center of Rochester", description: "Healthcare", icon: Heart },
    { name: "Kroger", description: "Retail", icon: ShoppingCart },
    { name: "Woodlawn Hospital", description: "Healthcare", icon: Heart },
    { name: "Rochester Community Schools", description: "School", icon: GraduationCap },
    { name: "Caston School Corporation", description: "School", icon: GraduationCap },
    { name: "Tippecanoe Valley School Corporation", description: "School", icon: GraduationCap },
    { name: "Ad-Vance Magnetics Inc", description: "Shielding-magnetic Electrostatic", icon: Factory },
    { name: "Airvac Inc", description: "Vacuum Collection Systems", icon: Factory },
    { name: "Sonoco Products Co", description: "Spiral Wound Paper Tubes, Paper Packaging Products", icon: Factory },
    { name: "Rochester Rotational Molding", description: "Rotational Molding", icon: Factory },
    { name: "American Axle & Manufacturing", description: "Global Tier 1 Automotive Supplier", icon: Truck },
    { name: "E & B Paving Grading", description: "Concrete Paving, Asphalt Paving", icon: Building2 },
    { name: "RapidView", description: "Inspection solutions to the nuclear, petrochemical, industrial and municipal sewer industries", icon: Factory },
    { name: "Rochester Homes Inc", description: "Custom Modular Homes", icon: Building2 },
    { name: "Whitley Manufacturing", description: "Modular Buildings", icon: Building2 },
    { name: "Northern Indiana Industrial Coatings", description: "Metal Coating, Engraving and Allied Services", icon: Factory },
    { name: "Jobsite Mobile Offices", description: "Mobile Office Trailers and Construction Field Offices", icon: Building2 },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" /> {/* Spacer for fixed header */}

      {/* Top Employers Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-8">
              Top Employers in Fulton County
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {employers.map((employer, index) => {
                const Icon = employer.icon
                return (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <CardTitle className="text-base text-primary">{employer.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{employer.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Ready to Connect With Local Employers?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Fulton County's diverse economy offers opportunities across manufacturing, healthcare, education, and more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/workforce"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium cursor-pointer hover:shadow-xl hover:brightness-110 transition-all"
            >
              View Workforce Data
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium cursor-pointer hover:shadow-xl hover:brightness-110 transition-all"
            >
              Contact FEDCO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


