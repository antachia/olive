"use client"

import AboutSVG from "../UI/AboutSVG"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const About = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    useGSAP(
        () => {
            const scope = sectionRef.current;
            if (!scope) return;

            const path = scope.querySelector<SVGPathElement>("#aboutVector");
            if (!path) return;

            const length = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            const tween = gsap.to(path, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: scope,
                    start: "top top",
                    end: "bottom center",
                    scrub: true,
                },
            });

            return () => {
                tween.scrollTrigger?.kill();
                tween.kill();
            };
        },
        { scope: sectionRef }
    );

    return (

        <section ref={sectionRef} id="about" className="min-h-[85dvh] w-screen relative flex items-center justify-center bg-background overflow-x-clip rounded-t-[4rem] -mt-12 pt-12">
            <AboutSVG />
            <div className="max-w-7xl flex flex-col justify-center items-center font-[PPEditorialNew-Ultralight] relative z-10">
                <h2 className="text-7xl font-bold text-black mb-4 uppercase text-center  mix-blend-difference">Behold <span className="text-primary font-[PPEditorialNew-Italic]">Antachia</span> Olive Oil</h2>
                <p className="text-3xl text-center text-black max-w-6xl">
                    Rooted in sunlit groves and timeless craft, we press not just olives but stories of patience,
                    purity, and place. Each drop carries the soul of the land, untouched, unhurried, and utterly alive.
                </p>
            </div>
        </section>

    )
}

export default About