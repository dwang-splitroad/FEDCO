import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function StaffPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-secondary font-semibold mb-2 tracking-wide">HELPING FULTON COUNTY GROW</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Meet Our Staff
            </h1>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[280px_1fr] gap-0">
                  <div className="relative h-[300px] md:h-full">
                    <Image
                      src="/images/michaelladd.jpg"
                      alt="Michael C. Ladd"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h2 className="text-xl font-bold text-primary mb-4">MICHAEL C. LADD</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      His background includes <span className="font-semibold text-accent">35+ years in nonprofit management</span> in various positions. His experience is comprehensive, including chambers of commerce, Main Street and Urban Enterprise Zones. He brings with him extensive experience in organizational development, downtown revitalization, economic development, fundraising and grant writing. Contact Mike if you have a special project that needs a kick start!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Get in Touch</h3>
              <a 
                href="mailto:director@fultondevelopment.org"
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors"
              >
                <Mail className="h-5 w-5" />
                director@fultondevelopment.org
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

