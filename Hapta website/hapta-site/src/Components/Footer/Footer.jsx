import React from "react";

// Icons 
import { IoIosSend } from "react-icons/io";

// Social Icons 
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 top-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        {/* Quick Link Section */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4">Quick Link</h3>
          <ul className="space-y-3">
            <li className="p-1">
              <a href="#" className="hover:text-white cursor-pointer">
                About Us
              </a>
            </li>
            <li className="p-1">
              <a href="#" className="hover:text-white cursor-pointer">
                Terms & Conditions
              </a>
            </li>
            <li className="p-1">
              <a href="#" className="hover:text-white cursor-pointer">
                Privacy Policy
              </a>
            </li>
            <li className="p-1">
              <a href="#" className="hover:text-white cursor-pointer">
                Help
              </a>
            </li>
            <li className="p-1">
              <a href="#" className="hover:text-white cursor-pointer">
                Rooms
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li className="p-1 ">
              <a href="#" className="hover:text-white cursor-pointer">
                Our Location
              </a>
            </li>
            <li className="p-1">
              <a href="#" className="hover:text-white cursor-pointer">
                The Hosts
              </a>
            </li>
            <li className="p-1">
              <a href="#" className="hover:text-white cursor-pointer">
                About
              </a>
            </li>
            <li className="p-1">
              <a href="#" className="hover:text-white cursor-pointer">
                Contact
              </a>
            </li>
            <li className="p-1">
              <a href="#" className="hover:text-white cursor-pointer">
                Restaurant
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4 p-1">Contact Info</h3>
          <p className="text-gray-400 p-1">
            <span className="italic">Address:</span> <br />
            98 West 21th Street, Suite 721
            <br /> New York NY 10016
          </p>
          <p className="mt-4 p-1">
            <span className="italic">Phone:</span> <br /> (+92) 123 4567894
          </p>
          <p>
            <span className="italic">Email: <br />
                </span>{" "}
            <a href="mailto:info@yourdomain.com" className="text-gray-400">
              info@yourdomain.com
            </a>
          </p>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-2xl text-white font-bold mb-4 p-1 ">Subscribe</h3>
          <p className="mb-4 text-gray-400 p-1">Sign up for our newsletter</p>
          <form className="flex items-center p-1">
            <input
              type="email"
              placeholder="Your email..."
              className=" -mr-5 -mb-2 pb-2  bg-gray-900 text-white border-b-2 border-gray-600 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="text-xl inset-3"
            >
              <IoIosSend />
            </button>
          </form>
          
        </div>
      </div>
      <p className="border-b-2 my-16 border-gray-800 mx-14" />
       {/* Copyright */}
       <div className="text-center text-gray-500 text-2xl mt-8 pt-10">
        <p>
          Copyright &copy; 2024 All rights reserved | This template is made with{" "}
          <span className="text-white-500">&hearts;</span> by Colorlib
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-8 pb-24">
        <a href="#" className="hover:text-gray-400">
        <FaFacebookF />
        </a>
        <a href="#" className="hover:text-gray-400">
        <FaTwitter />
        </a>
        <a href="#" className="hover:text-gray-400">
        <FaInstagram />
        </a>
        <a href="#" className="hover:text-gray-400">
        <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-gray-400">
        <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
