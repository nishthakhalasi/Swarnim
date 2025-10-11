import { Montserrat } from "next/font/google";
import React, { InputHTMLAttributes } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500"] });

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string;
  touched?: boolean;
}

const Input = ({
  errors,
  touched = false,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className="w-full mb-2 flex flex-col gap-2">
      <input
        {...props}
        className={`
          ${montserrat.className}
          w-full
          font-normal
          text-[14px] sm:text-[15px] md:text-[16px] 
          leading-[100%]
          tracking-[0%]
          h-[42px] sm:h-[46px] md:h-[48px] 
          border border-gray-300
          rounded-[3px] md:rounded-[4px]
          px-3 sm:px-4 md:px-[15px]
          py-[8px] sm:py-[9px] md:py-[10px]
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-gold
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          ${className}
        `}
      />
      {errors && touched && (
        <div className="text-red-500 text-xs sm:text-[13px]">{errors}</div>
      )}
    </div>
  );
};

export default Input;
