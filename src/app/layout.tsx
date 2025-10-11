import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swarnim",
  description: "GOLDSMITH'S GOLD",
  icons: {
    icon: "./Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-background overflow-hidden w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
