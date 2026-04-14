"use client"

import AboutBottle from "../UI/AboutBottle"

const pillars = [
  {
    id: "01",
    text: "We don\u2019t own the land. We borrow it. Olive trees live for thousands of years. We farm with that humility. Regenerative practices, zero-waste pressing, and deep roots in the local communities.",
  },
  {
    id: "02",
    text: "Our olives trace their lineage to the ancient groves of Greece where the olive tree wasn\u2019t farmed, it was worshipped.",
  },
  {
    id: "03",
    text: "We still harvest by hand at peak bitterness, cure slowly in sea salt and time, and press cold within hours of picking. No additives. No rushing.",
  },
]

const PillarCard = ({ id, text, className }: { id: string; text: string; className?: string }) => (
  <div className={`relative w-full max-w-[340px] lg:max-w-[380px] ${className}`}>
    {/* Corner brackets */}
    <span className="absolute -top-2 -left-2 text-white text-2xl font-garamond-lt-narrow select-none">&#x250C;</span>
    <span className="absolute -top-2 -right-2 text-white text-2xl font-garamond-lt-narrow select-none">&#x2510;</span>
    <span className="absolute -bottom-2 -left-2 text-white text-2xl font-garamond-lt-narrow select-none">&#x2514;</span>
    <span className="absolute -bottom-2 -right-2 text-white text-2xl font-garamond-lt-narrow select-none">&#x2518;</span>

    <div
      className="rounded-lg bg-cover bg-center px-6 py-8 sm:px-8 sm:py-10"
      style={{ backgroundImage: "url(/images/supply/Old-Paper.png)" }}
    >
      {/* Number label */}
      <p className="mb-4 font-garamond-lt-narrow text-[13px] tracking-widest text-accent/70 sm:text-[14px]">
        [ {id} ]
      </p>

      {/* Body text */}
      <p className="font-garamond-bd-narrow-ita text-[15px] italic leading-[1.7] text-accent/80 sm:text-[16px] lg:text-[17px]">
        {text}
      </p>
    </div>
  </div>
)

const About = () => {
  return (
    <section
      id="about"
      className="relative z-20 min-h-dvh w-screen overflow-hidden bg-[#d3ce6e]"
    >
      {/* 3D spinning bottle */}
      <AboutBottle />

      {/* Scroll indicator — left edge */}
      <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 md:block lg:left-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 text-accent/40">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M7 13L1 7M7 13L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Main layout */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-20 sm:px-10 md:py-28 lg:py-32">

        {/* Top row: Card 01 — Bottle — Card 03 */}
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-6 lg:gap-10">
          {/* Card 01 — left */}
          <div className="flex flex-1 items-start justify-center md:justify-start md:pt-16 lg:pt-24">
            <PillarCard id={pillars[0].id} text={pillars[0].text} />
          </div>

          {/* Bottle spacer — 3D bottle is absolutely positioned */}
          <div className="order-first w-[140px] sm:w-[170px] md:order-0 md:w-[200px] lg:w-[220px]" />

          {/* Card 03 — right */}
          <div className="flex flex-1 items-start justify-center md:justify-end md:pt-16 lg:pt-24">
            <PillarCard id={pillars[2].id} text={pillars[2].text} />
          </div>
        </div>

        {/* Bottom row: Card 02 — centered */}
        <div className="mt-8 flex w-full justify-center md:-mt-4 lg:-mt-8">
          <PillarCard id={pillars[1].id} text={pillars[1].text} />
        </div>
      </div>

      {/* "Our Pillars" label — bottom right */}
      <div className="absolute bottom-8 right-8 z-20 sm:bottom-10 sm:right-12 md:bottom-12 md:right-14">
        <p className="font-garamond-lt-narrow text-[14px] tracking-widest text-accent/70 sm:text-[16px] md:text-[18px]">
          [ Our Pillars ]
        </p>
      </div>
    </section>
  )
}

export default About
