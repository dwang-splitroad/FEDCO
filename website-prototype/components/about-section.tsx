export function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance">
            IN THE MIDDLE OF EVERYWHERE
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              <span className="font-semibold text-primary">Fulton County</span> is centrally located between Chicago and
              Indianapolis. The region boasts a dedicated workforce, a vibrant agriculture industry and strong
              manufacturing base. Known for a friendly environment, outdoor recreational opportunities and rich history,
              Fulton County is ready to grow.
            </p>

            <p className="text-muted-foreground">
              Interested in relocating your business? Starting a business or expanding a business? FEDCO works closely
              with city/county government, schools, and local businesses to create an environment that supports success.
              We look forward to working with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
