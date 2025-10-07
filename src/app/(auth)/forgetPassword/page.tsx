import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function ForgetPassword() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] px-4 ">
      <Card className="w-full max-w-[537px] h-auto p-5 gap-6 border border-[#BFBFBF] rounded-[10px] bg-white shadow-bottom-left sm:p-6 md:p-8">
        <CardHeader className="items-center justify-center mt-[20px] mb-[20px]">
          <CardTitle
            className={`${montserrat.className} font-medium text-[32px] leading-[100%]  tracking-[0%] text-center mb-5`}
          >
            Forgot Passwords?
          </CardTitle>

          <CardDescription
            className={`${montserrat.className} font-normal text-[12px] leading-[100%] tracking-[0%] text-center`}
          >
            Forgot your password? No worries! Just set a new one below to get
            back into your dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="User Name / Email ID"
                  required
                  className={`w-full sm:w-[457px] h-[48px] px-4 sm:px-[18px] py-[14px] font-normal text-[16px] leading-[100%] tracking-[0%] border border-[#BFBFBF] rounded-[2px] mb-5`}
                />
              </div>
            </div>
            <Button className="w-full sm:w-[457px] h-[50px] p-[15px] rounded-[2px] bg-gold border-none text-amber-50 font-bold text-[16px] uppercase mb-5">
              Send Reset Code
            </Button>

            <span
              className={`${montserrat.className} font-normal text-[16px] pl-44 leading-[100%]`}
            >
              Back to?
            </span>
            <Link href="/login" className="text-gold font-semibold">
              Login
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
