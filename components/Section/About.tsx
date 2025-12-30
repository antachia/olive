"use client"

import AboutSVG from "../UI/AboutSVG"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import RevealText from "../UI/RevealText";

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

        <section ref={sectionRef} id="about" className="min-h-[85dvh] w-screen relative flex items-start justify-center bg-white overflow-x-clip rounded-t-[4rem] -mt-14 pt-44">
            <AboutSVG />
            <div className="max-w-7xl flex flex-col justify-center items-center relative z-10 gap-3">
                <RevealText split="words">
                    <h2 className="text-7xl pt-1 font-bold text-black uppercase font-mend text-center">Behold Antachia <span className="text-accent font-[PPEditorialNew-Italic]">Olive</span>  Oil</h2>
                </RevealText>
                <RevealText split="words">
                    <p className="text-3xl text-center text-gray-700 max-w-6xl font-[PPEditorialNew-Ultralight]">
                        Rooted in sunlit groves and timeless craft, we press not just olives but stories of patience,
                        purity, and place. Each drop carries the soul of the land, untouched, unhurried, and utterly alive.
                    </p>
                </RevealText>
            </div>
        </section>

    )
}

export default About