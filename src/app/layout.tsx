import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
  title: "Swrnim",
  description: "GOLDSMITH'S GOLD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="bg-gray-100 overflow-hidden w-full">
        <NavbarWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
