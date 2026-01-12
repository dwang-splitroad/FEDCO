export function ValueProps() {
  const props = [
    {
      title: "Strategic Location",
      description: "Positioned between Chicago and Indianapolis with excellent transportation access.",
    },
    {
      title: "Skilled Workforce",
      description: "Access to a dedicated, reliable workforce with strong work ethic.",
    },
    {
      title: "Quality of Life",
      description: "Affordable living costs, excellent schools, and abundant recreational opportunities.",
    },
    {
      title: "Pro-Business Environment",
      description: "Streamlined processes and collaborative relationships to support business growth.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#273776] mb-4">
            Why Choose Fulton County?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our community offers unique advantages that make it an ideal location for businesses
            to establish and expand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {props.map((prop, index) => (
            <div key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#273776] mb-3">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
