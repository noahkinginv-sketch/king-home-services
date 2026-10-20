import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e5dc] bg-white/95 shadow-[0_4px_18px_rgba(41,42,39,0.045)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-3 px-4 py-2.5 sm:gap-x-6 sm:px-8 sm:py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-4">
          <Image
            src="/logo-khs.png"
            alt="King Home Services"
            width={56}
            height={56}
            className="h-10 w-auto shrink-0 object-contain sm:h-[52px]"
          />
          <span className="truncate text-[11px] font-semibold uppercase tracking-[0.1em] text-[#292a27] sm:text-lg sm:tracking-[0.16em]">
            King Home Services
          </span>
        </Link>

        <nav className="order-3 flex w-full items-center justify-between gap-4 overflow-x-auto border-t border-[#e9e5dc] pt-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#55564f] md:order-none md:w-auto md:justify-start md:gap-6 md:overflow-visible md:border-0 md:pt-0 md:text-xs md:tracking-[0.12em] lg:gap-9">
          <a href="#solutions" className="transition-colors hover:text-[#9b7418]">
            Services
          </a>
          <a href="#projects" className="transition-colors hover:text-[#9b7418]">
            Projects
          </a>
          <a href="#about" className="transition-colors hover:text-[#9b7418]">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-[#9b7418]">
            Contact
          </a>
        </nav>

        <a
          href="#estimate-form"
          className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-[#b68b25] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#9b7418] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b7418] sm:px-6 sm:py-2.5 sm:text-sm"
        >
          Free Estimate
        </a>
      </div>
    </header>
  );
}