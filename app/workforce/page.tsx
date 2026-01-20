import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function WorkforcePage() {
  const workforceData = [
    { county: "Starke", laborForce: "10,173", employed: "9,728", unemployed: "445", rate: "4.40%", rateYearAgo: "4.20%" },
    { county: "Marshall", laborForce: "24,098", employed: "23,284", unemployed: "814", rate: "3.40%", rateYearAgo: "3.20%" },
    { county: "Kosciusko", laborForce: "44,015", employed: "42,608", unemployed: "1,407", rate: "3.20%", rateYearAgo: "2.80%" },
    { county: "Pulaski", laborForce: "6,889", employed: "6,670", unemployed: "219", rate: "3.20%", rateYearAgo: "3.20%" },
    { county: "Fulton", laborForce: "10,344", employed: "10,031", unemployed: "313", rate: "3.00%", rateYearAgo: "3.30%", highlight: true },
    { county: "Cass", laborForce: "18,024", employed: "17,391", unemployed: "633", rate: "3.50%", rateYearAgo: "3.60%" },
    { county: "Miami", laborForce: "16,076", employed: "15,424", unemployed: "652", rate: "4.10%", rateYearAgo: "3.70%" },
    { county: "Wabash", laborForce: "14,945", employed: "14,432", unemployed: "513", rate: "3.40%", rateYearAgo: "3.60%" },
    { county: "REGION", laborForce: "144,564", employed: "139,568", unemployed: "4,996", rate: "3.50%", rateYearAgo: "3.30%", isTotal: true },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" /> {/* Spacer for fixed header */}

      {/* Workforce Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
                Workforce
              </h2>
              <p className="text-muted-foreground">
                <a 
                  href="https://www.in.gov/dwd/files/Indiana-LMA-June+2019+Labor+Market+Review.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Click here for a full Labor Market Review
                </a>{" "}
                by Indiana Workforce Development
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-accent hover:bg-accent">
                        <TableHead className="text-accent-foreground font-bold">County</TableHead>
                        <TableHead className="text-accent-foreground font-bold text-right">Labor Force</TableHead>
                        <TableHead className="text-accent-foreground font-bold text-right">Employed</TableHead>
                        <TableHead className="text-accent-foreground font-bold text-right">Unemployed</TableHead>
                        <TableHead className="text-accent-foreground font-bold text-right">Unemployment Rate</TableHead>
                        <TableHead className="text-accent-foreground font-bold text-right">Rate 1 Yr Ago</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {workforceData.map((row) => (
                        <TableRow 
                          key={row.county} 
                          className={`${row.highlight ? "bg-secondary/10 hover:bg-secondary/10" : row.isTotal ? "bg-muted font-semibold hover:bg-muted" : "hover:bg-transparent"}`}
                        >
                          <TableCell className={`font-medium ${row.highlight ? "text-secondary" : row.isTotal ? "text-primary" : "text-foreground"}`}>
                            {row.county}
                          </TableCell>
                          <TableCell className="text-right text-foreground">{row.laborForce}</TableCell>
                          <TableCell className="text-right text-foreground">{row.employed}</TableCell>
                          <TableCell className="text-right text-foreground">{row.unemployed}</TableCell>
                          <TableCell className={`text-right ${row.highlight ? "font-semibold text-secondary" : "text-foreground"}`}>
                            {row.rate}
                          </TableCell>
                          <TableCell className="text-right text-foreground">{row.rateYearAgo}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">3.00%</div>
                <p className="text-muted-foreground">Unemployment Rate</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">10,344</div>
                <p className="text-muted-foreground">Labor Force</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">10,031</div>
                <p className="text-muted-foreground">Employed</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Ready to Join Our Workforce?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Whether you're looking for employment opportunities or looking to hire, Fulton County has the workforce to support your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://www.in.gov/dwd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              Visit WorkOne Indiana
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Contact FEDCO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

