import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Rocket, Factory, GraduationCap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      number: "01",
      title: "Business Relocation",
      description:
        "Comprehensive support for businesses looking to relocate to Fulton County, including site selection and incentive programs.",
    },
    {
      icon: Rocket,
      number: "02",
      title: "Startup Support",
      description:
        "Resources and mentorship for entrepreneurs starting new ventures, from business planning to funding opportunities.",
    },
    {
      icon: Factory,
      number: "03",
      title: "Manufacturing Excellence",
      description:
        "Leverage our strong manufacturing base with access to skilled labor, infrastructure, and industry partnerships.",
    },
    {
      icon: GraduationCap,
      number: "04",
      title: "Workforce Development",
      description:
        "Connect with our dedicated workforce through training programs, recruitment assistance, and educational partnerships.",
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            How We Support Your Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            FEDCO provides comprehensive services to help businesses thrive in Fulton County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-bold text-muted-foreground/30">{service.number}</span>
                        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
