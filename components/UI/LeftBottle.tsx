import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { memo, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function LeftBottleComponent() {

    const groupRef = useRef<THREE.Group>(null)
    const groupRefSpin = useRef<THREE.Group>(null)
    const initialPosition: [number, number, number] = [0, -1, 0]
    const { scene } = useGLTF('/3d/LeftBottle.glb', '/draco/') as unknown as GLTF
    const model = useMemo(() => {
        const cloned = scene.clone(true)
        cloned.traverse((obj) => {
            if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh
                // Only enable shadows for main meshes, not all
                mesh.castShadow = false
                mesh.receiveShadow = false
            }
        })
        return cloned
    }, [scene])

    useGSAP(() => {
        const group = groupRef.current
        const spin = groupRefSpin.current
        if (!group || !spin) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                endTrigger: '#products',
                end: 'top top',
                scrub: true,
            },
        })
        tl.fromTo(group.position,
            {
                x: 0,
                y: -40,
                z: 0
            }, {
            x: 0,
            y: -1,
            z: 0,
        }).fromTo(group.rotation,
            {
                z: Math.PI
            }, {
            z: 0,
        }, 0)

        return () => {
            tl.scrollTrigger?.kill()
            tl.kill()
        }
    },)

    return (
        <group ref={groupRef} position={initialPosition}>
            <group ref={groupRefSpin} scale={4}>
                <primitive object={model} />
            </group>
        </group>
    )
}

export const LeftBottle = memo(LeftBottleComponent)

useGLTF.preload('/3d/LeftBottle.glb', '/draco/')
