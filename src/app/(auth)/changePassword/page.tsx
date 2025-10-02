import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] px-4 ">
      <Card className="w-full max-w-[537px] h-auto p-5 gap-6 border border-[#BFBFBF] rounded-[10px] bg-white shadow-bottom-left sm:p-6 md:p-8">
        <CardHeader className="items-center justify-center mt-[20px] mb-[20px]">
          <CardTitle
            className={`${montserrat.className} font-medium text-[32px] leading-[100%]  tracking-[0%] text-center`}
          >
            Change Passwords?
          </CardTitle>

          <CardDescription
            className={`${montserrat.className} font-normal text-[12px] leading-[100%] tracking-[0%] text-center`}
          >
            Enter a new account password below to change your password.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <form>
            <div className="flex flex-col gap-6">
              <div className="relative w-[335px] sm:w-[335px] mx-auto">
                <Input
                  id="password"
                  type="password"
                  placeholder="New password"
                  required
                  className={`${montserrat.className} w-full h-[50px] px-[18px] py-[14px] pr-10 font-normal text-[22px] sm:text-[24px] leading-[120%] border border-[#BFBFBF] rounded-[4px]`}
                />

                <Image
                  src="/Eye.png"
                  alt="Show password"
                  width={25}
                  height={25}
                  className="absolute inset-y-0 right-3 my-auto cursor-pointer"
                />
              </div>

              <div className="relative w-[335px] sm:w-[335px] mx-auto">
                <Input
                  id="password"
                  type="password"
                  placeholder="Re-enter new password "
                  required
                  className={`${montserrat.className} w-full h-[50px] px-[18px] py-[14px] pr-10 font-normal text-[22px] sm:text-[24px] leading-[120%] border border-[#BFBFBF] rounded-[4px]`}
                />

                <Image
                  src="/Eye.png"
                  alt="Show password"
                  width={25}
                  height={25}
                  className="absolute inset-y-0 right-3 my-auto cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-center w-[335px] h-[28px] mx-auto mt-5 mb-5">
              <span
                className={`${montserrat.className} font-normal text-[11px] leading-[14px]  tracking-[0%] text-between`}
              >
                Password must be at least 8 characters with a mix of letters,
                numbers, and symbols. (such as !, S., #, % more..).
              </span>
            </div>

            <Button
              className={`${montserrat.className} mb-5 w-full sm:w-[457px] h-[50px] p-[15px] rounded-[2px] bg-[#E0935A] border-none text-amber-50 font-bold text-[16px] leading-[100%] tracking-[0.02em] text-center uppercase`}
            >
              Reset Password
            </Button>

            <div className="flex justify-center items-center gap-2 w-[335px] mx-auto">
              <span
                className={`${montserrat.className} font-normal text-[16.27px] leading-[20px]`}
              >
                Back to?
              </span>
              <Link href="/login" className="text-[#E0935A] font-bold">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
