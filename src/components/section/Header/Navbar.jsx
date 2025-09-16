import React from "react";
import logo from "../../../assets/elesa_logo.png"; // replace with your logo path

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 flex items-center  shadow-md">
      <img
  src={logo}
  alt="Logo"
  className="h-24 w-auto animate-shine"
/>

    </nav>
  );
};

export default Navbar;
