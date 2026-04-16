"use client"

import Image from "next/image"

const AboutStory = () => {
  return (
    <section
      id="about-story"
      className="relative w-screen bg-white"
    >
      {/* Hero image area */}
      <div className="relative h-[55vh] w-full overflow-hidden sm:h-[60vh] md:h-[65vh] lg:h-[70vh]">
        <Image
          src="/images/about/About-Image.jpg"
          alt="Ancient olive tree painting"
          fill
          className="object-cover"
          priority
        />

        {/* "ANTACHIA?" heading — bottom right of image */}
        <div className="absolute bottom-6 right-6 z-10 sm:bottom-8 sm:right-10 md:bottom-10 md:right-14 lg:bottom-12 lg:right-16">
          <h2 className="font-mendl-semibold text-[48px] uppercase leading-[0.95] tracking-tight text-white sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px]">
            Antachia?
          </h2>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full border-t border-accent/10" />

      {/* Content area */}
      <div className="relative flex w-full px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:py-24">
        {/* "Background" label — left side */}
        <div className="hidden flex-shrink-0 flex-col items-start gap-2 pr-12 md:flex lg:pr-20">
          <span className="font-garamond-lt-narrow text-[13px] tracking-widest text-accent/50 lg:text-[14px]">
            Background
          </span>
          <span className="mt-1 block h-2 w-2 bg-neonGreen" />
        </div>

        {/* Text content */}
        <div className="max-w-3xl">
          <p className="font-garamond-lt-narrow text-[15px] leading-[1.8] text-accent/70 sm:text-[16px] md:text-[17px] lg:text-[18px]">
            ANTACHIA takes its name from Antalya, southern Turkey — one of the oldest cities in
            the world and a place where olive culture has been woven into daily life for thousands
            of years. The olive itself traces back to ancient Greece, where it was far more than a
            crop. It was a symbol of sustenance, wisdom, and care. We carry that lineage into
            everything we do, operating across Turkey and Ethiopia with the conviction that where
            an olive grows shapes everything about how it tastes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
