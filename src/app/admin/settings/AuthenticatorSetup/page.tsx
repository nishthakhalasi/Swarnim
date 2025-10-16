"use client";

import { Button } from "@/components/ui/button";
import { Aleo, Montserrat } from "next/font/google";
import AdminCard from "@/components/ui/adminCard";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoPlay } from "react-icons/io5";
import { useState } from "react";
import OTPInput from "react-otp-input";
import Image from "next/image";
import scanner from "@/img/scanner.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const aleo = Aleo({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AuthenticatorSetup() {
  const [isChecked, setIsChecked] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    if (checked) {
      setShowOtpModal(true);
    } else {
      setShowOtpModal(false);
    }
  };

  return (
    <AdminCard>
      <CardHeader className="flex flex-col sm:flex-row justify-between w-full p-0">
        <div className="flex flex-col sm:flex-col sm:items-start gap-1">
          <h2
            className={`${montserrat.className} font-bold text-[16px] leading-[20px] tracking-[0px] uppercase text-gray-700`}
          >
            AUTHENTICATOR SETUP
          </h2>

          <p
            className={`${montserrat.className} flex flex-row font-normal text-[12px] leading-[100%] tracking-[0px] capitalize text-gray-600`}
          >
            Settings / Authenticator Setup /{" "}
            <span className="text-gold">MFA</span>
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 items-center justify-end mt-2 sm:mt-0">
          <Button className="bg-gold hover:bg-[#e07d10] text-white px-3 sm:px-4 md:px-5 py-2 rounded text-sm sm:text-base whitespace-nowrap">
            GENERATE
          </Button>
        </div>
      </CardHeader>
      <div className="w-full h-screen">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-12 sm:col-span-2 border border-gray-300 relative p-5">
            <div className="flex justify-between items-center w-full max-w-sm p-4 bg-[#EBEEF2] border border-gray-300 rounded">
              <h1
                className={`${montserrat.className} font-bold text-sm sm:text-base`}
              >
                MFA
              </h1>
              <IoPlay size={24} />
            </div>
          </div>

          <div className="col-span-12 sm:col-span-10 border border-gray-300 border-l-0 overflow-x-auto">
            <div
              className="
      relative md:relative
      w-full md:w-[1545px] max-w-full
      border border-gray-300 border-l-0 border-t-0
      p-3 sm:p-4
      flex items-center gap-2 sm:gap-3
      bg-white
    "
            >
              <span
                className={`${montserrat.className} font-bold text-[14px] sm:text-[16px] md:text-[20px] leading-[100%] tracking-normal`}
              >
                Multi-factor authentication (MFA)
              </span>
            </div>
            <div
              className="
     w-full max-w-full md:max-w-[1510px] mt-4
    border border-gray-300
    flex items-center justify-between
    p-[10px] sm:p-[15px] md:p-[20px]
    bg-white
    rounded-md
    mx-auto
  "
            >
              <div className="flex flex-col gap-1">
                <span
                  className={`${montserrat.className} font-semibold text-[12px] sm:text-[16px] md:text-[18px] leading-[100%] tracking-normal`}
                >
                  Google Authentication Setup
                </span>
                <span
                  className={`${aleo.className} font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] tracking-normal`}
                >
                  With each login, you will receive a confirmation code to your
                  email address. Your koffeekodes@gmail.com email will be used
                  for this authentication.
                </span>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div className="w-[24px] h-[12px] bg-gray-300 rounded-full relative peer-focus:outline-none transition-all">
                  <div
                    className={`absolute top-[1px] left-[1px] w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                      isChecked ? "translate-x-[12px] bg-gold" : "bg-black"
                    }`}
                  ></div>
                </div>
              </label>
              {/* OTP Modal */}
              {showOtpModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/75 z-50 p-4 sm:p-6 overflow-auto">
                  <div className="absolute justify-center items-center w-full max-w-[600px] h-[620px] bg-gray-200 rounded-xl border-none"></div>

                  <Card className="relative w-full max-w-[560px] h-[520px] bg-white border-none mb-16 rounded-xl mx-auto ">
                    <CardHeader className="items-center justify-center  text-center">
                      <CardTitle
                        className={`${montserrat.className} font-medium text-[32px] leading-[100%] tracking-normal text-center capitalize`}
                      >
                        Two-Factor Authentication
                      </CardTitle>

                      <CardDescription
                        className={`${montserrat.className} font-normal text-[12px] sm:text-[12px] md:text-[12px] leading-[20px] tracking-normal text-center`}
                      >
                        Add an extra layer of security by linking an
                        authenticator app.
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <form className="flex flex-col gap-4 sm:gap-6 items-center w-full">
                        <Image
                          src={scanner}
                          alt="scanner"
                          width={155}
                          height={155}
                        />

                        <span
                          className={`${montserrat.className} font-normal text-[12px] sm:text-[12px] md:text-[12px] leading-[20px] tracking-normal text-center block`}
                        >
                          Scan this QR with Google Authenticator / Auth.
                        </span>

                        <h1
                          className={`${montserrat.className} font-medium text-[32px] sm:text-[36px] md:text-[40px] leading-[100%] tracking-normal text-center`}
                        >
                          Enter OTP
                        </h1>

                        <div className="flex justify-center gap-2 w-full max-w-[100%] sm:max-w-[500px] px-2 sm:px-0">
                          <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={
                              <span className="w-1 sm:w-3 md:w-6" />
                            }
                            renderInput={(props) => (
                              <input
                                {...props}
                                className="flex-1 min-w-[40px] sm:min-w-[45px] md:min-w-[60px] h-[45px] sm:h-[50px] md:h-[60px] border border-whiteB text-center text-base sm:text-lg md:text-xl outline-none focus:border-[#E0935A] rounded"
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
                      </form>
                    </CardContent>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
                      <Button
                        onClick={() => {
                          setShowOtpModal(false);
                          setIsChecked(false);
                        }}
                        className={`w-full sm:w-[270px] h-[40px] py-[11px] mt-2 bg-transparent border border-gold rounded text-xs sm:text-[12px] font-bold uppercase text-gold ${montserrat.className}`}
                      >
                        CANCEL
                      </Button>

                      <Button
                        className={`w-full sm:w-[270px] h-[40px] py-[11px] mt-2 border border-gold rounded text-xs sm:text-[12px] font-bold uppercase bg-gold text-white ${montserrat.className} hover:bg-[#d38b45] hover:text-white`}
                      >
                        SUBMIT
                      </Button>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
