"use client";

import React, { ReactNode } from "react";

interface AdminCardProps {
  children: ReactNode;
  className?: string;
}

export default function AdminCard({ children, className }: AdminCardProps) {
  return (
    <div className="flex justify-center items-center w-full h-[100%] bg-gray-100 p-2 sm:p-4 md:p-6 lg:p-8">
      <div
        className={`
          w-full
           h-full
          max-w-[1870px]
          flex flex-col
          bg-white 
          items-center 
          justify-center
          rounded
          shadow-md
          ${className || ""}
        `}
      >
        {children}
      </div>
    </div>
  );
}
