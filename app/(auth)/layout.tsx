import BackButton from "@/components/BackButton";
import { ThemeToggler } from "@/components/ThemeToggler";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center relative">
        <BackButton link="/" text="Back to Home" />
        <div className="absolute bottom-5 right-0 text-white">
          <ThemeToggler />
        </div>
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
