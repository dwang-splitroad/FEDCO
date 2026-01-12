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
        minHeight: '60vh',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/30 z-0" />
      
      {/* Hero Content - but just buttons, no text */}
      <div className="container relative z-10 flex flex-col items-center justify-center gap-6 py-12 px-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/small-business">
            <Button size="lg" className="bg-[#649b42] hover:bg-[#5a8a3a] text-white font-bold shadow-md px-10 py-7">
              How We Help Small Business
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/life-in-fulton-county">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#273776] text-[#273776] bg-white hover:bg-blue-50 font-bold px-10 py-7"
            >
              Learn About Our Community
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
