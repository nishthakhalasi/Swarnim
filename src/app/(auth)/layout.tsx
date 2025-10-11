import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-background">
        <Navbar />
      </div>
      <section className="bg-background h-[calc(100%-50px)] w-full">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default Authlayout;
