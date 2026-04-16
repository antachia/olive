"use client"

import { useGLTF, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { memo, useMemo } from "react"
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

function BottleMesh({ scale = 4 }: { scale?: number }) {
  const { nodes, materials } = useGLTF(
    "/3d/CenterBottle.glb",
    "/draco/"
  ) as unknown as GLTFResult

  const optimizedMaterials = useMemo(
    () => ({
      bottle: materials["Bottle.001"].clone(),
      paper1: materials["Cold Pressed Paper - 01"].clone(),
      paper2: materials["Cold Pressed Paper - 01.004"].clone(),
    }),
    [materials]
  )

  return (
    <group position={[0, -1, 0]}>
      <group scale={scale}>
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

const MemoBottle = memo(BottleMesh)

const StaticBottle = ({ scale = 4 }: { scale?: number }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      style={{ background: "transparent" }}
      className="absolute! inset-0! h-full! w-full! cursor-grab"
    >
      <Environment preset="forest" />
      <MemoBottle scale={scale} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
        minPolarAngle={Math.PI / 2 - 0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
      />
    </Canvas>
  )
}

export default StaticBottle
