import Navbar from "@/components/Navbar";
import Image from "next/image";

const services = [
  {
    title: "Hardware & Accessories",
    description:
      "Professional installation of cabinet hardware, door hardware, bathroom accessories, curtain rods, blinds, and more.",
    category: "HOME HARDWARE",
  },
  {
    title: "Mounting & Display",
    description:
      "TVs, mirrors, artwork, shelves, and wall décor installed securely, level, and built to last.",
    category: "MOUNTING",
  },
  {
    title: "Storage & Organization",
    description:
      "Garage storage, closet shelving, overhead racks, wall organization, and custom storage solutions.",
    category: "ORGANIZATION",
  },
  {
    title: "Home Safety & Security",
    description:
      "Grab bars, child safety devices, door reinforcements, motion sensors, and home security upgrades.",
    category: "SAFETY",
  },
  {
    title: "Smart Home Setup",
    description:
      "Ring doorbells, smart locks, video doorbells, cameras, and smart home device installation.",
    category: "SMART HOME",
  },
  {
    title: "Furniture Assembly",
    description:
      "Furniture, shelving units, storage cabinets, and home products assembled quickly and correctly.",
    category: "ASSEMBLY",
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
    PROFESSIONAL HOME
    <br className="hidden sm:block" />
    INSTALLATIONS
  </span>
</h1>

    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300 sm:text-xl">
  Professional installation of the products you buy for your home from hardware
  and accessories to smart home devices, storage solutions, and furniture
  assembly.
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

      <div className="mt-14 lg:mt-16 rounded-3xl border border-[#d4af37]/40 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm lg:p-6 xl:p-6">
        <div className="text-center lg:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d4af37] sm:text-xs">
            SERVICE AREA
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white sm:text-[1.3rem]">
            Serving Middle Tennessee
          </h3>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            Coverage includes Williamson, Maury, and Davidson counties with reliable home installation across Middle Tennessee.
          </p>
          <div className="mt-6 grid gap-4 text-[0.72rem] leading-5 text-gray-200 sm:text-[0.8rem] lg:grid-cols-2 lg:gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  WILLIAMSON COUNTY
                </p>
                <p className="mt-0.5 text-gray-300">
                  Franklin • Brentwood • Nolensville • College Grove
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  MAURY COUNTY
                </p>
                <p className="mt-0.5 text-gray-300">
                  Spring Hill
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  DAVIDSON COUNTY
                </p>
                <p className="mt-0.5 text-gray-300">
                  Green Hills • Belle Meade • Forest Hills • Oak Hill
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                <p className="font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Service map</p>
                <p className="mt-2 text-[0.75rem] leading-5 text-gray-300">
                  Franklin and surrounding Middle Tennessee service areas.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
            <Image
              src="/franklin.png"
              alt="Franklin service area"
              width={1200}
              height={320}
              className="h-[200px] w-full object-cover sm:h-[220px]"
              priority
            />
          </div>
        </div>
      </div>

    </div>

    {/* Right Side */}
    <div className="flex justify-center lg:justify-end">
      <div className="flex w-full max-w-[360px] flex-col gap-4 sm:max-w-[420px] lg:max-w-[460px]">
        <div className="overflow-hidden rounded-[32px] bg-black shadow-2xl shadow-black/40">
          <Image
            src="/khs vanity.jpeg"
            alt="KHS vanity bathroom installation"
            width={1200}
            height={900}
            className="h-[380px] w-full object-cover sm:h-[440px] lg:h-[520px]"
            priority
          />
        </div>

        <div className="mt-6 rounded-[24px] border border-[#d4af37]/60 bg-[rgba(10,10,10,0.82)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6 lg:mt-8 lg:p-6 xl:p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
            <div className="overflow-hidden rounded-3xl bg-white/5">
              <Image
                src="/khs shower.jpeg"
                alt="KHS shower installation"
                width={600}
                height={900}
                className="h-[420px] w-full object-cover sm:h-[520px]"
                priority
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#d4af37]">
                  What we install
                </h3>
                <ul className="mt-5 space-y-2 text-sm text-gray-200 sm:text-base">
                  <li>• Hardware</li>
                  <li>• Mounting</li>
                  <li>• Storage</li>
                  <li>• Smart Home</li>
                  <li>• Home Safety</li>
                  <li>• Furniture Assembly</li>
                </ul>
              </div>
            </div>
          </div>
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
              King Home Services is a locally owned home installation company proudly serving Williamson County and surrounding communities. With more than 15 years of hands-on experience, I help homeowners professionally install hardware, accessories, smart home devices, storage solutions, and the finishing touches that make a house feel complete.
            </p>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              My goal is simple: show up, communicate clearly, do dependable work, and leave your home better than I found it.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden bg-black shadow-xl">
            <Image
              src="/khs deer.jpeg"
              alt="KHS deer bathroom installation"
              width={1200}
              height={700}
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              priority
            />
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