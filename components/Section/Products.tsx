"use client"

import Image from "next/image"
import { useState } from "react"
import ProductBottle from "../UI/ProductBottle"
import GlassButton from "../UI/GlassButton"

const volumes = ["250 ML", "500 ML", "1 Liter"] as const

const Products = () => {
  const [activeVolume, setActiveVolume] = useState<string>("500 ML")

  return (
    <section
      id="products"
      className="relative flex min-h-dvh w-screen flex-col overflow-hidden bg-white md:flex-row"
    >
      {/* Left — Product info */}
      <div className="relative z-10 flex w-full flex-col justify-center px-8 py-16 sm:px-12 md:w-[45%] md:py-20 lg:px-16 xl:px-20">
        {/* Green logo stamp */}
        <div className="mb-8">
          <Image
            src="/images/landing/SVG/greenLogo.svg"
            alt="Antachia stamp"
            width={80}
            height={80}
            className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px]"
          />
        </div>

        {/* Title */}
        <h2 className="mb-6 font-mendl-semibold text-[36px] uppercase leading-[1.1] tracking-tight text-accent sm:text-[42px] md:text-[48px] lg:text-[56px]">
          Antachia
          <br />
          <span className="font-garamond-bd-narrow-ita italic text-secondary">
            Olive Oil
          </span>
        </h2>

        {/* Subtitle + Shop Now */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <h3 className="font-mendl-regular text-[18px] text-accent sm:text-[20px]">
            Product Description
          </h3>
          <GlassButton
            text="Shop Now"
            href="#contact"
            className="!border-neonGreen !bg-neonGreen !text-accent hover:!bg-neonGreen/80"
          />
        </div>

        {/* Description */}
        <div className="mb-10 max-w-lg space-y-4">
          <p className="font-garamond-lt-narrow text-[14px] leading-[1.7] text-accent/70 sm:text-[15px] lg:text-[16px]">
            ANTACHIA Extra Virgin is made from hand-picked olives harvested at the point of peak ripeness. Within
            hours of picking, the fruit is cold pressed, a process that keeps every layer of natural flavor intact. No heat, no
            chemicals, no second chances. What ends up in the bottle is exactly what the land produced.
          </p>
          <p className="font-garamond-lt-narrow text-[14px] leading-[1.7] text-accent/70 sm:text-[15px] lg:text-[16px]">
            The result is an oil with a fresh, green character, a gentle pepperiness on the finish, and the kind of depth
            that comes from soil that has been growing olives for generations. It works beautifully as a finishing oil over
            salads, grilled vegetables, bread, or anywhere you want the flavor to actually show up. It also holds its own in
            light cooking where quality matters as much as heat.
          </p>
        </div>

        {/* Volume selector */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="mr-2 font-garamond-lt-narrow text-[13px] tracking-wider text-accent/50 sm:text-[14px]">
            Net Volume:
          </span>
          {volumes.map((vol) => (
            <button
              key={vol}
              onClick={() => setActiveVolume(vol)}
              className={`cursor-pointer rounded-full border px-5 py-1.5 font-garamond-lt-narrow text-[13px] tracking-wide transition-colors duration-200 sm:text-[14px] ${
                activeVolume === vol
                  ? "border-accent bg-accent text-white"
                  : "border-accent/20 text-accent/60 hover:border-accent/40"
              }`}
            >
              {vol}
            </button>
          ))}
        </div>
      </div>

      {/* Right — Background image + 3D bottle */}
      <div className="relative w-full md:w-[55%]">
        {/* Background image */}
        <Image
          src="/images/about/About-Image.jpg"
          alt="Olive grove background"
          fill
          className="object-cover"
          priority
        />

        {/* 3D bottle overlay */}
        <div className="relative z-10 h-[60vh] w-full md:h-full md:min-h-dvh">
          <ProductBottle />
        </div>
      </div>
    </section>
  )
}

export default Products
