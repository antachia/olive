import Image from "next/image"

const Delivery = () => {
  return (
    <section className="relative flex h-[70dvh] md:min-h-[110dvh] w-screen flex-col items-center overflow-hidden bg-secondary">


      <div className="w-full h-px bg-white/50 absolute top-1/2" />

      <div className="w-px h-full bg-white/50 absolute left-10" />
      <div className="w-px h-full bg-white/50 absolute right-10" />




      <div className="pointer-events-none absolute left-0 top-0 h-full w-[35%] max-w-[500px] opacity-15 sm:opacity-20">
        <Image
          src="/images/landing/SVG/curve.svg"
          alt="curve line decoration on the left"
          fill
          className="object-contain object-left"
        />
      </div>


      <div className="pointer-events-none absolute right-0 top-0 h-full w-[35%] max-w-[500px] -scale-x-100 opacity-15 sm:opacity-20">
        <Image
          src="/images/landing/SVG/curve.svg"
          alt="curve line decoration on the right"
          fill
          className="object-contain object-left"
        />
      </div>

      <video autoPlay muted loop className="hidden md:flex absolute inset-0 z-0 object-cover w-full h-full">
        <source src="/videos/delivery.webm" type="video/webm" />
      </video>


      {/* Main text content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:py-20 md:pt-24">
        {/* Top half */}

        <div className="mb-6 sm:mb-8 md:mb-16">
          <h2 className="font-garamond-bd-narrow-ita text-[48px] leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] 2xl:text-[100px]">
            Delivering
          </h2>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] leading-[1.1] text-neonGreen sm:text-[64px] md:text-[80px] lg:text-[96px] 2xl:text-[100px]">
            Quality
          </h2>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] 2xl:text-[100px]">
            Olive
          </h2>
        </div>

        {/* Bottom half */}
        <div>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] 2xl:text-[100px]">
            Through
          </h2>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] 2xl:text-[100px]">
            Out The
          </h2>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] 2xl:text-[100px]">
            Globe!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Delivery
