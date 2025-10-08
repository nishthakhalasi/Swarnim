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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AdminNavbar from "@/components/ui/adminNavbar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Edit, Eye, Trash2 } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import AdminCard from "@/components/ui/adminCard";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
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
    <div className="flex flex-col min-h-[90vh] bg-gray-100 ">
      <AdminNavbar />
      <AdminCard className="mt-7">
        <div className="flex justify-between mb-4 w-full">
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

        <div className="left-6 w-[1872px] h-[30px] flex justify-between items-center bg-gray-200 p-2 opacity-100 border-[2px] border-gray-300 ">
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

        <div className="flex flex-row justify-start gap-[10px] h-[97px] w-[1243px] p-[20px] ">
          <div className="bg-[#3C91E6]  text-white w-[500px] h-[70px] flex flex-row justify-between items-center p-5 rounded-[2px] shadow-md">
            <p className="font-montserrat font-bold text-[14px] leading-[100%]">
              Total Users
            </p>
            <h3 className="font-montserrat font-bold text-[20px] leading-[100%]">
              150
            </h3>
          </div>

          <div className="bg-[#57C478] text-white w-[500px] h-[70px] flex flex-row justify-between items-center p-5 rounded-[2px] shadow-md">
            <p className="text-base font-semibold">Active Users</p>
            <h3 className="text-2xl font-bold">120</h3>
          </div>

          <div className="bg-[#E8505B] text-white w-[500px] h-[70px] flex flex-row justify-between items-center p-5 rounded-[2px] shadow-md">
            <p className="text-base font-semibold">Inactive Users</p>
            <h3 className="text-2xl font-bold">30</h3>
          </div>

          <div className="bg-[#F4A261] text-white w-[500px] h-[70px] flex flex-row justify-between items-center p-5 rounded-[2px] shadow-md">
            <p className="text-base font-semibold">Admin</p>
            <h3 className="text-2xl font-bold">5</h3>
          </div>
        </div>

        {/* <div className="overflow-x-auto mt-20">
          <Table>
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
                  <TableHead key={header}>{header}</TableHead>
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
                    classification of goods all over the world.
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`text-xs ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <button className="text-gray-700 hover:text-blue-500">
                      <Eye size={16} />
                    </button>
                    <button className="text-gray-700 hover:text-yellow-500">
                      <Edit size={16} />
                    </button>
                    <button className="text-gray-700 hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              {[1, 2, 3, 4, 5].map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink isActive={p === 2}>{p}</PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        </div> */}
      </AdminCard>
    </div>
  );
}
