"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import user1 from "@/img/user1.png";
import NavbarLogo from "@/img/NavbarLogo.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function AdminNavbar() {
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <nav className={`w-full bg-white shadow-md ${montserrat.className}`}>
      <div className="flex items-center justify-between px-5 h-[50px]">
        <div className="flex items-center gap-[20px]">
          <Image src={NavbarLogo} width={103} height={50} alt="logo" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-[20px] text-[12px] font-semibold ml-5">
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

            {/* Desktop Settings Dropdown */}
            <div className="relative inline-block">
              <button
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className="hover:text-[#b97a2a] focus:outline-none"
              >
                Settings
              </button>

              {desktopDropdownOpen && (
                <div className="absolute left-0 mt-5 bg-white border border-gray-200 shadow-md w-[202px] flex flex-col items-start py-[10px] px-[10px] z-[999]">
                  <div className="absolute -top-2 left-2 w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45"></div>
                  <Link
                    href="/admin/userManagement/userDetails"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="w-full h-[35px] px-2 text-left text-gray-700 hover:bg-gray-100 border-b border-gray-200 flex items-center font-medium text-[12px] leading-[20px]"
                  >
                    User & Roles
                  </Link>
                  <Link
                    href="/admin/settings/AuthenticatorSetup"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="w-full h-[35px] px-2 text-left text-gray-700 hover:bg-gray-100 border-b border-gray-200 flex items-center font-medium text-[12px] leading-[20px]"
                  >
                    Authenticator Setup
                  </Link>
                  <Link
                    href="/admin/settings/EmailSMTP"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="w-full h-[35px] px-2 text-left text-gray-700 hover:bg-gray-100 flex items-center font-medium text-[12px] leading-[20px]"
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
        </div>

        {/* Right - Profile + Mobile Menu */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-5 py-3 flex flex-col gap-2">
          <Link
            href="/admin/dashboard"
            onClick={handleMenuItemClick}
            className="hover:text-[#b97a2a]"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            onClick={handleMenuItemClick}
            className="hover:text-[#b97a2a]"
          >
            Web Content
          </Link>
          <Link
            href="#"
            onClick={handleMenuItemClick}
            className="hover:text-[#b97a2a]"
          >
            Customer
          </Link>
          <Link
            href="#"
            onClick={handleMenuItemClick}
            className="hover:text-[#b97a2a]"
          >
            Packages
          </Link>
          <Link
            href="#"
            onClick={handleMenuItemClick}
            className="hover:text-[#b97a2a]"
          >
            Addons
          </Link>
          <Link
            href="#"
            onClick={handleMenuItemClick}
            className="hover:text-[#b97a2a]"
          >
            Reports
          </Link>

          {/* Mobile Settings Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="hover:text-[#b97a2a] w-full text-left"
            >
              Settings
            </button>
            {mobileDropdownOpen && (
              <div className="mt-2 bg-white border border-gray-200 shadow-md flex flex-col py-2">
                <Link
                  href="/admin/userManagement/userDetails"
                  onClick={handleMenuItemClick}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  User & Roles
                </Link>
                <Link
                  href="/admin/settings/AuthenticatorSetup"
                  onClick={handleMenuItemClick}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  Authenticator Setup
                </Link>
                <Link
                  href="/admin/settings/EmailSMTP"
                  onClick={handleMenuItemClick}
                  className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  SMTP Setup
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#"
            onClick={() => setMobileDropdownOpen(false)}
            className="hover:text-[#b97a2a]"
          >
            Ticket
          </Link>
        </div>
      )}
    </nav>
  );
}
