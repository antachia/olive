"use client"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bottle } from "./Bottle"
import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LeftBottle } from "./LeftBottle"
import { RightBottle } from "./RightBottle"

gsap.registerPlugin(ScrollTrigger)

// Extend Navigator interface to include deviceMemory
interface NavigatorWithMemory extends Navigator {
  deviceMemory?: number
}

// Detect device performance tier
const getPerformanceTier = () => {
  if (typeof window === 'undefined') return 'high'
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const hasLowMemory = (navigator as NavigatorWithMemory).deviceMemory !== undefined && (navigator as NavigatorWithMemory).deviceMemory! < 4
  return isMobile || hasLowMemory ? 'low' : 'high'
}

const Scene = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [performanceTier] = useState(() => getPerformanceTier())

  useGSAP(() => {
    const wrapper = wrapperRef.current
    const products = document.getElementById("products")
    if (!wrapper || !products) return

    const setFixed = () => {
      gsap.set(wrapper, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      })
    }

    const setAbsoluteOnProducts = () => {
      const rect = products.getBoundingClientRect()
      const top = rect.top + window.scrollY
      const height = products.offsetHeight
      gsap.set(wrapper, {
        position: "absolute",
        top,
        left: 0,
        width: "100%",
        height,
      })
    }

    setFixed()

    const trigger = ScrollTrigger.create({
      trigger: products,
      start: "top top",
      onEnter: setAbsoluteOnProducts,
      onLeaveBack: setFixed,
      onRefresh: () => {
        const startTop = products.getBoundingClientRect().top + window.scrollY
        if (window.scrollY >= startTop) setAbsoluteOnProducts()
        else setFixed()
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  const isLowPerf = performanceTier === 'low'

  return (
    <div ref={wrapperRef} className="bottle_scene z-20 will-change-transform pointer-events-none gap-6 flex justify-center items-center">
      <Canvas
        shadows={!isLowPerf}
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={isLowPerf ? [0.75, 1] : [1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: !isLowPerf,
          powerPreference: 'high-performance',
        }}
      >
        <Environment preset="forest" />
        <LeftBottle />
        <Bottle />
        <RightBottle />
      </Canvas>
    </div>
  )
}

export default Scene