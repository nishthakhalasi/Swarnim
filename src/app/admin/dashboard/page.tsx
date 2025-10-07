"use client";

import React from "react";
import AdminNavbar from "@/components/ui/adminNavbar";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="absolute top-[68px] left-[20px] w-[1885px] h-[790px] bg-white shadow-lg  border border-gray-300 p-8 flex flex-col items-center justify-center ">
        <div className="relative w-full max-w-[421px] aspect-[421/267] mb-6">
          <Image
            src="/comingsoon.png"
            alt="Illustration"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-[38px] font-bold leading-[100%] text-center text-[#4b2b19] mb-4">
          Coming Soon
        </h1>

        <p className="text-gray-600 text-[25px] font-light leading-[100%] text-center max-w-xl">
          Heads up... Something exciting is on the way! We’re working hard
          behind the scenes. Stay tuned.
        </p>
      </div>
    </div>
  );
}
