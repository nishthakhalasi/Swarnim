"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import AdminNavbar from "@/components/ui/adminNavbar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import AdminCard from "@/components/ui/adminCard";
import { Label } from "@/components/ui/label";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function DashboardPage() {
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
    <div className="flex flex-col min-h-[90vh] bg-gray-100 overflow-x-hidden">
      <AdminNavbar />

      <AdminCard className="mt-7">
        <div className="flex justify-between mb-4 w-full p-2.5">
          <div>
            <h2 className="text-lg font-bold text-gray-700 ">
              USER MANAGEMENT
            </h2>
            <p
              className={`${montserrat.className} text-[10px] font-normal capitalize leading-[100%] tracking-[0%] text-gray-600`}
            >
              Dashboard / Settings / Users
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-[30px] h-[30px] border border-gray-300 rounded-[2px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
              <Image src="/filter.png" width={16} height={16} alt="Filter" />
            </div>

            <div className="w-[30px] h-[30px] border border-gray-300 rounded-[2px] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
              <Image src="/refresh.png" width={16} height={16} alt="Refresh" />
            </div>

            <Button className="bg-[#F38E21] hover:bg-[#e07d10] text-white px-5 py-2 rounded">
              ADD
            </Button>
          </div>
        </div>

        <div className="w-full h-[30px] flex justify-between items-center bg-gray-200 p-2 opacity-100 border-[2px] border-gray-300 ">
          <div className="flex items-center h-[30px]">
            <Select>
              <SelectTrigger className="w-[79px] h-full px-[5px] border-r border-gray-400">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[136px] h-full px-[5px] border-r border-gray-400">
                <SelectValue placeholder="Export" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CSV">CSV</SelectItem>
                <SelectItem value="Excel">Excel</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[136px] h-full px-[5px] border-r border-gray-400">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Name">Name</SelectItem>
                <SelectItem value="Status">Status</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative w-[235px] h-[30px] border-l  border-gray-400">
            <Input
              placeholder="Search..."
              className={`${montserrat.className} w-full h-full border-none pr-8 text-[6px] placeholder:text-[12px] font-normal leading-[100%] tracking-[0%]`}
            />

            <Image
              src="/search.png"
              alt="search"
              width={15}
              height={15}
              className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-x-4 pt-4">
            <div className="bg-[#3C91E6]  text-white w-full flex justify-between items-center p-5 rounded-[2px] ">
              <p className="text-xl font-semibold">Total Users</p>
              <h3 className="text-2xl font-bold">150</h3>
            </div>

            <div className="bg-[#57C478] text-white w-full flex  justify-between items-center p-5 rounded-[2px]">
              <p className="text-xl font-semibold">Active Users</p>
              <h3 className="text-2xl font-bold">120</h3>
            </div>

            <div className="bg-[#E8505B] text-white w-full flex justify-between items-center p-5 rounded-[2px] ">
              <p className="text-xl font-semibold">Inactive Users</p>
              <h3 className="text-2xl font-bold">30</h3>
            </div>

            <div className="bg-[#F4A261] text-white w-full  flex justify-between items-center p-5 rounded-[2px] ">
              <p className="text-xl font-semibold">Admin</p>
              <h3 className="text-2xl font-bold">5</h3>
            </div>
          </div>
        </div>

        <Table className="w-full mt-3">
          <TableHeader>
            <TableRow>
              {[
                "SR NO.",
                "NAME",
                "EMAIL",
                "CONTACT NUMBER",
                "USER NAME",
                "ROLE",
                "DESCRIPTION",
                "STATUS",
                "ACTION",
              ].map((header) => (
                <TableHead key={header} className="font-bold text-xs ">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{`0${i + 1}`}</TableCell>
                <TableCell>NIDHI</TableCell>
                <TableCell>Nidhi123@gmail.com</TableCell>
                <TableCell>8746297492</TableCell>
                <TableCell>NIDHI</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  This system has been introduced for the systematic
                  classification of goods all over the world. the accuracy of
                  import and export data.
                </TableCell>
                <TableCell>
                  <div
                    className={`flex items-center justify-between w-[130px] p-1 pl-2 pr-2 rounded-[2px] font-bold text-white ${
                      row.status === "Active" ? "bg-[#5CAFA9]" : "bg-[#FF7685]"
                    }`}
                  >
                    <span className="text-[12px] uppercase ">{row.status}</span>

                    <Label className="inline-flex items-center  cursor-pointer">
                      <Input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked={row.status === "Active"}
                      />

                      <div
                        className={`relative w-9 h-5 rounded-full peer bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4  after:rounded-full after:transition-all after:bg-black peer-checked:after:bg-orange-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full`}
                      />
                    </Label>
                  </div>
                </TableCell>

                <TableCell className="border-l border-l-gray-300">
                  <div className="flex items-center justify-center gap-4 pl-4">
                    <button className="text-[#2C2C2C] hover:text-[#F4B400]">
                      <PiPencilSimpleLineFill size={20} />
                    </button>

                    <button className="text-[#2C2C2C] hover:text-[#D32F2F] pr-4 pl-4">
                      <RiDeleteBin5Fill size={20} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center mt-36 h-[50px] pl-4 w-full border-t border-t-gray-300">
          <p
            className={`${montserrat.className}font-normal text-[12px] leading-[17px] tracking-[0.02em] capitalize text-gray-600`}
          >
            Showing 1 To 9 Of 9 Entries
          </p>

          <Pagination className="w-auto">
            <PaginationPrevious />
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
            <PaginationNext />
          </Pagination>
        </div>
      </AdminCard>
    </div>
  );
}
