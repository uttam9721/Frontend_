import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-[#FFFFFF] mt-5 pb-5 shadow-lg w-full px-5 sticky top-0 z-50">
        {/* Logo */}
        <Link to={"/"}>
          <h1 className="font-bold text-2xl shadow rounded-2xl w-40 h-10 text-center">
            myShop
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5">
          <Link to={"/"}>
            <div className="activate shadow rounded-2xl w-20 text-center">Home</div>
          </Link>
          <Link to={"/shop"}>
            <div className="activate shadow rounded-2xl w-20 text-center">Shop</div>
          </Link>
          <Link to={"/about"}>
            <div className="activate shadow rounded-2xl w-20 text-center">About</div>
          </Link>
          <Link to={"/contact"}>
            <div className="activate shadow rounded-2xl w-20 text-center">Contact</div>
          </Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center pl-3 border border-[#ccc] rounded-2xl">
          <CiSearch />
          <input
            className="border-none h-8 shadow rounded-2xl pl-4 w-40 focus:outline-none"
            type="text"
            placeholder="search here."
          />
        </div>

        {/* Login/Register */}
        <div className="hidden md:flex gap-5">
          <div className="shadow rounded-2xl w-20 text-center h-8">Login</div>
          <div className="shadow rounded-2xl w-20 text-center h-8">Register</div>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-5 bg-white text-center text-xl font-bold shadow-lg p-5">
          <Link to={"/"} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to={"/shop"} onClick={() => setOpen(false)}>
            Shop
          </Link>
          <Link to={"/about"} onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to={"/contact"} onClick={() => setOpen(false)}>
            Contact
          </Link>

          <div className="flex items-center gap-2 border border-[#ccc] rounded-2xl px-3 py-1">
            <CiSearch />
            <input
              className="border-none h-8 rounded-2xl pl-2 focus:outline-none w-full"
              type="text"
              placeholder="search here."
            />
          </div>

          <div className="flex gap-5">
            <button className="shadow rounded-2xl w-20 text-center h-8 cursor-pointer">Login</button>
            <button className="cursor-pointer shadow rounded-2xl w-20 text-center h-8">Register</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
