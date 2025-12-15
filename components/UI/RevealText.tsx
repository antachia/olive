"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

type RevealTextProps = {
  children: React.ReactNode;
  split?: "chars" | "words";
  stagger?: number;
};

export default function RevealText({
  children,
  split = "chars",
  stagger = 0.06,
}: RevealTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current) return;

      const splitInstance = new SplitType(wrapperRef.current, {
        types: split,
      });

      const targets =
        split === "chars" ? splitInstance.chars : splitInstance.words;

      gsap.set(targets, {
        y: "2.5em",
      });

      gsap.to(targets, {
        y: "0em",
        ease: "power3.inOut",
        duration: 1.2,
        stagger,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
        },
      });

      return () => {
        splitInstance.revert();
      };
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      {children}
    </div>
  );
}
