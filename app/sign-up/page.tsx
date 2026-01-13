"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" /> {/* Spacer for fixed header */}

      {/* Hero Section */}
      <section 
        className="relative py-32 lg:py-40 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#273776]/90 via-[#273776]/85 to-[#273776]/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Stay Connected
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed text-pretty">
              Get the latest updates on business resources, workshops, and funding opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#649b42]/5 to-[#273776]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Sign up for Updates</CardTitle>
                <CardDescription>
                  Receive updates about the latest resources for small businesses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name <span className="text-muted-foreground text-xs">(required)</span></Label>
                      <Input id="firstName" placeholder="First Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name <span className="text-muted-foreground text-xs">(required)</span></Label>
                      <Input id="lastName" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-muted-foreground text-xs">(required)</span></Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cell">Cell #</Label>
                    <Input id="cell" type="tel" placeholder="(555) 555-5555" />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                    SIGN ME UP!
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Want to Learn More?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Explore our business assistance programs and success stories from local entrepreneurs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/small-business">
              <button className="px-6 py-3 text-base font-bold text-white bg-[#649b42] hover:bg-[#5a8a3a] rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                View Business Assistance
              </button>
            </Link>
            <Link href="/stories-of-bizgro">
              <button className="px-6 py-3 text-base font-bold text-primary bg-white hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                Read Success Stories
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


