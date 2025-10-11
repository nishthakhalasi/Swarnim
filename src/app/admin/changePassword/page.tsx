"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Montserrat } from "next/font/google";
import PasswordInput from "@/components/ui/passwordInput";
import AdminNavbar from "@/components/ui/adminNavbar";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function ChangePassword() {
  return (
    <>
      <AdminNavbar />

      <div className="fixed inset-0 flex items-center justify-center bg-black/75 backdrop-blur-sm z-50">
        <div className="absolute justify-center items-center w-full max-w-[547px] h-[448px] bg-gray-200 rounded-none border-none"></div>
        <Card className="relative w-full max-w-[507px] h-[350px] p-5 gap-6 bg-white rounded-none border-none mb-16">
          <CardHeader className="flex flex-col items-center justify-center gap-2">
            <CardTitle
              className={`${montserrat.className} font-medium text-[32px] text-center capitalize`}
            >
              Change your password
            </CardTitle>

            <CardDescription
              className={`${montserrat.className} font-normal text-[11px] leading-[14px] text-center max-w-[467px]`}
            >
              Enter a new account password below to change your password. If you
              don&apos;t reset a new password, you won&apos;t be able to access
              your dashboard.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col justify-center items-center gap-4">
            <form className="flex flex-col items-center gap-4">
              <PasswordInput
                placeholder="Existing Password"
                className="w-[283px]  border border-gray-400 rounded-[2px] text-[14px] text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-gray-600 px-3 py-2"
              />
              <PasswordInput
                placeholder="New Password"
                className="w-[283px] h-[30px] border border-gray-400 rounded-[2px] text-[14px] focus:outline-none focus:border-gray-600 px-3 py-2"
              />
              <PasswordInput
                placeholder="Confirm New Password"
                className="w-[283px] h-[30px] border border-gray-400 rounded-[2px] text-[14px] focus:outline-none focus:border-gray-600 px-3 py-2"
              />
            </form>

            <span
              className={`${montserrat.className} font-normal text-[11px] leading-[14px] text-center max-w-[467px] mb-5`}
            >
              A secure password has at least 8 characters and contains uppercase
              letters, lowercase letters, numerals, and special characters (such
              as !, @, #, %).
            </span>
          </CardContent>

          <Button
            className={`${montserrat.className} w-full max-w-[457px] h-[50px] bg-gold text-amber-50 font-bold text-[16px] uppercase`}
          >
            SUBMIT
          </Button>
        </Card>
      </div>
    </>
  );
}
