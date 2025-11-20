
"use client"
import Image from "next/image"
import { Canvas } from "@react-three/fiber"
import Scene from "@/components/UI/Scene"
import Button from "../UI/Button"

const Products = () => {
  return (
    <section id="products" className="min-h-screen w-screen flex flex-col items-center justify-center bg-white relative py-20 rounded-b-[4rem]">
      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-24" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,50 Q300,20 600,50 T1200,50 L1200,0 L0,0 Z" fill="#fff" opacity="0.3"/>
        </svg>
      </div>

      {/* Olive icon */}
      <div className="mb-4">
        <Image src="/imgs/jug.webp" alt="Olive" width={120} height={120} />
      </div>

      {/* Title */}
      <h2 className="text-5xl font-[PPEditorialNew] text-primary mb-4">Our Bottles</h2>
      
      {/* Subtitle */}
      <p className="text-center font-[PPEditorialNew-Ultralight] text-black text-2xl max-w-xl mb-16 leading-relaxed">
        Each holds what we&apos;ve gathered with care and time.<br/>
        Nothing dressed up just honest oil, in its truest form.
      </p>

      {/* Bottles Container */}
      <div className="relative w-full max-w-6xl h-[400px] flex items-end justify-center gap-8">
        {/* Decorative wave line behind bottles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 500">
          <path d="M0,250 Q200,200 400,250 T800,250 T1200,250" stroke="#b5a876" strokeWidth="2" fill="none" opacity="0.4"/>
        </svg>

        {/* Left Bottle - Small (250ml) */}
        <div className="relative flex flex-col items-center" style={{ height: '400px', width: '250px' }}>
          <div className="w-full h-full flex justify-end">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <Scene />
            </Canvas>
          </div>
          <p className="text-primary mt-2">250 ml</p>
        </div>

        {/* Center Bottle - Large (1L) */}
        <div className="relative flex flex-col items-center" style={{ height: '500px', width: '300px' }}>
          <div className="w-full h-full flex justify-end">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <Scene />
            </Canvas>
          </div>
          <p className="text-primary mt-2">1L</p>
        </div>

        {/* Right Bottle - Medium (500ml) */}
        <div className="relative flex flex-col items-center" style={{ height: '400px', width: '250px' }}>
          <div className="w-full h-full flex justify-end">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <Scene />
            </Canvas>
          </div>
          <p className="text-primary mt-2">500 ml</p>
        </div>
      </div>

      {/* Bottom text and button */}
      <div className="mt-16 text-center">
        <p className="text-black font-[PPEditorialNew-Ultralight] text-lg mb-4">Click below to see full details</p>
        <Button text="Shop Now" className="text-primary border-primary hover:bg-primary hover:text-white"/>
      </div>
    </section>
  )
}

export default Products