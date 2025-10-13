"use client";

import * as React from "react";
import { MoreHorizontalIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaFastBackward, FaFastForward } from "react-icons/fa";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn(
        "flex items-center justify-end gap-2 p-2 sm:p-3 overflow-x-auto",
        className
      )}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn(
        "flex flex-row items-center gap-1 sm:gap-2 mx-auto whitespace-nowrap",
        className
      )}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"button">;

function PaginationLink({
  className,
  isActive,
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <button
      data-slot="pagination-link"
      className={cn(
        "w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-sm font-medium transition-colors text-sm sm:text-base",
        isActive ? "text-orange-500" : "text-gray-800 hover:text-orange-500",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      className={cn("bg-[#EB8A3D] text-white hover:bg-[#d97a31]", className)}
      {...props}
    >
      <MdSkipPrevious size={18} />
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      className={cn("bg-[#EB8A3D] text-white hover:bg-[#d97a31]", className)}
      {...props}
    >
      <MdSkipNext size={18} />
    </PaginationLink>
  );
}

function PaginationPreviousDouble({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      className={cn("bg-[#EB8A3D] text-white hover:bg-[#d97a31]", className)}
      {...props}
    >
      <FaFastBackward size={12} />
    </PaginationLink>
  );
}

function PaginationNextDouble({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      className={cn("bg-[#EB8A3D] text-white hover:bg-[#d97a31]", className)}
      {...props}
    >
      <FaFastForward size={12} />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex w-6 h-6 sm:w-8 sm:h-8 items-center justify-center",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="w-4 h-4 text-gray-600" />
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationPreviousDouble,
  PaginationNextDouble,
};
