"use client"
import Image from "next/image"
import Button from "../UI/Button"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ProductSVG from "../UI/ProductSVG";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const scope = sectionRef.current;
      if (!scope) return;

      const path = scope.querySelector<SVGPathElement>("#productVector");
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
    <section ref={sectionRef} id="products" className="min-h-screen w-screen flex flex-col items-center justify-center bg-background z-10 relative py-20 rounded-b-[4rem]">

      <ProductSVG />

      {/* Olive icon */}
      <div className="mb-4">
        <Image src="/imgs/jug.webp" alt="Olive" width={120} height={120} />
      </div>

      {/* Title */}
      <h2 className="text-5xl font-[PPEditorialNew] text-primary mb-4">Our Bottles</h2>

      {/* Subtitle */}
      <p className="text-center font-[PPEditorialNew-Ultralight] text-black text-2xl max-w-xl mb-16 leading-relaxed">
        Each holds what we&apos;ve gathered with care and time.<br />
        Nothing dressed up just honest oil, in its truest form.
      </p>

      {/* Bottom text and button */}
      <div className="mt-16 text-center">
        <p className="text-black font-[PPEditorialNew-Ultralight] text-lg mb-4">Click below to see full details</p>
        <Button text="Shop Now" className="text-primary border-primary hover:bg-primary hover:text-white" />
      </div>
    </section>
  )
}

export default Products