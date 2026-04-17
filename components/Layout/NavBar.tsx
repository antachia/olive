import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="absolute top-0 z-10 flex w-full items-center justify-between px-6 py-6 text-white sm:px-10 md:px-14 md:py-8">
      {/* Logo — home */}
      <Link href="/">
        <Image
          src="/images/logo/white.webp"
          alt="Antachia Gold"
          width={120}
          height={50}
          className="h-auto w-20 sm:w-[100px] md:w-[120px]"
          priority
        />
      </Link>

      {/* Center Nav Links */}
      <ul className="hidden items-center gap-0 font-garamond-lt-narrow text-[13px] tracking-wide sm:flex md:text-2xl">
        <li className="text-white/80">|</li>
        <li>
          <Link href="/about" className="px-4 transition-opacity duration-200 hover:opacity-70 md:px-6">
            About
          </Link>
        </li>
        <li className="text-white/80">|</li>
        <li>
          <Link href="/products" className="px-4 transition-opacity duration-200 hover:opacity-70 md:px-6">
            Products
          </Link>
        </li>
        <li className="text-white/80">|</li>
        <li>
          <Link href="/supply" className="px-4 transition-opacity duration-200 hover:opacity-70 md:px-6">
            Supply
          </Link>
        </li>
        <li className="text-white/80">|</li>
      </ul>

      {/* Request Sample Button */}
      <Link
        href="/supply"
        className="rounded-md border border-neonGreen px-5 py-2 font-garamond-lt-narrow tracking-wide transition-colors duration-500 hover:bg-neonGreen hover:text-black md:px-4"
      >
        Request Sample
      </Link>
    </nav>
  );
};

export default NavBar;
