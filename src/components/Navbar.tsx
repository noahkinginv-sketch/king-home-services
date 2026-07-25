import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d4af37]/20 bg-slate-950/80 backdrop-blur-sm shadow-sm shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 sm:px-8 sm:py-4">
        <a href="/" className="flex items-center gap-4">
          <Image
            src="/logo-khs.png"
            alt="King Home Services"
            width={56}
            height={56}
            className="h-[52px] w-auto object-contain"
          />
          <span className="text-lg font-semibold uppercase tracking-[0.18em] text-white sm:text-xl">
            King Home Services
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] text-white/85 md:flex lg:gap-10">
          <a href="#solutions" className="transition duration-200 ease-out hover:text-[#d4af37] hover:opacity-100">
            Services
          </a>
          <a href="#projects" className="transition duration-200 ease-out hover:text-[#d4af37] hover:opacity-100">
            Projects
          </a>
          <a href="#about" className="transition duration-200 ease-out hover:text-[#d4af37] hover:opacity-100">
            About
          </a>
          <a href="#contact" className="transition duration-200 ease-out hover:text-[#d4af37] hover:opacity-100">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-2.5 text-sm font-semibold text-black shadow-[0_14px_36px_rgba(212,175,55,0.18)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#e0b73f]"
        >
          Free Estimate
        </a>
      </div>
    </header>
  );
}