import Navbar from "@/components/Navbar";
import EstimateRequestForm from "@/components/EstimateRequestForm";
import ProjectsGallery from "@/components/ProjectsGallery";
import Image from "next/image";

const services = [
  {
    title: "General Handyman & Home Repairs",
    icon: "repair",
    description:
      "Dependable handyman services for everyday home repairs, maintenance, adjustments, and improvements. From fixing small issues to completing those unfinished projects around your home, King Home Services provides professional solutions with attention to detail.",
    items: [
      "General household repairs",
      "Drywall repair and patching",
      "Caulking and sealing",
      "Weatherstripping",
      "Minor home improvements",
      "Home maintenance",
      "Baby-proofing installations",
      "Senior safety upgrades",
    ],
  },
  {
    title: "Carpentry & Woodwork",
    icon: "carpentry",
    description:
      "Professional carpentry services for home improvements, repairs, light nonstructural framing, woodwork, and custom installation projects.",
    items: [
      "Baseboards and trim",
      "Interior finish carpentry",
      "Light framing",
      "Custom shelving",
      "Cabinet repairs",
      "Door and window trim",
      "Decorative woodwork",
      "Wood repairs",
    ],
  },
  {
    title: "Plumbing",
    icon: "plumbing",
    items: [
      "Faucet installations",
      "Toilet repairs and replacements",
      "Sink installations",
      "Showerhead replacements",
      "Drain and trap repairs",
      "Plumbing fixture replacements",
    ],
  },
  {
    title: "Electrical & Lighting",
    icon: "lighting",
    items: [
      "Light fixture installations",
      "Ceiling fan installations",
      "Switch and outlet replacements",
      "Dimmer switches",
      "Smart home lighting",
      "Lighting upgrades",
    ],
  },
  {
    title: "TV Mounting & Installations",
    icon: "mounting",
    items: [
      "TV wall mounting",
      "Mirror installation",
      "Picture and artwork hanging",
      "Floating shelves",
      "Curtain rods",
      "Window blinds",
      "Decorative wall installations",
    ],
  },
  {
    title: "Furniture Assembly",
    icon: "furniture",
    items: [
      "Bedroom furniture",
      "Desks and office furniture",
      "Entertainment centers",
      "Bookcases",
      "Home gym equipment",
      "Nursery furniture",
      "Outdoor furniture",
    ],
  },
  {
    title: "Doors, Locks & Hardware",
    icon: "hardware",
    items: [
      "Interior door repairs",
      "Door handle replacements",
      "Deadbolt installations",
      "Smart locks",
      "Cabinet knobs and pulls",
      "Door hinges and adjustments",
      "Bathroom hardware",
    ],
  },
  {
    title: "Outdoor Services",
    icon: "outdoor",
    items: [
      "Deck repairs",
      "Exterior carpentry",
      "Exterior maintenance",
      "Minor exterior repairs",
    ],
  },
  {
    title: "Property Maintenance",
    icon: "property",
    items: [
      "Rental property maintenance",
      "Realtor punch lists",
      "Move-in and move-out repairs",
      "Pre-listing home improvements",
      "Builder punch-list services",
      "Seasonal home maintenance",
      "Property maintenance checkups",
    ],
  },
] as const;

type ServiceIconName = (typeof services)[number]["icon"];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      {...commonProps}
    >
      {name === "repair" && (
        <>
          <path d="m14.5 6.5 3 3M4 20l8.7-8.7M14 4.5a5 5 0 0 0 5.5 6.6L13 17.6 8.4 13l6.5-6.5A5 5 0 0 0 14 4.5Z" />
          <path d="m4 20 3.2-.8L4.8 16 4 20Z" />
        </>
      )}
      {name === "carpentry" && (
        <>
          <path d="M4 20h16M6 20V8l6-4 6 4v12M9 20v-6h6v6M4 8h16M9 10h.01M15 10h.01" />
        </>
      )}
      {name === "plumbing" && (
        <>
          <path d="M7 4v5a5 5 0 0 0 10 0V7M12 14v6M9 20h6M5 4h4M15 7h4" />
          <path d="M17 4v3" />
        </>
      )}
      {name === "lighting" && (
        <>
          <path d="M9 18h6M10 21h4M8.5 14.5a6 6 0 1 1 7 0c-.7.5-1.2 1.3-1.3 2.2h-4.4c-.1-.9-.6-1.7-1.3-2.2Z" />
          <path d="M12 2v2M4.9 4.9l1.4 1.4M19.1 4.9l-1.4 1.4" />
        </>
      )}
      {name === "mounting" && (
        <>
          <rect x="4" y="4" width="16" height="12" rx="1.5" />
          <path d="M9 20h6M12 16v4M8 8h8M8 11h5" />
        </>
      )}
      {name === "furniture" && (
        <>
          <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M4 11h16v6H4zM6 17v3M18 17v3M4 11v-2M20 11V9" />
        </>
      )}
      {name === "hardware" && (
        <>
          <rect x="5" y="3" width="14" height="18" rx="1.5" />
          <path d="M12 7v5M12 15h.01M8 3v2M16 3v2" />
        </>
      )}
      {name === "outdoor" && (
        <>
          <path d="M4 20h16M6 20V9l6-5 6 5v11M9 20v-6h6v6M3 9l9-7 9 7" />
          <path d="M18 4h2v4" />
        </>
      )}
      {name === "property" && (
        <>
          <path d="M4 20h16M6 20V7h12v13M9 10h2M14 10h2M9 14h2M14 14h2M10 20v-3h4v3M8 4h8v3" />
        </>
      )}
    </svg>
  );
}

