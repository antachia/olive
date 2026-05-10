"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useLenis } from "lenis/react"
import { vertexShader, fragmentShader, noiseFragmentShader } from "@/lib/shaders"

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
      powerPreference: "high-performance",
      stencil: false,
      depth: false,
    })
    renderer.autoClear = true

    const rgb = hexToRgb(CONFIG.color)
    const geometry = new THREE.PlaneGeometry(2, 2)

    // Bake the FBM noise into a texture once per resize. The per-frame
    // shader then samples this texture instead of recomputing 3 octaves of
    // noise per pixel — visually identical, ~10x cheaper fragment work.
    const noiseTarget = new THREE.WebGLRenderTarget(2, 2, {
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
    })
    const noiseMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: noiseFragmentShader,
      uniforms: {
        uResolution: { value: new THREE.Vector2(2, 2) },
      },
    })

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
        uNoise: { value: noiseTarget.texture },
      },
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    function bakeNoise() {
      if (!wrapper) return
      const dpr = renderer.getPixelRatio()
      const bakeWidth = Math.min(Math.round(wrapper.offsetWidth * dpr), 2048)
      const bakeHeight = Math.min(Math.round(wrapper.offsetHeight * dpr), 2048)
      noiseTarget.setSize(bakeWidth, bakeHeight)
      noiseMaterial.uniforms.uResolution.value.set(bakeWidth, bakeHeight)
      scene.overrideMaterial = noiseMaterial
      renderer.setRenderTarget(noiseTarget)
      renderer.render(scene, camera)
      renderer.setRenderTarget(null)
      scene.overrideMaterial = null
    }

    let dirty = true
    function resize() {
      if (!wrapper) return
      const width = wrapper.offsetWidth
      const height = wrapper.offsetHeight
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height)
      material.uniforms.uResolution.value.set(width, height)
      bakeNoise()
      dirty = true
    }

    resize()
    window.addEventListener("resize", resize)

    // Only render when canvas is in viewport
    let inView = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        if (inView) dirty = true
      },
      { rootMargin: "200px" }
    )
    observer.observe(canvas)

    let animId: number
    let lastProgress = -1
    function animate() {
      if (inView) {
        const progress = scrollProgressRef.current
        if (progress !== lastProgress || dirty) {
          material.uniforms.uProgress.value = progress
          renderer.render(scene, camera)
          lastProgress = progress
          dirty = false
        }
      }
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      observer.disconnect()
      cancelAnimationFrame(animId)
      geometry.dispose()
      material.dispose()
      noiseMaterial.dispose()
      noiseTarget.dispose()
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
