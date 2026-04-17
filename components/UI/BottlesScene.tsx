"use client"

import { useGLTF, Environment } from "@react-three/drei"
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber"
import { memo, useMemo, useRef, useState } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"

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

type BottleProps = {
  position: [number, number, number]
  scale: number
}

function InteractiveBottle({ position, scale }: BottleProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const dragState = useRef<{ active: boolean; lastX: number }>({
    active: false,
    lastX: 0,
  })

  // Access invalidate so we only render when something actually changes
  const invalidate = useThree((s) => s.invalidate)

  const { nodes, materials } = useGLTF(
    "/3d/CenterBottle.glb",
    "/draco/"
  ) as unknown as GLTFResult

  const sharedMaterials = useMemo(
    () => ({
      bottle: materials["Bottle.001"],
      paper1: materials["Cold Pressed Paper - 01"],
      paper2: materials["Cold Pressed Paper - 01.004"],
    }),
    [materials]
  )

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    dragState.current.active = true
    dragState.current.lastX = e.clientX
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    document.body.style.cursor = "grabbing"
  }

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (!dragState.current.active || !groupRef.current) return
    const dx = e.clientX - dragState.current.lastX
    dragState.current.lastX = e.clientX
    groupRef.current.rotation.y += dx * 0.01
    invalidate()
  }

  const endDrag = (e: ThreeEvent<PointerEvent>) => {
    dragState.current.active = false
    ;(e.target as Element).releasePointerCapture?.(e.pointerId)
    document.body.style.cursor = hovered ? "grab" : "auto"
  }

  const handlePointerOver = () => {
    setHovered(true)
    if (!dragState.current.active) document.body.style.cursor = "grab"
  }

  const handlePointerOut = () => {
    setHovered(false)
    if (!dragState.current.active) document.body.style.cursor = "auto"
  }

  return (
    <group
      ref={groupRef}
      position={position}
      scale={scale}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <mesh
        geometry={nodes.Retopo_Cube012.geometry}
        material={sharedMaterials.bottle}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={sharedMaterials.paper1}
      />
      <mesh
        geometry={nodes.wine_bottles_01_alsace007.geometry}
        material={sharedMaterials.paper2}
      />
    </group>
  )
}

const MemoBottle = memo(InteractiveBottle)

const BottlesScene = () => {
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, 0, 7], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      style={{ background: "transparent" }}
    >
      <Environment preset="forest" />

      {/* 500 ML — left, medium, slightly lower */}
      <MemoBottle position={[-3.2, -1.4, 0]} scale={4.5} />

      {/* 1 L — center, largest, highest */}
      <MemoBottle position={[0, -0.5, 0]} scale={5.5} />

      {/* 250 ML — right, smallest, lowest */}
      <MemoBottle position={[3.2, -2, 0]} scale={3.7} />
    </Canvas>
  )
}

useGLTF.preload("/3d/CenterBottle.glb", "/draco/")

export default BottlesScene
