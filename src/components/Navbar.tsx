import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo-khs.png"
            alt="King Home Services"
            width={50}
            height={50}
            className="rounded-full bg-white p-1"
          />

          <div>
  <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">
    Premium Home Improvement
  </p>

  <h1 className="text-3xl font-extrabold text-white leading-none mt-1">
    King Home Services
  </h1>
</div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white">
          <a href="#solutions" className="hover:text-[#d4af37] transition">
            Solutions
          </a>

          <a href="#about" className="hover:text-[#d4af37] transition">
            About
          </a>

          <a href="#contact" className="hover:text-[#d4af37] transition">
            Contact
          </a>
        </nav>

        {/* Call Button */}
        <a
          href="tel:9319961635"
          className="rounded-full bg-[#d4af37] px-5 py-2 font-semibold text-black hover:bg-[#f0c95c] transition"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}