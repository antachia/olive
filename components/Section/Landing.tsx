import Image from "next/image"
import GlassButton from "../UI/GlassButton"


const Landing = () => {
  return (
      <section
        id="landing"
        className="absolute flex h-[125dvh] w-screen flex-col justify-center pb-42 bg-[url(/images/landing/Hero-Picture.jpg)] bg-cover bg-center"
      >

        {/* overlay for mobile */}
        <div className="w-full h-full bg-black/50 absolute inset-0 z-10 flex md:hidden"/>

        {/* Content container */}
        <div className="relative z-10 flex w-full flex-col justify-between gap-10 px-6 sm:px-10 md:flex-row md:gap-0 md:px-14">
          {/* Left — Hero headline + scroll indicator */}
          <div className="">

            <h1 className="font-extrabold font-mendl-regular text-[50px] leading-[1.05] tracking-tight text-white sm:text-[56px] md:text-[68px] lg:text-8xl">
              From{" "}
              <span className="font-garamond-bd-narrow-ita italic">
                Ancient
              </span>{" "}
              Hills
              <br />
              To Modern Tables
            </h1>

            {/* Scroll down indicator */}
            <div className="mt-8 md:mt-12">
              <a href="#about" aria-label="Scroll down" className="inline-block transition-opacity duration-300 hover:opacity-70">
                <Image
                  src="/images/landing/SVG/arrow.svg"
                  alt="Scroll down"
                  width={35}
                  height={180}
                  className="h-[120px] w-auto md:h-40"
                />
              </a>
            </div>
          </div>

          {/* Right — Tagline + CTA */}
          <div className="flex flex-col md:text-right">

            <p className="italic font-garamond-lt-narrow tracking-tight text-white text-2xl  md:text-[18px] lg:text-5xl">
              Origin matters.
              <br />
              The land does the work.
              <br />
              We just bring it to you right.
            </p>

            <div className="mt-5">

              <GlassButton text="Find Out More!" href="#about" />

            </div>
          </div>
        </div>
      </section>
  )
}

export default Landing
