import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Grow Your Business in Fulton County?
          </h2>
          <p className="text-lg sm:text-xl mb-10 text-primary-foreground/90 text-pretty leading-relaxed">
            Let's discuss how FEDCO can help you achieve your business goals. Our team is ready to provide the support
            and resources you need to succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-w-[200px]"
            >
              Download Resources
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(574) 555-GROW</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@fedco.org</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
