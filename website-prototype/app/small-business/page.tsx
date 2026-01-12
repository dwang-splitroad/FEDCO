import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, DollarSign, GraduationCap, Network, FileText, Handshake } from "lucide-react"

export default function SmallBusinessPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Small Business Resources
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              FEDCO is committed to helping small businesses succeed. Whether you're starting a new venture or growing
              an existing business, we provide the resources, guidance, and connections you need.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Get Started Today</Button>
              <Button size="lg" variant="outline">
                Browse Resources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Small Business */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              How We Help Small Businesses
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              From startup guidance to expansion support, we offer comprehensive services tailored to small business
              needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Business Counseling</CardTitle>
                <CardDescription>
                  One-on-one guidance from experienced business advisors to help you navigate challenges and make
                  informed decisions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Financing Assistance</CardTitle>
                <CardDescription>
                  Connect with lenders, learn about loan programs, and access resources to secure funding for your
                  business.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Training & Workshops</CardTitle>
                <CardDescription>
                  Attend workshops on business planning, marketing, financial management, and other essential skills.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Network className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Networking Events</CardTitle>
                <CardDescription>
                  Connect with other entrepreneurs, potential customers, and business partners through our networking
                  events.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Business Planning</CardTitle>
                <CardDescription>
                  Get help developing a comprehensive business plan, including market research and financial
                  projections.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Handshake className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Mentorship Programs</CardTitle>
                <CardDescription>
                  Connect with experienced business mentors who can provide guidance and support as you grow.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Startup Guide */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
              <img
                src="/small-business-owner-working-in-shop.jpg"
                alt="Small business owner"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-6">
                Starting Your Business
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Develop Your Business Idea</h3>
                    <p className="text-muted-foreground">
                      Refine your concept, identify your target market, and validate your business idea.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Create a Business Plan</h3>
                    <p className="text-muted-foreground">
                      Outline your strategy, financial projections, and operational plans for success.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Register Your Business</h3>
                    <p className="text-muted-foreground">
                      Choose a business structure, register with the state, and obtain necessary licenses.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Secure Financing</h3>
                    <p className="text-muted-foreground">
                      Explore funding options including loans, grants, and investor opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Launch and Grow</h3>
                    <p className="text-muted-foreground">
                      Open your doors, market your business, and continue learning and adapting.
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-8">
                Download Startup Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Financing Your Business
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Access various funding sources to start or expand your small business in Fulton County.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">SBA Loans</h3>
              <p className="text-muted-foreground mb-4">
                Small Business Administration loans offer favorable terms for qualified businesses, including lower down
                payments and longer repayment periods.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Local Grants</h3>
              <p className="text-muted-foreground mb-4">
                Explore grant opportunities from local and state programs designed to support small business growth and
                job creation.
              </p>
              <Button variant="outline" size="sm">
                View Grants
              </Button>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Microloans</h3>
              <p className="text-muted-foreground mb-4">
                Small loans up to $50,000 for startups and growing businesses that may not qualify for traditional bank
                financing.
              </p>
              <Button variant="outline" size="sm">
                Apply Now
              </Button>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Equipment Financing</h3>
              <p className="text-muted-foreground mb-4">
                Specialized loans for purchasing equipment and machinery, with the equipment serving as collateral.
              </p>
              <Button variant="outline" size="sm">
                Get Details
              </Button>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Working Capital</h3>
              <p className="text-muted-foreground mb-4">
                Short-term financing to cover operational expenses, inventory, and cash flow needs during growth
                periods.
              </p>
              <Button variant="outline" size="sm">
                Explore Options
              </Button>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Angel Investors</h3>
              <p className="text-muted-foreground mb-4">
                Connect with local investors interested in supporting innovative businesses with growth potential.
              </p>
              <Button variant="outline" size="sm">
                Find Investors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Small Business Success Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              See how FEDCO has helped local entrepreneurs turn their dreams into thriving businesses.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Main Street Cafe</CardTitle>
                <CardDescription>
                  "FEDCO helped us navigate the startup process and connected us with financing. We've been serving the
                  community for 5 years now and couldn't be happier."
                </CardDescription>
                <p className="text-sm font-medium text-foreground mt-4">- Sarah Johnson, Owner</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tech Solutions Inc</CardTitle>
                <CardDescription>
                  "The business counseling and mentorship program gave us the guidance we needed to scale from 2
                  employees to 25 in just three years."
                </CardDescription>
                <p className="text-sm font-medium text-foreground mt-4">- Mike Chen, Founder</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Artisan Woodworks</CardTitle>
                <CardDescription>
                  "Thanks to FEDCO's equipment financing program, we were able to purchase new machinery and triple our
                  production capacity."
                </CardDescription>
                <p className="text-sm font-medium text-foreground mt-4">- David Martinez, Owner</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Ready to Start or Grow Your Small Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Schedule a free consultation with our small business advisors to discuss your goals and explore available
            resources.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
            >
              Download Resource Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
