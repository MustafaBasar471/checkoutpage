import React from "react";
import { Navbar } from ".";
import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
