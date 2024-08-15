"use client";
import React from "react";
import Loading from "@/components/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const page = () => {
  return (
    <div className="">
      <Loading />
      <div className="bg-black h-screen flex justify-center items-center">
        <h1 className="text-8xl text-white text-center">Hello My Nigga!!!</h1>
      </div>{" "}
    </div>
  );
};

export default page;
