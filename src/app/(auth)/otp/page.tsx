import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center">
      <Card className="absolute top-[200px]  w-[537px] h-[356px] p-[20px] gap-[10px] border-[#BFBFBF] rounded-[10px]  bg-white shadow-bottom-left">
        <CardHeader className="items-center justify-center mt-[20px] mb-[20px]">
          <CardTitle
            className={`${montserrat.className} font-medium text-[32px] leading-[100%]  tracking-[0%] text-center`}
          >
            Enter OTP
          </CardTitle>

          <CardDescription
            className={`${montserrat.className} font-normal text-[12px] leading-[100%] tracking-[0%] text-center mt-5`}
          >
            We sent a 6-digit OTP to your email user@example.com. Need to
            update?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <form className="flex flex-col gap-6 items-center">
            <div className="flex gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-[50px] h-[50px] border rounded-[2px] text-center text-lg outline-none focus:border-[#E0935A]"
                />
              ))}
            </div>

            <div className="flex items-center justify-center">
              <span
                className={`${montserrat.className} font-normal text-[16.27px] leading-[100%] text-center`}
              >
                If you don&apos;t receive the code?{" "}
                <span className="text-[#E0935A]">00:30</span>
              </span>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col  gap-[8.14px]">
          <Button
            className={`${montserrat.className} w-[457px] h-[50px] p-[15px] rounded-[2px] bg-[#E0935A] border-none text-amber-50 font-bold text-[16px] leading-[100%] tracking-[0.02em] text-center uppercase mb-3`}
          >
            Verify OTP
          </Button>
          <div className="flex justify-between items-center">
            <span
              className={`${montserrat.className} font-normal text-[16.27px] leading-[100%] `}
            >
              Back to?
            </span>
            <Link href="/login" className="text-[#E0935A]">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
