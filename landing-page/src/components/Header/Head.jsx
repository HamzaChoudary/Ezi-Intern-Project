import React from 'react';

// Get icons 
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Head = () => {
  return (
    <div className="hidden md:block bg-black">
      {/* Blue top bar */}
  <div className="bg-black">
      <div className="bg-blue-400 p-1"></div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center pl-4 md:pl-20 gap-3 md:gap-12 bg-gray-50 p-2">
        {/* Address Section */}
        <div className="flex flex-row items-center gap-2">
          <FaLocationDot className="text-gray-500" />
          <span className="text-sm">
            Office 304-B Amna Plaza Near Radio Pakistan Peshawar Road Rawalpindi
          </span>
        </div>

        {/* Phone Section */}
        <div className="flex flex-row items-center gap-2">
          <MdOutlineLocalPhone className="text-gray-500" />
          <span className="text-sm hover:text-blue-400 cursor-pointer">
            +92123456789
          </span>
        </div>

        {/* Email Section */}
        <div className="flex flex-row items-center gap-2">
          <CiMail className="text-gray-500" />
          <span className="text-sm hover:text-blue-400 cursor-pointer">
            info@eziline.com
          </span>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-row justify-center items-center text-sm gap-2 md:gap-3 bg-gray-100 p-3 px-5 md:px-7 border-x border-gray-400 rounded">
          <div className="text-gray-400 hover:text-blue-500 cursor-pointer text-xl">
            <FaFacebookF />
          </div>
          <div className="text-gray-400 hover:text-blue-600 cursor-pointer text-xl">
            <FaLinkedinIn />
          </div>
          <div className="text-gray-400 hover:text-blue-400 cursor-pointer text-xl">
            <FaXTwitter />
          </div>
          <div className="text-gray-400 hover:text-red-600 cursor-pointer text-xl">
            <FaYoutube />
          </div>
        </div>
      </div>
      </div>
    </div>

  );
};

export default Head;
