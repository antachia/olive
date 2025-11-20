"use client"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import { Bottle } from "./Bottle"

interface SceneProps {
  animate?: boolean;
  animationType?: 'rotation' | 'floating';
  scrollTrigger?: boolean;
}

const Scene = ({ animate = false, animationType = 'rotation', scrollTrigger = false }: SceneProps) => {
  return (
    <>
        {/* <OrbitControls/> */}
        <PerspectiveCamera makeDefault fov={45} near={.1} far={10000} position={[0,0,10]}/>
        
        {/* Enhanced Lighting */}
        <ambientLight intensity={2} />
        <directionalLight position={[5, 10, 7.5]} intensity={2} castShadow />
        <directionalLight position={[-5, 0, -5]} intensity={1.5} />
        <hemisphereLight args={['#ffffff', '#444444', 1.5]} position={[0, 20, 0]} />
        <pointLight position={[0, 5, 5]} intensity={1} />
        
        <Environment preset="city"/>
        <Bottle animate={animate} animationType={animationType} scrollTrigger={scrollTrigger} />

    </>
  )
}

export default Scene