import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type GLTFResult = GLTF & {
    nodes: {
        Retopo_Cube012: THREE.Mesh
        Cube011: THREE.Mesh
        wine_bottles_01_alsace007: THREE.Mesh
    }
    materials: {
        'Bottle.001': THREE.MeshStandardMaterial
        'Cold Pressed Paper - 01': THREE.MeshStandardMaterial
        'Cold Pressed Paper - 01.004': THREE.MeshStandardMaterial
    }
}

export function Bottle() {

    const groupRef = useRef<THREE.Group>(null)
    const groupRefSpin = useRef<THREE.Group>(null)
    const initialPosition: [number, number, number] = [0, -1, 0]
    const { nodes, materials } = useGLTF('/3d/CenterBottle.glb', '/draco/') as unknown as GLTFResult

    useGSAP(() => {
        const group = groupRef.current
        const spin = groupRefSpin.current
        if (!group || !spin) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        })
        tl.fromTo(group?.position,
            {
                x: 0,
                y: -50,
                z: 0
            }, {
            x: 0,
            y: -1,
            z: 0,
        }).fromTo(group?.rotation,
            {
                z: Math.PI
            }, {
            z: 0,
        }, 0).fromTo(spin?.rotation,
            {
                y: "90deg",
            }, {
            y: 0,
        }, 0).to(spin?.rotation,
            {
                z: 0.2,
                y: 3,
            }).to(spin?.rotation,
                {
                    z: 0,
                    y: 0,
                }).to(spin?.rotation,
                    {
                        z: - 0.2,
                        y: - 3,
                    })
            .to(spin?.rotation,
                {
                    z: 0,
                    y: 0,
                })
    },)

    return (
        <group ref={groupRef} position={initialPosition}>
            <group ref={groupRefSpin} scale={4}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Retopo_Cube012.geometry}
                    material={materials['Bottle.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011.geometry}
                    material={materials['Cold Pressed Paper - 01']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.wine_bottles_01_alsace007.geometry}
                    material={materials['Cold Pressed Paper - 01.004']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/3d/CenterBottle.glb', '/draco/')
