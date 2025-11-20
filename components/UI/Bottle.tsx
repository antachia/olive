import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GLTF } from 'three-stdlib'
gsap.registerPlugin(ScrollTrigger)

type GLTFResult = GLTF & {
    nodes: {
        'Material_003-material': THREE.Mesh
        'Material_002-material': THREE.Mesh
        'Material_002-material_1': THREE.Mesh
        Object_9: THREE.LineSegments
        'Material_001-material': THREE.Mesh
        'Material_005-material': THREE.Mesh
    }
    materials: {
        Material_003: THREE.MeshStandardMaterial
        Material_002: THREE.MeshStandardMaterial
        Cylinder_000: THREE.LineBasicMaterial
        Material_001: THREE.MeshStandardMaterial
        Material_005: THREE.MeshStandardMaterial
    }
}

interface BottleProps {
    animate?: boolean;
    animationType?: 'rotation' | 'floating';
    scrollTrigger?: boolean;
}

export function Bottle({ animate, animationType, scrollTrigger = false, ...props }: BottleProps) {
    const { nodes, materials } = useGLTF('/3d/wine_bottle.glb') as unknown as GLTFResult
    const groupRef = useRef<THREE.Group>(null)
    const { camera } = useThree()
    
    const baseScale = 0.7
    
    // Animation variables
    const rotationSpeed = 1.2
    const floatAmplitude = 0.3
    const floatSpeed = 1.5

    // Enhance materials
    useEffect(() => {
        Object.values(materials).forEach((material) => {
            if ((material as THREE.Material).isMaterial) {
                const mat = material as THREE.MeshStandardMaterial
                mat.metalness = 0.3
                mat.roughness = 0.4
                mat.envMapIntensity = 1.5
                mat.needsUpdate = true
            }
        })
    }, [materials])

    // ScrollTrigger animation for About section (only if enabled)
    useEffect(() => {
        if (!groupRef.current || !scrollTrigger) return

        // Set initial state - zoomed in and positioned below
        gsap.set(groupRef.current.scale, { x: 3, y: 3, z: 3 })
        gsap.set(groupRef.current.position, { y: -10 })

        // Animate when About section comes into view
        const trigger = ScrollTrigger.create({
            trigger: '#about',
            start: 'top bottom',
            end: '10% center',
            scrub: 1,
            onUpdate: (self) => {
                if (groupRef.current) {
                    // Scale from 3x to base scale
                    const scale = gsap.utils.interpolate(3, baseScale, self.progress)
                    groupRef.current.scale.set(scale, scale, scale)
                    
                    // Move from bottom (-10) to center (0)
                    groupRef.current.position.y = gsap.utils.interpolate(-15, 0, self.progress)
                }
            }
        })

        return () => {
            trigger.kill()
        }
    }, [scrollTrigger])

    // Set initial scale for non-scrollTrigger bottles
    useEffect(() => {
        if (!groupRef.current || scrollTrigger) return
        gsap.set(groupRef.current.scale, { x: baseScale, y: baseScale, z: baseScale })
    }, [scrollTrigger])

    // Animation loop
    useFrame((state) => {
        if (groupRef.current && animate) {
            if (animationType === 'rotation') {
                // Slow camera rotation around the bottle
                const time = state.clock.getElapsedTime()
                const radius = 10
                camera.position.set(
                    Math.sin(time * 0.1) * radius,
                    camera.position.y,
                    Math.cos(time * 0.1) * radius
                )
                camera.lookAt(0, 0, 0)
            } else if (animationType === 'floating') {
                // Floating animation
                const time = state.clock.getElapsedTime()
                const floatOffset = Math.sin(time * floatSpeed) * floatAmplitude
                groupRef.current.position.y = floatOffset
            }
        }

        // Continuous Y-axis rotation
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01 * rotationSpeed
        }
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Material_003-material'].geometry}
                    material={materials.Material_003}
                    position={[0, 0, -2.382]}
                    scale={0.873}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Material_002-material'].geometry}
                    material={materials.Material_002}
                    position={[0, 0, -2.408]}
                    scale={0.873}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Material_002-material_1'].geometry}
                    material={materials.Material_002}
                    position={[0, 0, -2.382]}
                    scale={0.873}
                />
                <lineSegments
                    geometry={nodes.Object_9.geometry}
                    material={materials.Cylinder_000}
                    position={[0, 0, -2.382]}
                    scale={0.873}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Material_001-material'].geometry}
                    material={materials.Material_001}
                    position={[0, -0.003, -2.382]}
                    scale={0.873}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Material_005-material'].geometry}
                    material={materials.Material_005}
                    position={[0, 0, -2.382]}
                    scale={0.873}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/3d/wine_bottle.glb')
