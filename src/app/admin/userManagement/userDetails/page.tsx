"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Input from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BiSolidSearch } from "react-icons/bi";

import { Button } from "@/components/ui/button";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextDouble,
  PaginationPrevious,
  PaginationPreviousDouble,
} from "@/components/ui/pagination";
import {
  PiCalendarDotsFill,
  PiPencilSimpleLineFill,
  PiSortAscendingFill,
  PiSortDescendingFill,
} from "react-icons/pi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Montserrat } from "next/font/google";
import AdminCard from "@/components/ui/adminCard";
import { Label } from "@/components/ui/label";
import { FaFilter } from "react-icons/fa";
import { MdOutlineRefresh } from "react-icons/md";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const users = [
    { id: 1, role: "Admin", status: "Active" },
    { id: 2, role: "User", status: "Inactive" },
    { id: 3, role: "User", status: "Active" },
    { id: 4, role: "Admin", status: "Inactive" },
    { id: 5, role: "User", status: "Active" },
    { id: 6, role: "Admin", status: "Active" },
    { id: 7, role: "User", status: "Active" },
  ];

  return (
    <>
      <AdminCard>
        <div className="w-full">
          <div className="flex justify-between p-2.5">
            <div>
              <h2 className="text-lg font-bold text-gray-700">
                USER MANAGEMENT
              </h2>
              <p
                className={`${montserrat.className} text-[10px] font-normal capitalize leading-[100%] tracking-[0%] text-gray-600`}
              >
                Dashboard / Settings / Users
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <div
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="w-[30px] h-[30px] border border-gray-300 rounded-[2px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
              >
                <FaFilter size={18} />
              </div>

              {/* Refresh Button */}
              <div className="w-[30px] h-[30px] border border-gray-300 rounded-[2px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                <MdOutlineRefresh size={20} />
              </div>

              <Button className="bg-[#F38E21] hover:bg-[#e07d10] text-white px-5 py-2 rounded">
                ADD
              </Button>
            </div>
          </div>

          {isFilterOpen && (
            <div className="w-full bg-white border-t border-t-gray-400 p-4  animate-slideDown">
              <div className="grid grid-cols-4 gap-4">
                <div className="relative w-full">
                  <Select>
                    <SelectTrigger className="flex h-[35px] w-full text-sm items-center justify-between border border-gray-400 px-2.5 pt-2 pb-2.5 rounded-[4px] appearance-none focus:outline-none focus:ring-0  peer">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>

                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Status
                  </label>
                </div>

                <div className="relative w-full">
                  <Select>
                    <SelectTrigger className="flex h-[35px] w-full text-sm items-center justify-between border border-gray-400 px-2.5 pt-2 pb-2.5 rounded-[4px] appearance-none focus:outline-none focus:ring-0  peer">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="User">User</SelectItem>
                    </SelectContent>
                  </Select>
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Role
                  </label>
                </div>

                <div className="relative w-full h-[35px]">
                  <Input
                    id="fromDate"
                    type="text"
                    className={`w-full h-full ${montserrat.className} border border-gray-400 rounded-[2px] px-[10px] pr-[35px] py-[5px] text-[12px] font-medium capitalize placeholder:text-[12px] placeholder:font-medium placeholder:text-black`}
                    placeholder="From Date"
                  />

                  {/* Calendar Icon */}
                  <div className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
                    <PiCalendarDotsFill size={25} />
                  </div>
                </div>

                <div className="relative w-full h-[35px]">
                  <Input
                    id="toDate"
                    type="text"
                    className={`w-full h-full ${montserrat.className} border border-gray-300 rounded-[2px] px-[10px] pr-[35px] py-[5px] text-[12px] font-medium capitalize placeholder:text-[12px] placeholder:font-medium placeholder:text-black`}
                    placeholder="To Date"
                  />

                  <div className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
                    <PiCalendarDotsFill size={25} />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterOpen(false)}
                  className={`w-[70px] h-[40px] px-[20px] py-[11px] border border-gold rounded-[2px] text-[12px] font-bold uppercase text-center text-gold ${montserrat.className}`}
                >
                  Reset
                </Button>

                <Button
                  size="sm"
                  className={`w-[70px] h-[40px] px-[20px] py-[11px] border border-gold rounded-[2px] text-[12px] font-bold uppercase text-center bg-gold text-white ${montserrat.className}`}
                >
                  Apply
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="w-full h-[30px] flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-200 p-2 border-2 border-gray-300 gap-2">
          {/* Left selects */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
            <Select>
              <SelectTrigger className="w-[70px] sm:w-[79px] h-8 px-2 border-r border-r-gray-400 rounded-sm focus:outline-none focus:ring-0">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[100px] sm:w-[136px] h-8 px-2 border-r border-r-gray-400 rounded-sm">
                <SelectValue placeholder="Export" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PDF">PDF</SelectItem>
                <SelectItem value="Excel">Excel</SelectItem>
                <SelectItem value="CSV">CSV</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[140px] sm:w-[180px] h-8 px-2 border-r border-r-gray-400 rounded-sm">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="min-w-[140px] sm:min-w-[160px]">
                <SelectItem
                  value="Ascending"
                  className="!flex !items-center !gap-2 !whitespace-nowrap"
                >
                  <PiSortAscendingFill className="text-[16px] shrink-0" />
                  <span className="flex items-baseline gap-1">
                    <span className="font-semibold">Ascending</span>
                    <span className="text-sm">A→Z</span>
                  </span>
                </SelectItem>
                <SelectItem
                  value="Descending"
                  className="!flex !items-center !gap-2 !whitespace-nowrap"
                >
                  <PiSortDescendingFill className="text-[16px] shrink-0" />
                  <span className="flex items-baseline gap-1">
                    <span className="font-semibold">Descending</span>
                    <span className="text-sm">Z→A</span>
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Right search */}
          <div className="relative flex items-center w-full sm:w-[235px] h-8 sm:mt-0 mt-2 border-l border-l-gray-400 rounded-sm">
            <Input
              id="search"
              type="search"
              placeholder="Search..."
              className={`${montserrat.className} mt-2 flex-1 h-full border-none pl-2 pr-8 text-sm placeholder:text-sm font-normal bg-transparent`}
            />
            <BiSolidSearch size={18} className="absolute right-2" />
          </div>
        </div>

        <div className="w-full mb-4 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-[#528DEC] text-white w-full flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5 rounded-sm">
              <p className="text-lg sm:text-xl font-semibold">Total Users</p>
              <h3 className="text-xl sm:text-2xl font-bold">150</h3>
            </div>

            <div className="bg-[#5CAFA9] text-white w-full flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5 rounded-sm">
              <p className="text-lg sm:text-xl font-semibold ">Active Users</p>
              <h3 className="text-xl sm:text-2xl font-bold">120</h3>
            </div>

            <div className="bg-[#FF7685] text-white w-full flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5 rounded-sm">
              <p className="text-lg sm:text-xl font-semibold ">
                Inactive Users
              </p>
              <h3 className="text-xl sm:text-2xl font-bold">30</h3>
            </div>

            <div className="bg-[#E0935A] text-white w-full flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5 rounded-sm">
              <p className="text-lg sm:text-xl font-semibold">Admin</p>
              <h3 className="text-xl sm:text-2xl font-bold">5</h3>
            </div>
          </div>
        </div>

        <Table className="w-full mt-4  min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-xs text-center">
                SR NO.
              </TableHead>
              <TableHead className="font-bold text-xs">NAME</TableHead>
              <TableHead className="font-bold text-xs">EMAIL</TableHead>
              <TableHead className="font-bold text-xs">
                CONTACT NUMBER
              </TableHead>
              <TableHead className="font-bold text-xs">USER NAME</TableHead>
              <TableHead className="font-bold text-xs">ROLE</TableHead>
              <TableHead className="font-bold text-xs">DESCRIPTION</TableHead>
              <TableHead className="font-bold text-xs text-center">
                STATUS
              </TableHead>
              <TableHead className="font-bold text-xs text-center">
                ACTION
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((row, i) => (
              <TableRow key={i}>
                <TableCell className="text-center">{`0${i + 1}`}</TableCell>
                <TableCell>NIDHI</TableCell>
                <TableCell>Nidhi123@gmail.com</TableCell>
                <TableCell>8746297492</TableCell>
                <TableCell>NIDHI</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  This system has been introduced for the systematic
                  classification of goods all over the world.
                </TableCell>
                <TableCell className="flex justify-center items-center">
                  <div
                    className={`flex items-center w[50px] p-1.5 rounded-[2px] font-bold text-white ${
                      row.status === "Active" ? "bg-[#5CAFA9]" : "bg-[#FF7685]"
                    }`}
                  >
                    <span className="text-[10px] uppercase">{row.status}</span>

                    <Label className="inline-flex items-center cursor-pointer">
                      <Input
                        id="checkbox"
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={row.status === "Active"}
                      />

                      <div
                        className={`relative w-10 h-3 rounded-full peer bg-white
    after:content-[''] after:absolute after:top-[2px] after:h-2 after:w-2 after:rounded-full after:transition-all
    ${
      row.status === "Active"
        ? "after:bg-orange-300 after:right-[2px] after:left-auto"
        : "after:bg-black after:left-[2px] after:right-auto"
    }`}
                      ></div>
                    </Label>
                  </div>
                </TableCell>

                <TableCell className="border-l border-l-gray-300 justify-center items-center">
                  <div className="flex items-center justify-center ">
                    <button className="text-[#2C2C2C] hover:text-[#e0935a]">
                      <PiPencilSimpleLineFill size={20} />
                    </button>

                    <button className="text-[#2C2C2C] hover:text-[#e0935a] pr-4 pl-4">
                      <RiDeleteBin5Fill size={20} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center mt-44 h-[50px] pl-4 w-full border-t border-t-gray-300 ">
          <p
            className={`${montserrat.className}font-normal text-[12px] leading-[17px] tracking-[0.02em] capitalize text-gray-600`}
          >
            Showing 1 To 9 Of 9 Entries
          </p>

          <Pagination className="w-auto">
            <PaginationPrevious />
            <PaginationPreviousDouble />
            <PaginationContent>
              {[1, 2, 3, 4, 5, "...", 10].map((num, i) => (
                <PaginationItem key={i}>
                  {num === "..." ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink isActive={num === 2}>{num}</PaginationLink>
                  )}
                </PaginationItem>
              ))}
            </PaginationContent>
            <PaginationNextDouble />
            <PaginationNext />
          </Pagination>
        </div>
      </AdminCard>
    </>
  );
}
