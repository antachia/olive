"use client"

import { useGLTF, Environment } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { memo, useRef, useMemo } from "react"
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

function SpinningBottle() {
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

  useFrame((_, delta) => {
    if (spinRef.current) {
      spinRef.current.rotation.y += delta * 0.4
    }
  })

  return (
    <group position={[0, -1, 0]}>
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

const ProductBottle = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      style={{ background: "transparent" }}
      className="!absolute !inset-0 !h-full !w-full"
    >
      <Environment preset="forest" />
      <MemoBottle />
    </Canvas>
  )
}

export default ProductBottle
