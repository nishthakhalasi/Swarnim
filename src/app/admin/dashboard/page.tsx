"use client";

import React from "react";
import AdminNavbar from "@/components/ui/adminNavbar";
import AdminCard from "@/components/ui/adminCard";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-[90vh] bg-gray-100">
      <AdminNavbar />
      <AdminCard className="mt-7 pt-40">
        <div className="relative w-full max-w-[421px] aspect-[421/267] mb-6 ">
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

        <p className="text-gray-600 text-[30px] font-light leading-[100%] text-center max-w-xl">
          Heads up... Something exciting is on the way! We’re working hard
          behind the scenes. Stay tuned.
        </p>
      </AdminCard>
    </div>
  );
}
