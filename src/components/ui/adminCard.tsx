"use client";

import React, { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface AdminCardProps {
  children: ReactNode;
  className?: string;
}

export default function AdminCard({ children, className }: AdminCardProps) {
  return (
    <div className="flex justify-center w-full h-full bg-gray-100 p-2 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
      <Card
        className={` w-full max-w-[1870px] flex flex-col bg-white  items-center  justify-start rounded shadow-md overflow-hidden ${
          className || ""
        } `}
      >
        {children}
      </Card>
    </div>
  );
}
