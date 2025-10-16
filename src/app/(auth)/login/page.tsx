"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/loading";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Input from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import PasswordInput from "@/components/ui/passwordInput";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function LoginPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center min-h-[90vh] px-4">
      <Card className="w-full max-w-[537px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] p-5 sm:p-6 md:p-8 gap-6 border border-whiteB rounded-[10px] bg-white shadow-bottom-left">
        <CardHeader className="flex flex-col items-center justify-center pt-4">
          <CardTitle
            className={`${montserrat.className} font-medium text-[28px] sm:text-[30px] md:text-[32px] leading-[100%] tracking-[0%] text-center`}
          >
            Hi Welcome!
          </CardTitle>

          <CardDescription
            className={`${montserrat.className} font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[100%] tracking-[0%] text-center`}
          >
            Login to manage your account
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center items-center">
          <form className="w-full">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4 w-full">
                <Input
                  id="Email"
                  type="email"
                  placeholder="User Name / Email ID"
                  className="w-full"
                />

                <PasswordInput
                  placeholder="Password"
                  className={`${montserrat.className}w-full max-w-[490px] py-3 font-normal text-[16px] sm:text-[15px] md:text-[16px] placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 w-full">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    value="remember"
                    className="w-[20px] h-[20px] border border-gray-400 rounded data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-amber-50 flex justify-center items-center"
                  />
                  <label
                    htmlFor="remember"
                    className={`${montserrat.className} font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[100%] tracking-[0%] select-none`}
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  href="/forgetPassword"
                  className={`${montserrat.className} font-bold text-[12px] sm:text-[13px] md:text-[14px] leading-[100%] tracking-[0%] hover:text-gold`}
                >
                  Forgot Password?
                </Link>
              </div>

              <Button
                className={`${montserrat.className} w-full h-[50px] p-[15px] rounded-[4px] bg-gold border-none text-white font-bold text-[16px] sm:text-[15px] md:text-[16px] leading-[100%] tracking-[0.02em] text-center uppercase hover:bg-gold hover:text-white`}
              >
                LOGIN
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
