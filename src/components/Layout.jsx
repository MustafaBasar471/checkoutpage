import React from "react";
import { Navbar } from ".";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, className }) => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <div className={className}>{children}</div>
    </div>
  );
};

export default Layout;
