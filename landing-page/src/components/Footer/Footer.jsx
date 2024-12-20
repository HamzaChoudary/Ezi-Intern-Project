import React from "react";

// Importing Icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6">
      <div className="container mx-auto flex flex-col items-center space-y-6 px-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p>2022 © Copyrights Eziline Software House</p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center space-x-6 md:space-x-8">
          <a href="#" className="hover:text-white">
            Career
          </a>
          <a href="#" className="hover:text-white">
            Internships
          </a>
          <a href="#" className="hover:text-white">
            Ezi Products
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white">
            Bank
          </a>
        </div>

        {/* Right Social Media Icons */}
        <div className="flex justify-center space-x-4 md:space-x-6">
          <a href="#" className="hover:text-blue-400">
            <FaFacebookF className="text-xl" />
          </a>
          <a href="#" className="hover:text-blue-600">
            <FaLinkedinIn className="text-xl" />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaXTwitter className="text-xl" />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaYoutube className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
