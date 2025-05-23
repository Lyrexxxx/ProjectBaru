import React from "react";
import { Link } from "react-router-dom";
import ListMenu from "../kuis/ListMenu";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import LogoSedap from "/src/components/kuis/LogoSedap"; 

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/guest" className="flex items-center">
          <LogoSedap className="w-[120px] h-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium scroll-smooth">
          <ListMenu horizontal />
        </nav>

        {/* Search, Cart dan Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-600 hover:text-red-600 transition">
            <FiSearch size={24} />
          </button>

          <div className="relative cursor-pointer text-gray-600 hover:text-red-600 transition">
            <HiOutlineShoppingCart size={28} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold">
              2
            </span>
          </div>

          <Link
            to="/login"
            className="px-4 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
