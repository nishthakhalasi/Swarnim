"use client";

import React, { useState } from "react";
import { Montserrat, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function AdminNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className={`w-full h-[50px] bg-white shadow-md flex items-center justify-between px-5 ${montserrat.className}`}
    >
      {/* Logo */}
      <div className="relative flex items-center">
        <Image
          src="/Logo.png"
          width={83}
          height={31}
          quality={100}
          alt="logo"
        />
        <span
          className={`${poppins.className} absolute -top-1 left-[65px] w-[12px] h-[5px] font-medium text-[3.9px] leading-[110%] text-center uppercase text-amber-50 bg-black flex items-center justify-center rounded-[1px] px-[1px] py-[0.5px]`}
        >
          BETA
        </span>
      </div>

      <div
        className={`${montserrat.className} flex items-center gap-[20px] text-[12px] font-semibold leading-[100%] text-center`}
      >
        <Link href="#" className="hover:text-[#b97a2a]">
          Dashboard
        </Link>
        <Link href="#" className="hover:text-[#b97a2a]">
          Web Content
        </Link>
        <Link href="#" className="hover:text-[#b97a2a]">
          Customer
        </Link>
        <Link href="#" className="hover:text-[#b97a2a]">
          Packages
        </Link>
        <Link href="#" className="hover:text-[#b97a2a]">
          Addons
        </Link>
        <Link href="#" className="hover:text-[#b97a2a]">
          Reports
        </Link>

        <div className="relative inline-block">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-[#b97a2a] focus:outline-none"
          >
            Settings
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-5 bg-white border border-gray-200 shadow-md w-[202px] h-[93px] flex flex-col items-start py-[10px] px-[10px]">
              <div className="absolute -top-2 left-2 w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45"></div>

              <Link
                href="#"
                className="w-full h-[35px] px-2 text-left text-gray-700 hover:bg-gray-100 border-b border-gray-200 flex items-center font-montserrat font-medium text-[12px] leading-[20px]"
              >
                User & Roles
              </Link>
              <Link
                href="#"
                className="w-full h-[35px] px-2 text-left text-gray-700 hover:bg-gray-100 border-b border-gray-200 flex items-center font-montserrat font-medium text-[12px] leading-[20px]"
              >
                Authenticator Setup
              </Link>
              <Link
                href="#"
                className="w-full h-[35px] px-2 text-left text-gray-700 hover:bg-gray-100 flex items-center font-montserrat font-medium text-[12px] leading-[20px]"
              >
                SMTP Setup
              </Link>
            </div>
          )}
        </div>

        <Link href="#" className="hover:text-[#b97a2a]">
          Ticket
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <Image
            src="/user1.png"
            alt="User"
            width={30}
            height={30}
            className="object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
