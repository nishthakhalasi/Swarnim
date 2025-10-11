"use client";

import React, { useState } from "react";
import Input from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

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
        className="w-full pr-10"
      />

      <div
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-800"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
      </div>
    </div>
  );
}
