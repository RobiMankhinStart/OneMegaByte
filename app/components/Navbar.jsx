import Link from "next/link";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="py-4">
      <div className="container">
        <nav className="flex justify-between items-center">
          <h2 className="text-[25px] font-inter">OneMegaByte</h2>
          <div className="w-[372px] p-4 bg-[#F5F5F5] text-[#989898] rounded-[8px] flex items-center gap-1">
            <CiSearch className="text-[24px]" />
            <input className="outline-none " type="text" placeholder="Search" />
          </div>
          <ul className="flex text-[#989898] items-center gap-[52px]">
            <li className="text-[#989898] hover:text-black font-inter text-[20px] font-medium">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-[#989898] hover:text-black font-inter text-[20px] font-medium">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="text-[#989898] hover:text-black font-inter text-[20px] font-medium">
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li className="text-[#989898] hover:text-black font-inter text-[20px] font-medium">
              <Link href={"/"}>Blog</Link>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <IoMdHeartEmpty />
            </div>
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <IoCartOutline />
            </div>
            <div className="text-[32px] text-black cursor-pointer hover:text-[#989898] hover:scale-110 duration-200">
              <FiUser />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
