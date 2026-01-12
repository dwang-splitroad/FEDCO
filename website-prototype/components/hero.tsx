import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/aerial-view-of-beautiful-lakefront-community-with-.jpg" alt="Fulton County lakefront" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight">
          Building Tomorrow's Economy
          <br />
          <span className="text-secondary">In the Heart of America</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          Fulton County Economic Development Corp partners with businesses to create opportunities, drive innovation,
          and foster sustainable growth in our thriving community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="default"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground min-w-[200px]"
          >
            How We Help Small Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/95 hover:bg-white text-primary border-white min-w-[200px]"
          >
            Learn About Our Community
          </Button>
        </div>
      </div>
    </section>
  )
}
