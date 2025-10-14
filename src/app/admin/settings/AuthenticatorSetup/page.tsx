"use client";

import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import AdminCard from "@/components/ui/adminCard";

import { CardHeader } from "@/components/ui/card";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AuthenticatorSetup() {
  return (
    <AdminCard>
      <CardHeader className="flex flex-col sm:flex-row justify-between w-full p-0">
        <div className="flex flex-col sm:flex-col sm:items-start gap-1">
          <h2
            className={`${montserrat.className} text-lg sm:text-xl md:text-2xl font-bold text-gray-700 `}
          >
            AUTHENTICATOR SETUP
          </h2>
          <p
            className={`${montserrat.className} text-[10px] sm:text-sm font-normal capitalize leading-[100%] text-gray-600`}
          >
            Settings /Authenticator Setup /mFA
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 items-center justify-end mt-2 sm:mt-0">
          <Button className="bg-gold hover:bg-[#e07d10] text-white px-3 sm:px-4 md:px-5 py-2 rounded text-sm sm:text-base whitespace-nowrap">
            GENERATE
          </Button>
        </div>
      </CardHeader>
    </AdminCard>
  );
}
