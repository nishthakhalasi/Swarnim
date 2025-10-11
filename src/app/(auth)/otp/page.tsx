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
    <div className="flex items-center justify-center min-h-[90vh] px-4 ">
      <Card className="w-full max-w-[537px] h-auto p-5 gap-6 border border-whiteB rounded-[10px] bg-white shadow-bottom-left sm:p-6 md:p-8">
        <CardHeader className="items-center justify-center  text-center">
          <CardTitle
            className={`${montserrat.className} font-medium text-2xl sm:text-3xl md:text-4xl leading-tight`}
          >
            Enter OTP
          </CardTitle>

          <CardDescription
            className={`${montserrat.className} font-normal text-[11px]`}
          >
            We sent a 6-digit OTP to your email <br className="sm:hidden" />{" "}
            user@example.com. Need to update?
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center items-center">
          <form className="flex flex-col gap-4 sm:gap-6 items-center w-full">
            {/* OTP Input */}
            <div className="flex justify-center gap-2 w-full max-w-[100%] sm:max-w-[500px] px-2 sm:px-0">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="w-1 sm:w-3 md:w-6" />}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="
                      flex-1
                      min-w-[35px] sm:min-w-[40px] md:min-w-[50px]
                      h-[40px] sm:h-[45px] md:h-[50px]
                      border border-whiteB
                      text-center text-base sm:text-lg md:text-xl
                      outline-none
                      focus:border-[#E0935A]
                      rounded
                    "
                  />
                )}
              />
            </div>

            {/* Timer */}
            <div className="flex items-center justify-center">
              <span
                className={`${montserrat.className} font-normal text-sm sm:text-[16px] text-center`}
              >
                If you don&apos;t receive the code?{" "}
                <span className="text-gold font-bold">00:30</span>
              </span>
            </div>

            {/* Verify Button */}
            <Button
              type="submit"
              className={`${montserrat.className} w-full sm:w-[90%] md:w-[457px] h-[45px] sm:h-[50px] bg-gold border-none text-amber-50 font-bold text-sm sm:text-[16px] uppercase  hover:bg-gold hover:text-white`}
            >
              Verify OTP
            </Button>

            {/* Back to Login */}
            <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 w-full sm:w-auto ">
              <span
                className={`${montserrat.className} font-normal text-sm sm:text-[16px] leading-[18px]`}
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
