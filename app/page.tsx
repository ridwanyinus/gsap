"use client";
import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white font-sans pt-4">
      <Link href="/Loading" className="h-12 block mb-8 bg-slate-500 text-center leading-9 text-3xl ">
        Loading animation
      </Link>
      <Link href="/MaskedImage" className="h-12 block bg-slate-400 text-center leading-9 text-3xl">
        Masked Image animation
      </Link>
      <Link href="/ImageReveal" className="h-12 block bg-slate-300 text-center leading-9 text-3xl mt-8 text-black">
        Image Reveal animation
      </Link>
    </div>
  );
};

export default page;
