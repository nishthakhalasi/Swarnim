"use client";

import React, { useState } from "react";
import Input from "@/components/ui/input";
import { TbEyeFilled } from "react-icons/tb";
import { IoEyeOff } from "react-icons/io5";

interface PasswordInputProps {
  id?: string;
  placeholder?: string;
  className?: string;
}

export default function PasswordInput({
  id = "password",
  placeholder = "Password",
  className = "",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={`w-full pr-10 ${className}`}
      />

      <div
        className="absolute right-3 top-1/3 -translate-y-1/2s cursor-pointer text-gray-800"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <IoEyeOff size={22} /> : <TbEyeFilled size={22} />}
      </div>
    </div>
  );
}
