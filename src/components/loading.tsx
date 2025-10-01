import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-200 z-50">
      <div className="absolute w-[1384px] h-[1384px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-auto"></div>

      {/* Logo */}
      <div className="relative flex flex-col items-center">
        <Image
          src="/Group 684.png"
          width={325}
          height={105}
          quality={100}
          alt="logo"
        />
        <span
          className={`${montserrat.className} text-gray-700 font-normal text-[16.58px] leading-[125%] tracking-[0.6em] uppercase mt-4`}
        >
          Goldsmith&apos;s Gold
        </span>
      </div>

      <span
        className={`${montserrat.className} fixed bottom-32 w-full text-center text-gray-700 font-normal text-[16px] leading-[100%]`}
      >
        Copyright © 2025 Swarnim
      </span>
    </div>
  );
}
