"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ImageReveal from "@/components/ImageReveal";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.utils.toArray(".image-container").forEach((revealContainer, index) => {
      const q = gsap.utils.selector(revealContainer);
      gsap.utils.toArray(q(".imageReveal")).forEach((piece, i) => {
        gsap.from(piece, {
          x: (i + 1) * 1200,
          scale: 4,
          y: 60,
          duration: 2.5,
          scrollTrigger: {
            trigger: piece,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  });
  return (
    <div className="flex flex-col gap-20 bg-neutral-950 py-20 px-20">
      <ImageReveal imgNum={1} position="place-self-end" />
      <ImageReveal imgNum={2} position="place-self-center" />
      <ImageReveal imgNum={3} position="place-self-right" />
      <ImageReveal imgNum={1} position="place-self-end" />
      <ImageReveal imgNum={2} position="place-self-center" />
      <ImageReveal imgNum={3} position="place-self-right" />
    </div>
  );
};

export default Page;
