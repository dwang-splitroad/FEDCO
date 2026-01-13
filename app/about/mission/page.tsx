import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MissionPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="h-20" /> {/* Spacer for fixed header */}
      
      {/* Hero Section with Mission Statement */}
      <section className="bg-white py-16 lg:py-24 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 text-balance text-[#273776]">
              Our Mission
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800">
              The Mission of Fulton Economic Development Corporation is to conduct such activities as may be necessary or desirable to achieve economic prosperity and growth throughout Fulton County, Indiana.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

