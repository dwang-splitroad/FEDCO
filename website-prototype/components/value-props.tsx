import { Building2, Users, TrendingUp, MapPin } from "lucide-react"

export function ValueProps() {
  const values = [
    {
      icon: Building2,
      title: "Business Support",
      description: "Comprehensive resources and guidance for businesses at every stage of growth.",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Access to a dedicated, talented workforce ready to drive your success.",
    },
    {
      icon: TrendingUp,
      title: "Economic Growth",
      description: "Strategic partnerships that create sustainable economic opportunities.",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Centrally located between Chicago and Indianapolis for optimal access.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
