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
import Link from "next/link";
import PasswordInput from "@/components/ui/passwordInput";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function ChangePassword() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] px-4 sm:px-6 md:px-8">
      <Card className="w-full max-w-[537px] h-auto p-4 sm:p-6 md:p-8 gap-6 border border-whiteB rounded-[10px] bg-white shadow-bottom-left">
        <CardHeader className="items-center justify-center  text-center">
          <CardTitle
            className={`${montserrat.className} font-medium text-[32px] leading-[100%] tracking-[0%] text-center`}
          >
            Change Passwords?
          </CardTitle>

          <CardDescription
            className={`${montserrat.className} font-normal text-[12px] leading-[20px] tracking-[0%] text-center`}
          >
            Enter a new account password below to change your password.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center items-center">
          <form className="w-full  flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-3 w-full">
              <PasswordInput
                className="w-full max-w-[340px] rounded-[2px]"
                placeholder="New password"
              />
              <PasswordInput
                className="w-full max-w-[340px] rounded-[2px]"
                placeholder="Re-enter new password"
              />
            </div>

            <span
              className={`${montserrat.className} pl-10 pr-7 font-normal text-[11px] leading-[20px] tracking-[0%]`}
            >
              Password must be at least 8 characters with a mix of letters,
              numbers, and symbols. (such as !, @, #, % etc.)
            </span>

            {/* Reset Button */}
            <Button
              className={`${montserrat.className}  w-full sm:w-[90%] md:w-[457px] h-[45px] sm:h-[50px] p-3 sm:p-[15px] rounded-[2px] bg-gold border-none text-amber-50 font-bold text-sm sm:text-[16px] uppercase mx-auto  hover:bg-gold hover:text-white`}
            >
              Reset Password
            </Button>

            {/* Back to Login */}
            <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 w-full px-2 sm:px-0">
              <span
                className={`${montserrat.className} font-normal text-sm sm:text-[16px] leading-[18px] text-center`}
              >
                Back to?
              </span>
              <Link
                href="/login"
                className="text-gold font-bold text-sm sm:text-[16px]"
              >
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
