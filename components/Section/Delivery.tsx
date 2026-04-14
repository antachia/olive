"use client"

import Image from "next/image"
import DeliveryLines from "../UI/DeliveryLines"

const Delivery = () => {
  return (
    <section className="relative flex min-h-dvh w-screen flex-col items-center overflow-hidden bg-secondary">
      {/* Animated straight lines */}
      <DeliveryLines />

      {/* Left curve */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[35%] max-w-[500px] opacity-15 sm:opacity-20">
        <Image
          src="/images/landing/SVG/curve.svg"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Right curve — mirrored */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[35%] max-w-[500px] -scale-x-100 opacity-15 sm:opacity-20">
        <Image
          src="/images/landing/SVG/curve.svg"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Green logo stamp — top center */}
      <div className="relative z-10 mt-10 sm:mt-14 md:mt-16">
        <Image
          src="/images/landing/SVG/greenLogo.svg"
          alt="Antachia stamp"
          width={70}
          height={70}
          className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px]"
        />
      </div>

      {/* Main text content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:py-20 md:py-24">
        {/* Top half */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="font-garamond-bd-narrow-ita text-[48px] italic leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[110px]">
            Delivering
          </h2>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] italic leading-[1.1] text-neonGreen sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[110px]">
            Quality
          </h2>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] italic leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[110px]">
            Olive
          </h2>
        </div>

        {/* Bottom half */}
        <div>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] italic leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[110px]">
            Through
          </h2>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] italic leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[110px]">
            Out The
          </h2>
          <h2 className="font-garamond-bd-narrow-ita text-[48px] italic leading-[1.1] text-white sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[110px]">
            Globe!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Delivery
