import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between gap-6">
        {/* Logo / Brand */}
        <div>
          <h1 className="text-2xl font-bold mb-2">myShop</h1>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for all your needs.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/shop" className="hover:text-blue-400">Shop</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold mb-2">Contact</h2>
          <p>Email: support@myshop.com</p>
          <p>Phone: +91 123 456 7890</p>
          <p>Address: 123, Street, City, India</p>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} myShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
