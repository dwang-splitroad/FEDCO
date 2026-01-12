import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MissionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Our Mission
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Mission of Fulton Economic Development Corporation is to conduct such activities as may be necessary or desirable to achieve economic prosperity and growth throughout Fulton County, Indiana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

