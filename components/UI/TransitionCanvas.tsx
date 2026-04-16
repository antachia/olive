"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useLenis } from "lenis/react"
import { vertexShader, fragmentShader } from "@/lib/shaders"

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 0, g: 0, b: 0 }
}

const CONFIG = {
  color: "#d3ce6e",
  spread: 0.5,
  speed: 2,
}

const TransitionCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollProgressRef = useRef(0)

  const lenis = useLenis()

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = canvas?.parentElement
    if (!canvas || !wrapper) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
    })

    const rgb = hexToRgb(CONFIG.color)
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uProgress: { value: 0 },
        uResolution: {
          value: new THREE.Vector2(wrapper.offsetWidth, wrapper.offsetHeight),
        },
        uColor: { value: new THREE.Vector3(rgb.r, rgb.g, rgb.b) },
        uSpread: { value: CONFIG.spread },
      },
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    function resize() {
      if (!wrapper) return
      const width = wrapper.offsetWidth
      const height = wrapper.offsetHeight
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      material.uniforms.uResolution.value.set(width, height)
    }

    resize()
    window.addEventListener("resize", resize)

    let animId: number
    function animate() {
      material.uniforms.uProgress.value = scrollProgressRef.current
      renderer.render(scene, camera)
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animId)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    if (!lenis) return

    const onScroll = ({ scroll }: { scroll: number }) => {
      const canvas = canvasRef.current
      const wrapper = canvas?.parentElement
      if (!wrapper) return

      const wrapperHeight = wrapper.offsetHeight
      const windowHeight = window.innerHeight
      const maxScroll = wrapperHeight - windowHeight

      scrollProgressRef.current = Math.min(
        (scroll / maxScroll) * CONFIG.speed,
        1.1
      )
    }

    lenis.on("scroll", onScroll)
    return () => {
      lenis.off("scroll", onScroll)
    }
  }, [lenis])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10 h-full w-1/2"
    />
  )
}

export default TransitionCanvas
