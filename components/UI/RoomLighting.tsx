"use client"

import { useEffect } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"

// Generates an environment map procedurally in-memory (no network fetch).
// Gives glass / metallic PBR materials proper reflections and highlights.
const RoomLighting = ({ intensity = 1 }: { intensity?: number }) => {
  const scene = useThree((s) => s.scene)
  const gl = useThree((s) => s.gl)

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl)
    const roomEnv = new RoomEnvironment()
    const envMap = pmrem.fromScene(roomEnv, 0.04).texture

    scene.environment = envMap
    scene.environmentIntensity = intensity

    return () => {
      scene.environment = null
      envMap.dispose()
      pmrem.dispose()
    }
  }, [scene, gl, intensity])

  return null
}

export default RoomLighting
