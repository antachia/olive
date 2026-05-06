import Image from "next/image"
import ProductBottle from "../UI/ProductBottle"
import PrimaryButton from "../UI/PrimaryButton"

const volumes = ["250 Ml", "500 Ml", "1 litre"] as const

const Products = () => {
  return (
    <section
      id="products"
      className="relative flex min-h-dvh w-screen flex-col justify-center overflow-hidden bg-white md:flex-row"
    >
      {/* Left — Product info */}
      <div className="relative z-10 mt-auto flex w-full h-full flex-col md:justify-end px-8 py-16 sm:px-12 md:w-[45%] md:py-20 lg:px-16 xl:px-28">
        {/* Green logo stamp */}
        <div className="mb-2 md:ml-14">
          <Image
            src="/images/landing/SVG/greenLogo.svg"
            alt="Antachia stamp"
            width={120}
            height={120}
            className="h-[80px] w-[80px] md:h-[120px] md:w-[120px]"
          />
        </div>

        {/* Title */}
        <h2 className="font-mendl-regular font-semibold text-[36px] uppercase leading-none tracking-tighter text-secondary sm:text-[42px] md:text-[48px] lg:text-[56px]">
          Antachia
          <br />
          <span className="font-garamond-bd-narrow-ita italic font-extrabold md:text-[55px] lg:text-[65px]">
            Olive Oil
          </span>
        </h2>

        {/* Subtitle + Shop Now */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-mendl-regular text-lg text-secondary font-bold sm:text-xl md:text-3xl">
            Product Description
          </h3>
          <PrimaryButton
            text="Shop Now"
            href="#contact"
            className="text-accent rounded-xl border-neonGreen/10"
          />
        </div>

        {/* Horizontal divider */}
        <div className="mt-4 mb-8 h-1 w-full bg-secondary" />

        {/* Description */}
        <div className="mb-10 space-y-4">
          <p className="font-garamond-lt-narrow text-secondary font-bold">
            ANTACHIA Olive Oil Blend is built on precision and balance. Refined olive pomace oil is carefully purified to achieve exceptional clarity and stability, then elevated with a measured addition of extra virgin olive oil, bringing back the nuance, aroma, and character of the olive at its best.
          </p>
          <p className="font-garamond-lt-narrow text-secondary font-bold">
            What emerges is a controlled expression of olive oil: clean, fluid, and quietly complex. A soft golden body, a delicate olive fragrance, and a smooth finish with just a trace of green freshness. Nothing heavy, nothing excessive, only what is essential.
          </p>
          <p className="font-garamond-lt-narrow text-secondary font-bold">
            It moves effortlessly from high-heat cooking to final touches on the plate. It doesn&apos;t compete with your ingredients; it refines them. This is not about intensity—it&apos;s about control, consistency, and understated elegance.
          </p>
          <p className="font-garamond-lt-narrow text-secondary font-bold">
            Made for kitchens that demand both performance and balance, ANTACHIA is olive oil, adapted to real cooking.
          </p>
        </div>

        {/* Volume list */}
        <div className="flex items-center gap-6">
          <span className="font-garamond-lt-narrow text-sm tracking-wider text-secondary sm:text-base">
            Net Volume Options:
          </span>
          <div className="flex justify-between w-full gap-2">
            {volumes.map((vol) => (
              <span
                key={vol}
                className="font-garamond-lt-narrow text-sm rounded px-8 pt-1 border border-neonGreen tracking-wide text-accent/70 sm:text-base"
              >
                {vol}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Background image + 3D bottle (hidden on mobile) */}
      <div className="relative hidden w-full md:block md:w-[55%]">
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
