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
import { CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import AddEditUser from "../AddEditUser/AddEditUser";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function UserDetails() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <AdminCard>
      <CardHeader className="flex flex-col sm:flex-row justify-between w-full p-0">
        <div className="flex flex-col sm:flex-col sm:items-start gap-1">
          <h2
            className={`${montserrat.className} font-bold text-[16px] leading-[20px] tracking-[0px] uppercase text-gray-700`}
          >
            USER MANAGEMENT
          </h2>
          <p
            className={`${montserrat.className} flex flex-row font-normal text-[12px] leading-[100%] tracking-[0px] capitalize text-gray-600`}
          >
            Dashboard / Settings / <span className="text-gold"> Users</span>
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 items-center justify-end mt-2 sm:mt-0">
          <div
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="w-8 h-8 sm:w-9 sm:h-9 border border-gray-300 rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
          >
            <FaFilter size={16} className="sm:size-[18px]" />
          </div>

          <div className="w-8 h-8 sm:w-9 sm:h-9 border border-gray-300 rounded flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
            <MdOutlineRefresh size={16} className="sm:size-[20px]" />
          </div>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gold hover:bg-[#e07d10] text-white px-3 sm:px-4 md:px-5 py-2 rounded text-sm sm:text-base whitespace-nowrap"
          >
            ADD
          </Button>
          <AddEditUser
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
          />
        </div>
      </CardHeader>

      {/* Filter Panel */}
      {isFilterOpen && (
        <div className="w-full bg-white border-t border-gray-400 p-3 sm:p-4 animate-slideDown">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Status */}
            <div className="relative w-full">
              <Select>
                <SelectTrigger className="flex h-[35px] w-full text-xs sm:text-sm items-center justify-between border border-gray-400 px-2.5 pt-2 pb-2.5 rounded appearance-none focus:outline-none focus:ring-0 peer">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Label className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2">
                Status
              </Label>
            </div>

            {/* Role */}
            <div className="relative w-full">
              <Select>
                <SelectTrigger className="flex h-[35px] w-full text-xs sm:text-sm items-center justify-between border border-gray-400 px-2.5 pt-2 pb-2.5 rounded appearance-none focus:outline-none focus:ring-0 peer">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="User">User</SelectItem>
                </SelectContent>
              </Select>
              <Label className="absolute text-xs sm:text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2">
                Role
              </Label>
            </div>

            {/* From Date */}
            <div className="relative w-full h-[35px]">
              <Input
                id="fromDate"
                type="text"
                className={`w-full h-full ${montserrat.className} border border-gray-400 rounded px-2 pr-9 text-xs sm:text-[12px] font-medium placeholder:text-xs sm:placeholder:text-[12px] placeholder:font-medium`}
                placeholder="From Date"
              />
              <div className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
                <PiCalendarDotsFill size={20} className="sm:size-[25px]" />
              </div>
            </div>

            {/* To Date */}
            <div className="relative w-full h-[35px]">
              <Input
                id="toDate"
                type="text"
                className={`w-full h-full ${montserrat.className} border border-gray-400 rounded px-2 pr-9 text-xs sm:text-[12px] font-medium placeholder:text-xs sm:placeholder:text-[12px] placeholder:font-medium`}
                placeholder="To Date"
              />
              <div className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none">
                <PiCalendarDotsFill size={20} className="sm:size-[25px]" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3 sm:mt-4 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFilterOpen(false)}
              className={`w-[70px] h-[40px] px-[20px] py-[11px] border border-gold rounded text-xs sm:text-[12px] font-bold uppercase text-gold ${montserrat.className}`}
            >
              Reset
            </Button>

            <Button
              size="sm"
              className={`w-[70px] h-[40px] px-[20px] py-[11px] border border-gold rounded text-xs sm:text-[12px] font-bold uppercase bg-gold text-white ${montserrat.className}`}
            >
              Apply
            </Button>
          </div>
        </div>
      )}

      <CardContent className="w-full h-auto sm:h-[34px] flex flex-col sm:flex-row justify-between items-center bg-[#EBEEF2] border-t border-t-[#BFBFBF] border-b border-b-[#BFBFBF] px-2 sm:px-2 ">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto border border-gray-300 border-l-0 rounded-sm">
          <Select>
            <SelectTrigger className="w-[60px] xs:w-[70px] sm:w-[79px] h-8 px-2 border-r border-r-gray-300 rounded-l-sm text-xs sm:text-sm">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[80px] xs:w-[100px] sm:w-[136px] h-8 px-2 border-r border-r-gray-300 text-xs sm:text-sm">
              <SelectValue placeholder="Export" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PDF">PDF</SelectItem>
              <SelectItem value="Excel">Excel</SelectItem>
              <SelectItem value="CSV">CSV</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[110px] xs:w-[140px] sm:w-[180px] h-8 px-2 rounded-r-sm text-xs sm:text-sm">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="min-w-[120px] xs:min-w-[140px] sm:min-w-[160px]">
              <SelectItem className="flex items-center gap-2" value="Ascending">
                <PiSortAscendingFill className="text-[14px] sm:text-[16px]" />
                Ascending
              </SelectItem>
              <SelectItem
                className="flex items-center gap-2"
                value="Descending"
              >
                <PiSortDescendingFill className="text-[14px] sm:text-[16px]" />
                Descending
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative flex items-center w-full border border-gray-300 border-r-0 rounded-l-sm sm:w-[235px] h-8">
          <Input
            id="text"
            type="search"
            placeholder="Search..."
            className={`${montserrat.className} mt-2 flex-1 h-full border-none pl-2 pr-8 text-xs sm:text-sm bg-transparent focus-visible:ring-0 focus:outline-none`}
          />

          <BiSolidSearch
            size={16}
            className="absolute right-2 sm:size-[18px]"
          />
        </div>
      </CardContent>

      <div className="w-full px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-[#528DEC] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 md:p-5 rounded-sm">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
              Total Users
            </p>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              150
            </h3>
          </div>

          <div className="bg-[#5CAFA9] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 md:p-5 rounded-sm">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
              Active Users
            </p>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              120
            </h3>
          </div>

          <div className="bg-[#FF7685] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 md:p-5 rounded-sm">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
              Inactive Users
            </p>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              30
            </h3>
          </div>

          <div className="bg-[#E0935A] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 md:p-5 rounded-sm">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
              Admin
            </p>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              5
            </h3>
          </div>
        </div>
      </div>

      <div className=" w-full overflow-x-auto">
        <Table className="w-full mt-4">
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
                <TableCell className="text-sm">
                  This system has been introduced for the systematic
                  classification of goods all over the world.
                </TableCell>
                <TableCell className="text-center">
                  <div
                    className={`flex items-center justify-center gap-[4px] px-[5px] rounded-[1.24px] font-semibold text-white w-[70px] h-[18px] mx-auto text-[8px] leading-[100%] font-[Montserrat] ${
                      row.status === "Active" ? "bg-[#5CAFA9]" : "bg-[#FF7685]"
                    }`}
                  >
                    <span className="tracking-[0%]">{row.status}</span>

                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={row.status === "Active"}
                        readOnly
                      />
                      <div className="w-[24px] h-[12px] bg-white rounded-full relative peer-focus:outline-none transition-all">
                        <div
                          className={`absolute top-[1px] left-[1px] w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                            row.status === "Active"
                              ? "translate-x-[12px] bg-[#E09B52]"
                              : "bg-[#4B2E05]"
                          }`}
                        ></div>
                      </div>
                    </label>
                  </div>
                </TableCell>

                <TableCell className="flex flex-row text-center">
                  <PiPencilSimpleLineFill
                    size={20}
                    className="hover:text-[#e0935a] cursor-pointer"
                  />
                  <RiDeleteBin5Fill
                    size={20}
                    className="hover:text-[#e0935a] cursor-pointer ml-2"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <CardFooter className="flex flex-col sm:flex-row justify-between w-full border-t border-t-gray-300 mt-auto mb-0 pt-1 pb-0">
        <p
          className={`${montserrat.className} text-xs sm:text-sm text-gray-600`}
        >
          Showing 1 To 9 Of 9 Entries
        </p>

        <Pagination>
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
      </CardFooter>
    </AdminCard>
  );
}
