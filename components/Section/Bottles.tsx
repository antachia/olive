"use client"

import BottlesScene from "../UI/BottlesScene"

const labels = [
  { size: "500 ML", marginTop: "mt-10 md:mt-16 lg:mt-24" },
  { size: "1 L", marginTop: "mt-0" },
  { size: "250 ML", marginTop: "mt-16 md:mt-24 lg:mt-32" },
]

const BottleLabel = ({
  size,
  marginTop,
}: {
  size: string
  marginTop: string
}) => (
  <div className={`flex flex-col items-center ${marginTop}`}>
    <div className="relative px-6 py-3 sm:px-8 sm:py-4">
      <span className="absolute top-0 left-0 text-white/60 text-lg sm:text-xl select-none">&#x250C;</span>
      <span className="absolute top-0 right-0 text-white/60 text-lg sm:text-xl select-none">&#x2510;</span>
      <span className="absolute bottom-0 left-0 text-white/60 text-lg sm:text-xl select-none">&#x2514;</span>
      <span className="absolute bottom-0 right-0 text-white/60 text-lg sm:text-xl select-none">&#x2518;</span>

      <p className="font-garamond-lt-narrow text-[14px] tracking-wide text-white sm:text-[15px] md:text-[16px]">
        Net Volume: {size}
      </p>
    </div>
  </div>
)

const Bottles = () => {
  return (
    <section
      id="bottles"
      className="relative flex min-h-dvh w-screen flex-col items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-secondary) 0%, var(--color-secondary) 40%, #000000 100%)",
      }}
    >
      {/* Edge vertical lines */}
      <div className="absolute left-10 top-0 h-full w-px bg-white/50" />
      <div className="absolute right-10 top-0 h-full w-px bg-white/50" />

      {/* Heading */}
      <div className="relative z-10 px-6 pt-20 text-center sm:pt-24 md:pt-28 lg:pt-32">
        <h2 className="font-mendl-regular text-[48px] leading-[1.05] text-white sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px]">
          In{" "}
          <span className="font-mendl-semibold text-neonGreen">Different</span>
        </h2>
        <h2 className="font-garamond-bd-narrow-ita mt-1 text-[48px] italic leading-[1.05] text-white sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px]">
          Sizes &amp; Shapes
        </h2>
      </div>

      {/* Single Canvas with all 3 bottles */}
      <div className="relative z-10 mt-8 h-[420px] w-full max-w-[1440px] sm:h-[500px] md:mt-12 md:h-[600px] lg:h-[700px]">
        <BottlesScene />
      </div>

      {/* Labels row — aligned below bottle positions */}
      <div className="relative z-10 -mt-8 flex w-full max-w-[1440px] items-start justify-around px-6 sm:-mt-10 md:-mt-14">
        {labels.map((l) => (
          <BottleLabel key={l.size} {...l} />
        ))}
      </div>

      {/* Bottom content */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-8 px-6 pb-20 text-center sm:mt-14 sm:pb-24 md:mt-16 md:pb-28">
        <p className="font-garamond-bd-narrow-ita text-[15px] italic leading-[1.6] text-white/90 sm:text-[16px] md:text-[18px] lg:text-[20px]">
          Re Imagine your recipe
          <br />
          With Antachia Olive oil !
        </p>

        <a
          href="#products"
          className="rounded-sm bg-neonGreen px-10 py-2.5 font-garamond-lt-narrow text-[13px] tracking-wide text-accent transition-colors duration-200 hover:bg-neonGreen/80 sm:text-[14px] md:text-[15px]"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}

export default Bottles
