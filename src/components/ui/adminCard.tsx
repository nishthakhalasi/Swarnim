"use client";

import React, { ReactNode } from "react";

interface AdminCardProps {
  children: ReactNode;
  className?: string;
}

export default function AdminCard({ children, className }: AdminCardProps) {
  return (
    <div className="flex justify-center items-center w-full min-h-[90vh] bg-gray-100 ">
      <div
        className={`
          w-full
          max-w-[1870px]
          flex flex-col 
          bg-white rounded shadow-md
          ${className || ""}
        `}
      >
        {children}
      </div>
    </div>
  );
}
