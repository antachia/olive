"use client"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bottle } from "./Bottle"

const Scene = () => {
  return (
    <div className="bottle_scene w-screen h-screen fixed inset-0 z-20 pointer-events-none flex justify-center items-center">
      <Canvas
        shadows
        camera={{ position: [0, 0, 6], fov: 40 }}
        dpr={[1, 2]}
      >
        <Environment preset="forest" />
        <Bottle />
      </Canvas>
    </div>
  )
}

export default Scene