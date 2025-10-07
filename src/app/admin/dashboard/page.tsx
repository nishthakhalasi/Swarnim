"use client";

import React from "react";
import AdminNavbar from "@/components/ui/adminNavbar";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <AdminNavbar />

      <main className="mt-10 flex flex-col items-center justify-center text-center ">
        <div className="bg-white border-none shadow-lg w-full max-w-[1840px] h-[750px] mx-4 sm:mx-6 md:mx-8 lg:mx-12 p-4 sm:p-6 md:p-8 flex flex-col items-center pt-12 sm:pt-16 md:pt-30">
          <div className="relative w-full max-w-[421px] aspect-[421/267] mb-6 ">
            <Image
              src="/comingSoon.png"
              alt="Illustration"
              fill
              className="object-cover"
            />
          </div>

          {/* Heading */}
          <h1
            className={`text-[38px] font-bold leading-[100%] text-center text-[#4b2b19] mb-4 pt-15 ${montserrat.className}`}
          >
            Coming Soon
          </h1>

          <p
            className={`${montserrat.className} text-gray-600 text-[25px] font-light leading-[100%] text-center max-w-xl`}
          >
            Heads up... Something exciting is on the way! We’re working hard
            behind the scenes. Stay tuned.
          </p>
        </div>
      </main>
    </div>
  );
}
