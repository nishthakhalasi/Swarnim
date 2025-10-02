"use client";

import React, { useState } from "react";
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
import OtpInput from "react-otp-input";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function OtpPage() {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex items-center justify-center min-h-[90vh] px-4">
      <Card className="w-full max-w-[537px] h-auto p-5 gap-6 border border-[#BFBFBF] rounded-[10px] bg-white shadow-bottom-left sm:p-6 md:p-8">
        <CardHeader className="items-center justify-center mt-[5px] mb-[5px]">
          <CardTitle
            className={`${montserrat.className} font-medium text-[32px] leading-[100%] text-center`}
          >
            Enter OTP
          </CardTitle>

          <CardDescription
            className={`${montserrat.className}flex justify-center font-normal rounded-xs text-[12px] leading-[20px] tracking-[0%] text-center mt-5`}
          >
            We sent a 6-digit OTP to your email user@example.com. Need to
            update?
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center items-center">
          <form className="flex flex-col gap-6 items-center w-full">
            <div className="flex justify-center gap-2 w-full max-w-[500px]">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="w-6" />}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="flex-1 min-w-[50px] h-[50px] border border-[#BFBFBF]  text-center text-lg outline-none focus:border-[#E0935A]"
                  />
                )}
              />
            </div>

            <div className="flex items-center justify-center">
              <span
                className={`${montserrat.className} font-normal text-[16px] text-center`}
              >
                If you don&apos;t receive the code?{" "}
                <span className="text-gold font-bold">00:30</span>
              </span>
            </div>

            <Button
              type="submit"
              className={`${montserrat.className} w-full sm:w-[457px] h-[50px] bg-gold border-none text-amber-50 font-bold text-[16px] uppercase`}
            >
              Verify OTP
            </Button>

            <div className="flex justify-center items-center gap-2 w-[335px] mx-auto">
              <span
                className={`${montserrat.className} font-normal text-[16.27px] leading-[20px]`}
              >
                Back to?
              </span>
              <Link href="/login" className="text-gold font-bold">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
