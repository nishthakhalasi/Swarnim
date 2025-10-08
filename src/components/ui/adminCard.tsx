"use client";

import React, { ReactNode } from "react";

interface AdminCardProps {
  children: ReactNode;
  className?: string;
}

export default function AdminCard({ children, className }: AdminCardProps) {
  return (
    <div className="flex-1 flex justify-center items-center relative">
      <div
        className={`w-[1870px] max-w-full h-[760px] flex flex-col items-center justify-start p-3 bg-white rounded shadow-md ${
          className || ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
