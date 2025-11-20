"use client"
import { Canvas } from "@react-three/fiber"
import Scene from "../UI/Scene"
import Image from "next/image"

const About = () => {
    return (
        <section id="about" className="min-h-[85dvh] w-screen relative flex items-end justify-center bg-white overflow-x-clip rounded-t-[4rem] -mt-12">
            <div className="max-w-7xl flex flex-col justify-center items-center font-[PPEditorialNew-Ultralight]">
                <h2 className="text-7xl font-bold text-black mb-4 uppercase text-center">Behold <span className="text-orange-400 font-[PPEditorialNew-Italic]">ANTAKYA</span> Olive Oil</h2>
                <p className="text-3xl text-center text-black max-w-6xl">
                    Rooted in sunlit groves and timeless craft, we press not just olives but stories of patience,
                    purity, and place. Each drop carries the soul of the land, untouched, unhurried, and utterly alive.
                </p>
            </div>
            <div className="absolute w-screen h-screen -top-1/4 z-20 pointer-events-none">
                <Canvas>
                    <Scene animate={true} scrollTrigger={true} />
                </Canvas>
            </div>

                <Image
                    src="/imgs/aboutLine.webp"
                    alt="line olive"
                    width={1920}
                    height={720}
                    className="absolute w-screen -top-[10%] left-[87px] object-cover"
                    />
        </section>
    )
}

export default About