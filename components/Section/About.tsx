"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import AboutBottle from "../UI/AboutBottle"
import PillarCard from "../UI/PillarCard"

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    id: "01",
    text: "We don\u2019t own the land. We borrow it. Olive trees live for thousands of years. We farm with that humility. Regenerative practices, zero-waste pressing, and deep roots in the local communities.",
  },
  {
    id: "02",
    text: "Our olives trace their lineage to the ancient groves of Anatolia where the olive tree wasn\u2019t farmed, it was worshipped.",
  },
  {
    id: "03",
    text: "We still harvest by hand at peak bitterness, cure slowly in sea salt and time, and press cold within hours of picking. No additives. No rushing.",
  },
]

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const scope = sectionRef.current
      if (!scope) return

      const cards = scope.querySelectorAll<HTMLElement>(".pillar-card")
      if (!cards.length) return

      const mm = gsap.matchMedia(scope)

      mm.add("(min-width: 768px)", () => {
        gsap.from(cards, {
          scale: 0,
          autoAlpha: 0,
          ease: "power2.inOut",
          stagger: 0.03,
          scrollTrigger: {
            trigger: scope,
            start: "top center",
            end: "center top",
            scrub: true,
          },
        })
      })

      mm.add("(max-width: 767px)", () => {
        gsap.from(cards, {
          y: 230,
          autoAlpha: 0,
          opacity:0,
          ease: "power2.inOut",
          stagger: 0.03,
          scrollTrigger: {
            trigger: scope,
            start: "top 45%",
            end: "center top",
            scrub: true,
          },
        })
      })

      return () => {
        mm.revert()
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="about"
      className="absolute bottom-0 z-20 h-[150dvh] md:h-[125vh] w-screen overflow-hidden flex items-center justify-center"
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
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-12">

        {/* Top row: Card 01 — Bottle — Card 03 */}
        <div className="pt-20 flex w-full flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-6 lg:gap-20">
          {/* Card 01 — left */}
          <div className="flex flex-1 items-start justify-center md:justify-start">
            <PillarCard id={pillars[0].id} text={pillars[0].text} />
          </div>

          {/* Bottle spacer — 3D bottle is absolutely positioned */}
          <div className="order-first w-[140px] sm:w-[170px] md:order-0 md:w-[200px] lg:w-[220px]" />

          {/* Card 03 — right */}
          <div className="flex flex-1 items-start justify-center md:justify-end md:pt-16 lg:pt-24">
            <PillarCard id={pillars[1].id} text={pillars[1].text} />
          </div>
        </div>


        <div className="md:pt-20 flex w-full flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-6 lg:gap-20">

          <div className="order-first w-[140px] sm:w-[170px] md:order-0 md:w-[200px] lg:w-[220px]" />

          <div className="flex flex-1 items-start justify-center md:justify-start">
            <PillarCard id={pillars[2].id} text={pillars[2].text} />
          </div>

          <div className="flex flex-1 items-start justify-center md:justify-end md:pt-16 lg:pt-24" />
          
        </div>

      </div>

      {/* "Our Pillars" label — bottom right */}
      <div className="absolute bottom-12 right-8 z-20 sm:bottom-10 sm:right-12 md:right-14">
        <p className="font-garamond-lt-narrow text-[14px] tracking-widest text-accent/70 sm:text-[16px] md:text-[18px]">
          [ Our Pillars ]
        </p>
      </div>
    </section>
  )
}

export default About
