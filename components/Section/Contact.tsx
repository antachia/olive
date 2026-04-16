"use client"

import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const leftHandRef = useRef<HTMLImageElement>(null)
  const rightHandRef = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      const leftHand = leftHandRef.current
      const rightHand = rightHandRef.current
      if (!section || !leftHand || !rightHand) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "30% bottom",
          end: "center center",
          scrub: true,
        },
      })

      tl.from(
        leftHand,
        { xPercent: -120, opacity: 1, ease: "ease.inOut" },
        0
      ).from(
        rightHand,
        { xPercent: 120, opacity: 1, ease: "ease.inOut" },
        0
      )

      return () => {
        tl.scrollTrigger?.kill()
        tl.kill()
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative flex min-h-dvh w-screen flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Left hand — bottom left */}

        <Image
          ref={leftHandRef}
          src="/images/landing/Left-Hand.png"
          alt="hand left"
          width={900}
          height={900}
          className="h-auto w-[1000px] object-cover absolute top-1/2 -translate-y-1/2 left-0"
        />


      {/* Right hand — bottom right */}

      <Image
        ref={rightHandRef}
        src="/images/landing/Right-Hand.png"
        alt="hand right"
        width={900}
        height={900}
        className="h-auto w-[1000px] object-cover absolute top-1/2 -translate-y-1/2 right-0"
      />


      {/* Content — centered */}
      <div className="relative z-10 flex w-full max-w-[700px] flex-col items-center px-6 py-20 text-center sm:px-10 md:py-28 lg:py-32">
        <h2 className="font-mendl-semibold text-[56px] leading-none text-white sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[140px]">
          Stock
        </h2>
        <h2 className="font-mendl-semibold text-[56px] leading-none text-white sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[140px]">
          Our <span className="text-neonGreen">Oil</span>
        </h2>

        <p className="mt-10 w-full md:w-2xl font-garamond-bd-narrow-ita text-[15px] text-white sm:text-[16px] md:mt-14 md:text-[17px] lg:text-2xl">
          Partner for wholesale, request samples, or explore collaboration
          opportunities. We focus on practical value, not noise products that
          move and make sense. Whether you&apos;re scaling or testing, we keep the
          process straightforward.
        </p>

        <a
          href="/supply"
          className="mt-10 rounded-md bg-neonGreen px-10 py-2.5 font-garamond-lt-narrow text-[14px] tracking-wide text-accent transition-colors duration-200 hover:bg-neonGreen/80 sm:text-[15px] md:mt-14 md:px-12 md:py-3 md:text-[16px]"
        >
          Reach out
        </a>
      </div>
    </section>
  )
}

export default Contact
