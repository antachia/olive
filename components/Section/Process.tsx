
"use client"
import Image from "next/image"
import { Canvas } from "@react-three/fiber"
import Scene from "@/components/UI/Scene"
import Button from "../UI/Button"

const Process = () => {
    return (
        <section id="process" className="min-h-screen w-screen flex items-center justify-center bg-white relative overflow-hidden">
            {/* Background decorative lines */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1200 800">
                    <path d="M 100 200 Q 300 100 500 200" stroke="#b5a876" strokeWidth="2" fill="none" />
                    <path d="M 700 200 Q 900 300 1100 200" stroke="#b5a876" strokeWidth="2" fill="none" />
                    <path d="M 100 600 Q 300 700 500 600" stroke="#b5a876" strokeWidth="2" fill="none" />
                    <path d="M 700 600 Q 900 500 1100 600" stroke="#b5a876" strokeWidth="2" fill="none" />
                </svg>
            </div>

            {/* Top Left - Harvesting */}
            <div className="absolute top-20 left-[15%] text-center">
                <h3 className="text-2xl font-[PPEditorialNew] mb-4 text-[#6b6b4f] tracking-wider">HARVESTING</h3>
                <Image
                    src="/imgs/harvesting.webp"
                    alt="Harvesting"
                    width={300}
                    height={200}
                    className="opacity-80"
                />
            </div>

            {/* Top Right - Sorting */}
            <div className="absolute top-20 right-[15%] text-center">
                <h3 className="text-2xl font-[PPEditorialNew] mb-4 text-[#6b6b4f] tracking-wider">SORTING</h3>
                <Image
                    src="/imgs/sorting.webp"
                    alt="Sorting"
                    width={300}
                    height={200}
                    className="opacity-80"
                />
            </div>

            {/* Center - House and 3D Bottle */}
            <div className="relative z-10">
                <Image
                    src="/imgs/home.webp"
                    alt="Production House"
                    width={600}
                    height={400}
                    className="opacity-70"
                />
            </div>
            {/* 3D Wine Bottle overlay */}
            <div className="absolute inset-0 w-screen h-[70vh] top-1/2 -translate-y-1/2">
                <Canvas>
                    <Scene animate={true} animationType="floating" />
                </Canvas>
            </div>

            {/* Bottom Left - Curing & Fermentation */}
            <div className="absolute bottom-20 left-[15%] text-center">
                <h3 className="text-xl font-[PPEditorialNew] mb-4 text-[#6b6b4f] tracking-wider">CURING &<br />FERMENTATION</h3>
                <Image
                    src="/imgs/curing.webp"
                    alt="Curing & Fermentation"
                    width={280}
                    height={200}
                    className="opacity-80"
                />
            </div>

            {/* Bottom Right - Grading */}
            <div className="absolute bottom-20 right-[15%] text-center">
                <h3 className="text-2xl font-[PPEditorialNew] mb-4 text-[#6b6b4f] tracking-wider">GRADING</h3>
                <Image
                    src="/imgs/grading.webp"
                    alt="Grading"
                    width={280}
                    height={200}
                    className="opacity-80"
                />
            </div>

            {/* Bottom Center - More Info */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-black font-[PPEditorialNew-Ultralight] mb-4 text-lg">More on our official Blog !</p>
                <Button text="Blog" className="border-primary text-primary hover:bg-primary hover:text-white"/>
            </div>
        </section>
    )
}

export default Process