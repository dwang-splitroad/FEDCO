import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, DollarSign, Briefcase, BookOpen, ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BusinessAssistancePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" /> {/* Spacer for fixed header */}
      
      {/* Hero Section */}
      <section 
        className="relative py-32 lg:py-40 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#273776]/90 via-[#273776]/85 to-[#273776]/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              We Help New and Existing Businesses
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed text-pretty">
              FEDCO is committed to helping small businesses succeed. Whether you're starting a new venture or growing
              an existing business, we provide the resources, guidance, and connections you need.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="cursor-pointer">
                <Button size="lg" className="bg-secondary hover:bg-secondary text-white w-full sm:w-auto cursor-pointer shadow-md hover:shadow-xl hover:brightness-110 transition-all">
                  Get Started Today
                </Button>
              </Link>
              <a href="#services" className="cursor-pointer">
                <Button size="lg" variant="outline" className="bg-white hover:bg-white text-primary hover:text-primary border-white w-full sm:w-auto cursor-pointer shadow-md hover:shadow-xl hover:brightness-105 transition-all">
                  Browse Resources
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Education & Counseling
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              From startup guidance to expansion support, we offer comprehensive services tailored to small business
              needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-accent mb-2" />
                <CardTitle>NxLevel Business Planning & Management Course</CardTitle>
                <CardDescription>
                  <span className="font-semibold text-foreground">The Course for building your business</span>
                  <br /><br />
                  Offered spring and fall each year. This in-depth course exposes students to best practices of business management and business planning. Topics include: developing your business plan (you will complete one in this class), marketing, financial statements, financing your business and much more.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Business Counseling</CardTitle>
                <CardDescription>
                  FREE, monthly, one on one business counseling with an experienced counselor from the Indiana Small Business Development Center. The counselors offer expert advice on a wide range of topics to new or existing business owners. Meetings by appointment only.
                  <br /><br />
                  To schedule your appointment with the Indiana Small Business Development Center visit the{" "}
                  <a 
                    href="https://www.isbdc.org/locations/north-central-indiana-sbdc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold cursor-pointer"
                  >
                    ISBDC website
                  </a>. Click on, <span className="font-semibold text-foreground">Let's Work Together</span> on the top right or call (574) 520-4126.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Local Seminars</CardTitle>
                <CardDescription>
                  FEDCO regularly offers seminars on business related topics. Past topics have included QuickBooks, customer service, marketing, retail development, restaurant management, and social media.
                  <br /><br />
                  <a 
                    href="https://www.facebook.com/fedco46975#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Check out upcoming biz events for current seminars.
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Funding and Financial Support
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              You have options; <span className="font-semibold text-foreground">especially</span> in Fulton County.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-secondary/20">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-primary mb-2" />
                <CardTitle>FEDCO's Loan Program</CardTitle>
                <CardDescription>
                  Thanks to funding from the USDA, FEDCO has a low interest revolving loan pool for businesses with less than 50 employees and less than $1 million in gross annual sales located in Fulton County. Funds can be used for a variety of business-related expenses.
                  <br /><br />
                  Start up businesses (less than 2 years old) are strongly encouraged to complete FEDCO's NxLevel Business Planning and Management course and complete a business plan from the course or you may submit an approved business plan to apply.
                  <br /><br />
                  Existing business (2 years or older) may apply directly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-2" />
                <CardTitle>SBA Loans</CardTitle>
                <CardDescription>
                  Small Business Administration supported loans. SBA does not actually make direct loans; instead, it provides loan guarantees to entrepreneurs, promising the bank/lender to pay back a certain percentage of your loan if you are unable to.
                  <br /><br />
                  <a 
                    href="https://www.sba.gov/funding-programs/loans/lender-match-connects-you-lenders" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline cursor-pointer"
                  >
                    Click here to find the best lender for your needs.
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Training Funds</CardTitle>
                <CardDescription>
                  Through a grant from the USDA, FEDCO can pay for training needs of our small businesses with less than 50 employees and less than $1 million in gross annual sales. This money does not have to be repaid.
                  <br /><br />
                  Eligible activities include market research, consulting services, service training, education, related trade show associations, and conferences. Clients have used these funds for various training, including QuickBooks, industry certifications, and social media.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-8 bg-card rounded-lg border">
              <div className="flex-shrink-0">
                <Image
                  src="/images/Amyheadshothead2Red2023.jpg"
                  alt="Amy Beechy, Director of Entrepreneurial Programs"
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Contact</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  For more information about small business assistance, please contact Amy Beechy, Director of Entrepreneurial Programs:
                </p>
                <div className="space-y-1 text-sm md:text-base">
                  <p className="text-foreground"><span className="font-semibold">Phone:</span> (574) 709-7955</p>
                  <p className="text-foreground">
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:amy@projectmattersllc.com" className="text-primary font-semibold hover:underline cursor-pointer break-all">
                      amy@projectmattersllc.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance mb-6">
              Explore More Resources
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Discover success stories from local entrepreneurs and sign up to stay informed about the latest business opportunities.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="text-center p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl text-primary mb-2">Stories of BizGro</CardTitle>
                  <CardDescription>
                    See how FEDCO has helped local businesses thrive and grow in Fulton County.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link href="/small-business/stories-of-bizgro" className="cursor-pointer">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary cursor-pointer shadow-md hover:shadow-xl hover:brightness-110 transition-all">
                      Read Success Stories
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl text-primary mb-2">Sign Up for Updates</CardTitle>
                  <CardDescription>
                    Get the latest news about workshops, funding opportunities, and business resources.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link href="/small-business/sign-up" className="cursor-pointer">
                    <Button size="lg" className="w-full bg-secondary hover:bg-secondary cursor-pointer shadow-md hover:shadow-xl hover:brightness-110 transition-all">
                      Stay Informed
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

