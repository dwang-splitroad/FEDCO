export function AboutSection() {
  return (
    <>
      {/* Heading below hero image */}
      <section className="bg-gray-100 py-8 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-gray-800">
          IN THE MIDDLE OF EVERYWHERE
        </h1>
      </section>

      {/* About Section below heading */}
      <section className="bg-gray-100 py-12 px-4 md:px-8 text-center">
        <div className="container max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
            <span className="font-bold">Fulton County</span> is centrally located between Chicago and Indianapolis. 
            The region boasts a dedicated workforce, a vibrant agriculture industry and strong manufacturing base. 
            Known for a friendly environment, outdoor recreational opportunities and rich history, Fulton County is ready to grow.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Interested in relocating your business? Starting a business or expanding a business? 
            FEDCO works closely with city/county government, schools, and local businesses to create an environment that supports success. 
            We look forward to working with you!
          </p>
        </div>
      </section>
    </>
  )
}
