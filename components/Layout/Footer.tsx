import Image from "next/image"

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/antachiagold?igsh=MXBrZ3NmZ2YxNWU3aQ%3D%3D&utm_source=qr" },
  { name: "TikTok", href: "https://www.tiktok.com/@antachia?_r=1&_t=ZS-95YRW4nB7Lg" },
  { name: "Facebook", href: "https://www.facebook.com/share/1CTtCNupEu/?mibextid=wwXIfr" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/antachia-gold-344838403" },
]

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white z-50 bg-transparent">
      {/* Background image — 90% bottom-aligned, top 10% stays black to reveal image curve */}
      <div className="absolute inset-x-0 bottom-0 h-[120%]">
        <Image
          src="/images/landing/Footer-Image.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Wax seal / stamp — top center */}
      <div className="relative z-10 flex justify-center pt-6">
        <Image
          src="/images/landing/stamp.webp"
          alt="Antachia Gold stamp"
          width={180}
          height={180}
          className="h-[110px] w-[110px] object-contain sm:h-[140px] sm:w-[140px] md:h-[170px] md:w-[170px] lg:h-[200px] lg:w-[200px]"
        />
      </div>

      {/* Main content grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-8 pt-12 pb-8 sm:px-12 md:grid-cols-3 md:gap-16 md:px-16 md:pt-16 md:pb-12">
        {/* Left — Logo + Newsletter */}
        <div className="flex flex-col items-start gap-8">
          <Image
            src="/images/landing/SVG/greenLogo.svg"
            alt="Antachia logo"
            width={90}
            height={90}
            className="h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] md:h-[90px] md:w-[90px]"
          />

          <div className="w-full max-w-[320px]">
            <p className="mb-4 font-garamond-lt-narrow text-sm uppercase tracking-widest text-white sm:text-base md:text-lg">
              Subscribe to Newsletter
            </p>
            <div className="flex items-center border-b border-white/60 pb-2">
              <span className="w-full font-garamond-lt-narrow text-sm uppercase tracking-widest text-white/70 sm:text-base md:text-lg">
                Email
              </span>
              <a
                href="/supply"
                className="flex items-center gap-2 font-garamond-lt-narrow text-sm uppercase tracking-widest text-neonGreen transition-opacity duration-200 hover:opacity-80 sm:text-base md:text-lg"
              >
                Go
                <span aria-hidden>&#9654;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Center — Contact info */}
        <div className="flex flex-col items-start gap-6 md:items-center">
          <div className="md:text-center">
            <p className="font-garamond-lt-narrow text-sm uppercase tracking-widest text-white sm:text-base md:text-lg">
              Phone
            </p>
            <a
              href="tel:+0"
              className="font-garamond-lt-narrow text-sm uppercase tracking-widest text-white/90 transition-opacity duration-200 hover:opacity-70 sm:text-base md:text-lg"
            >
              +251987654523
            </a>
          </div>

          <div className="md:text-center">
            <p className="font-garamond-lt-narrow text-sm uppercase tracking-widest text-white sm:text-base md:text-lg">
              Based In
            </p>
            <p className="font-garamond-lt-narrow text-sm uppercase tracking-widest text-white/90 sm:text-base md:text-lg">
              Ankara, Turkey
            </p>
          </div>

          <div className="md:text-center">
            <p className="font-garamond-lt-narrow text-sm uppercase tracking-widest text-white sm:text-base md:text-lg">
              Email
            </p>
            <a
              href="mailto:antachia@gmail.com"
              className="font-garamond-lt-narrow text-sm uppercase tracking-widest text-white/90 transition-opacity duration-200 hover:opacity-70 sm:text-base md:text-lg"
            >
              antachia@gmail.com
            </a>
          </div>
        </div>

        {/* Right — Socials + Powered By */}
        <div className="flex flex-col items-start gap-3 md:items-end">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-garamond-lt-narrow text-sm uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-70 sm:text-base md:text-lg"
            >
              {s.name}
            </a>
          ))}

          <p className="mt-6 font-garamond-lt-narrow text-xs uppercase tracking-widest text-white/70 md:text-right sm:text-sm md:text-base">
            Powered by
            <br />
            Gezat Communication
          </p>
        </div>
      </div>

      {/* Giant brand wordmark at bottom — white logo scaled full width */}
      <div className="relative z-10 flex w-full justify-center px-4 pb-4 pt-8 md:pt-1">
        <Image
          src="/images/logo/white.webp"
          alt="Antachia"
          width={1800}
          height={400}
          className="h-auto w-11/12 object-contain"
          priority
        />
      </div>
    </footer>
  )
}

export default Footer
