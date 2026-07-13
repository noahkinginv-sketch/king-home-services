export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold">
            👑 KING HOME SERVICES
          </h1>

          <p className="text-2xl mt-6 text-gray-300">
            Your first call for anything around the house.
          </p>

          <p className="mt-4 text-lg">
            Licensed • Insured • Serving Middle Tennessee
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400">
              Request Free Estimate
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Home Repairs",
            "Handyman Services",
            "Furniture Assembly",
            "Babyproofing",
            "Property Maintenance",
            "Home Maintenance Checkups",
          ].map((service) => (
            <div
              key={service}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-semibold">
                {service}
              </h3>

              <p className="mt-4 text-gray-600">
                Professional, reliable, and quality workmanship you can trust.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}