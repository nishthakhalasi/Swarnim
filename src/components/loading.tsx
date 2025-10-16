import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import LoadindImg from "@/img/Logo.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-200 z-50 px-4">
      {/* Background Circle */}
      {/* <div className="absolute w-[300vw] h-[300vw] max-w-[1384px] max-h-[1384px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div> */}
      <div className="absolute w-[250vw] sm:w-[300vw] h-[250vw] sm:h-[300vw] max-w-[1384px] max-h-[1384px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>

      <div className="relative flex flex-col items-center z-10">
        <div className="w-full max-w-[325px]">
          <Image
            src={LoadindImg}
            width={325}
            height={105}
            alt="logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Footer */}
      <span
        className={`${montserrat.className} absolute bottom-8 w-full text-center text-gray-700 font-normal text-sm sm:text-base leading-[100%]`}
      >
        Copyright © 2025 Swarnim
      </span>
    </div>
  );
}
