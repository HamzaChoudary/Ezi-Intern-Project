import React, { useState, useEffect } from "react";

// DropdownMenu
import DropdownMenu from "./DropdownMenu";

// Video and image import
import Video1 from "../assets/video.mp4";
import Ezicon from "../assets/Eziline.png";

// For Icons
import { IoSearch } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-black">
      {/* Navbar */}
      <div className="bg-black">
      <div
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-700 top-0 shadow-lg" : "bg-black top-16"
        }`}
      >
        
        <div className="flex justify-between items-center px-4 lg:px-8 py-3 text-white">
          {/* Logo Section */}
        <div className="cursor-pointer">
              <img src={Ezicon} alt="Eziline Logo" className="w-28" />
        </div>
          
          <div className="flex items-center justify-start space-x-2">
            <div className="lg:hidden  cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? (
                <FaTimes className="text-2xl text-gray-400" />
              ) : (
                <FaBars className="text-2xl text-gray-400" />
              )}
            </div>
            
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 justify-start items-center">
            <h1 className="cursor-pointer">
              <DropdownMenu />
            </h1>
            <h1 className="cursor-pointer">Service</h1>
            <h1 className="cursor-pointer">Portfolio</h1>
            <h1 className="cursor-pointer">EZI Updates</h1>
            <h1 className="cursor-pointer">Software</h1>
            <h1 className="cursor-pointer">Login</h1>
            <h1 className="cursor-pointer">Contact</h1>
            <h1 className="border-2 border-amber-600 rounded-2xl px-4 py-2 bg-amber-300 hover:bg-opacity-0 transition-all cursor-pointer">
              16TH ANNIVERSARY
            </h1>
            <h1 className="cursor-pointer text-lg">
              <IoSearch />
            </h1>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden flex-col items-center justify-item-start bg-gray-50 text-gray-500 text-xl space-y-4 py-6 px-4 mx-3 absolute w-full top-full  transform transition-all duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h1 className="cursor-pointer border-b-2 p-3">
            <DropdownMenu />
          </h1>
          <h1 className="cursor-pointer border-b-2 p-3">Service</h1>
          <h1 className="cursor-pointer border-b-2 p-3">Portfolio</h1>
          <h1 className="cursor-pointer border-b-2 p-3">EZI Updates</h1>
          <h1 className="cursor-pointer border-b-2 p-3">Software</h1>
          <h1 className="cursor-pointer border-b-2 p-3">Login</h1>
          <h1 className="cursor-pointer border-b-2 p-3">Contact</h1>
          <h1 className="border-2 border-amber-600 rounded-2xl w-fit px-4 py-2 bg-amber-300 hover:bg-opacity-0 transition-all cursor-pointer">
            16TH ANNIVERSARY
          </h1>
          <h1 className="cursor-pointer text-lg p-3">
            <IoSearch />
          </h1>
        </div>
      </div>

      {/* Background Video Section */}
      <div className="mt-10">
        <video
          src={Video1}
          className="w-full h-screen object-cover"
          autoPlay
          loop
          muted
        ></video>
      </div>
      </div>
    </div>
  );
};

export default Nav;
