"use client";

import React from "react";

import AdminCard from "@/components/ui/adminCard";
import Image from "next/image";
// import comingSoon from "@/img/comingSoon.png";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <AdminCard className="pt-8 sm:pt-16 md:pt-28 lg:pt-34 pb-8 sm:pb-16 md:pb-28 lg:pb-34 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Image Section */}
        <div className="relative w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto aspect-[421/267] mb-6">
          <Image
            src="img/comingSoon.png"
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
    </div>
  );
}
