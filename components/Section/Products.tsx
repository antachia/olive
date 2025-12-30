"use client"
import Image from "next/image"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrangeSVG from "../UI/OrangeSVG";
import ArrowSVG from "../UI/ArrowSVG";



gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const scope = sectionRef.current;
      if (!scope) return;

      const path = scope.querySelector<SVGPathElement>("#orangeVector");
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
          start: "top center",
          end: "50% center",
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
    <section ref={sectionRef} id="products" className="min-h-screen w-screen overflow-x-hidden flex flex-col items-center justify-between bg-white z-10 relative pt-10 pb-0 rounded-b-[4rem]">

      <OrangeSVG />

      <div className="mb-4 flex flex-col items-center relative z-10">
        <Image src="/imgs/jug.webp" alt="Olive" width={120} height={120} />
        <h2 className="text-5xl font-[PPEditorialNew] text-primary mb-4 font-mend">Our Bottles</h2>
      </div>

      <p className="text-center font-[PPEditorialNew-Ultralight] text-secondary text-2xl max-w-xl mb-16 leading-relaxed relative z-10">
        Each holds what we&apos;ve gathered with care and time.<br />
        Nothing dressed up just honest oil, in its truest form.
      </p>

      {/* Bottle callouts (labels + curved arrows) */}
      <div className="pointer-events-none absolute inset-0 z-30">
        {/* Center (1L) */}
        <div className="absolute top-[20%] left-[53%] flex flex-col items-center">
          <p className="font-[PPEditorialNew] text-secondary text-2xl">1Ltr</p>
          <ArrowSVG className="w-10 h-auto rotate-180" />
        </div>

        {/* Left (500ml) */}
        <div className="absolute top-[64%] left-[25%] flex flex-col items-start">
          <ArrowSVG className="w-10 h-auto " />
          <p className="font-[PPEditorialNew] text-secondary text-2xl">500ml</p>
        </div>

        {/* Right (250ml) */}
        <div className="absolute top-[46%] right-[30%] flex flex-col items-end">
          <p className="font-[PPEditorialNew] text-secondary text-2xl">250ml</p>
          <ArrowSVG className="w-10 h-auto rotate-180" />
        </div>
      </div>

      {/* <div className="mt-16 text-center">
        <p className="text-black font-[PPEditorialNew-Ultralight] text-lg mb-4">Click below to see full details</p>
        <Button text="Shop Now" className="text-primary border-primary hover:bg-primary hover:text-white" />
      </div> */}
    </section>
  )
}

export default Products