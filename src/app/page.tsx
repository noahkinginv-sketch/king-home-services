import Image from "next/image";

const services = [
  "Home Repairs",
  "Handyman Services",
  "Furniture Assembly",
  "Baby Proofing",
  "Property Maintenance",
  "Home Maintenance Checkups",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-gray-900">
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.2),_transparent_40%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#d4af37] bg-white shadow-lg">
                <Image
                  src="/logo-khs.png"
                  alt="King Home Services logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">
                  Premium Home Improvement
                </p>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                  King Home Services
                </h1>
              </div>
            </div>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Licensed & Insured Handyman Services
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-300 sm:text-xl">
              Reliable repairs, installations, and home maintenance for homes across Middle Tennessee.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:931-996-1635"
                className="rounded-full bg-[#d4af37] px-7 py-3 text-center font-semibold text-black transition hover:bg-[#f0c95c]"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white px-7 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Request a Free Estimate
              </a>
            </div>
          </div>

          <div className="w-full max-w-md rounded-3xl border border-[#d4af37]/40 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Why homeowners choose us
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-200 sm:text-base">
              <li>• Prompt, dependable service</li>
              <li>• Skilled craftsmanship for everyday repairs</li>
              <li>• Friendly support from start to finish</li>
              <li>• Clear communication and honest recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8860b]">
            Services
          </p>
          <h3 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Quality solutions for every project
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 h-12 w-12 rounded-full bg-[#d4af37]/15" />
              <h4 className="text-xl font-semibold text-gray-900">{service}</h4>
              <p className="mt-3 text-gray-600">
                Dependable craftsmanship and careful attention to detail for your home.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8860b]">
              About
            </p>
            <h3 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Serving Middle Tennessee with dependable workmanship
            </h3>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              King Home Services is a trusted local provider of handyman support for homes throughout Middle Tennessee.
              From quick fixes to regular maintenance, we bring dependable service and a commitment to quality to every project.
            </p>
          </div>

          <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
            <h4 className="text-2xl font-semibold">Book your next repair</h4>
            <p className="mt-4 text-gray-300">
              Fast scheduling, clear communication, and quality service you can count on.
            </p>
            <a
              href="tel:931-996-1635"
              className="mt-6 inline-flex rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-black transition hover:bg-[#f0c95c]"
            >
              Call (931) 996-1635
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-[#d4af37]/40 bg-[#fff8e1] p-8 text-center shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8860b]">
            Contact
          </p>
          <h3 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Let’s talk about your next project.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Reach out for dependable handyman support and a free estimate tailored to your home.
          </p>
          <a
            href="tel:931-996-1635"
            className="mt-8 inline-flex rounded-full bg-black px-7 py-3 font-semibold text-white transition hover:bg-[#1b1b1b]"
          >
            Phone: (931) 996-1635
          </a>
        </div>
      </section>
    </main>
  );
}