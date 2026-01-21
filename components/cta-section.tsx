import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-[#273776] to-[#1a2654] py-12 md:py-16 px-4 md:px-8">
      <div className="container max-w-4xl mx-auto text-center text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
          Ready to Grow Your Business in Fulton County?
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90">
          Let's discuss how FEDCO can help you achieve your business goals. Our team is ready to
          provide the support and resources you need to succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <Link href="/contact" className="w-full sm:w-auto cursor-pointer">
            <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white cursor-pointer">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
