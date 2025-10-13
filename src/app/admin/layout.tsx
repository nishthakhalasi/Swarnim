import Footer from "@/components/footer";
import AdminNavbar from "@/components/ui/adminNavbar";
import React from "react";

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-background ">
        <AdminNavbar />
      </div>
      <section className="bg-background h-[calc(100%-50px)] w-full">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default Adminlayout;
