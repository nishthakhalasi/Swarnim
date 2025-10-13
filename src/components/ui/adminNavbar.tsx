"use client";

import React, { useState } from "react";
import { Montserrat, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import user1 from "@/img/user1.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function AdminNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`w-full bg-white shadow-md ${montserrat.className}`}>
      <div className="flex items-center justify-between px-5 h-[50px]">
        {/* Logo */}
        <div className="relative flex items-center">
          <Image src="/Logo.png" width={83} height={31} alt="logo" />
          <span
            className={`${poppins.className} absolute -top-1 left-[65px] w-[12px] h-[5px] font-medium text-[3.9px] leading-[110%] text-center uppercase text-amber-50 bg-black flex items-center justify-center rounded-[1px] px-[1px] py-[0.5px]`}
          >
            BETA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-[20px] text-[12px] font-semibold">
          <Link href="/admin/dashboard" className="hover:text-[#b97a2a]">
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
              <div className="absolute left-0 mt-5 bg-white border border-gray-200 shadow-md w-[202px] h-[93px] flex flex-col items-start py-[10px] px-[10px] z-[999]">
                <div className="absolute -top-2 left-2 w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45"></div>
                <Link
                  href="/admin/userManagement/userDetails"
                  className="w-full h-[35px] px-2 text-left text-gray-700 hover:bg-gray-100 border-b border-gray-200 flex items-center font-medium text-[12px] leading-[20px]"
                  onClick={() => setDropdownOpen(false)}
                >
                  User & Roles
                </Link>
                <Link
                  href="#"
                  className="w-full h-[35px] px-2 text-left text-gray-700 hover:bg-gray-100 border-b border-gray-200 flex items-center font-medium text-[12px] leading-[20px]"
                  onClick={() => setDropdownOpen(false)}
                >
                  Authenticator Setup
                </Link>
                <Link
                  href="#"
                  className="w-full h-[35px] px-2 text-left text-gray-700 hover:bg-gray-100 flex items-center font-medium text-[12px] leading-[20px]"
                  onClick={() => setDropdownOpen(false)}
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
              src={user1}
              alt="User"
              width={30}
              height={30}
              className="object-cover"
            />
          </div>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-[2px] bg-gray-800 mb-1"></div>
            <div className="w-6 h-[2px] bg-gray-800 mb-1"></div>
            <div className="w-6 h-[2px] bg-gray-800"></div>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-5 py-3 flex flex-col gap-2">
          <Link href="/admin/dashboard" className="hover:text-[#b97a2a]">
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

          {/* Mobile Settings Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-[#b97a2a] w-full text-left"
            >
              Settings
            </button>
            {dropdownOpen && (
              <div className="mt-2 bg-white border border-gray-200 shadow-md flex flex-col py-2">
                <Link
                  href="/admin/userManagement/userDetails"
                  className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  User & Roles
                </Link>
                <Link
                  href="#"
                  className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  Authenticator Setup
                </Link>
                <Link
                  href="#"
                  className="px-2 py-1 text-gray-700 hover:bg-gray-100"
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
      )}
    </nav>
  );
}
