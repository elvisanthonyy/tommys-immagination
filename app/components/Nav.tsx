import React from "react";
import { FiMail } from "react-icons/fi";
import { GiSewingMachine } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="absolute flex items-center justify-between px-2 h-14 w-[90%] top-5 rounded-lg ">
      <div className="text-black flex flex-col text-lg font-semibold">
        <GiSewingMachine className="text-2xl" />
      </div>

      <div className="text-white w-10 h-10 bg-nav-black flex items-center justify-center rounded-full">
        <HiOutlineMenu className="text-xl" />
      </div>
    </nav>
  );
};

export default Nav;
