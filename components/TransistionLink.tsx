"use client";

import { usePathname, useRouter } from "next/navigation";

import { animatePageOut } from "@/app/utils/animations";

interface props {
  label: string;
  href: string;
}

import React from "react";

const TransistionLink = ({ href, label }: props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <div className="bg-white">
      <button className="hover:text-neutral-700 h-12 block mb-8 text-center leading-9 text-3xl capitalize text-neutral-950  mx-auto font-sans w-full" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default TransistionLink;
