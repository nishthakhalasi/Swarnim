"use client";

import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Logo from "@/img/Logo.png";
import { FaCircleQuestion } from "react-icons/fa6";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Navbar() {
  return (
    <nav className="w-full h-[50px] bg-white border-b-2 border-gray-200 flex items-center justify-between px-5">
      <div className="relative flex items-center">
        <Image src={Logo} width={83} height={31} quality={100} alt="logo" />
        <label
          className={`${poppins.className} absolute -top-1 left-[65px] w-[12px] h-[5px] font-medium text-[3.9px] leading-[110%] tracking-[0%] text-center uppercase text-amber-50 bg-black flex items-center justify-center rounded-[1px] px-[1px] py-[0.5px]`}
        >
          BETA
        </label>
      </div>

      <div className="flex w-[70px] h-[30px] items-center gap-2 border border-gray-300 rounded-[2px] px-2 py-[2px] cursor-pointer hover:border-[#E0935A]">
        <FaCircleQuestion size={25} color="#e0935a" />
        <span
          className={`${montserrat.className} text-gray-700 hover:text-[#E0935A] text-[10px] font-semibold leading-[100%]`}
        >
          Help
        </span>
      </div>
    </nav>
  );
}
