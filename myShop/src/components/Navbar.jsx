import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate=useNavigate();
  const [open, setOpen] = useState(false);
  const [searchTerm,setSearchTerm]=useState('');


  const SubmitHandler=(e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  }

  return (
    <>
      <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50 px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-2xl text-white text-gray-800">myShop</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className="px-4 py-1 rounded-xl shadow hover:bg-gray-600 transition">
            Home
          </Link>
          <Link to="/shop" className="px-4 py-1 rounded-xl shadow hover:bg-gray-600 transition">
            Shop
          </Link>
          <Link to="/about" className="px-4 py-1 rounded-xl shadow hover:bg-gray-600 transition">
            About
          </Link>
          <Link to="/contact" className="px-4 py-1 rounded-xl shadow hover:bg-gray-600 transition">
            Contact
          </Link>

          <form onSubmit={SubmitHandler}>
          <div className="flex items-center border border-gray-300 rounded-xl px-2 py-1 ml-4">
            <CiSearch className="text-gray-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="ml-2 outline-none w-32 md:w-40"
            />
          </div>
          </form>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-1 px-4 py-1 rounded-xl shadow hover:bg-gray-600 transition ml-4"
          >
            <FaShoppingCart />
            <span>Cart</span>
          </Link>

          {/* Login/Register */}
          <div className="flex gap-2 ml-4">
            <Link
              to="/login"
              className="px-4 py-1 rounded-xl shadow hover:bg-gray-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-1 rounded-xl shadow hover:bg-gray-600 transition"
            >
              {/* Register */}
            </Link>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg w-full p-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)} className="py-2 px-4 rounded-xl shadow hover:bg-gray-100">
            Home
          </Link>
          <Link to="/shop" onClick={() => setOpen(false)} className="py-2 px-4 rounded-xl shadow hover:bg-gray-100">
            Shop
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="py-2 px-4 rounded-xl shadow hover:bg-gray-100">
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="py-2 px-4 rounded-xl shadow hover:bg-gray-100">
            Contact
          </Link>

          {/* Mobile Search */}
          <div className="flex items-center border border-gray-300 rounded-xl px-2 py-1 mt-2">
            <CiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 outline-none w-full"
            />
          </div>

          {/* Cart + Login/Register */}
          <div className="flex gap-3 mt-3 justify-center">
            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 px-4 py-2 rounded-xl shadow hover:bg-gray-100"
            >
              <FaShoppingCart />
              <span>Cart</span>
            </Link>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-xl shadow hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-xl shadow hover:bg-gray-100"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;