const projects = [
  {
    image: "/IMG_9974.JPEG",
    alt: "Flat-screen television mounted on an interior wall",
    category: "TV MOUNTING",
    title: "TV Wall Mounting",
    description:
      "A flat-screen television is wall-mounted in a clean, centered position.",
  },
  {
    image: "/IMG_9947.JPEG",
    alt: "Assembled wooden bed frame in a bedroom",
    category: "FURNITURE ASSEMBLY",
    title: "Bed Frame Assembly",
    description:
      "A wooden bed frame is assembled and set up in a bedroom.",
  },
  {
    image: "/IMG_9948.JPEG",
    alt: "Pendant light fixtures installed along an entry hall",
    category: "LIGHTING",
    title: "Pendant Light Installation",
    description:
      "A coordinated row of pendant fixtures is installed along an entry hall.",
  },
  {
    image: "/IMG_9868.JPEG",
    alt: "Bathroom mirror, plumbing fixtures, and hardware installed above a vanity",
    category: "BATHROOM FIXTURES",
    title: "Bathroom Fixture & Hardware Installation",
    description:
      "Bathroom mirror, plumbing fixture, and hardware installations completed with attention to detail and a professional finish.",
  },
  {
    image: "/IMG_9468.JPEG",
    alt: "Timber steps with handrails leading to a covered deck",
    category: "OUTDOOR CARPENTRY",
    title: "Outdoor Steps",
    description:
      "Timber steps provide access from the yard to a covered deck.",
  },
  {
    image: "/khs-deer.jpeg",
    alt: "Mounted deer display on a finished interior wall",
    category: "HOME FINISHING",
    title: "Deer Wall Display",
    description:
      "A mounted deer display creates a focal point on a finished interior wall.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#292a27]">
      <Navbar />

      <section className="border-b border-[#e9e5dc] bg-[#f4f1e9]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 sm:gap-10 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <h1 className="max-w-4xl text-5xl font-bold uppercase leading-[0.98] tracking-[-0.045em] text-[#242522] sm:text-6xl lg:text-7xl">
              King Home Services
            </h1>
            <div className="mt-5 h-px w-16 bg-[#b68b25]" />
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5b5c55] sm:text-xl sm:leading-8">
              Professional handyman services, home repairs, installations, and
              property maintenance throughout Williamson County and surrounding
              Middle Tennessee communities.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium tracking-[0.08em] text-[#68675f] sm:gap-x-5 sm:text-sm">
              <span>Insured</span>
              <span aria-hidden="true" className="text-[#b68b25]">
                •
              </span>
              <span>Locally Owned</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#estimate-form"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#b68b25] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#9b7418] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b7418]"
              >
                Request a Free Estimate
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/khs-vanity.jpeg"
              alt="Completed bathroom with installed mirrors, light fixtures, bathroom hardware, and cabinet pulls"
              width={1152}
              height={1536}
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 75vw, 100vw"
              className="h-auto max-h-[520px] w-full max-w-[420px] rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="scroll-mt-24 border-y border-[#e7e2d7] bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-11">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7418] sm:text-sm">
              King Home Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#292a27] sm:text-4xl">
              Our Handyman &amp; Home Services
            </h2>
            <p className="mt-4 text-base leading-7 text-[#65665f] sm:text-lg sm:leading-8">
              From everyday home repairs to professional installations and
              property maintenance, King Home Services provides dependable
              solutions for your home.
            </p>
          </div>

          <div className="grid items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <details
                key={service.title}
                className="group overflow-hidden rounded-xl border border-[#e7e2d7] bg-[#fffefa] shadow-[0_3px_12px_rgba(41,42,39,0.035)] open:border-[#c6a24b]/70 open:shadow-[0_8px_24px_rgba(41,42,39,0.07)]"
              >
                <summary className="flex min-h-[76px] cursor-pointer list-none items-center gap-3 px-4 py-4 outline-none transition-colors hover:bg-[#faf7ef] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#9b7418] [&::-webkit-details-marker]:hidden sm:px-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3eddd] text-[#806014]">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-bold leading-snug text-[#292a27] sm:text-base">
                      {service.title}
                    </span>
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-[#8b6917] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  >
                    <path
                      d="M10 4v12M4 10h12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </summary>
                <div className="service-disclosure border-t border-[#ece7dc] px-4 pb-4 pt-3 sm:px-5">
                  {"description" in service && (
                    <p className="mb-3 text-sm leading-6 text-[#55564f]">
                      {service.description}
                    </p>
                  )}
                  <ul className="grid gap-x-4 gap-y-2 text-sm leading-5 text-[#55564f] sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden="true" className="text-[#a68125]">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 border-y border-[#e9e5dc] bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7418] sm:text-sm">
                Project Gallery
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#292a27] sm:text-4xl">
                Thoughtful work, made for real homes
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#65665f]">
              A closer look at details and improvements from King Home Services.
            </p>
          </div>

          <ProjectsGallery projects={projects} />
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-y border-[#e9e5dc] bg-[#faf9f6] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7418] sm:text-sm">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#292a27] sm:text-4xl">
              About King Home Services
            </h2>
            <div className="mt-5 h-px w-14 bg-[#c6a24b]" />
            <p className="mt-5 text-lg leading-8 text-[#5b5c55]">
              King Home Services provides dependable home repairs, professional
              installations, and property maintenance with a focus on quality
              workmanship, attention to detail, and treating every home with
              respect.
            </p>
          </div>
        </div>
      </section>

      <section
        id="service-areas"
        className="scroll-mt-24 border-b border-[#e9e5dc] bg-white py-12 sm:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#292a27] sm:text-3xl">
            Proudly Serving
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2.5 text-sm leading-6 text-[#3f403b] sm:grid-cols-3 sm:gap-x-8 sm:text-base lg:grid-cols-4">
            {[
              "Franklin",
              "Brentwood",
              "Fairview",
              "Leiper's Fork",
              "Thompson's Station",
              "Nolensville",
              "College Grove",
              "Spring Hill",
              "Belle Meade",
              "Green Hills",
              "Forest Hills",
              "Oak Hill",
              "Bellevue",
              "West Meade",
            ].map((location) => (
              <li key={location} className="flex items-baseline gap-2">
                <span aria-hidden="true" className="text-[#b68b25]">
                  •
                </span>
                {location}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-[#e9e5dc] bg-[#faf9f6] py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7418] sm:text-sm">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#292a27] sm:text-4xl">
              Contact King Home Services
            </h2>
            <p className="mt-4 leading-7 text-[#65665f]">
              Have a project in mind? Get in touch by phone, email, or Facebook,
              or request a free estimate.
            </p>

            <dl className="mt-7 space-y-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77776f]">
                  Phone
                </dt>
                <dd className="mt-1 font-medium text-[#292a27]">
                  <a
                    href="tel:+19319961635"
                    className="transition-colors hover:text-[#9b7418]"
                  >
                    (931) 996-1635
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77776f]">
                  Business Email
                </dt>
                <dd className="mt-1 break-words font-medium text-[#292a27]">
                  <a
                    href="mailto:info@kinghomeservicestn.com"
                    className="transition-colors hover:text-[#9b7418]"
                  >
                    info@kinghomeservicestn.com
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-7 grid max-w-md grid-cols-2 gap-3">
              <a
                href="tel:+19319961635"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#292a27] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#42433e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b7418]"
              >
                Call Us
              </a>
              <a
                href="sms:+19319961635"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#c8a64c] bg-white px-4 py-2.5 text-sm font-semibold text-[#76590f] transition-colors hover:bg-[#fffdf7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b7418]"
              >
                Text Us
              </a>
              <a
                href="mailto:info@kinghomeservicestn.com"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#c8a64c] bg-white px-4 py-2.5 text-sm font-semibold text-[#76590f] transition-colors hover:bg-[#fffdf7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b7418]"
              >
                Email Us
              </a>
              <a
                href="https://www.facebook.com/Kinghomeservicestn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#c8a64c] bg-white px-4 py-2.5 text-sm font-semibold text-[#76590f] transition-colors hover:bg-[#fffdf7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b7418]"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:border-l lg:border-[#e3ddce] lg:pl-10">
            <EstimateRequestForm />
          </div>
        </div>
      </section>
    </main>
  );
}
