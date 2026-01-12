import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Building2, TrendingUp } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: "Business Development",
      description:
        "Comprehensive support for starting and growing your business in Fulton County.",
    },
    {
      icon: Users,
      title: "Workforce Solutions",
      description:
        "Connect with talented professionals and access training resources for your team.",
    },
    {
      icon: Building2,
      title: "Site Selection",
      description:
        "Find the perfect location for your business with our extensive property database.",
    },
    {
      icon: TrendingUp,
      title: "Economic Incentives",
      description:
        "Explore tax incentives, grants, and financing options to fuel your growth.",
    },
  ]

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#273776] mb-4">
            How We Support Your Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FEDCO provides a comprehensive suite of services designed to help businesses
            thrive in Fulton County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#273776] text-white">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#273776] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
