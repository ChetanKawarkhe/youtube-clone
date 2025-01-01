import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
import { CiSearch } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 bg-white w-[100%] px-6 py-2">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-3 py-2 border rounded-l-full border-gray-400">
          <input type="text" placeholder="search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border bg-gray-100 rounded-r-full border-gray-400">
          <CiSearch size={"24px"} />
        </button>
        <CiMicrophoneOn
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center">
        <RiVideoAddLine className="text-2xl" />
        <FaRegBell className="text-2xl" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
