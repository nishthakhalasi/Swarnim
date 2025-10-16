"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Aleo, Montserrat } from "next/font/google";
import AdminCard from "@/components/ui/adminCard";
import { CardHeader } from "@/components/ui/card";
import Input from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@radix-ui/react-select";
import { SelectItem } from "@/components/ui/select";
import { Checkbox, CheckboxIndicator } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { FaCaretDown } from "react-icons/fa6";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const aleo = Aleo({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function EmailSMTP() {
  const [activeTab, setActiveTab] = useState<"general" | "email">("general");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [useTLS, setUseTLS] = useState(true);
  const [useSSL, setUseSSL] = useState(false);
  const [useDefaultConfig, setUseDefaultConfig] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setUseDefaultConfig(checked);
    setShowOtpModal(checked);
  };
  const handleReset = () => {
    setShowOtpModal(false);
    setUseDefaultConfig(false);
  };
  return (
    <AdminCard>
      <CardHeader className="flex flex-col sm:flex-row justify-between w-full p-0">
        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-col sm:flex-col sm:items-start gap-2">
            <h2
              className={`${montserrat.className} font-bold text-[18px] leading-[20px] tracking-[0px] uppercase text-gray-700`}
            >
              SMTP EMAIL CONFIGURATION
            </h2>

            <p
              className={`${montserrat.className} flex flex-row font-normal text-[12px] leading-[100%] tracking-[0px] capitalize text-gray-600`}
            >
              Settings /SMTP Email Configuration /{" "}
              <span className="text-gold">MFA</span>
            </p>
          </div>

          {showOtpModal && (
            <div className="ml-auto flex gap-2">
              <Button className="bg-gold text-white py-1 px-3 text-[12px] font-bold uppercase hover:bg-[#e07d10]">
                Submit
              </Button>
              <Button
                onClick={handleReset}
                className="border border-gold text-gold py-1 px-3 text-[12px] font-bold uppercase hover:bg-gray-100"
              >
                Reset
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      {/* Main Grid */}
      <div className="w-full h-screen overflow-auto">
        <div className="grid grid-cols-12 h-full">
          {/* Sidebar Tabs */}
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 flex flex-col items-center border border-gray-300 p-4 sm:p-5 bg-white rounded-md mx-auto w-full ">
            <Button
              className={`w-full max-w-[300px] h-[45px] sm:h-[47px] flex justify-center items-center border border-gray-300 border-b-0  font-[Montserrat] font-bold text-[13px] sm:text-[14px] leading-none transition ${
                activeTab === "general" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("general")}
            >
              General Setting
            </Button>
            <Button
              className={`w-full max-w-[300px] h-[45px] sm:h-[47px] flex justify-center items-center border border-gray-300  font-[Montserrat] font-bold text-[13px] sm:text-[14px] leading-none transition ${
                activeTab === "email" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("email")}
            >
              Email Settings
            </Button>
          </div>

          {/* Main Content */}
          <div className="col-span-12 sm:col-span-10 border border-gray-300 border-l-0 overflow-x-auto relative">
            {/* Email Settings Title */}
            {activeTab === "email" && (
              <div className="relative md:relative w-full md:w-[1545px] max-w-full border border-gray-300 border-l-0 border-t-0 p-3 sm:p-4 flex items-center gap-2 sm:gap-3 bg-white">
                <span
                  className={`${montserrat.className} font-bold text-[14px] sm:text-[16px] md:text-[20px] leading-[100%] tracking-normal`}
                >
                  Email Settings
                </span>
              </div>
            )}

            {/* General Settings Content */}
            {activeTab === "general" && (
              <div className="p-4">
                <h3 className={`${montserrat.className} font-bold text-lg`}>
                  General Settings Panel
                </h3>
                <p className={`${aleo.className} text-sm text-gray-600 mt-2`}>
                  Configure general system settings here.
                </p>
              </div>
            )}

            {/* Email Settings Panel */}
            {activeTab === "email" && (
              <div className="w-full max-w-full md:max-w-[1510px] mt-4 flex flex-col p-[10px] sm:p-[15px] md:p-[20px] bg-white rounded-md mx-auto gap-4">
                {!showOtpModal && (
                  <div className="flex items-center justify-between p-3 border border-gray-300 rounded-md">
                    <div className="flex flex-col gap-1">
                      <span
                        className={`${montserrat.className} font-semibold text-[14px] sm:text-[16px]`}
                      >
                        Email (SMTP Configuration)
                      </span>
                      <span
                        className={`${aleo.className} text-sm sm:text-[13px]`}
                      >
                        Configure email sending service for system
                        notifications, OTPs, and alerts.
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={useDefaultConfig}
                        onChange={handleToggle}
                      />
                      <div className="w-[24px] h-[12px] bg-gray-300 rounded-full relative transition-all">
                        <div
                          className={`absolute top-[1px] left-[1px] w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                            useDefaultConfig
                              ? "translate-x-[12px] bg-gold"
                              : "bg-black"
                          }`}
                        ></div>
                      </div>
                    </label>
                  </div>
                )}

                {/* SMTP Form */}
                {showOtpModal && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-full md:max-w-[915px] px-4 sm:px-0">
                    <Input
                      type="text"
                      placeholder="Email Host"
                      className="w-full h-[35px] sm:h-[40px]"
                    />
                    <Input
                      type="text"
                      placeholder="Email Port"
                      className="w-full h-[35px] sm:h-[40px]"
                    />

                    <Input
                      type="text"
                      placeholder="Email Host User"
                      className="w-full h-[35px] sm:h-[40px]"
                    />
                    <Input
                      type="password"
                      placeholder="Email Host Password"
                      className="w-full h-[35px] sm:h-[40px]"
                    />

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                      <span
                        className={`${montserrat.className} text-[14px] sm:text-[16px]`}
                      >
                        Use TLS
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={useTLS}
                          onChange={(e) => setUseTLS(e.target.checked)}
                        />
                        <div className="w-[24px] h-[12px] bg-gray-300 rounded-full relative">
                          <div
                            className={`absolute top-[1px] left-[1px] w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                              useTLS ? "translate-x-[12px] bg-gold" : "bg-black"
                            }`}
                          />
                        </div>
                      </label>

                      <span
                        className={`${montserrat.className} text-[14px] sm:text-[16px]`}
                      >
                        Use SSL
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={useSSL}
                          onChange={(e) => setUseSSL(e.target.checked)}
                        />
                        <div className="w-[24px] h-[12px] bg-gray-300 rounded-full relative">
                          <div
                            className={`absolute top-[1px] left-[1px] w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                              useSSL ? "translate-x-[12px] bg-gold" : "bg-black"
                            }`}
                          />
                        </div>
                      </label>
                    </div>
                    <br />
                    <Select>
                      <SelectTrigger
                        className={`flex h-[40px] sm:h-[48px] w-full items-center justify-between border border-gray-300 px-2.5 rounded ${montserrat.className} text-[14px] sm:text-[16px]`}
                      >
                        <SelectValue
                          placeholder="Email Type"
                          className="[&[data-placeholder]]:text-gray-300"
                        />
                        <FaCaretDown />
                      </SelectTrigger>
                      <SelectContent
                        className={`bg-white ${montserrat.className}`}
                      >
                        <SelectItem
                          value="GENERAL"
                          className="w-full h-[30px] flex items-center pl-2 text-[11px] font-bold border-l border-r border-t border-gray-300 hover:bg-gray-200"
                        >
                          GENERAL
                        </SelectItem>
                        <SelectItem
                          value="SYSTEM"
                          className="w-full h-[30px] flex items-center pl-2 text-[11px] font-bold border border-gray-300 hover:bg-gray-200"
                        >
                          SYSTEM
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <Input
                      type="email"
                      placeholder="Enter Email"
                      className="w-full h-[35px] sm:h-[40px]"
                    />

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <Checkbox
                        id="remember"
                        value="remember"
                        className="w-[20px] h-[20px] border border-black rounded data-[state=checked]:bg-gold flex justify-center items-center"
                      >
                        <CheckboxIndicator>
                          <Check className="w-4 h-4 text-black" />
                        </CheckboxIndicator>
                      </Checkbox>
                      <label
                        htmlFor="remember"
                        className={`${montserrat.className} text-[12px] sm:text-[14px] select-none`}
                      >
                        Use DefaultConfig
                      </label>
                    </div>
                    <br />

                    <Button className="w-full bg-gold text-white hover:bg-[#e07d10] py-2 text-[12px] sm:text-[14px] font-bold uppercase">
                      SAVE SETTINGS
                    </Button>
                    <Button className="w-full border border-gold text-gold py-2 text-[12px] sm:text-[14px] font-bold uppercase">
                      TEST CONNECTION
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
