import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export function RightBottle() {

    const groupRef = useRef<THREE.Group>(null)
    const groupRefSpin = useRef<THREE.Group>(null)
    const initialPosition: [number, number, number] = [0, -1, 0]
    const { scene } = useGLTF('/3d/RightBottle.glb', '/draco/') as unknown as GLTF
    const model = useMemo(() => {
        const cloned = scene.clone(true)
        cloned.traverse((obj) => {
            if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh
                mesh.castShadow = true
                mesh.receiveShadow = true
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
                y: -50,
                z: 0
            }, {
            x: 0,
            y: -1,
            z: 0,
        }).fromTo(group.rotation,
            {
                z: - Math.PI
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

useGLTF.preload('/3d/RightBottle.glb', '/draco/')
