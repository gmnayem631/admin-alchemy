import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {" "}
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-screen">
          <Sidebar></Sidebar>
        </div>
        <div className="p-5 w-full md:max-w-285">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
