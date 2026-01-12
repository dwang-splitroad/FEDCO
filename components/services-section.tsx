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
    <section className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#273776] mb-3 md:mb-4 px-4">
            How We Support Your Success
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            FEDCO provides a comprehensive suite of services designed to help businesses
            thrive in Fulton County.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-5 md:p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-3 md:mb-4 rounded-full bg-[#273776] text-white">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#273776] mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
