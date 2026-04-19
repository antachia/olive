"use client"

import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import InteractiveBottle from "./InteractiveBottle"
import RoomLighting from "./RoomLighting"

const bottles = [
  { size: "500 ML", scale: 4 },
  { size: "1 L", scale: 4.8 },
  { size: "250 ML", scale: 3.3 },
]

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className={direction === "right" ? "rotate-180" : ""}
  >
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const BottlesSlider = () => {
  const [index, setIndex] = useState(1) // start on 1 L

  const prev = () => setIndex((i) => (i - 1 + bottles.length) % bottles.length)
  const next = () => setIndex((i) => (i + 1) % bottles.length)

  const active = bottles[index]

  return (
    <div className="flex w-full flex-col items-center">
      {/* Canvas — single bottle, drag to rotate */}
      <div className="h-[460px] w-full max-w-[500px] sm:h-[520px] sm:max-w-[560px]">
        <Canvas
          frameloop="demand"
          camera={{ position: [0, 0, 7], fov: 40 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            alpha: true,
          }}
          style={{ background: "transparent", touchAction: "none" }}
        >
          <RoomLighting intensity={1} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} />
          <directionalLight position={[-5, 3, -5]} intensity={0.4} />

          <InteractiveBottle
            key={active.size}
            position={[0, -1, 0]}
            scale={active.scale}
          />
        </Canvas>
      </div>

      {/* Label */}
      <div className="relative mt-4 px-6 py-3">
        <span className="absolute top-0 left-0 text-white/60 text-lg select-none">&#x250C;</span>
        <span className="absolute top-0 right-0 text-white/60 text-lg select-none">&#x2510;</span>
        <span className="absolute bottom-0 left-0 text-white/60 text-lg select-none">&#x2514;</span>
        <span className="absolute bottom-0 right-0 text-white/60 text-lg select-none">&#x2518;</span>
        <p className="font-garamond-lt-narrow text-[14px] tracking-wide text-white">
          Net Volume: {active.size}
        </p>
      </div>

      {/* Navigation — arrows + dots */}
      <div className="mt-6 flex items-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous bottle"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-200 hover:border-neonGreen hover:text-neonGreen"
        >
          <ArrowIcon direction="left" />
        </button>

        <div className="flex items-center gap-2">
          {bottles.map((b, i) => (
            <button
              key={b.size}
              onClick={() => setIndex(i)}
              aria-label={`Show ${b.size} bottle`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-neonGreen"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next bottle"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-200 hover:border-neonGreen hover:text-neonGreen"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      {/* Hint */}
      <p className="mt-3 font-garamond-lt-narrow text-[11px] uppercase tracking-widest text-white/40">
        Drag bottle to rotate
      </p>
    </div>
  )
}

export default BottlesSlider
