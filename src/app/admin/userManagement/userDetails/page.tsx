"use client";

import React from "react";
import AdminNavbar from "@/components/ui/adminNavbar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      <div className="absolute top-[68px] left-[20px] w-[1885px] h-[790px] bg-white border border-gray-300 shadow-lg flex items-center justify-center"></div>
    </div>
  );
}
