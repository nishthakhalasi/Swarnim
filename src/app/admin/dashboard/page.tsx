"use client";

import React from "react";

import AdminCard from "@/components/ui/adminCard";
import Image from "next/image";
import comingSoon from "@/img/comingsoon.png";

export default function DashboardPage() {
  return (
    <>
      <AdminCard className="justify-center items-center">
        <div className="relative  sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto aspect-[421/267]  ">
          <Image
            src={comingSoon}
            width={0}
            height={0}
            alt="Illustration"
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-[#4b2b19] mb-4">
          Coming Soon
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed text-center max-w-xl mx-auto px-2 sm:px-4">
          Heads up... Something exciting is on the way! We’re working hard
          behind the scenes. Stay tuned.
        </p>
      </AdminCard>
    </>
  );
}
