"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const DeliveryLines = () => {
  const svgRef = useRef<SVGSVGElement>(null)

  useGSAP(
    () => {
      const svg = svgRef.current
      if (!svg) return

      const lines = svg.querySelectorAll<SVGLineElement>(".delivery-line")

      lines.forEach((line) => {
        const length = line.getTotalLength()
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        })

        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "power2.out",
          duration: 1.4,
          scrollTrigger: {
            trigger: svg,
            start: "top 80%",
          },
        })
      })
    },
    { scope: svgRef }
  )

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizontal line across the middle */}
      <line
        className="delivery-line"
        x1="0" y1="450" x2="1440" y2="450"
        stroke="white" strokeOpacity="0.15" strokeWidth="1"
      />

      {/* Left vertical tick — short line near top-left */}
      <line
        className="delivery-line"
        x1="280" y1="0" x2="280" y2="80"
        stroke="white" strokeOpacity="0.15" strokeWidth="1"
      />

      {/* Right vertical tick — short line near top-right */}
      <line
        className="delivery-line"
        x1="1160" y1="0" x2="1160" y2="80"
        stroke="white" strokeOpacity="0.15" strokeWidth="1"
      />

      {/* Left inner vertical tick */}
      <line
        className="delivery-line"
        x1="360" y1="0" x2="360" y2="50"
        stroke="white" strokeOpacity="0.15" strokeWidth="1"
      />

      {/* Right inner vertical tick */}
      <line
        className="delivery-line"
        x1="1080" y1="0" x2="1080" y2="50"
        stroke="white" strokeOpacity="0.15" strokeWidth="1"
      />

      {/* Center-left tick */}
      <line
        className="delivery-line"
        x1="620" y1="0" x2="620" y2="35"
        stroke="white" strokeOpacity="0.15" strokeWidth="1"
      />

      {/* Center-right tick */}
      <line
        className="delivery-line"
        x1="820" y1="0" x2="820" y2="35"
        stroke="white" strokeOpacity="0.15" strokeWidth="1"
      />

      {/* Left bottom vertical */}
      <line
        className="delivery-line"
        x1="100" y1="450" x2="100" y2="900"
        stroke="white" strokeOpacity="0.08" strokeWidth="1"
      />

      {/* Right bottom vertical */}
      <line
        className="delivery-line"
        x1="1340" y1="450" x2="1340" y2="900"
        stroke="white" strokeOpacity="0.08" strokeWidth="1"
      />
    </svg>
  )
}

export default DeliveryLines
