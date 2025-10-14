import { Montserrat } from "next/font/google";
import Image from "next/image";
import footer from "@/img/footer.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Footer() {
  return (
    <footer
      className={`${montserrat.className} fixed bottom-0 w-full h-[40px] flex justify-between items-center px-[10px] border border-[#BFBFBF] shadow-md opacity-100 bg-white`}
    >
      <span
        className={`${montserrat.className} font-normal text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] leading-[100%] tracking-[0%] text-center text-gray-900`}
      >
        Copyright © 2025 Swarnim
      </span>

      <div className="w-[70px] sm:w-[90px] md:w-[103px] lg:w-[120px] h-auto">
        <Image
          src={footer}
          alt="icon"
          width={103.82}
          height={18.2}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </footer>
  );
}
