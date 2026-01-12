import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-[#273776] to-[#1a2654] py-16 px-4 md:px-8">
      <div className="container max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Grow Your Business in Fulton County?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Let's discuss how FEDCO can help you achieve your business goals. Our team is ready to
          provide the support and resources you need to succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-[#649b42] hover:bg-[#5a8a3a] text-white">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/economic-development">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#273776]">
              Download Resources
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
