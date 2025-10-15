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
import AdminCard from "@/components/ui/adminCard";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function ChangePassword() {
  return (
    <>
      <AdminCard>
        <div className="fixed inset-0 flex items-center justify-center bg-black/75 z-50">
          <div className="absolute justify-center items-center w-full max-w-[547px] h-[460px] bg-gray-200 rounded-none border-none"></div>
          <Card className="relative w-full max-w-[507px] h-[360px] mt-2 p-5 gap-6 bg-white rounded-none border-none mb-16">
            <CardHeader className="flex flex-col items-center justify-center gap-2">
              <CardTitle
                className={`${montserrat.className} font-medium text-[32px] text-center capitalize`}
              >
                Change your password
              </CardTitle>

              <CardDescription
                className={`${montserrat.className} font-light text-[11px] leading-[18px] text-center max-w-[467px]`}
              >
                Enter a new account password below to change your password. If
                you don&apos;t reset a new password, you won&apos;t be able to
                access your dashboard.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form>
                <div className="flex flex-col items-center gap-3 w-full">
                  <PasswordInput
                    className="w-full max-w-[283px] h-[35px] sm:h-[40px] md:h-[45px]  rounded-[2px]"
                    placeholder="Existing Password"
                  />
                  <PasswordInput
                    className="w-full max-w-[283px] h-[35px] sm:h-[40px] md:h-[45px]  rounded-[2px]"
                    placeholder="New password"
                  />
                  <PasswordInput
                    className="w-full max-w-[283px] h-[35px] sm:h-[40px] md:h-[45px] rounded-[2px]"
                    placeholder="Confirm New Password"
                  />
                </div>
              </form>

              <span
                className={`${montserrat.className} font-light text-[11px] text-center max-w-[467px]`}
              >
                A secure password has at least 8 characters and contains
                uppercase letters, lowercase letters, numerals, and special
                characters (such as !, @, #, %).
              </span>
            </CardContent>

            <Button
              className={`${montserrat.className} w-full max-w-[520px] h-[50px] bg-gold text-amber-50 font-bold text-[16px] uppercase`}
            >
              SUBMIT
            </Button>
          </Card>
        </div>
      </AdminCard>
    </>
  );
}
