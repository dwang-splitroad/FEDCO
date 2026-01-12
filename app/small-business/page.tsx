import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, Users, DollarSign, Briefcase, BookOpen, ArrowRight, Globe, CheckCircle2, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SmallBusinessPage() {
  const bizgroStories = [
    {
      title: "Newby Services",
      image: "/images/storiesofbizgro/article pictures/Newby+Services.png",
      industry: "HVAC Services",
      yearStarted: "2021",
      quote: "I attended the NxLevel course and felt I had the tools I needed to go into business.",
      quotePerson: "Andy Newby, Owner",
      story: "Newby Services is a locally owned heating and cooling business located in Rochester, IN. Owner Andy Newby got his start working with his father-in-law, who taught him how to work on heating and cooling systems. After about a year of working with family, Andy decided he wanted to branch out and start his own business. The only problem was he didn't know how to start a business. Andy launched his business in the summer of 2021 and has been growing a steady clientele since.",
      highlights: [
        "Completed NxLevel Business Planning & Management Course",
        "Launched summer 2021",
        "Growing steady clientele"
      ],
      facebook: "https://www.facebook.com/profile.php?id=100063733353729#",
    },
    {
      title: "Rochester Boat Company",
      image: "/images/storiesofbizgro/article pictures/Rochester+Boat+Company.png",
      industry: "Marine Repair & Sales",
      yearStarted: "2003",
      quote: "It was a simple process that helped us get our business started.",
      quotePerson: "Ashley Ladd, Co-Owner",
      story: "Rochester Boat Company is a locally owned business that does marine repair and sales. It is owned and operated by Michael and Ashley Ladd. Michael has been a marine mechanic since 2003. When the opportunity arose to purchase the business from the previous owner, Michael and Ashley jumped on it. The Ladds were able to utilize FEDCO's low-interest loan program to purchase the business. Rochester Boat has since expanded to a larger building and has brought on another mechanic.",
      highlights: [
        "Used FEDCO's low-interest loan program",
        "Expanded to larger building",
        "Hired additional mechanic"
      ],
      website: "https://www.rochesterboatcompany.com",
      facebook: "https://www.facebook.com/profile.php?id=100027126236870#",
      phone: "(574) 223-2675",
    },
    {
      title: "Kline Performance Equine",
      image: "/images/storiesofbizgro/article pictures/Rochester+Bagel_Kline+Performance+Equine_Blog+Header@300x.png",
      industry: "Veterinary Services",
      yearStarted: "2021",
      quote: "The class gave me the tools to write a business plan and I still refer back to it.",
      quotePerson: "Dr. Audrey Kline, DVM",
      story: "Dr. Audrey Kline knew from a young age that she wanted to work on animals. While in college, she worked for an equine veterinarian and realized she wanted to work on large animals and specifically, horses. After completing vet school at Purdue, Dr. Kline moved back to the area and decided to start her own practice. Dr. Kline offers ambulatory services for a variety of livestock animals. She attended the NxLevel course in the fall of 2021 and also took advantage of the free business counseling offered through the Indiana Small Business Development Center.",
      highlights: [
        "Completed NxLevel course & business counseling",
        "Purdue DVM graduate",
        "Ambulatory veterinary services"
      ],
      facebook: "https://www.facebook.com/profile.php?id=100064651963883",
    },
    {
      title: "Rochester Bagel & Coffee House",
      image: "/images/storiesofbizgro/article pictures/Rochester+Bagel_Rochester+Bagel_Blog+Header@300x.png",
      industry: "Restaurant & Café",
      yearStarted: "2017",
      quote: "Without FEDCO's loan program, we wouldn't have been able to make our dreams a reality.",
      quotePerson: "Amy Roe, Owner",
      story: "Rochester Bagel and Coffee House is a family-owned and run business located in the heart of Rochester. Owned and operated by Amy and Michael Roe, Amy has been working in the food industry since she was a teenager. After working in various establishments, she knew she wanted to own her own restaurant. They were able to use the low-interest loan program through FEDCO to get the funding needed to start their business. Rochester Bagel opened in 2017 and is still going strong as a beloved restaurant in the community.",
      highlights: [
        "Used FEDCO low-interest loan program",
        "Family-owned and operated since 2017",
        "Beloved community gathering place"
      ],
      facebook: "https://www.facebook.com/RochesterBagel",
      instagram: "https://www.instagram.com/thebagelshoproc",
      website: "https://www.rochesterbagel.com",
    },
    {
      title: "Hoffman Body Shop & Graphics",
      image: "/images/storiesofbizgro/article pictures/OBS_8868.jpg",
      industry: "Auto Body & Graphics",
      yearStarted: "1971",
      quote: "50 years of serving Fulton County's residents",
      quotePerson: "Hoffman Family",
      story: "In 2021, Hoffman Body Shop celebrated its 50th Anniversary of serving Fulton County's residents. The family-owned business opened in 1971. In 2021, Hoffman's received a low-interest loan through FEDCO to update equipment and purchase a new state-of-the-art paint booth. The new equipment has helped the business expand its services, hire one new employee, and become more energy efficient.",
      highlights: [
        "50+ years in business",
        "State-of-the-art equipment upgrade",
        "Expanded services & hired new employee"
      ],
    },
    {
      title: "Jarrety's Place",
      image: "/images/storiesofbizgro/article pictures/OBS_9055.jpg",
      industry: "Restaurant & Bar",
      yearStarted: "2020",
      quote: "Bringing the community back together in Akron",
      quotePerson: "Owners",
      story: "After the local watering hole, Jarrety's Place, closed, the town of Akron was missing a place for the community to come together. Two local couples purchased the business and, with the help of a low-interest loan from FEDCO, remodeled the building, purchased new equipment, and reopened the restaurant.",
      highlights: [
        "Used FEDCO low-interest loan",
        "Complete building remodel",
        "Community gathering place restored"
      ],
    },
    {
      title: "Manitou Marina",
      image: "/images/storiesofbizgro/article pictures/OBS_7215.jpg",
      industry: "Marina Services",
      yearStarted: "2017",
      quote: "Back on our feet and serving the Lake Manitou community",
      quotePerson: "Marina Management",
      story: "Manitou Marina is a full-service marina located on beautiful Lake Manitou in Rochester. Through the years, the marina has had several owners. In 2017, the marina received a low-interest loan from FEDCO to help with renovations and working capital. The loan helped the business get back on its feet and continue to be a staple in the community.",
      highlights: [
        "FEDCO loan for renovations",
        "Full-service marina",
        "Community staple on Lake Manitou"
      ],
    },
    {
      title: "Northern Traders",
      image: "/images/storiesofbizgro/article pictures/OBS_9172.jpg",
      industry: "Retail & Resale",
      yearStarted: "2017",
      quote: "Your destination for tools, auto parts, and household items",
      quotePerson: "Northern Traders Team",
      story: "Northern Traders is a buyer and seller of goods such as tools, automotive parts, and household items. The business is located just north of Rochester. In 2017, the business received a low-interest loan to help with the purchase of the building and inventory.",
      highlights: [
        "FEDCO loan for building & inventory",
        "Wide variety of goods",
        "Serving northern Rochester area"
      ],
    },
    {
      title: "Glitter Grooming",
      image: "/images/storiesofbizgro/article pictures/OBS_7369.jpg",
      industry: "Pet Grooming",
      yearStarted: "2022",
      quote: "Investing in our team through professional training",
      quotePerson: "Glitter Grooming",
      story: "Glitter Grooming is a locally-owned pet grooming business in Rochester. In 2022, Glitter Grooming took advantage of FEDCO's training funds to send one of their employees to grooming school, demonstrating their commitment to professional development and quality service.",
      highlights: [
        "Used FEDCO training funds",
        "Professional grooming certification",
        "Committed to quality service"
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/10 via-background to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              We Help New and Existing Businesses
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              FEDCO is committed to helping small businesses succeed. Whether you're starting a new venture or growing
              an existing business, we provide the resources, guidance, and connections you need.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">Get Started Today</Button>
              </Link>
              <a href="#services">
                <Button size="lg" variant="outline">
                  Browse Resources
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24">
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
                    className="text-secondary hover:underline font-semibold"
                  >
                    ISBDC website
                  </a>. Click on, <span className="font-semibold">Let's Work Together</span> on the top right or call (574) 520-4126.
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
                    className="text-secondary hover:underline"
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
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Funding and Financial Support
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              You have options; <span className="font-semibold">especially</span> in Fulton County.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-secondary/20">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-secondary mb-2" />
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
                <Briefcase className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>SBA Loans</CardTitle>
                <CardDescription>
                  Small Business Administration supported loans. SBA does not actually make direct loans; instead, it provides loan guarantees to entrepreneurs, promising the bank/lender to pay back a certain percentage of your loan if you are unable to.
                  <br /><br />
                  <a 
                    href="https://www.sba.gov/funding-programs/loans/lender-match-connects-you-lenders" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary font-semibold hover:underline"
                  >
                    Click here to find the best lender for your needs.
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-secondary mb-2" />
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-card rounded-lg border">
              <div className="flex-shrink-0">
                <Image
                  src="/images/Amyheadshothead2Red2023.jpg"
                  alt="Amy Beechy, Director of Entrepreneurial Programs"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-primary mb-2">Contact</h3>
                <p className="text-muted-foreground mb-4">
                  For more information about small business assistance, please contact Amy Beechy, Director of Entrepreneurial Programs:
                </p>
                <div className="space-y-1">
                  <p className="text-foreground"><span className="font-semibold">Phone:</span> (574) 709-7955</p>
                  <p className="text-foreground">
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:amy@projectmattersllc.com" className="text-primary font-semibold hover:underline">
                      amy@projectmattersllc.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of BizGro Section */}
      <section id="stories" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Stories of BizGro
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              See how FEDCO has helped local entrepreneurs turn their dreams into thriving businesses.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {bizgroStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
                {/* Business Image */}
                <div className="relative h-48 w-full bg-muted">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <CardHeader className="flex-none">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl text-primary">{story.title}</CardTitle>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-2">Est. {story.yearStarted}</span>
                  </div>
                  <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium w-fit">
                    {story.industry}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 flex flex-col">
                  {/* Quote Block */}
                  <blockquote className="border-l-4 border-accent pl-4 py-2 bg-accent/5">
                    <p className="italic text-foreground text-base leading-relaxed">
                      "{story.quote}"
                    </p>
                    <footer className="text-sm text-muted-foreground mt-2 font-medium">
                      — {story.quotePerson}
                    </footer>
                  </blockquote>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {story.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Full Story */}
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    {story.story}
                  </p>

                  {/* Links */}
                  {(story.website || story.facebook || story.instagram || story.phone) && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      {story.website && (
                        <a 
                          href={story.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1.5 text-sm text-secondary hover:underline font-medium"
                        >
                          <Globe className="h-4 w-4" />
                          Website
                        </a>
                      )}
                      {story.facebook && (
                        <a 
                          href={story.facebook} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1.5 text-sm text-secondary hover:underline font-medium"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          Facebook
                        </a>
                      )}
                      {story.instagram && (
                        <a 
                          href={story.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1.5 text-sm text-secondary hover:underline font-medium"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          Instagram
                        </a>
                      )}
                      {story.phone && (
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          {story.phone}
                        </span>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Small business classes and counseling are part of the Business Assistance at FEDCO.
            </p>
            <p className="text-muted-foreground">
              BizGro is funded in part by a grant from{" "}
              <a href="https://www.flagstar.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                Flagstar® Bank
              </a>{" "}
              and the USDA.
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-accent">Sign up for Updates</CardTitle>
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
                    <Input id="email" type="email" placeholder="Email Address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cell">Cell #</Label>
                    <Input id="cell" type="tel" placeholder="Cell #" />
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
      <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Ready to Start or Grow Your Small Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Schedule a free consultation with our small business advisors to discuss your goals and explore available
            resources.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 border-white">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
