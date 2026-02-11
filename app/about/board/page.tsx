import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface BoardMemberProps {
  name: string
  role?: string
  org: string
  highlight?: boolean
}

function BoardMember({ name, role, org, highlight = false }: BoardMemberProps) {
  return (
    <div>
      <p className={`font-semibold text-base md:text-lg ${highlight ? 'text-accent' : 'text-secondary'}`}>
        {name}{role ? `, ${role}` : ""}
      </p>
      <p className="text-sm md:text-base text-muted-foreground italic">{org}</p>
    </div>
  )
}

export default function BoardPage() {
  const officers = [
    { name: "Mark McCall", role: "President", org: "" },
    { name: "Renell Finke", role: "Vice President", org: "" },
    { name: "Michelle Million", role: "Treasurer", org: "" },
  ]

  const directors = [
    { name: "Brian Goodman", org: "Modern Materials" },
    { name: "Lisa Reffett", org: "Redline Equipment" },
    { name: "Tiffany Lukens", org: "Fulton County Chamber of Commerce" },
    { name: "Ted Waggoner", org: "Retired" },
    { name: "Jana Vance", org: "Rochester School District" },
    { name: "Angie Miller", org: "Caston School District" },
    { name: "Orville Haney", org: "Homes, Land & Lakes Realty" },
    { name: "Chris Hoffman", org: "Machine Casting Specialities" },
    { name: "Alan Fisher", org: "Woodlawn Hospital" },
  ]

  const boardAttorney = [
    { name: "Lauren Adley", org: "Perkins-Adley Attorneys at Law" },
  ]

  const exOfficio = [
    { name: "Andrew Horstman", role: "Immediate Past President", org: "FCREMC" },
    { name: "Randy Gundrum", org: "Fulton County Council" },
    { name: "Evan Gottschalk", org: "City of Rochester" },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" /> {/* Spacer for fixed header */}

      {/* Board Members Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Officers */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wide">
                Officers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {officers.map((member) => (
                  <BoardMember 
                    key={member.name} 
                    {...member} 
                    highlight={true}
                  />
                ))}
              </div>
            </div>

            {/* Directors */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wide">
                Directors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {directors.map((member) => (
                  <BoardMember 
                    key={member.name + member.org} 
                    {...member} 
                  />
                ))}
              </div>
            </div>

            {/* Board Attorney */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wide">
                Board Attorney
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {boardAttorney.map((member) => (
                  <BoardMember 
                    key={member.name} 
                    {...member} 
                  />
                ))}
              </div>
            </div>

            {/* Ex Officio */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wide">
                Ex Officio
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {exOfficio.map((member, index) => (
                  <BoardMember 
                    key={member.name + member.org + index} 
                    {...member} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

