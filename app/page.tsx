"use client";
import React from "react";
import Link from "next/link";
import TransistionLink from "@/components/TransistionLink";
const page = () => {
  return (
    <div className="min-h-screen bg-slate-800   pt-4">
      <TransistionLink href="/Loading" label="Loading animation" />
      <TransistionLink href="/MaskedImage" label="Masked Image animation" />
      <TransistionLink href="/ImageReveal" label="Image Reveal animation" />
    </div>
  );
};

export default page;
