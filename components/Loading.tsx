"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loading = () => {
  let tl: GSAPTimeline;

  useGSAP(() => {
    tl = gsap.timeline();

    tl.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      duration: 1,
      delay: 0.5,
      repeat: 1,
      yoyo: true,
      yoyoEase: true,
      stagger: {
        amount: 1.5,
        from: "start",
        // axis: "y",
        grid: [3, 3],
      },
    });

    tl.to(".container", {
      rotate: "-450deg",
      scale: 0,
      duration: 1,
    });

    tl.to(".wrapper", {
      opacity: 0,
      display: "none",
    });
  });
  return (
    <div className="flex justify-center items-center ">
      <div className="wrapper absolute top-0 left-0 flex flex-col justify-center items-center w-screen h-screen  bg-black">
        <div className="container rotate-45 w-24 grid  grid-cols-3 place-items-center place-content-center gap-1 ">
          {new Array(9).fill().map((arr, idx: number) => {
            return <div key={idx} className="box w-7 h-7 bg-[#39FF14] "></div>;
          })}
        </div>
        <h1 className="text-white mt-10 text-3xl  w-fit h-max">Loading Hell......</h1>
      </div>
    </div>
  );
};

export default Loading;
