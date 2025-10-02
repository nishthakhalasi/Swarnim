import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
            Hi Welcome!
          </CardTitle>

          <CardDescription
            className={`${montserrat.className} font-normal text-[12px] leading-[100%] tracking-[0%] text-center`}
          >
            Login to manage your account
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
                  className={` ${montserrat.className} w-full sm:w-[457px] h-[48.08px] px-[18px] py-[14px] gap-[10px]  font-normal text-[24px] leading-[100%] tracking-[0%] border border-[#BFBFBF] rounded-[2px] opacity-100 `}
                />
              </div>

              <div className="relative  w-full sm:w-[457px]">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  className={`${montserrat.className} w-full h-[52px] px-[18px] py-[14px] pr-10 font-normal text-[22px] sm:text-[24px] leading-[120%] border border-[#BFBFBF] rounded-[4px]`}
                />

                <Image
                  src="/Eye.png"
                  alt="Show password"
                  width={25}
                  height={25}
                  className="absolute inset-y-0 right-3 my-auto cursor-pointer"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-[457px] justify-between mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    value="remember"
                    className="w-[19.52px] h-[18.77px] border border-[#BFBFBF] rounded data-[state=checked]:bg-[#E0935A] data-[state=checked]:border-[#E0935A] data-[state=checked]:text-amber-50"
                  />
                  <label
                    htmlFor="remember"
                    className={`${montserrat.className} font-normal text-[12px] leading-[100%] tracking-[0%] select-none`}
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  href="/otp"
                  className={`${montserrat.className} font-bold text-[12px] leading-[100%] tracking-[0%] underline-offset-4 hover:underline`}
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                className={`${montserrat.className} w-full sm:w-[457px] h-[50px] p-[15px] rounded-[2px] bg-[#E0935A] border-none text-amber-50 font-bold text-[16px] leading-[100%] tracking-[0.02em] text-center uppercase`}
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
