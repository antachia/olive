"use client"

import { Canvas } from "@react-three/fiber"
import InteractiveBottle from "./InteractiveBottle"
import RoomLighting from "./RoomLighting"

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
      {/* Procedural IBL — no network fetch, gives glass its reflections */}
      <RoomLighting intensity={1} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <directionalLight position={[-5, 3, -5]} intensity={0.4} />

      {/* 500 ML — left, medium, slightly lower */}
      <InteractiveBottle position={[-3.2, -1.4, 0]} scale={4.5} />

      {/* 1 L — center, largest, highest */}
      <InteractiveBottle position={[0, -0.5, 0]} scale={5.5} />

      {/* 250 ML — right, smallest, lowest */}
      <InteractiveBottle position={[3.2, -2, 0]} scale={3.7} />
    </Canvas>
  )
}

export default BottlesScene
