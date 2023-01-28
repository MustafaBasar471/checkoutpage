import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5 bg-slate-200">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link className="text-2xl" to="/">
          BERMUDA
        </Link>
        <ul className="flex justify-center items-center gap-8">
          <Link className="text-xl" to={"/cart"}>
            Cart
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
