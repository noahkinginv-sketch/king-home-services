import Navbar from "@/components/Navbar";
import Image from "next/image";

const services = [
  {
    title: "A Safer Home for Your Baby",
    description:
      "Baby gates, cabinet locks, furniture anchoring, outlet protection, and room-by-room safety checks.",
    category: "BABY SAFETY",
  },
  {
    title: "Safer, Easier Living for Seniors",
    description:
      "Grab bars, handrails, trip-hazard fixes, improved lighting, and practical accessibility upgrades.",
    category: "SENIOR SAFETY",
  },
  {
    title: "A Home That Finally Feels Finished",
    description:
      "Shelves, curtains, artwork, TVs, fixtures, and lingering projects completed properly.",
    category: "HOME FINISHING",
  },
  {
    title: "More Space, Less Clutter",
    description:
      "Storage systems, shelving, furniture assembly, wall organization, and practical space-saving solutions.",
    category: "ORGANIZATION",
  },
  {
    title: "Repairs Before They Become Bigger Problems",
    description:
      "Minor damage, loose hardware, sticking doors, drywall issues, and everyday home repairs handled early.",
    category: "PREVENTIVE REPAIRS",
  },
  {
    title: "Move-In Ready Without the Headache",
    description:
      "Furniture assembly, wall installations, safety updates, punch-list repairs, and final setup for a new home.",
    category: "MOVE-IN SUPPORT",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-gray-900">
      <Navbar />
  <section className="relative overflow-hidden bg-black text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),_transparent_45%)]" />

  <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 sm:py-24 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:px-8 lg:py-28 xl:py-32">

    {/* Left Side */}
    <div className="max-w-2xl lg:col-span-1 lg:row-span-2">

      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-[#d4af37]">
        Licensed • Insured • Locally Owned
      </p>

      <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
        <span className="block">King Home Services</span>
        <span className="mt-4 block text-lg font-semibold uppercase tracking-[0.24em] text-gray-200 sm:text-xl lg:text-2xl">
          Honest Handyman Services
          <br className="hidden sm:block" />
          Done Right.
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300 sm:text-xl">
        Repairs, installations, furniture assembly, baby proofing,
        property maintenance, and home improvement throughout
        Middle Tennessee.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="tel:9319961635"
          className="rounded-full bg-[#d4af37] px-8 py-3 font-semibold text-black hover:opacity-90"
        >
          Call Now
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-black"
        >
          Free Estimate
        </a>
      </div>

      <div className="mt-10 rounded-3xl border border-[#d4af37]/40 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm lg:h-[260px] lg:p-6 xl:p-6">
        <div className="text-center lg:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4af37] sm:text-xs">
            SERVICE AREA
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white sm:text-[1.3rem]">
            Serving Middle Tennessee
          </h3>
          <div className="mt-3 grid gap-3 text-[0.72rem] leading-5 text-gray-200 sm:text-[0.8rem] lg:grid-cols-2 lg:gap-4">
            <div className="space-y-2">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  HICKMAN COUNTY
                </p>
                <p className="mt-0.5 text-gray-300">Centerville • Bon Aqua • Nunnelly</p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  DICKSON COUNTY
                </p>
                <p className="mt-0.5 text-gray-300">Dickson • Burns • White Bluff</p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  MAURY COUNTY
                </p>
                <p className="mt-0.5 text-gray-300">Columbia • Spring Hill</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  WILLIAMSON COUNTY
                </p>
                <p className="mt-0.5 text-gray-300">Franklin • Brentwood • Fairview • Thompson’s Station • Leiper’s Fork</p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  DAVIDSON COUNTY
                </p>
                <p className="mt-0.5 text-gray-300">Nashville</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Right Side */}
    <div className="flex justify-center lg:justify-end">
      <div className="flex w-full max-w-[360px] flex-col gap-4 sm:max-w-[420px] lg:max-w-[460px]">
        <div className="rounded-[24px] border border-[#d4af37]/60 bg-[rgba(10,10,10,0.82)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6 lg:p-7 xl:p-8">
          <div className="flex justify-center">
            <Image
              src="/logo-khs.png"
              alt="King Home Services"
              width={560}
              height={560}
              className="w-[220px] sm:w-[280px] lg:w-[240px] xl:w-[260px]"
            />
          </div>

          <div className="mt-4 text-center lg:mt-5">
            <p className="text-lg font-semibold tracking-[0.35em] text-[#d4af37] sm:text-xl">
              KING HOME SERVICES
            </p>
            <p className="mt-2 text-base font-medium text-white/90 sm:text-lg lg:mt-3">
              Professional Handyman Services
            </p>

            <div className="mt-4 space-y-2 text-sm text-gray-200 sm:text-base lg:mt-5">
              <p>✓ Honest Pricing</p>
              <p>✓ Reliable Communication</p>
              <p>✓ Quality Craftsmanship</p>
              <p>✓ Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#d4af37]/60 bg-[rgba(10,10,10,0.82)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6 lg:h-[260px] lg:p-6 xl:p-6">
          <h3 className="mb-4 text-lg font-semibold text-[#d4af37]">
            POPULAR SERVICES
          </h3>

          <ul className="space-y-2 text-sm text-gray-200 sm:text-base">
            <li>• Home Repairs</li>
            <li>• Furniture Assembly</li>
            <li>• TV Mounting & Wall Installations</li>
            <li>• Baby Proofing & Home Safety</li>
            <li>• Senior Safety Upgrades</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8860b]">
            SOLUTIONS
          </p>
          <h3 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Solutions Built Around Your Home
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            From safer spaces to finished projects, we help make your home work better for the people living in it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-200 lg:hover:-translate-y-1 lg:hover:shadow-lg"
            >
              <div className="mb-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#b8860b]">
                  {service.category}
                </p>
                <div className="mt-2 h-px w-12 bg-[#d4af37]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8860b]">
              ABOUT
            </p>
            <h3 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Local experience you can feel good about hiring
            </h3>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              King Home Services is a locally owned handyman business serving Middle Tennessee. With more than 15 years of hands-on experience, I help homeowners with repairs, installations, safety upgrades, and the projects that keep getting pushed down the list.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              My goal is simple: show up, communicate clearly, do dependable work, and leave your home better than I found it.
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

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:9319961635"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3 font-semibold text-white transition hover:bg-[#1b1b1b]"
            >
              Call (931) 996-1635
            </a>
            <a
              href="sms:9319961635"
              className="inline-flex items-center justify-center rounded-full border border-[#d4af37] bg-white px-7 py-3 font-semibold text-[#b8860b] transition hover:bg-[#fdf2c7]"
            >
              Text Us
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-[#d4af37]/35 bg-white/80 p-5 text-left shadow-sm sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#b8860b]">
              Facebook
            </p>
            <h4 className="mt-2 text-lg font-semibold text-gray-900">
              Follow King Home Services on Facebook
            </h4>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              See recent projects, updates, and local service announcements.
            </p>
            <a
              href="https://www.facebook.com/Kinghomeservicestn"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-[#d4af37] px-5 py-2.5 text-sm font-semibold text-[#b8860b] transition hover:bg-[#d4af37] hover:text-black"
            >
              Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}