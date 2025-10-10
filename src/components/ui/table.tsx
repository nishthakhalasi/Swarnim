"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="w-full overflow-x-auto border-t border-t-gray-300 ">
      <table
        className={cn(`${montserrat.className} w-full text-sm`, className)}
        {...props}
      />
    </div>
  );
}

export function TableHeader({
  className,
  ...props
}: React.ComponentProps<"thead">) {
  return (
    <thead
      className={cn(
        `${montserrat.className} text-left uppercase tracking-[0.05em]`,
        " text-[8px]  leading-[100%]",
        className
      )}
      {...props}
    />
  );
}

export function TableBody({
  className,
  ...props
}: React.ComponentProps<"tbody">) {
  return (
    <tbody
      className={cn(
        "divide-y divide-gray-200 border-t border-t-gray-300 border-b border-b-gray-300",
        className
      )}
      {...props}
    />
  );
}

export function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      className={cn(" hover:bg-gray-50 transition-colors", className)}
      {...props}
    />
  );
}

export function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      className={cn(
        `${montserrat.className} px-3 whitespace-nowrap  pb-2 uppercase font-bold text-[8px] leading-[100%] tracking-[0.05em]`,
        className
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "px-3 py-2 text-[12px] font-normal text-left uppercase leading-[100%] tracking-[0] whitespace-nowrap",
        className
      )}
      {...props}
    />
  );
}
