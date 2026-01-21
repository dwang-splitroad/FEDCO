import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-gray-100 text-center"
      style={{
        backgroundImage: 'url(/images/lake.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'clamp(500px, 70vh, 800px)',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* Hero Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center gap-6 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            IN THE MIDDLE OF EVERYWHERE
          </h1>
          <div className="space-y-4 text-base md:text-lg lg:text-xl mb-8 md:mb-10">
            <p>
              Fulton County is centrally located between Chicago and Indianapolis. The region boasts a dedicated workforce, a vibrant agriculture industry and strong manufacturing base. Known for a friendly environment, outdoor recreational opportunities and rich history, Fulton County is ready to grow.
            </p>
            <p>
              Interested in relocating your business? Starting a business or expanding a business? FEDCO works closely with city/county government, schools, and local businesses to create an environment that supports success. We look forward to working with you!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto">
            <Link href="/small-business" className="w-full sm:w-auto cursor-pointer">
              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold shadow-md px-6 md:px-10 py-6 md:py-7 text-sm md:text-base cursor-pointer">
                How We Help Small Business
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <Link href="/life-in-fulton-county" className="w-full sm:w-auto cursor-pointer">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-white text-white bg-white/10 hover:bg-white hover:text-primary font-bold px-6 md:px-10 py-6 md:py-7 text-sm md:text-base cursor-pointer"
              >
                Learn About Our Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
