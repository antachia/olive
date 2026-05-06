"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import PrimaryButton from "../UI/PrimaryButton"

gsap.registerPlugin(ScrollTrigger, SplitText)

const sections = [
  {
    label: "Background",
    text: "ANTACHIA takes its name from Antakya, southern Turkey — one of the oldest cities in the world and a place where olive culture has been woven into daily life for thousands of years. The olive itself traces back to ancient Anatolia, where it was far more than a crop. It was a symbol of sustenance, wisdom, and care. We carry that lineage into everything we do, operating across Turkey and Ethiopia with the conviction that where an olive grows shapes everything about how it tastes.",
  },
  {
    label: "Process",
    text: "Our olives are picked by hand at peak ripeness and cold-pressed within hours  no delays, no cutting corners. We produce extra virgin olive oil for those who want full, natural flavor, and pomace olive oil refined from the remaining fruit for a clean, versatile everyday option. Both follow the same principle: treat the fruit well, keep the process simple, and let the quality of the land speak for itself.",
  },
  {
    label: "Sustainability",
    text: "Olive trees live for centuries. That kind of longevity demands respect. We work closely with local farming communities in Turkey and Ethiopia, using practices that protect the soil, reduce waste, and give back to the land more than we take from it. From zero-waste pressing to supporting the livelihoods of the growers we partner with, sustainability at ANTACHIA isn't a label, it's simply how we operate.",
  },
]

const AboutStory = () => {
  const rootRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const labelsRef = useRef<(HTMLDivElement | null)[]>([])
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([])
  const ctaRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const pinEl = pinRef.current
      const cta = ctaRef.current
      if (!pinEl || !cta) return

      const paragraphs = paragraphsRef.current.filter(
        (p): p is HTMLParagraphElement => p !== null
      )
      const labels = labelsRef.current.filter(
        (l): l is HTMLDivElement => l !== null
      )
      if (paragraphs.length !== sections.length) return

      const splits = paragraphs.map(
        (p) =>
          new SplitText(p, {
            type: "lines",
            mask: "lines",
            linesClass: "story-line",
          })
      )

      splits.forEach((s, i) => {
        gsap.set(s.lines, { yPercent: i === 0 ? 0 : 110 })
      })
      labels.forEach((l, i) => {
        gsap.set(l, { autoAlpha: i === 0 ? 1 : 0 })
      })
      gsap.set(cta, { autoAlpha: 0, yPercent: 30 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinEl,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      })

      // Paragraph-to-paragraph transitions
      for (let i = 1; i < sections.length; i++) {
        tl.to(
          splits[i - 1].lines,
          {
            yPercent: -110,
            stagger: 0.04,
            ease: "power2.in",
            duration: 0.5,
          },
          "+=0.2"
        )
          .to(labels[i - 1], { autoAlpha: 0, duration: 0.25 }, "<")
          .to(labels[i], { autoAlpha: 1, duration: 0.25 }, "<0.15")
          .to(
            splits[i].lines,
            {
              yPercent: 0,
              stagger: 0.04,
              ease: "power2.out",
              duration: 0.5,
            },
            "<"
          )
      }

      // Final transition: last paragraph -> CTA
      const last = splits.length - 1
      tl.to(
        splits[last].lines,
        {
          yPercent: -110,
          stagger: 0.04,
          ease: "power2.in",
          duration: 0.5,
        },
        "+=0.3"
      )
        .to(labels[last], { autoAlpha: 0, duration: 0.25 }, "<")
        .to(
          cta,
          { autoAlpha: 1, yPercent: 0, duration: 0.6, ease: "power2.out" },
          "<"
        )

      return () => {
        splits.forEach((s) => s.revert())
      }
    },
    { scope: rootRef }
  )

  return (
    <section
      ref={rootRef}
      id="about-story"
      className="relative w-screen bg-white"
    >
      {/* Pinned viewport — hero + text slot stacked to fill 100dvh */}
      <div ref={pinRef} className="relative flex h-dvh w-full flex-col">
        {/* Hero */}
        <div className="relative w-full flex-1 overflow-hidden">
          <Image
            src="/images/about/About-Image.jpg"
            alt="Ancient olive tree painting"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-6 right-6 z-10 sm:bottom-8 sm:right-10 md:bottom-10 md:right-14 lg:bottom-12 lg:right-16">
            <h2 className="font-mendl-semibold text-[48px] uppercase leading-[0.95] tracking-tight text-white sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px]">
              Antachia?
            </h2>
          </div>
        </div>

        {/* Text slot — 35% of viewport, full width */}
        <div className="relative h-[35%] w-full shrink-0 border-t border-accent/10">
          {/* Labels — absolute on left */}
          <div className="absolute left-6 bottom-28 hidden -translate-y-1/2 md:block md:left-14">
            {sections.map((s, i) => (
              <div
                key={s.label}
                ref={(el) => {
                  labelsRef.current[i] = el
                }}
                className="absolute left-0 top-0 flex -translate-y-1/2 items-center gap-6 whitespace-nowrap"
              >
                <span className="font-garamond-lt-narrow text-[13px] font-bold tracking-widest text-accent/70 lg:text-2xl">
                  {s.label}
                </span>
                <span className="block h-2 w-2 bg-neonGreen" />
              </div>
            ))}
          </div>

          {/* Paragraph / CTA stack */}
          <div className="absolute inset-0 flex items-center justify-center px-6 md:pl-56 md:pr-14 lg:pl-64">
            <div className="relative grid w-full max-w-5xl">
              {sections.map((s, i) => (
                <p
                  key={s.label}
                  ref={(el) => {
                    paragraphsRef.current[i] = el
                  }}
                  className="col-start-1 row-start-1 leading-none font-garamond-lt-narrow text-secondary font-medium md:text-[16px] lg:text-3xl"
                >
                  {s.text}
                </p>
              ))}

              <div
                ref={ctaRef}
                className="col-start-1 row-start-1 flex flex-col items-center gap-5 text-center"
              >
                <p className="font-garamond-lt-narrow text-[22px] leading-[1.3] text-accent/90 sm:text-[26px] md:text-[30px] lg:text-[34px]">
                  Discover Antachia&apos;s
                  <br />
                  Olive Oil
                </p>
                <PrimaryButton text="Supply" href="/supply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
