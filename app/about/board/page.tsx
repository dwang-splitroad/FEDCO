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
      <p className={`font-semibold text-lg ${highlight ? 'text-accent' : 'text-secondary'}`}>
        {name}{role ? `, ${role}` : ""}
      </p>
      <p className="text-muted-foreground italic">{org}</p>
    </div>
  )
}

export default function BoardPage() {
  const executiveBoard = [
    { name: "Jason Grube", role: "President", org: "Rochester Iron & Metal" },
    { name: "Andrew Horstman", role: "Vice President", org: "Fulton County REMC" },
    { name: "Brian Johnson", role: "Treasurer", org: "Smith, Sawyer & Smith" },
    { name: "Kathy Rans", role: "Secretary", org: "Fulton County Chamber of Commerce" },
  ]

  const directors = [
    { name: "Lauren Adley", role: "Board Attorney", org: "Peterson Waggoner & Perkins LLP" },
    { name: "Rennell Finke", org: "Akron" },
    { name: "Mike McCarter", org: "Kewanna" },
    { name: "Mark McCall", org: "Beacon Credit Union" },
    { name: "Randy Gundrum", org: "Fulton County Council" },
  ]

  const exOfficio = [
    { name: "Brian Goodman", org: "Modern Materials/Rochester City Council" },
    { name: "Randy Gundrum", org: "Fulton County Council" },
    { name: "Mark McCall", org: "Beacon Credit Union" },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="h-20" /> {/* Spacer for fixed header */}
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Board of Directors
            </h1>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Executive Board */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wide">
                Executive Board
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {executiveBoard.map((member) => (
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
              <div className="grid sm:grid-cols-2 gap-6">
                {directors.map((member) => (
                  <BoardMember 
                    key={member.name + member.org} 
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
              <div className="grid sm:grid-cols-2 gap-6">
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

