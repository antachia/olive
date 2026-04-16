"use client"

import StaticBottle from "../UI/StaticBottle"

const bottles = [
  {
    size: "500 ML",
    scale: 4,
    containerClass: "h-[320px] w-[220px] sm:h-[400px] sm:w-[280px] md:h-[480px] md:w-[340px] lg:h-[560px] lg:w-[400px]",
    marginTop: "mt-10 md:mt-16 lg:mt-24",
  },
  {
    size: "1 L",
    scale: 5.2,
    containerClass: "h-[400px] w-[280px] sm:h-[500px] sm:w-[360px] md:h-[600px] md:w-[420px] lg:h-[700px] lg:w-[500px]",
    marginTop: "mt-0",
  },
  {
    size: "250 ML",
    scale: 3.2,
    containerClass: "h-[260px] w-[180px] sm:h-[330px] sm:w-[230px] md:h-[400px] md:w-[280px] lg:h-[470px] lg:w-[340px]",
    marginTop: "mt-16 md:mt-24 lg:mt-32",
  },
]

const BottleColumn = ({
  size,
  scale,
  containerClass,
  marginTop,
}: {
  size: string
  scale: number
  containerClass: string
  marginTop: string
}) => (
  <div className={`flex flex-col items-center gap-6 ${marginTop}`}>
    {/* 3D Bottle */}
    <div className={`relative ${containerClass}`}>
      <StaticBottle scale={scale} />
    </div>

    {/* Bracketed label */}
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

      {/* Bottles row */}
      <div className="relative z-10 mt-12 flex w-full max-w-[1440px] items-end justify-center gap-4 px-6 sm:mt-16 sm:gap-8 md:mt-20 md:gap-12 lg:mt-24 lg:gap-16">
        {bottles.map((b) => (
          <BottleColumn key={b.size} {...b} />
        ))}
      </div>

      {/* Bottom content */}
      <div className="relative z-10 mt-16 flex flex-col items-center gap-8 px-6 pb-20 text-center sm:mt-20 sm:pb-24 md:mt-24 md:pb-28">
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
