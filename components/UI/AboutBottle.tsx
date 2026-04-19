"use client"

import { useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { memo, useRef, useMemo } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useInView } from "@/hooks/useInView"
import RoomLighting from "./RoomLighting"

gsap.registerPlugin(ScrollTrigger)

type GLTFResult = GLTF & {
  nodes: {
    Retopo_Cube012: THREE.Mesh
    Cube011: THREE.Mesh
    wine_bottles_01_alsace007: THREE.Mesh
  }
  materials: {
    "Bottle.001": THREE.MeshStandardMaterial
    "Cold Pressed Paper - 01": THREE.MeshStandardMaterial
    "Cold Pressed Paper - 01.004": THREE.MeshStandardMaterial
  }
}

function SpinningBottle() {
  const groupRef = useRef<THREE.Group>(null)
  const spinRef = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF("/3d/CenterBottle.glb", "/draco/") as unknown as GLTFResult

  const optimizedMaterials = useMemo(
    () => ({
      bottle: materials["Bottle.001"].clone(),
      paper1: materials["Cold Pressed Paper - 01"].clone(),
      paper2: materials["Cold Pressed Paper - 01.004"].clone(),
    }),
    [materials]
  )

  // Scroll-driven bottom → top movement
  useGSAP(() => {
    const group = groupRef.current
    if (!group) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    tl.fromTo(
      group.position,
      { y: -4 },
      { y: 0.5 }
    )

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  })

  // Infinite spin on Y axis
  useFrame((_, delta) => {
    if (spinRef.current) {
      spinRef.current.rotation.y += delta * 0.8
    }
  })

  return (
    <group ref={groupRef} position={[0, -4, 0]}>
      <group ref={spinRef} scale={4}>
        <mesh
          geometry={nodes.Retopo_Cube012.geometry}
          material={optimizedMaterials.bottle}
        />
        <mesh
          geometry={nodes.Cube011.geometry}
          material={optimizedMaterials.paper1}
        />
        <mesh
          geometry={nodes.wine_bottles_01_alsace007.geometry}
          material={optimizedMaterials.paper2}
        />
      </group>
    </group>
  )
}

const MemoBottle = memo(SpinningBottle)

const AboutBottle = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapperRef)

  return (
    <div ref={wrapperRef} className="pointer-events-none absolute inset-0 z-30">
      <Canvas
        frameloop={inView ? "always" : "never"}
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        style={{ background: "transparent" }}
      >
        <RoomLighting intensity={1} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} />
        <MemoBottle />
      </Canvas>
    </div>
  )
}

export default AboutBottle
