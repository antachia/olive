"use client"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bottle } from "./Bottle"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LeftBottle } from "./LeftBottle"
import { RightBottle } from "./RightBottle"

gsap.registerPlugin(ScrollTrigger)

const Scene = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

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

  return (
    <div ref={wrapperRef} className="bottle_scene z-20 pointer-events-none gap-6 flex justify-center items-center">
      <Canvas
        shadows
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={[1, 2]}
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