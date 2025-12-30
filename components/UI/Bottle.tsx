import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { memo, useRef, useMemo } from 'react'
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

function BottleComponent() {

    const groupRef = useRef<THREE.Group>(null)
    const groupRefSpin = useRef<THREE.Group>(null)
    const initialPosition: [number, number, number] = [0, -1, 0]
    const { nodes, materials } = useGLTF('/3d/CenterBottle.glb', '/draco/') as unknown as GLTFResult

    // Optimize materials - only cast shadows on main bottle
    const optimizedMaterials = useMemo(() => ({
        bottle: materials['Bottle.001'].clone(),
        paper1: materials['Cold Pressed Paper - 01'].clone(),
        paper2: materials['Cold Pressed Paper - 01.004'].clone(),
    }), [materials])

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
                z: Math.PI
            }, {
            z: 0,
        }, 0).to(spin?.rotation,
            {
                z: 0.2,
                y: 3,
            }).to(spin?.rotation,
                {
                    z: 0,
                    y: 0,
                }).fromTo(group.position, {
                    z: 2,
                }, {
                    z: 0,
                }, 0).fromTo(spin?.rotation,
                    {
                        y: "90deg",
                    }, {
                    y: 0,
                }, 0)

        return () => {
            tl.scrollTrigger?.kill()
            tl.kill()
        }
    },)

    return (
        <group ref={groupRef} position={initialPosition}>
            <group ref={groupRefSpin} scale={4}>
                <mesh
                    castShadow
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

export const Bottle = memo(BottleComponent)

useGLTF.preload('/3d/CenterBottle.glb', '/draco/')
